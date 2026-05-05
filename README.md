# 🍅 Pomodoro Study Timer

> A Chrome Extension that helps you stay focused by blocking distracting websites during 25-minute Pomodoro study sessions.

Built at **HackCamp 2023** — UBC's annual hackathon.

---

## What is the Pomodoro Technique?

The [Pomodoro Technique](https://en.wikipedia.org/wiki/Pomodoro_Technique) is a time management method developed by Francesco Cirillo. You work with full focus for **25 minutes**, then take a short break. Repeat to build deep, productive work habits.

---

## Features

- ⏱️ **25-minute countdown timer** displayed in the extension popup
- 🚫 **Automatic website blocking** — distracting sites are blocked the moment you start the timer
- 🔔 **Break alert** — an alert fires when your 25-minute session ends and blocked sites are automatically unblocked
- 🔄 **Reset button** — cancel the session and unblock sites at any time
- 💾 **Persistent state** — uses Chrome's local storage API so the timer survives popup close/reopen

---

## Blocked Websites

The following sites are blocked while a session is active:

| Site | Domain(s) |
|---|---|
| YouTube | `youtube.com`, `www.youtube.com` |
| X (Twitter) | `twitter.com`, `www.twitter.com` |
| Facebook | `facebook.com`, `www.facebook.com` |
| Instagram | `instagram.com`, `www.instagram.com` |

When you visit a blocked site during a session, the page is replaced with the message:
> **Blocked by Pomodoro... it's still study time!**

---

## Installation

This extension is not yet published to the Chrome Web Store. You can load it manually as an unpacked extension:

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click **Load unpacked** and select the root folder of this repository.
5. The 🍅 Pomodoro icon will appear in your Chrome toolbar.

---

## Usage

1. Click the 🍅 Pomodoro icon in the Chrome toolbar to open the popup.
2. Click **Start Countdown** to begin a 25-minute focus session.
   - The timer will count down in `mm:ss` format.
   - The four distracting websites will be blocked immediately.
3. When the timer reaches zero, an alert will notify you that it's break time and the sites will be unblocked.
4. Click **Reset** at any time to cancel the session and unblock all sites.

---

## Project Structure

```
├── manifest.json      # Chrome Extension manifest (v3)
├── popup.html         # Extension popup UI
├── popup.js           # Popup logic: timer display, button handlers
├── background.js      # Service worker: timer state, alarms, storage helpers
├── content.js         # Content script: website blocking logic
├── pomodoro.png       # Extension icon
├── test/
│   └── popupTest.js   # Unit tests (Mocha)
└── Archive (V1)/      # Earlier prototype
```

---

## Tech Stack

- **JavaScript** (ES Modules)
- **Chrome Extensions API** — Manifest V3, `chrome.storage`, `chrome.alarms`, `webNavigation`
- **HTML / CSS** — lightweight popup UI
- **Mocha** — unit testing

---

## Known Limitations & Future Work

- Blocked websites are currently **hardcoded** — a future version could let users add their own sites.
- A **Pause** button is partially implemented but disabled due to a bug where reopening the popup causes the paused time to be recalculated incorrectly.
- The extension does not yet support configurable session lengths or break timers.

---

## License

ISC


