# Set Zoom across All Tabs

A lightweight Chrome/Edge (Manifest V3) extension that applies a custom zoom level to all open tabs at once — with an option to automatically apply it to new tabs as they open.

---

## ✨ Features

- **Apply zoom to all tabs** — set a zoom level and apply it across every open tab in one click
- **Reset all tabs** — return every tab to 100% zoom instantly
- **Auto-apply to new tabs** — optionally have the chosen zoom level applied automatically whenever a new tab opens
- **Persistent settings** — your zoom level and preferences are saved across browser sessions
- Zoom options from **80% to 250%**

---

## 🎯 Best-fit scenarios

- **Accessibility** — set a comfortable reading size once and have it apply everywhere, including new tabs
- **Presentations and demos** — instantly scale up all tabs for screen sharing or projecting
- **Small or large monitors** — quickly rebalance zoom when switching between screens
- **Resetting after browsing** — restore all tabs to 100% in one click after sites have applied their own zoom changes

---

## 📦 Installation

### Step 1 — Download the extension files

1. Click the green **Code** button on this page and choose **Download ZIP**, or clone the repo.
2. **Unzip** the downloaded file to a permanent folder on your computer.  
   You need to keep the folder in place — removing it will uninstall the extension.

### Step 2 — Load as an unpacked extension

#### Google Chrome

1. Open `chrome://extensions`
2. Turn **Developer mode** ON (toggle in the top-right)
3. Click **Load unpacked**
4. Select the unzipped folder

#### Microsoft Edge

1. Open `edge://extensions`
2. Turn **Developer mode** ON (toggle in the bottom-left)
3. Click **Load unpacked**
4. Select the unzipped folder

### Step 3 — (Optional) Pin the extension

Click the Extensions (puzzle-piece) icon in the toolbar and pin **Set Zoom across All Tabs** for easy one-click access.

---

## 🔧 Usage

1. Click the extension icon in the browser toolbar to open the popup.
2. Select a zoom level from the dropdown (80% – 250%).
3. Click **Apply to All Tabs** to apply that zoom to every currently open tab.
4. To return all tabs to normal, click **Reset All** (sets everything back to 100%).
5. Check **Apply to new tabs** if you want the zoom level automatically applied to any tab you open in the future.

Your zoom level and checkbox preference are saved automatically and persist across browser restarts.

---

## 🧠 How it works

- **`popup.js`** — handles the UI. On clicking "Apply to All Tabs", it queries all open tabs and calls `chrome.tabs.setZoom()` on each one, then saves the chosen zoom level and checkbox state to `chrome.storage.local`. "Reset All" does the same but always sets zoom to 1.0.
- **`background.js`** — a service worker that listens for new tabs being created. If "Apply to new tabs" is enabled and a zoom level has been saved, it automatically applies that zoom to the new tab (with a short delay to ensure the tab is ready).
- Settings are persisted via `chrome.storage.local`, so your preferences survive browser restarts.

---

## ⚠️ Notes / Limitations

- **Internal browser pages** (`chrome://`, `edge://`, `about:`, etc.) cannot be zoomed by extensions and will silently skip — this is expected and harmless.
- Zoom is applied to tabs at the moment you click **Apply**. If **Apply to new tabs** is unchecked, tabs opened afterward will use the browser's default zoom.
- Some sites that override zoom via CSS transforms rather than browser zoom may not respond as expected.

---

## 🔐 Permissions

| Permission | Why it's needed |
|---|---|
| `tabs` | To query all open tabs and set their zoom level |
| `storage` | To persist your zoom level and settings across sessions |

---

## 🙏 Credits

Conceived by Dr Nitin, created by M365 Copilot.
