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
  Toastify({
    text: "Timer Iniciado",
    duration: 3000, // duração em ms
    gravity: "top", // "top" ou "bottom"
    position: "right", // "left", "center" ou "right"
    backgroundColor: "#4CAF50", // cor de fundo
    close: true // botão de fechar
  }).showToast();
})
pause.addEventListener('click', function (event) {
  clearInterval(timer)
  relogio.classList.add('pause')
  Toastify({
    text: "Timer Pausado",
    duration: 3000, // duração em ms
    gravity: "top", // "top" ou "bottom"
    position: "right", // "left", "center" ou "right"
    backgroundColor: "#ffc107", // cor de fundo
    close: true // botão de fechar
  }).showToast();
})
zerar.addEventListener('click', function (event) {
  clearInterval(timer);
  relogio.innerHTML = '00:00:00'
  segundos = 0
  Toastify({
    text: "Timer Zerado",
    duration: 3000,
    gravity: "top",
    position: "right",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    close: true,
    className: "toast-zerado"
  }).showToast();
})