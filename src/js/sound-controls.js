export function initSoundControls() {
    const video = document.getElementById("background-video");
    const enableSoundButton = document.getElementById("enable-sound-button");
    const volumeControl = document.getElementById("volume-control");

    // Control de volumen
    volumeControl.addEventListener("input", (e) => {
        video.volume = e.target.value;
        if (video.volume > 0 && video.muted) {
            video.muted = false;
            enableSoundButton.innerHTML = '🔊 Desactivar Sonido';
        }
    });

    // Control de sonido
    enableSoundButton.addEventListener("click", () => {
        video.muted = !video.muted;
        enableSoundButton.innerHTML = video.muted ? '🔇 Activar Sonido' : '🔊 Desactivar Sonido';
        if (!video.muted) {
            video.play();
            video.volume = volumeControl.value;
        }
    });
}
