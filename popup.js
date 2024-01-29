import * as background from './background.js';

document.getElementById('startButton').addEventListener('click', function() { //triggers background.js script when "Start Countdown" button is clicked
    console.log("start timer button pressed"); 
    background.startTimer();
})

var remainingTime = 0
var timerDisplay = document.getElementById('timerDisplay');
timerDisplay.textContent = "00"+ ':' + "01";

function remaining_Time() {
    chrome.storage.local.get(["startTime", "duration"], (data)=> {
        const now = Date.now();
        console.log("now is:" + now);
        remainingTime = Math.max(0, data.startTime + data.duration - now);
        updateTimerDisplay(remainingTime);
        // Update the popup's UI with remainingTime
    });
}

// requires: remaingTime is in unit of seconds, and <= 5999s
function TimeDisplay(time){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    let displayTime = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
    return displayTime;
}


function updateTimerDisplay(remaingTime) {
    let displayTime = TimeDisplay(remainingTime);
    document.getElementById("timerDisplay").textContent = displayTime;
    console.log("remaining time is:" + displayTime);
}

// We need to tell the program to stop at some time.
setInterval(remaining_Time, 5000);
