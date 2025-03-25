
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("translate-btn").addEventListener("click", function () {
        let elements = document.querySelectorAll("h1, p, a, .logo, .btn, footer p, footer h3");

        let translations = {
            "THE GAME": "LE JEU",
            "Survive the nightmare. Face your fears. Trust no one.": "Survivez au cauchemar. Affrontez vos peurs. Ne faites confiance à personne.",
            "▶ VIEW TRAILER": "▶ VOIR LA BANDE-ANNONCE",
            "🖥 DOWNLOAD": "🖥 TÉLÉCHARGER",
            "ABOUT": "À PROPOS",
            "TRAILER": "BANDE-ANNONCE",
            "DOWNLOAD NOW": "TÉLÉCHARGER",
            "Indie game developped by HOR Games": "Jeu indépendant développé par HOR Games",
            "CONTACT": "CONTACT",
            "Email: contact@ftd.com": "Email : contact@ftd.com",
            "FOLLOW US": "SUIVEZ-NOUS",
            "© 2025 From the Darkness. All rights reserved.": "© 2025 From the Darkness. Tous droits réservés.",

            // Traduction inverse (français → anglais)
            "LE JEU": "THE GAME",
            "Survivez au cauchemar. Affrontez vos peurs. Ne faites confiance à personne.": "Survive the nightmare. Face your fears. Trust no one.",
            "▶ VOIR LA BANDE-ANNONCE": "▶ VIEW TRAILER",
            "🖥 TÉLÉCHARGER": "🖥 DOWNLOAD",
            "À PROPOS": "ABOUT",
            "BANDE-ANNONCE": "TRAILER",
            "TÉLÉCHARGER": "DOWNLOAD NOW",
            "Jeu indépendant développé par HOR Games": "Indie game developped by HOR Games",
            "SUIVEZ-NOUS": "FOLLOW US",
            "© 2025 From the Darkness. Tous droits réservés.": "© 2025 From the Darkness. All rights reserved."
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
