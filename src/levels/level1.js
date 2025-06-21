let count = 0;
const goal = 10;
let timerStarted = false;
let timeLimit = 6000
let progress = 0;

const barre = document.getElementById("barre");
const msg = document.getElementById("message-final");
const vase = document.getElementById("vase");

document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'e') {
    if (!timerStarted) {
      timerStarted = true;
      startTimer();
    }

    count++;
    progress = (count / goal) * 100;
    barre.style.width = `${progress}%`;

    vase.style.transform = `scale(${1 + Math.random() * 0.05})`;

    if (count >= goal) {
      barre.style.width = "100%";
      msg.innerHTML = "Vous avez trouvé une clé dans le vase ! Qu'est-ce que ça pourrait bien ouvrir...";
      document.removeEventListener('keydown', handleKey);
    }
  }
});

function handleKey(e) {
  if (e.key.toLowerCase() === 'e') {
    document.dispatchEvent(new KeyboardEvent('keydown', {'key': 'e'}));
  }
}

function startTimer() {
  setTimeout(() => {
    if (count < goal) {
      msg.innerHTML = "Trop lent ! Réessaiez...";
      barre.style.backgroundColor = "#888";
      document.removeEventListener('keydown', handleKey);
    }
  }, timeLimit);
}
