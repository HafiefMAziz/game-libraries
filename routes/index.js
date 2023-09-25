const route = require('express').Router()
const gameRoutes = require('./gameRoutes.js')
const tagRoutes = require('./tagRoutes.js')

route.get('/', (req, res) => {
    res.render('index.ejs', {
        title: 'Homepage'
    });
})
route.use('/games', gameRoutes);
route.use('/tags', tagRoutes);
module.exports = route