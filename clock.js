let state = 0;
let timerId = null;
let timeLeft = 3; // Initialize timeLeft outside the Timer function

document.getElementById('startButton').addEventListener('click', function() {
    if (state === 0) {
        if (!timerId) {
            Timer(); // Start the timer only if it's not already running
        }
        state = 1;
    } else {
        clearInterval(timerId); // Pause the timer
        timerId = null;
        state = 0;
    }
});

function Timer() {
    let timerDisplay = document.getElementById('timerDisplay');

    timerId = setInterval(function() {
        if (timeLeft > 0) {
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;

            // Format the time string
            timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

            timeLeft--;
        } else {
            clearInterval(timerId);
            timerId = null;
            alert("Time's up!");
            state = 0; // Reset state when countdown finishes
            timeLeft = 3; // Reset the timer for next start
        }
    }, 1000);
}
