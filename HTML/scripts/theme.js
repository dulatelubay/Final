document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("themeToggleButton");
    const currentTheme = localStorage.getItem("theme") || "light";

    function applyTheme(theme) {
        document.body.className = theme === "dark" ? "dark-theme" : "light-theme";
        themeToggleButton.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
        localStorage.setItem("theme", theme); // Save the theme in localStorage
    }

    applyTheme(currentTheme);

    themeToggleButton.addEventListener("click", () => {
        const newTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
        applyTheme(newTheme);
    });
});
