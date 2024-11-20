const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// Fetch recipes from the API
async function fetchRecipes(query) {
    try {
        const response = await fetch(`${API_BASE_URL}/search.php?s=${query}`);
        const data = await response.json();
        return data.meals || []; // Return meals or an empty array if no results
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
}

// Save and load search queries
function saveSearchQuery(query) {
    localStorage.setItem("searchQuery", query);
}

function loadSearchQuery() {
    return localStorage.getItem("searchQuery") || "";
}

// Display recipes dynamically
function displayRecipes(recipesToDisplay) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = ""; // Clear existing recipes

    recipesToDisplay.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.className = "col-lg-6 mb-4";
        recipeCard.innerHTML = `
            <div class="card">
                <img src="${recipe.strMealThumb}" class="card-img-top" alt="${recipe.strMeal}">
                <div class="card-body">
                    <h3 class="card-title">${recipe.strMeal}</h3>
                    <p><strong>Category:</strong> ${recipe.strCategory || "N/A"}</p>
                    <p><strong>Area:</strong> ${recipe.strArea || "N/A"}</p>
                    <a href="${recipe.strSource || '#'}" target="_blank" class="btn btn-primary">View Recipe</a>
                </div>
            </div>
        `;

        recipeList.appendChild(recipeCard);
    });
}

// Handle search input
document.getElementById("searchInput").addEventListener("input", async (event) => {
    const query = event.target.value.trim();
    saveSearchQuery(query);
    const recipes = await fetchRecipes(query);
    displayRecipes(recipes);
});

// Initialize the page with saved search query
(async function initializePage() {
    const savedQuery = loadSearchQuery();
    document.getElementById("searchInput").value = savedQuery;
    const recipes = await fetchRecipes(savedQuery || ""); // Default query if empty
    displayRecipes(recipes);
})();
