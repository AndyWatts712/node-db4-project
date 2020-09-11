const express = require('express')

const RecipeRouter = require('../recipes/recipe-router')

const db = require('../data/connection')

const server = express()

server.use(express.json())

server.use('/api', RecipeRouter)

module.exports = server