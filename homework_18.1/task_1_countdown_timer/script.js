const userTime = document.querySelector('[data-timer]');
const timer = document.querySelector('.timers');

function startTime(duration) {
    let time = duration;
    const timers = document.createElement("div");
    timer.appendChild(timers);

    timerInterval = setInterval(() => {
        timers.textContent = timeFormat(time);
        if(time > 0) {
            time--
        } else {
            clearInterval(timerInterval);
        }
    }, 1000)
}

function timeFormat(sec) {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return(minutes + ":" + seconds);
}


document.querySelector('[data-go]').addEventListener('click', () => {
    const inputValue = userTime.value.split(':');
    const minutes = parseInt(inputValue[0]);
    const seconds = parseInt(inputValue[1]);
    const duration = minutes * 60 + seconds;
    startTime(duration);
})