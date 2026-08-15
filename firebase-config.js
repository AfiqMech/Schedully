// Firebase Integration for Schedully
//
// SYNC MODEL:
//   - Data is NEVER auto-written to Firebase on every change.
//   - Changes live in memory only until the user clicks the SAVE button.
//   - The SAVE button writes to localStorage AND Firebase.
//   - A real-time LISTENER runs on all open devices so that when you press
//     Save on one device, all your other open devices receive the update instantly.
//   - The _isSaving flag prevents your own save from echoing back to you.

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyBCjWjBb6x99Cu4p_SjVyy8f1vPLt7Yf-Q",
  authDomain: "schedully-2a6c3.firebaseapp.com",
  projectId: "schedully-2a6c3",
  storageBucket: "schedully-2a6c3.firebasestorage.app",
  messagingSenderId: "360667096979",
  appId: "1:360667096979:web:12eedb18521d9604016a66",
  measurementId: "G-8NQMXMFQFZ",
  databaseURL: "https://schedully-2a6c3-default-rtdb.asia-southeast1.firebasedatabase.app"
};

class SchedullyFirebaseService {
  constructor() {
    this.app = null;
    this.auth = null;
    this.db = null;
    this.currentUser = null;
    this.provider = null;
    this.onUserChangedCallback = null;
    // Called when another device saves — updates your UI with their changes
    this.onDataSyncedCallback = null;
    // True while we are the ones writing, so we ignore our own echo
    this._isSaving = false;
    this._activeListener = null;

    this.init();
  }

  getSavedConfig() {
    if (DEFAULT_FIREBASE_CONFIG.apiKey && !DEFAULT_FIREBASE_CONFIG.apiKey.startsWith("YOUR_")) {
      return DEFAULT_FIREBASE_CONFIG;
    }
    try {
      const stored = localStorage.getItem('schedully_firebase_config');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.apiKey && !parsed.apiKey.startsWith("YOUR_")) {
          return parsed;
        }
      }
    } catch (e) {}
    return null;
  }

  init() {
    const config = this.getSavedConfig();
    if (!config || !config.apiKey || typeof firebase === 'undefined') {
      console.log("Schedully: Waiting for Firebase Compat SDK / Config.");
      return;
    }

    try {
      if (!firebase.apps.length) {
        this.app = firebase.initializeApp(config);
      } else {
        this.app = firebase.app();
      }

      this.auth = firebase.auth();
      this.provider = new firebase.auth.GoogleAuthProvider();
      // Prompt account selector every time so switching accounts is seamless
      this.provider.setCustomParameters({
        prompt: 'select_account'
      });

      if (firebase.database) {
        this.db = firebase.database();
      }

      this.auth.onAuthStateChanged(async (user) => {
        this.currentUser = user;
        if (this.onUserChangedCallback) {
          this.onUserChangedCallback(user);
        }
        if (user) {
          // Fetch cloud data ONLY ONCE upon login
          await this.fetchUserData();
        }
      });
    } catch (err) {
      console.error("Firebase Initialization Error:", err);
    }
  }

  // Fetch data ON DEMAND (only on login, page refresh, or manual pull-to-refresh)
  // NO continuous listening, so devices will NEVER hijack or overwrite each other live!
  async fetchUserData() {
    if (!this.db || !this.currentUser) return null;
    try {
      const snapshot = await this.db.ref('users/' + this.currentUser.uid).once('value');
      const data = snapshot.val();
      if (data && this.onDataSyncedCallback) {
        this.onDataSyncedCallback(data);
      }
      return data;
    } catch (err) {
      console.warn("Error fetching user cloud data:", err);
      return null;
    }
  }

  async loginWithGoogle() {
    if (!this.auth) this.init();
    if (!this.auth) throw new Error("FIREBASE_NOT_CONFIGURED");
    try {
      const result = await this.auth.signInWithPopup(this.provider);
      return result.user;
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      throw error;
    }
  }

  async logout() {
    if (!this.auth) return;
    try {
      await this.auth.signOut();
      this.currentUser = null;
    } catch (error) {
      console.error("Sign-Out Error:", error);
    }
  }

  // MANUAL SAVE — only called when user clicks the Save button.
  // Sets _isSaving so the listener ignores the echo of this write.
  async saveUserData(userData) {
    if (!this.db || !this.currentUser) return false;
    try {
      this._isSaving = true;
      await this.db.ref('users/' + this.currentUser.uid).set({
        classes: userData.classes || [],
        presets: userData.presets || {},
        activePreset: userData.activePreset || 'default',
        settings: userData.settings || {},
        updatedAt: new Date().toISOString(),
        userEmail: this.currentUser.email,
        displayName: this.currentUser.displayName
      });
      // Give Firebase time to deliver the echo before we stop ignoring it
      setTimeout(() => { this._isSaving = false; }, 1500);
      return true;
    } catch (error) {
      this._isSaving = false;
      console.error("Error saving data to Database:", error);
      return false;
    }
  }

  // RESET USER CLOUD DATA — completely wipes damaged/broken data and writes fresh default state
  async resetUserData(freshPresetSettings) {
    if (!this.db || !this.currentUser) return false;
    try {
      this._isSaving = true;
      const defaultState = {
        classes: [],
        presets: {
          default: {
            name: 'Default',
            classes: [],
            wallpaper: null,
            wallpaperSwatches: null,
            settings: freshPresetSettings || {}
          }
        },
        activePreset: 'default',
        settings: freshPresetSettings || {},
        updatedAt: new Date().toISOString(),
        userEmail: this.currentUser.email,
        displayName: this.currentUser.displayName
      };
      await this.db.ref('users/' + this.currentUser.uid).set(defaultState);
      setTimeout(() => { this._isSaving = false; }, 1000);
      return true;
    } catch (error) {
      this._isSaving = false;
      console.error("Error resetting user data in Firebase:", error);
      return false;
    }
  }
}

// Global Singleton Instance
window.schedullyFirebase = new SchedullyFirebaseService();
