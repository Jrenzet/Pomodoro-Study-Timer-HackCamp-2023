// on click start timer, use storage api to store the start time, duration and state of the alarm
// state = "Standby" "focus" "focusDone" "break"


//EFFECTS: Saves time when startButton was pressed
export function startTimer(duration) {
    console.log("background script triggered");
    const startTime = Date.now();
    chrome.storage.local.set({ startTime, duration }, () => {
        console.log("Timer state saved"+ duration);
    });
}

//EFFECTS: Clear saved time
export function clearTime() {
    chrome.storage.local.clear();
}

//EFFECTS: create alarm set to fire every 30 seconds
export function createAlarm() {
    chrome.alarms.create('backgoundAlarm', { periodInMinutes: 0.1 });
}

//EFFECTS: stops the running alarm
//BUG: alarm listnener still hears the last trigger of the alarm before it is cleared, starting the alarm cycle all over again
export function stopAlarm() {
    chrome.alarms.clear('backgoundAlarm', function (wasCleared) {
        if (wasCleared) {
            console.log("Alarm cleared successfully.");
        } else {
            console.log("No alarm by that name was found to clear.");
        }
    });
}


//Alarm listener to keep service worker active and set a new 30 second alarm
chrome.alarms.onAlarm.addListener(() => {
    console.log("Alarm triggered!");
    chrome.alarms.create({ periodInMinutes: 0.1 }); // set this to trigger every 30 seconds
});


chrome.alarms.onAlarm.addListener(() => {
    // Check if the timer has ended and trigger a notification
});

export function stateSaver(state) {
    chrome.storage.local.set({ state }, () => {
        console.log("program state = " + state);
    });
}

export function blockingSaver(block) {
    chrome.storage.local.set({ block }, () => {
        console.log("blocking sites? " + block);
    });
}
