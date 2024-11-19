
    document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".navbar-nav .nav-link");
    let currentIndex = 0;

    menuItems[currentIndex].focus();

    document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % menuItems.length;
    menuItems[currentIndex].focus();
} else if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
    menuItems[currentIndex].focus();
}
});
});
