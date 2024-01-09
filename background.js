function startTimer(duration) {
    const startTime = Date.now();
    chrome.storage.local.set({ startTime, duration });
}

chrome.alarms.create({ periodInMinutes: 1/60 }); // Check every second

chrome.alarms.onAlarm.addListener(() => {
    // Check if the timer should still be running and update storage if necessary
});


chrome.alarms.onAlarm.addListener(() => {
    // Check if the timer has ended and trigger a notification
});
