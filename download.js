document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("translate-btn").addEventListener("click", function () {
        let downloadText = document.getElementById("download-text");
        let isEnglish = downloadText.innerText.includes("Get ready to dive into the darkness");

        if (isEnglish) {
            downloadText.innerHTML = "Préparez-vous à plonger dans l'obscurité... Téléchargez maintenant et affrontez vos peurs !";
            this.innerText = "🇬🇧 Revenir en Anglais";
        } else {
            downloadText.innerHTML = "Get ready to dive into the darkness... Download now and face your fears!";
            this.innerText = "🇫🇷 Traduire";
        }
    });
});
