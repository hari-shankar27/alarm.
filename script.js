let alarmInterval;
let youtubeTimeout;

function startAlarm() {
    const alarmTime = document.getElementById("alarmTime").value;
    if (!alarmTime) {
        alert("Please set alarm time");
        return;
    }

    document.getElementById("status").innerText = "Alarm set...";

    alarmInterval = setInterval(() => {
        const now = new Date();
        const currentTime =
            now.getHours().toString().padStart(2, "0") + ":" +
            now.getMinutes().toString().padStart(2, "0");

        if (currentTime === alarmTime) {
            triggerAlarm();
            clearInterval(alarmInterval);
        }
    }, 1000);
}

function triggerAlarm() {
    const sound = document.getElementById("alarmSound");
    sound.play();

    document.getElementById("status").innerText =
        "Alarm ringing! Stop in 10 seconds 😈";

    // After 10 seconds open YouTube
    youtubeTimeout = setTimeout(() => {
        window.open("https://www.youtube.com", "_blank");
    }, 60000);
}

function stopAlarm() {
    const sound = document.getElementById("alarmSound");
    sound.pause();
    sound.currentTime = 0;

    clearTimeout(youtubeTimeout);
    document.getElementById("status").innerText = "Alarm stopped ✅";
}
