document.addEventListener('DOMContentLoaded', () => {
    const hardcoreEstActive = localStorage.getItem('hardcoreEnable');

    const dureeTotale = hardcoreEstActive ? 180 : 300;

    const affichageTimer = document.getElementById("timerDisplay");

    if (localStorage.getItem('timerFini') === 'true') {
        window.location.href = '/';
        return;
    }

    if (!localStorage.getItem('debutJeu')) {
        localStorage.setItem('debutJeu', Date.now());
    }

    function mettreAJourMinuteur() {
        const debut = parseInt(localStorage.getItem('debutJeu'), 10);
        const maintenant = Date.now();

        const tempsEcoule = Math.floor((maintenant - debut) / 1000);
        const tempsRestant = Math.max(dureeTotale - tempsEcoule, 0);

        const minutes = Math.floor(tempsRestant / 60);
        const secondes = tempsRestant % 60;

        affichageTimer.textContent = `${minutes}:${secondes.toString().padStart(2, '0')}`;

        if (tempsRestant <= 0) {
            localStorage.setItem('timerFini', 'true');

            clearInterval(intervalId);

            localStorage.removeItem('debutJeu');

            document.getElementById('txt-zone-value').textContent = "granny est arrivé...";
            document.body.style.pointerEvents = 'none';
            document.getElementById('blackout').classList.add('active');

            setTimeout(() => {
                window.location.href = '/';
            }, 5000);

            localStorage.removeItem('timerFini');
        }
    }

    const intervalId = setInterval(mettreAJourMinuteur, 1000);

    mettreAJourMinuteur();
});
