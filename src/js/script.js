const relogio = document.querySelector('.timer-display')
const iniciar = document.querySelector('#iniciar')
const pause = document.querySelector('#pause')
const zerar = document.querySelector('#zerar')

let segundos = 0;
let timer;

function startTimer() {
  timer = setInterval(() => {
    segundos++
    relogio.innerHTML = getTimeFromSeconds(segundos)
  }, 1000)
}

function getTimeFromSeconds(segundos) {
  const data = new Date(segundos * 1000)

  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'GMT'
  });
}
iniciar.addEventListener('click', function (event) {
  clearInterval(timer)
  startTimer()
  relogio.classList.remove('pause')
})
pause.addEventListener('click', function (event) {
  clearInterval(timer)
  relogio.classList.add('pause')
})
zerar.addEventListener('click', function (event) {
  clearInterval(timer);
  relogio.innerHTML = '00:00:00'
  segundos = 0
})