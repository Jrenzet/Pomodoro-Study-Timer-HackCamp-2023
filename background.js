
document.getElementById('startButton').addEventListener('click', function() { //triggers background.js script when "Start Countdown" button is clicked
    console.log("start timer button pressed"); 
})

function startTimer(duration) {
    const startTime = Date.now();
    chrome.storage.local.set({ startTime, duration });
}

chrome.alarms.create({periodInMinutes: 0.5}); // Check every 30 seconds

chrome.alarms.onAlarm.addListener(() => {
        console.log("Alarm triggered!");
});


chrome.alarms.onAlarm.addListener(() => {
    // Check if the timer has ended and trigger a notification
});
