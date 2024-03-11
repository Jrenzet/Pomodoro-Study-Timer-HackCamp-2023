import * as background from './background.js';

let initialTime = 1500000;
let intervalID = setInterval(repeatedUpdate, 1000);
let remainingTime = initialTime;


//EFFECTS: event listener triggering the startTimer function in background.js when startButton is clicked
document.getElementById('startButton').addEventListener('click', function () {
    chrome.storage.local.get(["state"]).then((result) => {
        console.log("start timer button pressed");
        background.blockingSaver(true);
        if (remainingTime == initialTime || isNaN(remainingTime)) {
            background.startTimer(initialTime);
        } else {
            background.startTimer(remainingTime);
        }
        if (result.state == "paused") {
            background.stateSaver("running");
        }
        background.createAlarm();
        clearInterval(intervalID);
        intervalID = setInterval(repeatedUpdate, 1000);
    });
})

//EFFECTS: event listener for resetButton, clears time and displays initialTime
document.getElementById('resetButton').addEventListener('click', function () {
    console.log("reset button pressed");
    background.blockingSaver(false);
    background.clearTime();
    background.stopAlarm();
    clearInterval(intervalID);
    clockStoppedStandby();
    remainingTime = initialTime;
})

//EFFECTS: event listener for pauseButton, pauses timer
//TODO: Uncomment when bug descirbed in clockPaused() fucntion is fixed
/*document.getElementById('pauseButton').addEventListener('click', function () {
    chrome.storage.local.get(["state"]).then((result) => {
        if (result.state == "paused") {
            console.log("Already Paused");
        } else {
            console.log("pause now");
            background.stateSaver("paused");
            //clearInterval(intervalID);
            document.getElementById("timerDisplay").textContent = formatRemainingTime(remainingTime);

        }
    });
})*/


//EFFECTS: calculates remaining time, then formats it to a string with minutes and seconds, then updates the timerDisplay
function repeatedUpdate() {
    calculateRemainingTime().then(remainingTime => {
        chrome.storage.local.get(["state"]).then((result) => {
            if (remainingTime <= 0) {
                background.blockingSaver(false);
                clearInterval(intervalID);
                timerFinished();
            } else if (isNaN(remainingTime)) {
                clearInterval(intervalID);
                clockStoppedStandby();
                console.log("Remaining Time is NaN");
            } else if (result.state == "paused") {
                clearInterval(intervalID);
                clockPaused();
                console.log("Start pause loop");
            } else {
                document.getElementById("timerDisplay").textContent = formatRemainingTime(remainingTime);
            }
        });
    });
}

//EFFECTS: displays intialTime repatedly
function clockStoppedStandby() {
    document.getElementById("timerDisplay").textContent = formatRemainingTime(initialTime);
}

function timerFinished() {
    document.getElementById("timerDisplay").textContent = "Break Time!";
    alert("25 minutes is up, its break time!");
}

//EFFECTS: displays paused time repeatedly
//TODO: Bug when clock paused, if popup close and reopened, paused time calculated is relative tot he stored time, not the timee program was paused
//pause button removed from program until this is fixed
function clockPaused() {
    document.getElementById("timerDisplay").textContent = formatRemainingTime(remainingTime);
}

//EFFECTS: Calculates how much time is remaining on the timer
//NOTE: Promise is added to deal with asynchronous nature of storage api
function calculateRemainingTime() {
    return new Promise((resolve, reject) => {
        chrome.storage.local.get(["startTime", "duration"], (data) => {
            const now = Date.now();
            console.log("now is:" + now);
            remainingTime = Math.max(0, data.startTime + data.duration - now);
            console.log(remainingTime);
            resolve(remainingTime);
        });
    });
}

//REQUIRES: time is in milliseconds
//EFFECTS: Converts milliseconds to string, formatted "mm:ss"
//QUESTION: 1. Why does it only use the 60 second workaround when a new time is set?
//2. Where is now stored? I can't find it anywhere
export function formatRemainingTime(time) {
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


