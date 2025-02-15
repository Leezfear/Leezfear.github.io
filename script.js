// Reproduce la música automáticamente y en bucle
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.querySelector('.music-player');
    if (audio) {
        audio.play().catch(error => {
            console.log("La reproducción automática fue bloqueada. Haz clic en la página para reproducir.");
        });
    }
});

function openCard() {
    document.getElementById("card").style.display = "block";
    document.getElementById("envelopeContainer").style.display = "none";
    document.getElementById("titleContainer").style.display = "none";  // Ocultar el título cuando se abre la carta
    document.getElementById("envelopeTitle").style.display = "none";  // Ocultar el texto "Abrir la carta"
    document.getElementById("message").innerText = "";  // Limpiar el mensaje al abrir la carta
}

function showPhrase(phrase) {
    document.getElementById("message").innerText = phrase;
    document.getElementById("message").style.fontSize = "24px";  // Aumentamos el tamaño de la fuente
}

function closeCard() {
    document.getElementById("card").style.display = "none";
    document.getElementById("envelopeContainer").style.display = "flex";
    document.getElementById("titleContainer").style.display = "block";  // Mostrar el título cuando se vuelve a la carta
    document.getElementById("envelopeTitle").style.display = "block";  // Mostrar el texto "Abrir la carta"
}