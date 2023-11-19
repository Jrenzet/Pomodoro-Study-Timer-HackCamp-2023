var state = 0;
document.getElementById('startButton').addEventListener('click', 
 function state_control(){
    // x = 0 , 1 on click, by default 0
    if (state === 0){
        state = 1;
    } else
    {state = 0 ;}
})

Timer (state)

function Timer(state) {
    var timeLeft = 3; // Duration of the countdown in seconds
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
        if(state === 1){
            timeLeft--;
        }
        
    }, 1000);
};