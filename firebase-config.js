// Firebase Integration for Schedully (Google Auth & Database Sync)
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
    this.onDataSyncedCallback = null;

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

      if (firebase.database) {
        this.db = firebase.database();
      }

      this.auth.onAuthStateChanged((user) => {
        this.currentUser = user;
        if (this.onUserChangedCallback) {
          this.onUserChangedCallback(user);
        }
        if (user) {
          this.listenToUserData(user.uid);
        }
      });
    } catch (err) {
      console.error("Firebase Initialization Error:", err);
    }
  }

  async loginWithGoogle() {
    if (!this.auth) {
      this.init();
    }
    if (!this.auth) {
      throw new Error("FIREBASE_NOT_CONFIGURED");
    }
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

  async saveUserData(userData) {
    if (!this.db || !this.currentUser) return false;
    
    // Clear pending debounce timer
    if (this._saveDebounceTimer) {
      clearTimeout(this._saveDebounceTimer);
    }

    return new Promise((resolve) => {
      this._saveDebounceTimer = setTimeout(async () => {
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
          setTimeout(() => { this._isSaving = false; }, 300);
          resolve(true);
        } catch (error) {
          this._isSaving = false;
          console.error("Error saving data to Database:", error);
          resolve(false);
        }
      }, 500);
    });
  }

  listenToUserData(userId) {
    if (!this.db) return;
    const userRef = this.db.ref('users/' + userId);
    userRef.on('value', (snapshot) => {
      // Ignore incoming echo snapshot while local save is in progress
      if (this._isSaving) return;
      const data = snapshot.val();
      if (data && this.onDataSyncedCallback) {
        this.onDataSyncedCallback(data);
      }
    }, (error) => {
      console.warn("Database listener error:", error);
    });
  }
}

// Global Singleton Instance
window.schedullyFirebase = new SchedullyFirebaseService();
