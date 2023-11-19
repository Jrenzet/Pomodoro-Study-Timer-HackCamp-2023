let state = 0;
let timerId = null;  // Initialize timerId outside the Timer function

document.getElementById('startButton').addEventListener('click', function() {
    state = (state === 0) ? 1 : 0;
    if (state === 1 && !timerId) {
        Timer();
    } else if (state === 0 && timerId) {
        clearInterval(timerId);
        timerId = null; // Clear the interval and reset the timerId when stopped
    }
});

document.getElementById('resetButton').addEventListener('click', function() {
    clearInterval(timerId);
            timerId = null; // Reset the timerId when countdown finishes
            alert("Reset!");
            state = 0; // Reset state when countdown finishes
});

function Timer() {
    let timeLeft = 10; // Duration of the countdown in seconds
    let timerDisplay = document.getElementById('timerDisplay');

    timerId = setInterval(function() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        // Format the time string
        timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

        if (timeLeft === 0) {
            clearInterval(timerId);
            timerId = null; // Reset the timerId when countdown finishes
            alert("Time's up!");
            state = 0; // Reset state when countdown finishes
        }

        timeLeft--;

    }, 1000);
}
