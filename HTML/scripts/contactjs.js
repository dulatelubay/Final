document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const successMessage = document.getElementById("successMessage");

    const errorElements = {
        name: document.getElementById("nameError"),
        email: document.getElementById("emailError"),
        message: document.getElementById("messageError"),
    };

    function validateForm() {
        const fields = [
            { field: nameInput, error: errorElements.name },
            { field: emailInput, error: errorElements.email },
            { field: messageInput, error: errorElements.message },
        ];

        let formIsValid = true;

        fields.forEach(({ field, error }) => {
            if (field.value.trim() === "") {
                error.style.display = "block";
                formIsValid = false;
            } else {
                error.style.display = "none";
            }
        });

        return formIsValid;
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validateForm()) {
            successMessage.style.display = "block";
            contactForm.reset();
            setTimeout(() => {
                successMessage.style.display = "none";
            }, 3000);
        }
    });

    const timeDisplay = document.getElementById("timeDisplay");
    const toggleTimeButton = document.getElementById("toggleTimeButton");
    let isTimeVisible = false;

    toggleTimeButton.addEventListener("click", () => {
        if (!isTimeVisible) {
            const now = new Date();
            timeDisplay.textContent = now.toLocaleTimeString();
            timeDisplay.style.display = "block";
        } else {
            timeDisplay.style.display = "none";
        }
        isTimeVisible = !isTimeVisible;
    });
});
const dateTimeDisplay = document.getElementById("dateTimeDisplay");
function updateDateTime() {
    const now = new Date();
    dateTimeDisplay.textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();
