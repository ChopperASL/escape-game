function jouer() {
    window.location.href = "level1.html";
}

function afficher(type) {
    const popup = document.getElementById('popup');
    let content = "";

    switch (type) {
        case 'regles':
            content = `
                <h2>Règles du jeu</h2>
                <p>Tu as 10 minutes pour t'échapper de la maison de Granny. Trouve les clés, évite les pièges... Et surtout, ne fais pas de bruit !</p>
            `;
            break;
        case 'credits':
            content = `
                <h2>Crédits</h2>
                <p>Développé par Julie Lefebvre & Loïc Bier.<br/>Inspiré de l'univers horrifique de Granny.<br/>Merci de jouer !</p>
            `;
            break;
    }

    popup.innerHTML = content;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 8000);
}
