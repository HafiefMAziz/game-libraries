const gameRoute = require('express').Router()
const GameController = require('../controllers/GameController.js')


gameRoute.get('/', GameController.getGames)
gameRoute.post('/create', GameController.create)
gameRoute.get('/delete/:id', GameController.delete)
gameRoute.post('/update/:id', GameController.update)
gameRoute.get('/updateForm/:id', GameController.updateForm)

module.exports = gameRoute
