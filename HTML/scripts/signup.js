document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const signupMessage = document.getElementById("signupMessage");

    signupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value.trim();

        if (name && email && password) {
            // Сохранение данных пользователя
            localStorage.setItem("user", JSON.stringify({ name, email, password }));
            signupMessage.textContent = "Account created successfully! Redirecting to login...";

            setTimeout(() => {
                window.location.href = "login.html";
            }, 1000);
        } else {
            signupMessage.textContent = "Please fill in all fields.";
            signupMessage.classList.add("text-danger");
        }
    });
});
