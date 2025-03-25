document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("translate-btn").addEventListener("click", function () {
        let aboutText = document.getElementById("about-text");
        let isEnglish = aboutText.innerText.includes("From the Darkness is a 2D horror game");

        if (isEnglish) {
            aboutText.innerHTML = "From the Darkness est un jeu 2D d’angoisse où l’obscurité est votre pire ennemi. " +
                "Coincé dans un labyrinthe oppressant, vous devez réparer des générateurs " +
                "pour rétablir la lumière et espérer trouver une issue. Mais attention, " +
                "chaque coupure de courant réduit votre visibilité et des ennemis rôdent dans l’ombre, " +
                "chacun avec son propre comportement.<br><br>" +
                "Explorez plusieurs cartes, affrontez des dangers imprévisibles " +
                "et trouvez votre chemin avant qu’il ne soit trop tard... " +
                "Développé en C avec SDL2, ce jeu offre une immersion intense dans un univers sombre et inquiétant.";
            this.innerText = "🇬🇧 Revenir en Anglais";
        } else {
            aboutText.innerHTML = "From the Darkness is a 2D horror game where darkness is your worst enemy. " +
                "Trapped in an oppressive labyrinth, you must repair generators " +
                "to restore the light and hope to escape. But beware, " +
                "every power outage reduces your visibility, and enemies lurk in the shadows, " +
                "each with its own behavior.<br><br>" +
                "Explore multiple maps, face unpredictable dangers, " +
                "and find your way out before it’s too late... " +
                "Developed in C with SDL2, this game offers an intense immersion into a dark and eerie world.";
            this.innerText = "🇫🇷 Traduire";
        }
    });
});
