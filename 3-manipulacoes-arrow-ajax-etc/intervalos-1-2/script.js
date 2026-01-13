let timer;

function showCurrentTime() {
    let now = new Date();
    let currentHour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    let currenMinutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    let currentSeconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();

    let currentTime = `${currentHour}:${currenMinutes}:${currentSeconds}`;

    document.querySelector('.demo').innerHTML = currentTime;
}

function startTimer() {
    timer = setInterval(showCurrentTime, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

