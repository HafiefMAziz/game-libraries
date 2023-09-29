const publisherRoute = require('express').Router()
const PublisherController = require('../controllers/PublisherController.js')


publisherRoute.get('/', PublisherController.getPublishers)
publisherRoute.post('/create', PublisherController.create)
publisherRoute.get('/delete/:id', PublisherController.delete)
publisherRoute.post('/update/:id', PublisherController.update)
publisherRoute.get('/updateForm/:id', PublisherController.updateForm)

module.exports = publisherRoute
