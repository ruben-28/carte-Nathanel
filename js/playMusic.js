function playMusic() {
    var audio = document.getElementById("myAudio");
    audio.play().catch(error => {
        console.error("Audio play failed:", error);
    });
}
