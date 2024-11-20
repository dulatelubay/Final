document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("themeToggleButton");
    const body = document.body;

    // Проверка сохранённой темы
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        themeToggleButton.textContent = "Light Mode";
    }

    // Переключение темы
    themeToggleButton.addEventListener("click", () => {
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            themeToggleButton.textContent = "Dark Mode";
            localStorage.setItem("theme", "light");
        } else {
            body.classList.add("dark-theme");
            themeToggleButton.textContent = "Light Mode";
            localStorage.setItem("theme", "dark");
        }
    });
});
