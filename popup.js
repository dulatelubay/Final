document.addEventListener("DOMContentLoaded", function () {
    const modalOverlay = document.getElementById("modalOverlay");
    const subscribeButton = document.querySelector(".subscribe-button");
    const closeButton = document.querySelector(".close-button");

    subscribeButton.addEventListener("click", () => {
        modalOverlay.style.display = "flex";
    });

    closeButton.addEventListener("click", () => {
        modalOverlay.style.display = "none";
    });

    modalOverlay.addEventListener("click", (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = "none";
        }
    });

    document.getElementById("subscribeForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        alert(`Thank you, ${name}! You have subscribed successfully.`);
        this.reset();
        modalOverlay.style.display = "none";
    });
});
