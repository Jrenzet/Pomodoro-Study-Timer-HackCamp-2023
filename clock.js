document.getElementById('startButton').addEventListener('click', function() {
    var timeLeft = 60; // Duration of the countdown in seconds
    var timerDisplay = document.getElementById('timerDisplay');

    var timerId = setInterval(function() {
        var minutes = Math.floor(timeLeft / 60);
        var seconds = timeLeft % 60;

        // Format the time string
        timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');

        if (timeLeft === 0) {
            clearInterval(timerId);
            alert("Time's up!");
        }

        timeLeft--;
    }, 1000);
});
