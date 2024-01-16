# HackCamp
Hack Camp 2023 Code

URL blocker with a Pomodoro timer.

Manifest: 


Popup page:
    make some front end effects to make the page look good.

popup.js:
    When called, update how much time is left by calculating:
        end time - current time

Blocker:
    URL Blocker that blocks all urls
    make some front end effects to make the page look good.

Background:
    1. set end time using chrome api: store the end time using chrome.storage.local.set
    2. Sustain background.js: chrome alarm api call this script after each 30s.
    3.If <condition when timer is up>, then
        send a notification the timer is done.

