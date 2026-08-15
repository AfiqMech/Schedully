# 📅 Schedully — Modern Timetable & Lock Screen Wallpaper Builder

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Vercel Ready](https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)

**Schedully** is a minimalist, Google Material Design 3 web application built for university students and busy schedules to effortlessly create aesthetic class timetables, detect schedule clashes, sync across devices with Google Login, and generate high-resolution phone & tablet lock screen wallpapers.

---

## ✨ Features

- 📸 **AI Schedule Image Scanner**: Upload timetable screenshots or photos (PNG, JPG, WebP) and let Schedully automatically extract and populate your classes with zero configuration needed.
- 🌐 **10+ Multi-Language Localization**:
  - English
  - English (Chronically Online slang / Brainrot dialect)
  - Bahasa Melayu
  - Bahasa Indonesia
  - Français
  - 中文 (Simplified)
  - 繁體中文 (Traditional)
  - 日本語 (Japanese)
  - 한국어 (Korean)
  - Español
- ☁️ **Cloud Sync & Google Login**: Log in with Google to backup and synchronize your schedule presets and custom preferences seamlessly across desktop, tablet, and mobile.
- 📱 **Mobile Touch Gestures**: Smooth horizontal swipe gestures to open and dismiss sidebars effortlessly on phone screens.
- ⚠️ **Real-Time Clash Detection & Auto-Fix**: Instant conflict warnings when class times overlap with a 1-click Auto-Fix solver.
- 📄 **Universal CSV & iCal (.ics) Support**:
  - Full **CSV Import & Export** (with smart multi-group OCC selector modal).
  - Full **iCal (.ics) Calendar Sync** for Apple Calendar and Google Calendar.
- 🎨 **Material 3 Design & Wallpaper Engine**:
  - **14+ Curated Dual-Tone Palettes** (Matcha, Mocha, Indigo, Mint, Coral, etc.)
  - **Light & Dark Mode** theme engines with custom background dot-matrix pattern.
  - Per-course custom color swatches, font color overrides, and corner-rounding controls.
  - Custom font imports (`.ttf`, `.otf`, `.woff`, `.woff2`) & wallpaper background blur intensity.
- 📥 **HD Downloads**: Export your finished schedule as high-definition **PNG lockscreen wallpapers** or clean **PDF documents**.
- ☕ **Creator Tip Jar**: Built-in supporter modal with Buy Me a Coffee and Touch 'n Go / DuitNow QR.

---

## 🚀 Live Deployment

Schedully is a fast, lightweight Progressive Web App (PWA) ready to deploy anywhere:

### Deploy on Vercel
1. Fork or import this repository into [Vercel](https://vercel.com).
2. Set your environment variable: `GEMINI_API_KEY` (for AI timetable scanning).
3. Click **Deploy**!

### Deploy on Netlify
1. Connect your repository to [Netlify](https://netlify.com).
2. Add your `GEMINI_API_KEY` in Netlify Environment Variables.
3. Deploy automatically via the included `netlify.toml`!

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla CSS3 (Custom Design System & Material 3 Tokens), Vanilla ES6+ JavaScript
- **Backend / Cloud**: Firebase Auth & Firestore, Serverless OCR Scanner (`/api/scan.js`)
- **Libraries**:
  - [html2canvas](https://html2canvas.hertzen.com/) — High-resolution wallpaper rendering
  - [jspdf](https://github.com/parallax/jsPDF) — Exporting schedule to PDF

---

## 💻 Local Development

Simply clone the repository and open `index.html` in any web browser or local server:

```bash
git clone https://github.com/AfiqMechy/Schedully.git
cd Schedully
```

---

## 📄 License & Credits

Schedully © 2026 • Developed with ❤️ by **Muhammad Afiq** ([@AfiqMechy](https://github.com/AfiqMechy)).
