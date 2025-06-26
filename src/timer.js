// 5 x 60 secondes dcp 5 minutes si c'est trop bas on met 10
const DURATION_SECONDS = 5 * 60;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');

function getRemainingSeconds() {
  const endTime = localStorage.getItem('endTime');
  if (!endTime) return 0;
  const remaining = Math.floor((parseInt(endTime) - Date.now()) / 1000);
  return Math.max(0, remaining);
}

function updateTimer() {
  const seconds = getRemainingSeconds();
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');

  if (timerDisplay) {
    timerDisplay.textContent = `${min}:${sec}`;
  }

  if (seconds <= 0) {
    clearInterval(window.timerInterval);
    localStorage.removeItem('endTime');
    window.location.href = '../public/echec.html';
  }
}

function startCountdown() {
  if (!localStorage.getItem('endTime')) {
    const endTime = Date.now() + DURATION_SECONDS * 1000;
    localStorage.setItem('endTime', endTime);
  }
  updateTimer();
  window.timerInterval = setInterval(updateTimer, 1000);
}

// bouton de démarrage
if (startButton) {
  startButton.addEventListener('click', () => {
    startCountdown();
    startButton.disabled = true;
  });
}

// pour continuer le temps sur les autres
if (localStorage.getItem('endTime')) {
  startCountdown();
  if (startButton) startButton.disabled = true;
}
