document.addEventListener("DOMContentLoaded", () => {
    const greetingMessage = document.getElementById("greetingMessage");
    const authButtons = document.getElementById("authButtons");
    const logoutButton = document.getElementById("logoutButton");
    const profileButton = document.getElementById("profileButton");

    // Получаем данные о пользователе из sessionStorage
    const username = sessionStorage.getItem("username");

    if (username) {
        // Если пользователь авторизован
        if (greetingMessage) {
            greetingMessage.textContent = `Welcome back, ${username}!`;
        }
        if (authButtons) {
            authButtons.style.display = "none"; // Скрываем кнопки "Login" и "Sign Up"
        }
        if (logoutButton) {
            logoutButton.classList.remove("d-none"); // Показываем кнопку "Logout"
        }
        if (profileButton) {
            profileButton.classList.remove("d-none"); // Показываем кнопку "Profile"
        }

        if (logoutButton) {
            logoutButton.addEventListener("click", () => {
                sessionStorage.clear(); // Удаляем данные из сессии
                window.location.href = "index.html"; // Перенаправляем на главную
            });
        }
    } else {
        // Если пользователь не авторизован
        if (greetingMessage) {
            greetingMessage.textContent = "";
        }
        if (authButtons) {
            authButtons.style.display = "block"; // Показываем кнопки "Login" и "Sign Up"
        }
        if (logoutButton) {
            logoutButton.classList.add("d-none"); // Скрываем кнопку "Logout"
        }
        if (profileButton) {
            profileButton.classList.add("d-none"); // Скрываем кнопку "Profile"
        }
    }
});
