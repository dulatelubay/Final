const recipes = [
    {
        title: "Spaghetti Carbonara",
        image: "../Images/spaghetti.jpg",
        ingredients: ["200g spaghetti", "100g pancetta", "2 eggs", "50g Parmesan cheese", "Salt and pepper"],
        rating: 0
    },
    {
        title: "Simple Sushi Rolls (Makizushi)",
        image: "../Images/makizushi.jpg",
        ingredients: ["2 cups sushi rice", "4 sheets seaweed", "1 cucumber", "1 avocado", "Soy sauce"],
        rating: 0
    },
    {
        title: "Basic Ground Beef Tacos",
        image: "../Images/taco.jpg",
        ingredients: ["8 tortillas", "500g ground beef", "2 garlic cloves", "15 ml taco seasoning", "Toppings"],
        rating: 0
    },
    {
        title: "Indian Chicken Curry",
        image: "../Images/curry.jpg",
        ingredients: ["500g chicken", "30 ml oil", "1 onion", "5 ml turmeric powder", "200 ml water"],
        rating: 0
    }
];

function saveSearchQuery(query) {
    localStorage.setItem('searchQuery', query);
}

function loadSearchQuery() {
    return localStorage.getItem('searchQuery') || '';
}

function filterRecipes(query) {
    return recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query.toLowerCase()))
    );
}

function displayRecipes(recipesToDisplay) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = ''; // Clear existing recipes

    recipesToDisplay.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.className = "col-lg-6 mb-4";
        recipeCard.innerHTML = `
            <div class="card">
                <img src="${recipe.image}" class="card-img-top" alt="${recipe.title}">
                <div class="card-body">
                    <h3 class="card-title">${recipe.title}</h3>
                    <p>Ingredients:</p>
                    <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
                </div>
            </div>
        `;

        recipeList.appendChild(recipeCard);
    });
}

document.getElementById("searchInput").addEventListener("input", (event) => {
    const query = event.target.value.trim();
    saveSearchQuery(query);
    const filteredRecipes = filterRecipes(query);
    displayRecipes(filteredRecipes);
});

// Initialize the page with saved search query
const savedQuery = loadSearchQuery();
document.getElementById("searchInput").value = savedQuery;
displayRecipes(filterRecipes(savedQuery));
