const cronometro = document.querySelector('.cronometro');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const reset = document.querySelector('#reset');

play.addEventListener('click', function(event){
    alert('play');
})
pause.addEventListener('click', function(event){
    alert('pause');
})
reset.addEventListener('click', function(event){
    alert('reset');
})
