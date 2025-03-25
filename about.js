document.addEventListener("DOMContentLoaded", function () {
    // Créer un bouton de traduction et l'ajouter à la navigation
    let translateBtn = document.createElement("li");
    translateBtn.innerHTML = `<button id="translate-btn" class="headbtns">🇫🇷 Traduire</button>`;
    document.querySelector("nav ul").appendChild(translateBtn);

    // Sélectionner le texte "About the Game"
    let aboutText = document.getElementById("about-text");

    // Ajouter un événement de clic au bouton
    document.getElementById("translate-btn").addEventListener("click", function () {
        let elements = document.querySelectorAll("h1, p, a, .logo, .btn, footer p, footer h3");

        let translations = {
            // Traductions pour les textes en anglais
            "HOME": "ACCUEIL",
            "TRAILER": "BANDE-ANNONCE",
            "DOWNLOAD NOW": "TÉLÉCHARGER",
            "ABOUT THE GAME": "À PROPOS DU JEU",
            "Indie game developped by HOR Games": "Jeu indépendant développé par HOR Games",
            "CONTACT": "CONTACT",
            "Email: contact@ftd.com": "Email : contact@ftd.com",
            "FOLLOW US": "SUIVEZ-NOUS",
            "© 2025 From the Darkness. All rights reserved.": "© 2025 From the Darkness. Tous droits réservés.",
            
            // Traduction inverse (français → anglais)
            "ACCUEIL": "HOME",
            "BANDE-ANNONCE": "TRAILER",
            "TÉLÉCHARGER": "DOWNLOAD NOW",
            "À PROPOS DU JEU": "ABOUT THE GAME",
            "Jeu indépendant développé par HOR Games": "Indie game developped by HOR Games",
            "CONTACT": "CONTACT",
            "SUIVEZ-NOUS": "FOLLOW US",
            "© 2025 From the Darkness. Tous droits réservés.": "© 2025 From the Darkness. All rights reserved."
        };

        // Traduire les éléments de texte
        elements.forEach(function(element) {
            if (translations[element.innerText]) {
                element.innerText = translations[element.innerText];
            }
        });

        // Traduction du texte spécifique de "aboutText"
        if (aboutText.innerHTML.includes("From the Darkness est un jeu 2D")) {
            // Traduction en français vers anglais
            aboutText.innerHTML = "From the Darkness is a 2D horror game where darkness is your worst enemy. " +
                "Trapped in an oppressive labyrinth, you must repair generators " +
                "to restore the light and hope to escape. But beware, " +
                "every power outage reduces your visibility, and enemies lurk in the shadows, " +
                "each with its own behavior.<br><br>" +
                "Explore multiple maps, face unpredictable dangers, " +
                "and find your way out before it’s too late... " +
                "Developed in C with SDL2, this game offers an intense immersion into a dark and eerie world.";
            document.getElementById("translate-btn").innerText = "🇫🇷 Traduire";
        } else {
            // Traduction de l'anglais vers le français
            aboutText.innerHTML = "From the Darkness est un jeu 2D d’angoisse où l’obscurité est votre pire ennemi. " +
                "Coincé dans un labyrinthe oppressant, vous devez réparer des générateurs " +
                "pour rétablir la lumière et espérer trouver une issue. Mais attention, " +
                "chaque coupure de courant réduit votre visibilité et des ennemis rôdent dans l’ombre, " +
                "chacun avec son propre comportement.<br><br>" +
                "Explorez plusieurs cartes, affrontez des dangers imprévisibles " +
                "et trouvez votre chemin avant qu’il ne soit trop tard... " +
                "Développé en C avec SDL2, ce jeu offre une immersion intense dans un univers sombre et inquiétant.";
            document.getElementById("translate-btn").innerText = "🇬🇧 Revenir en Anglais";
        }
    });
});
