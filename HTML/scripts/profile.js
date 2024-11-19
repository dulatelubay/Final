document.addEventListener("DOMContentLoaded", () => {
    const profileDetails = document.getElementById("profileDetails");
    const logoutButton = document.getElementById("logoutButton");

    const name = sessionStorage.getItem("username");
    const email = sessionStorage.getItem("email");

    if (name && email) {
        profileDetails.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;
    } else {
        window.location.href = "login.html";
    }

    logoutButton.addEventListener("click", () => {
        sessionStorage.clear();
        window.location.href = "index.html";
    });
});
