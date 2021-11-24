function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

let segundos = 0;
let timer;
function playCronometro() {
    timer = setInterval(function () {
        segundos++;
        cronometro.innerHTML = getTimeFromSeconds(segundos)
    }, 1000);
}

const cronometro = document.querySelector('#cronometro');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');
const timeSpent = document.querySelector('#timeSpent');


play.addEventListener('click', function (event) {
    clearInterval(timer);
    playCronometro();
})
pause.addEventListener('click', function (event) {
    clearInterval(timer);
})
reset.addEventListener('click', function (event) {
    timeSpent.innerHTML = `Time spent: ${getTimeFromSeconds(segundos)}`;
    clearInterval(timer);
    cronometro.innerHTML = '00:00:00';
    segundos = 0; 
})
