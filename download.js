document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner le texte de la section "download-text"
    let downloadText = document.getElementById("download-text");

    // Ajouter un événement de clic au bouton
    document.getElementById("translate-btn").addEventListener("click", function () {
        let elements = document.querySelectorAll("h1, p, a, .logo, .btn, footer p, footer h3");

        let translations = {
            // Traductions pour les textes en anglais
            "HOME": "ACCUEIL",
            "ABOUT": "À PROPOS",
            "TRAILER": "BANDE-ANNONCE",
            "DOWNLOAD THE GAME": "TÉLÉCHARGER LE JEU",
            "Get ready to dive into the darkness... Download now and face your fears!": "Préparez-vous à plonger dans l'obscurité... Téléchargez maintenant et affrontez vos peurs !",
            "⬇ DOWNLOAD NOW": "⬇ TÉLÉCHARGER",
            "Ton texte ici...": "Jeu indépendant développé par HOR Games",
            "Email: contact@thegame.com": "Email : contact@thegame.com",
            "Tél: +33 1 23 45 67 89": "Phone: +33 1 23 45 67 89",
            "FOLLOW US": "SUIVEZ-NOUS",
            "© 2025 The Game. All rights reserved.": "© 2025 The Game. Tous droits réservés.",
            
            // Traduction inverse (français → anglais)
            "ACCUEIL": "HOME",
            "À PROPOS": "ABOUT",
            "BANDE-ANNONCE": "TRAILER",
            "TÉLÉCHARGER LE JEU": "DOWNLOAD THE GAME",
            "Préparez-vous à plonger dans l'obscurité... Téléchargez maintenant et affrontez vos peurs !": "Get ready to dive into the darkness... Download now and face your fears!",
            "⬇ TÉLÉCHARGER": "⬇ DOWNLOAD NOW",
            "Jeu indépendant développé par HOR Games": "Indie game developed by HOR Games",
            "Email : contact@thegame.com": "Email: contact@thegame.com",
            "Tél: +33 1 23 45 67 89": "Phone: +33 1 23 45 67 89",
            "SUIVEZ-NOUS": "FOLLOW US",
            "© 2025 The Game. Tous droits réservés.": "© 2025 The Game. All rights reserved."
        };

        // Traduire les éléments de texte
        elements.forEach(function(element) {
            if (translations[element.innerText]) {
                element.innerText = translations[element.innerText];
            }
        });

        // Traduction du texte spécifique de "downloadText"
        if (downloadText.innerHTML.includes("Get ready to dive into the darkness")) {
            // Traduction de l'anglais vers le français
            downloadText.innerHTML = "Préparez-vous à plonger dans l'obscurité... Téléchargez maintenant et affrontez vos peurs !";
            document.getElementById("translate-btn").innerText = "🇬🇧 Translate"; // Change le texte du bouton pour l'anglais
        } else {
            // Traduction du français vers l'anglais
            downloadText.innerHTML = "Get ready to dive into the darkness... Download now and face your fears!";
            document.getElementById("translate-btn").innerText = "🇫🇷 Traduire"; // Change le texte du bouton pour le français
        }
    });
});
