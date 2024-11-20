function toggleTheme() {
    document.body.classList.toggle("bg-dark-theme");
    document.body.classList.toggle("bg-light-theme");
}

document.addEventListener("DOMContentLoaded", () => {
    const readMoreButton = document.getElementById("readMoreButton");
    const extraContent = document.getElementById("extraContent");

    readMoreButton.addEventListener("click", () => {
        extraContent.classList.toggle("hidden");
        readMoreButton.textContent = extraContent.classList.contains("hidden") ? "Read More" : "Read Less";
    });
});

function toggleAnswer(element) {
    const content = element.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}




