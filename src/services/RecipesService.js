// Get all recipe categories
const RECIPE_CATEGORY_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

// Get all recipes by category
const RECIPES_BY_CATEGORY_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php';

// Get recipe by id
const RECIPE_BY_ID_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php';

export const getAllCategories = () => {
    return fetch(RECIPE_CATEGORY_URL)
    .then(response => response.json());
}

export const getAllRecipesInCategory = (category) => {
    return fetch(`${RECIPES_BY_CATEGORY_URL}?c=${category}`)
    .then(response => response.json());
}

export const getRecipeById = (id) => {
    return fetch(`${RECIPE_BY_ID_URL}?i=${id}`)
    .then(response => response.json());
}