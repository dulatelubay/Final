document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const loginMessage = document.getElementById("loginMessage");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (storedUser && username === storedUser.email && password === storedUser.password) {
            sessionStorage.setItem("username", storedUser.name);
            sessionStorage.setItem("email", storedUser.email);
            loginMessage.textContent = `Welcome, ${storedUser.name}! Redirecting...`;

            setTimeout(() => {
                window.location.href = "profile.html";
            }, 1000);
        } else {
            loginMessage.textContent = "Invalid email or password.";
            loginMessage.classList.add("text-danger");
        }
    });
});
