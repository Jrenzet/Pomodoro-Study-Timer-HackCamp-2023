import * as background from './background.js';

document.getElementById('startButton').addEventListener('click', function() { //triggers background.js script when "Start Countdown" button is clicked
    console.log("start timer button pressed"); 
    background.startTimer();
})

let remainingTime = 0
let timerDisplay = document.getElementById('timerDisplay');
timerDisplay.textContent = "00"+ ':' + "01";

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
    timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}

// We need to tell the program to stop at some time.
setInterval(remaining_Time, 5000);
