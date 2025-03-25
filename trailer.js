document.addEventListener("DOMContentLoaded", function () {
    // Créer un bouton de traduction et l'ajouter à la navigation
    let translateBtn = document.createElement("li");
    translateBtn.innerHTML = `<button id="translate-btn" class="headbtns">🇫🇷 Traduire</button>`;
    document.querySelector("nav ul").appendChild(translateBtn);

    document.getElementById("translate-btn").addEventListener("click", function () {
        let elements = document.querySelectorAll("h1, p, a, .logo, .btn, footer p, footer h3");

        let translations = {
            "HOME": "ACCUEIL",
            "ABOUT": "À PROPOS",
            "DOWNLOAD NOW": "TÉLÉCHARGER",
            "WATCH THE TRAILER": "REGARDER LA BANDE-ANNONCE",
            "⬅ BACK TO HOME": "⬅ RETOUR À L'ACCUEIL",
            "ABOUT": "À PROPOS",
            "Ton texte ici...": "Jeu indépendant développé par HOR Games",
            "CONTACT": "CONTACT",
            "Email: contact@thegame.com": "Email : contact@thegame.com",
            "FOLLOW US": "SUIVEZ-NOUS",
            "© 2025 The Game. All rights reserved.": "© 2025 The Game. Tous droits réservés.",

            // Traduction inverse (français → anglais)
            "ACCUEIL": "HOME",
            "À PROPOS": "ABOUT",
            "TÉLÉCHARGER": "DOWNLOAD NOW",
            "REGARDER LA BANDE-ANNONCE": "WATCH THE TRAILER",
            "⬅ RETOUR À L'ACCUEIL": "⬅ BACK TO HOME",
            "Jeu indépendant développé par HOR Games": "Ton texte ici...",
            "SUIVEZ-NOUS": "FOLLOW US",
            "© 2025 The Game. Tous droits réservés.": "© 2025 The Game. All rights reserved."
        };

        let isEnglish = document.getElementById("translate-btn").innerText.includes("🇫🇷");

        elements.forEach(el => {
            let text = el.innerText.trim();
            if (translations[text]) {
                el.innerText = translations[text];
            }
        });

        // Mettre à jour le bouton
        let btn = document.getElementById("translate-btn");
        if (isEnglish) {
            btn.innerText = "🇬🇧 Revenir en Anglais";
        } else {
            btn.innerText = "🇫🇷 Traduire";
        }
    });
});
