document.addEventListener("DOMContentLoaded", function() {
    const playSoundButton = document.getElementById("playSoundButton");
    const notificationSound = document.getElementById("notificationSound");

    playSoundButton.addEventListener("click", function() {
        notificationSound.play();
    });
});