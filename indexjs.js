document.addEventListener("DOMContentLoaded", function () {
    function displayGreeting() {
        const greetingElement = document.getElementById("greetingMessage");
        const currentHour = new Date().getHours();
        let greeting;

        switch (true) {
            case (currentHour >= 5 && currentHour < 12):
                greeting = "Good Morning!";
                break;
            case (currentHour >= 12 && currentHour < 18):
                greeting = "Good Afternoon!";
                break;
            case (currentHour >= 18 && currentHour < 22):
                greeting = "Good Evening!";
                break;
            default:
                greeting = "Hello, Night Owl!";
                break;
        }

        greetingElement.textContent = greeting;
    }

    displayGreeting();
});
document.addEventListener("DOMContentLoaded", function () {
    const greetingElement = document.getElementById("greetingMessage");
    const currentHour = new Date().getHours();
    let greeting;

    switch (true) {
        case (currentHour >= 5 && currentHour < 12):
            greeting = "Good Morning!";
            break;
        case (currentHour >= 12 && currentHour < 18):
            greeting = "Good Afternoon!";
            break;
        case (currentHour >= 18 && currentHour < 22):
            greeting = "Good Evening!";
            break;
        default:
            greeting = "Hello, Night Owl!";
            break;
    }
    greetingElement.textContent = greeting;

    const stars = document.querySelectorAll("#ratingStars span");
    const ratingMessage = document.getElementById("ratingMessage");

    stars.forEach(star => {
        star.addEventListener("click", function () {
            const rating = this.getAttribute("data-value");
            ratingMessage.textContent = `You rated this ${rating} star${rating > 1 ? 's' : ''}!`;

            stars.forEach(s => s.classList.remove("selected"));
            this.classList.add("selected");

            for (let i = 0; i < rating; i++) {
                stars[i].classList.add("selected");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const recipe = {
        name: "Spaghetti Carbonara",
        ingredients: [
            "200g spaghetti",
            "100g pancetta",
            "2 eggs",
            "50g Parmesan cheese",
            "Salt and pepper"
        ],
        instructions: "Cook the spaghetti. In a separate pan, cook pancetta until crispy. Mix eggs and Parmesan, then combine with pasta and pancetta.",

        displayRecipe: function() {
            return `
                    <h3>${this.name}</h3>
                    <h4>Ingredients:</h4>
                    <ul>${this.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}</ul>
                    <h4>Instructions:</h4>
                    <p>${this.instructions}</p>
                `;
        }
    };

    const recipeDisplay = document.getElementById("recipeDisplay");
    const toggleRecipeButton = document.getElementById("toggleRecipeButton");

    toggleRecipeButton.addEventListener("click", function() {
        if (recipeDisplay.innerHTML === "") {
            recipeDisplay.innerHTML = recipe.displayRecipe();
            toggleRecipeButton.textContent = "Hide Recipe Details";
        } else {
            recipeDisplay.innerHTML = "";
            toggleRecipeButton.textContent = "Show Recipe Details";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const authButton = document.getElementById("authButton");
    const username = sessionStorage.getItem("username");

    if (username) {
        authButton.textContent = "Logout";
        authButton.classList.replace("btn-outline-primary", "btn-outline-danger");
    } else {
        authButton.textContent = "Login";
    }

    authButton.addEventListener("click", () => {
        if (username) {
            sessionStorage.removeItem("username");
            window.location.reload();
        } else {
            window.location.href = "login.html";
        }
    });
});


