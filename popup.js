let remainingTime = 0

function remaining_Time() {
    chrome.storage.local.get(["startTime", "duration"], function(data) {
        const now = Date.now();
        remainingTime = Math.max(0, data.startTime + data.duration - now);
        updateTimerDisplay();
        // Update the popup's UI with remainingTime
    });
}

function updateTimerDisplay() {
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    let timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}

setInterval(remaining_Time, 1000);
