# 📅 Schedully — AI-Powered Class Schedule & Lock Screen Wallpaper Builder

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel Ready](https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Ready-222222?style=for-the-badge&logo=github&logoColor=white)

**Schedully** is a sleek, modern, Google Material Design 3 web application designed for students and professionals to effortlessly build custom class timetables, search through schedules, and generate high-resolution mobile and tablet lock screen wallpapers.

---

## ✨ Features

- ⚡ **AI Schedule Scanner**: Automatically parse timetable screenshots or images using **Google Gemini AI API** right from your browser.
- 🔍 **Real-time Course Search**: Dynamically filter your schedule list by Course Code, Title, Lecturer, Room, Group, or Day.
- 📱 **Lock Screen Wallpaper Builder**: Turn your schedule into pixel-perfect custom wallpapers formatted for smartphones and tablets.
- ⚠️ **Smart Clash Detection**: Real-time conflict notification with an **Auto-Fix** solver for overlapping subject times.
- 📄 **Seamless CSV & iCal (.ics) Support**:
  - Full **CSV Import & Export** (with smart multi-group OCC selector modal).
  - Full **iCal (.ics) Import & Export** to sync with Google Calendar or Apple Calendar.
- 🎨 **Material 3 Design & Personalization**:
  - **14+ Curated Dual-Tone Palettes** (Indigo, Mint, Cyber Teal, Muted Plum, etc.)
  - **Light & Dark Mode** theme engines with custom background dot-matrix pattern.
  - Per-course custom color swatches and font color overrides.
  - Floating user profile capsule card.
- 📥 **HD Downloads**: Export your finished schedule as high-definition **PNG wallpapers** or clean **PDF documents**.

---

## 🚀 Live Deployment & Hosting

Schedully is a **100% client-side web application** built with native Web APIs. It requires **no server setup or backend code** to run!

### Deploy on GitHub Pages
1. Push this repository to GitHub.
2. Go to `Settings` > `Pages`.
3. Under **Build and deployment**, select `main` branch and `/ (root)`.
4. Click **Save** — your site is live!

### Deploy on Vercel
1. Import your GitHub repository into [Vercel](https://vercel.com).
2. Keep default framework settings (Other/Static HTML).
3. Click **Deploy**!

---

## 🤖 Using the AI Schedule Scanner

1. Expand the **Schedule Importer** section in the left panel.
2. Enter your **Google Gemini API Key** (saved locally in your browser).
3. Upload or drag-and-drop a timetable screenshot (PNG, JPG, WebP).
4. Schedully will parse and populate your classes automatically!

---

## 🛠️ Tech Stack

- **Core**: HTML5, Vanilla CSS3 (Custom Design System & Material 3 Tokens), ES6+ JavaScript
- **Libraries**:
  - [html2canvas](https://html2canvas.hertzen.com/) — High-resolution wallpaper rendering
  - [jspdf](https://github.com/parallax/jsPDF) — Exporting schedule to PDF

---

## 💻 Local Development

Simply clone the repository and open `index.html` in any modern web browser:

```bash
git clone https://github.com/your-username/schedully.git
cd schedully
# Open index.html directly in your browser or live server!
```

---

*Made with ❤️ for students everywhere.*
