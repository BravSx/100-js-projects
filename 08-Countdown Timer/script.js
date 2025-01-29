let timer = null;
let seconds = 0;

const timerElement = document.getElementById("timer");

const formatTime = (time) => String(time).padStart(2, "0");

const updateTimer = () => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    timerElement.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(remainingSeconds)}`;
    seconds++;
};

const startTimer = () => {
    if (!timer) {
        timer = setInterval(updateTimer, 1000);
    }
};

const stopTimer = () => {
    clearInterval(timer);
    timer = null;
};

const resetTimer = () => {
    stopTimer();
    seconds = 0;
    updateTimer();
};
