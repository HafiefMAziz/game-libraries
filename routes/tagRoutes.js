const tagRoute = require('express').Router()
const TagController = require('../controllers/TagController.js')


tagRoute.get('/', TagController.getTags)
tagRoute.post('/create', TagController.create)
tagRoute.get('/delete/:id', TagController.delete)
tagRoute.post('/update/:id', TagController.update)
tagRoute.get('/updateForm/:id', TagController.updateForm)

module.exports = tagRoute
