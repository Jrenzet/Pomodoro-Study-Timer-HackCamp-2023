// on click start timer, use storage api to store the start time, duration and state of the alarm
// state = "Standby" "focus" "focusDone" "break"



export function startTimer(duration) {
    console.log("background script triggered");
    const startTime = Date.now();
    chrome.storage.local.set({ startTime, duration }, () => {
        console.log("Timer state saved");
    });
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
