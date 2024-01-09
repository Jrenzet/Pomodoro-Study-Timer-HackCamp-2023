let initialTime = 305;
let state = 0;
let timerId = null;
let timeLeft = initialTime; // Set initial time left
let blockPages = false; // should the pages be blocked? begins as "false" or not blocked
updateTimerDisplay()

document.getElementById('startButton').addEventListener('click', function() {
    if (state === 0) {
        if (!timerId) {
            Timer(); // Start the timer only if it's not already running
        }
        state = 1;
    } else {
        pauseTimer(); // Pause the timer
        state = 0;
    }
});

document.getElementById('resetButton').addEventListener('click', function() {
    resetTimer(); // Reset the timer
});

function Timer() {
    let timerDisplay = document.getElementById('timerDisplay');

    timerId = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--;
            console.log(blockPages);
            updateTimerDisplay();
            if (timeLeft > 300){
                blockPages = true;
            }
            if (timeLeft == 300) {
                showMessage();
                blockPages = false;
            }
        } else {
            timerFinished();
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
}

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    timeLeft = initialTime;
    updateTimerDisplay();
    state = 0; // Reset the state
    hideMessage();
}

function timerFinished() {
    clearInterval(timerId);
    timerId = null;
    alert("Time's up!");
    state = 0;
    timeLeft = initialTime;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let timerDisplay = document.getElementById('timerDisplay');
    timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
}

function showMessage() {
    var messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'block';
}

function hideMessage() {
    var messageBox = document.getElementById('messageBox');
    messageBox.style.display = 'none';
}