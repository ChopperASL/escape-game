const zones = document.querySelectorAll('.zone');
const message = document.getElementById('message');
let sequence = [];
let playerSequence = [];
let level = 0;
let clickable = false;

function playSimonSequence() {
  clickable = false;
  playerSequence = [];
  sequence.push(Math.floor(Math.random() * 4));
  let i = 0;

  const interval = setInterval(() => {
    const id = sequence[i];
    const zone = document.querySelector(`.zone[data-id="${id}"]`);
    zone.classList.add('active');
    setTimeout(() => zone.classList.remove('active'), 500);
    i++;

    if (i >= sequence.length) {
      clearInterval(interval);
      clickable = true;
    }
  }, 800);
}

function resetSimon() {
  message.textContent = 'Vous vous êtes trompé, réessayez';
  sequence = [];
  level = 0;
  setTimeout(() => {
    message.textContent = '';
    playSimonSequence();
  }, 2000);
}

zones.forEach(zone => {
  zone.addEventListener('click', () => {
    if (!clickable) return;

    const id = parseInt(zone.dataset.id);
    playerSequence.push(id);

    const currentIndex = playerSequence.length - 1;
    if (playerSequence[currentIndex] !== sequence[currentIndex]) {
      clickable = false;
      resetSimon();
      return;
    }

    if (playerSequence.length === sequence.length) {
      level++;
      message.textContent = `Correct, niveau ${level}`;
      setTimeout(() => {
        message.textContent = '';
        playSimonSequence();
      }, 1000);

      if (level === 4) {
        message.textContent = "Code bon !";
        clickable = false;
      }
    }
  });
});

window.onload = () => {
  message.textContent = "Mémorisez le code couleur pour déverouiller le code";
  playSimonSequence();
};
