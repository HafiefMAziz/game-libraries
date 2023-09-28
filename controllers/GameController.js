const {game, tag, gameTag} = require("../models");

class GameController {

    static async getGames(req, res) {
        try {
            const games = await game.findAll({include: {model: tag, order: [["name", "ASC"]]}})
            const tags = await tag.findAll({order: [["name", "ASC"]]})
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                res.render('./game/index.ejs', {
                    title: `Game Lists`,
                    games,
                    tags
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
    static async create(req, res) {
        try {
            const reqGame = req.body
            if(typeof reqGame.tagIds === "string"){
                reqGame.tagIds = JSON.parse(reqGame.tagIds)
            }
            const newGame = await game.create({ 
                title: reqGame.title,
                description: reqGame.description,
                yearRelease: reqGame.yearRelease
            })
            let newgameTags = {}
            if(Array.isArray(reqGame.tagIds)){
                reqGame.tagIds.forEach(async tag => {
                    newgameTags = await gameTag.create({
                        gameId: newGame.id,
                        tagId: tag
                    })
                })
            }else if(reqGame.tagIds){
                newgameTags = await gameTag.create({
                    gameId: newGame.id,
                    tagId: reqGame.tagIds
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
            const fbDeleteGameTag = await gameTag.destroy({where : {gameId : deletedId}})  
            const fbDeleteGame = await game.destroy({where : {id : deletedId}})  
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                if(fbDeleteGame || fbDeleteGameTag){ //feedback angka teergantung banyaknya rows ke destroy 
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
            const oldGame = await game.findByPk(updatedId, {include: tag});
            const tags = await tag.findAll({order: [["name", "ASC"]]});
            res.render('./game/updateForm.ejs', {
                title: `Update Game Form`,
                oldGame,
                tags
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
            const fbDeleteGameTag = await gameTag.destroy({where : {gameId : updatedId}})  
            const updatedGame = await game.findByPk(updatedId);
            let newgameTags = []
            if(typeof reqGame.tagIds === "string"){
                reqGame.tagIds = JSON.parse(reqGame.tagIds)
            }
            if(Array.isArray(reqGame.tagIds)){
                reqGame.tagIds.forEach(async tag => {
                    newgameTags = await gameTag.create({
                        gameId: updatedId,
                        tagId: tag
                })
            })
            }else if (reqGame.tagIds){
                newgameTags = await gameTag.create({
                    gameId: updatedId,
                    tagId: reqGame.tagIds
                })
            }
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                if(fbUpdateGame || fbDeleteGameTag){ //feedback angka teergantung banyaknya rows ke destroy
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