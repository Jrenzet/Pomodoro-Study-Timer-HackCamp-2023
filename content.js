chrome.storage.local.get(["block"]).then((result) => {
    if (result.block) {
        console.log("blocker initiated");
        switch (window.location.hostname) {
            case "www.youtube.com":
                document.body.innerHTML = "<h1> Blocked by Pomodoro... it's still study time! </h1>";
                break;
            case "youtube.com":
                document.body.innerHTML = "<h1> Blocked by Pomodoro... it's still study time! </h1>";
                break;
            case "www.twitter.com":
                document.body.innerHTML = "<h1> Blocked by Pomodoro... it's still study time! </h1>";
                break;
            case "twitter.com":
                document.body.innerHTML = "<h1> Blocked by Pomodoro... it's still study time! </h1>";
                break;
            case "www.facebook.com":
                document.body.innerHTML = "<h1> Blocked by Pomodoro... it's still study time! </h1>";
                break;
            case "facebook.com":
                document.body.innerHTML = "<h1> Blocked by Pomodoro... it's still study time! </h1>";
                break;
            case "www.instagram.com":
                document.body.innerHTML = "<h1> Blocked by Pomodoro... it's still study time! </h1>";
                break;
            case "instagram.com":
                document.body.innerHTML = "<h1> Blocked by Pomodoro... it's still study time! </h1>";
                break;
        }
    }
});