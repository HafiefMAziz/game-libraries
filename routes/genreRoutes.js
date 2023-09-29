const genreRoute = require('express').Router()
const GenreController = require('../controllers/GenreController.js')


genreRoute.get('/', GenreController.getGenres)
genreRoute.post('/create', GenreController.create)
genreRoute.get('/delete/:id', GenreController.delete)
genreRoute.post('/update/:id', GenreController.update)
genreRoute.get('/updateForm/:id', GenreController.updateForm)

module.exports = genreRoute
