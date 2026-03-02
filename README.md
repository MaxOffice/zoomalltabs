# Title (Tab Audio Controller)

A lightweight Edge/Chrome (Manifest V3) extension to control tab audio like a mixer:
- **Mute all tabs**
- **Solo current tab** (mute all except the active tab)
- **Unmute all tabs**

Perfect for “control-room” browsing—e.g., keeping **multiple live streams** (news/gaming/entertainment) open and instantly switching which one you hear.

---

## ✨ Features

- ✅ **Mute all tabs** (one click / one shortcut)
- ✅ **Solo current tab**: keeps only the **active tab audible**
- ✅ **Unmute all tabs**
- ✅ **Keyboard shortcuts** exposed as **Commands** and fully customizable in:
  - Edge: `edge://extensions/shortcuts`
  - Chrome: `chrome://extensions/shortcuts`
- ✅ Minimal permissions: uses only `tabs`

---

## 🎯 Best-fit scenarios (real-world)

- **Multiple live streams open (5–15 tabs)** and you switch frequently  
  Example: 8 news channels + 2 gaming streams + 1 podcast live.
- **Compare multiple YouTube videos** (tutorials/reviews) without pausing each one
- **Monitoring dashboards with audio feeds/alerts** and solo the one you’re inspecting
- **Content review / clip hunting** across multiple sources

---

## ⌨️ Default Shortcuts (Customizable)

> Defaults are chosen to avoid conflicts with built-in browser shortcuts.

- **Mute all tabs** → `Ctrl+Shift+7`
- **Solo current tab** → `Ctrl+Shift+8`
- **Unmute all tabs** → `Ctrl+Shift+9`

### Why not `Ctrl+7 / Ctrl+8 / Ctrl+9`?
Browsers typically reserve these for **tab switching** (jump to tab number). If you try to use them, they may not bind or may not trigger reliably.

---

## 📦 Installation (Edge / Chrome)

### Step 1 — Download & unzip
1. Download the ZIP from this repo (or from Releases).
2. **Unzip** it to a folder (important).  
   You must load the **folder containing `manifest.json`**.

### Step 2 — Load unpacked extension

#### Microsoft Edge
1. Open: `edge://extensions`
2. Turn **Developer mode** ON
3. Click **Load unpacked**
4. Select the unzipped folder

#### Google Chrome
1. Open: `chrome://extensions`
2. Turn **Developer mode** ON
3. Click **Load unpacked**
4. Select the unzipped folder

### Step 3 — (Optional) Pin the extension
- Click the Extensions (puzzle) icon → pin **Title**

---

## 🔧 Customize shortcuts

1. Go to:
   - Edge: `edge://extensions/shortcuts`
   - Chrome: `chrome://extensions/shortcuts`
2. Find **Title**
3. Assign your preferred keys to:
   - Mute all tabs
   - Solo current tab
   - Unmute all tabs

> Tip: If shortcuts don’t auto-apply, remove the extension and install again, then set them manually in the shortcuts page.

---

## 🧠 How it works (high level)

- Uses the browser `tabs` API to set each tab’s `muted` state:
  - Mute all: sets `muted = true` for every tab
  - Solo: sets `muted = false` for the active tab, `true` for all others
  - Unmute all: sets `muted = false` for every tab

---

## ⚠️ Notes / Limitations

- Some internal pages (like browser settings pages) may not allow tab updates—those are safely ignored.
- Keyboard shortcuts are **suggestions**; if a shortcut conflicts with existing browser/system shortcuts, you may need to set it manually via the shortcuts page.

---

## 🙏 Credits

**Conceived by Dr Nitin, created by M365 Copilot**

---

## 📄 License

Choose one:
- MIT (recommended for maximum reuse), or
- Your organization’s internal license

(Add a `LICENSE` file accordingly.)
