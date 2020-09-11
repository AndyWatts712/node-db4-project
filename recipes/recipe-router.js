const express = require('express')

const recipes = require('./recipe-model')

const router = express.Router()

router.get('/recipes', (req, res) => {
    recipes.getRecipes()
        .then(resp => {
            res.status(200).json({resp})
        })
})

router.get('/list/:id', (req, res) => {
    recipes.getShoppingList(req.params)
        .then(list => {
            res.status(200).json({list})
        })
})


module.exports = router