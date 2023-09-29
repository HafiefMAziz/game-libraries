const {game, genre, publisher, gameGenre} = require("../models");

class GameController {

    static async getGames(req, res) {
        try {
            const games = await game.findAll({
                include: [
                    {model: genre, order: [["name", "ASC"]]},
                    publisher
                ], 
                order: [["title", "ASC"]]
            })
            const genres = await genre.findAll({order: [["name", "ASC"]]})
            const publishers = await publisher.findAll()
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                res.render('./game/index.ejs', {
                    title: `Game Lists`,
                    games,
                    genres,
                    publishers
                })
            }else{
                res.send({
                    message: `All Games`,
                    games
                })
            }
        } catch (error) {
            res.send(error);
        }

    }
    static async getOneGame(req, res) {
        try {
            const gameId = +req.params.id
            const getGame = await game.findByPk(gameId, {
                include: [
                {model: genre, order: [["name", "ASC"]]},
                publisher
                ], 
            });
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                res.render('./game/detailPage.ejs', {
                    title: `Detail ${getGame.title}`,
                    getGame,
                })
            }else{
                res.send({
                    message: `Detail Game`,
                    getGame,
                })
            }
        } catch (error) {
            res.send(error);
        }

    }
    static async create(req, res) {
        try {
            const reqGame = req.body
            if(typeof reqGame.genreIds === "string"){
                reqGame.genreIds = JSON.parse(reqGame.genreIds)
            }
            const newGame = await game.create({ 
                title: reqGame.title,
                description: reqGame.description,
                yearRelease: reqGame.yearRelease,
                publisherId: +reqGame.publisherId
            })
            let newgameGenres = {}
            if(Array.isArray(reqGame.genreIds)){
                reqGame.genreIds.forEach(async genre => {
                    newgameGenres = await gameGenre.create({
                        gameId: newGame.id,
                        genreId: genre
                    })
                })
            }else if(reqGame.genreIds){
                newgameGenres = await gameGenre.create({
                    gameId: newGame.id,
                    genreId: reqGame.genreIds
                })
            }
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                res.redirect('/games')
            }else{
                res.send({
                    message: `Create a new game succes!`,
                    newGame
                })
            }
        } catch (error) {
            res.send(error);
        }

    }
    static async delete(req, res) {
        try {
            const deletedId = +req.params.id
            const deletedGame = await game.findByPk(deletedId);
            const fbDeleteGameGenre = await gameGenre.destroy({where : {gameId : deletedId}})  
            const fbDeleteGame = await game.destroy({where : {id : deletedId}})  
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                if(fbDeleteGame || fbDeleteGameGenre){ //feedback angka teergantung banyaknya rows ke destroy 
                    res.redirect('/games')
                }else{
                    res.send(`Game with ID ${deletedId} cannot be deleted`);
                }
            }else if(deletedGame){
                res.send({
                    message: `Deleted a Game with id ${deletedGame.id} succes!`,
                    deletedGame
                })
            }else{
                res.send({
                    message: `Cannot find data with ID ${deletedId}`
                })
            }
        } catch (error) {
            res.send(error);
        }

    }
    static async updateForm(req, res) {
        try {
            const updatedId = +req.params.id
            const oldGame = await game.findByPk(updatedId, {                
                include: [
                {model: genre, order: [["name", "ASC"]]},
                publisher
                ],
            } );
            const genres = await genre.findAll({order: [["name", "ASC"]]});
            const publishers = await publisher.findAll({order: [["name", "ASC"]]});
            res.render('./game/updateForm.ejs', {
                title: `Update Game Form`,
                oldGame,
                genres,
                publishers
            })
        } catch (error) {
            res.send(error);
        }

    }
    static async update(req, res) {
        try {
            const updatedId = +req.params.id
            const reqGame = req.body
            const oldGame = await game.findByPk(updatedId);
            const fbUpdateGame = await game.update(reqGame ,{where : {id : updatedId}})
            const fbDeleteGameGenre = await gameGenre.destroy({where : {gameId : updatedId}})  
            const updatedGame = await game.findByPk(updatedId);
            let newgameGenres = []
            if(typeof reqGame.genreIds === "string"){
                reqGame.genreIds = JSON.parse(reqGame.genreIds)
            }
            if(Array.isArray(reqGame.genreIds)){
                reqGame.genreIds.forEach(async genre => {
                    newgameGenres = await gameGenre.create({
                        gameId: updatedId,
                        genreId: genre
                })
            })
            }else if (reqGame.genreIds){
                newgameGenres = await gameGenre.create({
                    gameId: updatedId,
                    genreId: reqGame.genreIds
                })
            }
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                if(fbUpdateGame || fbDeleteGameGenre){ //feedback angka teergantung banyaknya rows ke destroy
                    res.redirect('/games');
                }else{
                    res.send(`Game with ID ${updatedId} cannot be updated`);
                }
            }else if(updatedGame){
                res.send({
                    message: `Succes update a Game with Id ${updatedGame.id}`,
                    oldGame,
                    updatedGame
                })
            }else{
                res.send({
                    message: `Cannot find data with ID ${updatedId}`
                })
            }
        } catch (error) {
            res.send(error);
        }

    }
}

module.exports = GameController;