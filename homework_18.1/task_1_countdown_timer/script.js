const userTime = document.querySelector('[data-timer]');
const timer = document.querySelector('.user-timers');

function startTime(duration) {
    let time = duration;
    let paused = false;

    const timerWrap = document.createElement('div');
    timer.appendChild(timerWrap);
    timerWrap.classList.add('timer-wrap')

    const timers = document.createElement("div");
    timerWrap.appendChild(timers);
    timers.classList.add('timer');

    const pause = document.createElement('button');
    timerWrap.appendChild(pause)
    pause.textContent = "Пауза"
    pause.classList.add('pause');

    let timerInterval = setInterval(() => {
        timers.textContent = timeFormat(time);
        if(time > 0) {
            time--
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);

    pause.addEventListener('click', () => {
        if(!paused) {
            clearInterval(timerInterval);
            paused = false;
        }
    })
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
    const error = document.querySelector(".error");

    if (isNaN(minutes) || isNaN(seconds)) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
        const duration = minutes * 60 + seconds;
        startTime(duration);
    }
    
    userTime.value = ''
})