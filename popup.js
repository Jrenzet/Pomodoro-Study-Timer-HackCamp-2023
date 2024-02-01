import * as background from './background.js';

let initialTime = 1500000;
let intervalID = setInterval(repeatedUpdate, 1000);


//EFFECTS: event listener triggering the startTimer function in background.js when startButton is clicked
document.getElementById('startButton').addEventListener('click', function () {
    console.log("start timer button pressed");
    if (intervalID !== null) {
        clearInterval(intervalID);
    }
    background.startTimer(initialTime);
    intervalID = setInterval(repeatedUpdate, 1000);
})

//EFFECTS: event listener for resetButton (place holder)
document.getElementById('resetButton').addEventListener('click', function () {
    console.log("RESETRESET");
    background.clearTime();
    clearInterval(intervalID);
    document.getElementById("timerDisplay").textContent = formatRemainingTime(initialTime);
})


//EFFECTS: calculates remaining time, then formats it to a string with minutes and seconds, then updates the timerDisplay
function repeatedUpdate() {
    calculateRemainingTime().then(remainingTime => {
        document.getElementById("timerDisplay").textContent = formatRemainingTime(remainingTime);
    });
}

//EFFECTS: Calculates how much time is remaining on the timer
//NOTE: Promise is added to deal with asynchronous nature of storage api
function calculateRemainingTime() {
    return new Promise((resolve, reject) => {
        let remainingTime;
        chrome.storage.local.get(["startTime", "duration"], (data) => {
            const now = Date.now();
            console.log("now is:" + now);
            remainingTime = Math.max(0, data.startTime + data.duration - now);
            console.log(remainingTime);
            resolve (remainingTime);
        });
    });
}

//REQUIRES: time is in milliseconds
//EFFECTS: Converts milliseconds to string, formatted "mm:ss"
//QUESTION: 1. Why does it only use the 60 second workaround when a new time is set?
//2. Where is now stored? I can't find it anywhere
function formatRemainingTime(time) {
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