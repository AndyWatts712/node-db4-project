const db = require('../data/connection')

module.exports = {
    getRecipes,
    getShoppingList
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(id) {
    return (
        db('recipes')
            .join('recipes_ingredients', 'recipes.id', 'recipes_ingredients.recipe_id')
            .join('ingredients', 'recipes_ingredients.ingredients_id', 'ingredients.id')
            .select('recipes.name', 'ingredients.name')
            .where({ id })
    )
}