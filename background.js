

document.getElementById('startButton').addEventListener('click', function() { //triggers background.js script when "Start Countdown" button is clicked
    console.log("start timer button pressed"); 
    startTimer()
})

function startTimer() {
    const startTime = Date.now();
    let duration = 10
    chrome.storage.local.set({ startTime, duration });
}

chrome.alarms.create({periodInMinutes: 0.1}); // set this to trigger every 30 seconds

// sustain the script by waking every 30s.
chrome.alarms.onAlarm.addListener(() => {
        console.log("Alarm triggered!");
        chrome.alarms.create({periodInMinutes: 0.1}); // set this to trigger every 30 seconds
});


chrome.alarms.onAlarm.addListener(() => {
    // Check if the timer has ended and trigger a notification
});
