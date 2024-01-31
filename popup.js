import * as background from './background.js';

let initialTime = 1500000;

document.getElementById('startButton').addEventListener('click', function() { //triggers background.js script when "Start Countdown" button is clicked
    console.log("start timer button pressed"); 
    background.startTimer(initialTime);
})

var remainingTime = 0

var timerDisplay = document.getElementById('timerDisplay');
timerDisplay.textContent = "00"+ ':' + "00";

// We need to tell the program to stop at some time.
setInterval(remaining_Time, 1000);

function remaining_Time() {
    chrome.storage.local.get(["startTime", "duration"], (data)=> {
        const now = Date.now();
        console.log("now is:" + now);
        remainingTime = Math.max(0, data.startTime + data.duration - now);
        console.log(remainingTime)
        updateTimerDisplay(remainingTime);
        // Update the popup's UI with remainingTime
    });
}

// requires: remaingTime is in unit of seconds, and <= 5999s
// QUESTION: 1. Why does it only use the 60 second workaround when a new time is set?
// 2. Where is now stored? I can't find it anywhere
function TimeDisplay(time){
    let displayTime
    let minutes = Math.floor(time / 60000);
    let seconds = Math.round((time - (minutes * 60000)) / 1000);
    if (seconds == 60) {
        displayTime = (minutes + 1).toString().padStart(2, '0') + ':00';
        console.log("60 SECOND WORKAROUND");
    } else {
        displayTime = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
        console.log("NORMAL TIME DISPLAY");
    }


    return displayTime;
}


function updateTimerDisplay(remainingTime) {
    let displayTime = TimeDisplay(remainingTime);
    document.getElementById("timerDisplay").textContent = displayTime;
    console.log("remaining time is:" + displayTime);
}


