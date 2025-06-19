document.addEventListener('DOMContentLoaded', () => {
    function jouer() {
        window.location.href = "level1.html";
    }

    function afficher(type) {
        const popup = document.getElementById('popup');
        let content = "";

        if (type === 'regles') {
            content = "<h2>Règles</h2> <p>Échappe-toi de la maison de Granny en moins de 10 minutes. Trouve les clés, évite les pièges, et ne fais pas de bruit !</p>";
        } else if (type === 'credits') {
            content = "<h2>Crédits</h2><p>Développé par Julie Lefebvre et Loïc Bier. Ce jeu est une création originale inspirée par l'univers d'Escape Game. Merci d'être curieux !</p>";
        }

        popup.innerHTML = content;
        popup.style.display = "block";

        setTimeout(() => {
            popup.style.display = "none";
        }, 7000);
    }
});