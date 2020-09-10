const express = require('express')

const RecipeRouter = require('../recipes/recipe-router')

const db = require('../data/connection')

const server = express()

server.use(express.json())


module.exports = server