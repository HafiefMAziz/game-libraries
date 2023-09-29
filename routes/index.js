const route = require('express').Router()
const gameRoutes = require('./gameRoutes.js')
const genreRoutes = require('./genreRoutes.js')
const publisherRoutes = require('./publisherRoutes.js')

route.get('/', (req, res) => {
    res.render('index.ejs', {
        title: 'Homepage'
    });
})
route.use('/games', gameRoutes);
route.use('/genres', genreRoutes);
route.use('/publishers', publisherRoutes);
module.exports = route