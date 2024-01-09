function updateTimerDisplay() {
    chrome.storage.local.get(["startTime", "duration"], function(data) {
        const now = Date.now();
        const remainingTime = Math.max(0, data.startTime + data.duration - now);
        // Update the popup's UI with remainingTime
    });
}

setInterval(updateTimerDisplay, 1000);
