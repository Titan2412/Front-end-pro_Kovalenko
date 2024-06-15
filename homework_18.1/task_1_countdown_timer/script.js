const userTime = document.querySelector('[data-timer]');
const timer = document.querySelector('.user-timers');

function startTime(duration) {
    let time = duration;
    let stoped = false;

    const timerWrap = document.createElement('div');
    timer.appendChild(timerWrap);
    timerWrap.classList.add('timer-wrap')

    const timers = document.createElement("div");
    timerWrap.appendChild(timers);
    timers.classList.add('timer');

    const stop = document.createElement('button');
    timerWrap.appendChild(stop)
    stop.textContent = "Пауза"
    stop.classList.add('stop');

    let timerInterval = setInterval(() => {
        timers.textContent = timeFormat(time);
        if(time > 0) {
            time--
        } else {
            clearInterval(timerInterval);
        }
    }, 1000);

    stop.addEventListener('click', () => {
        if(!stoped) {
            clearInterval(timerInterval);
            stoped = false;
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