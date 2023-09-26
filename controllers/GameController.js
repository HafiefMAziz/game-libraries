const {game, tag, gameTags} = require("../models");

class GameController {

    static async getGames(req, res) {
        try {
            const games = await game.findAll({include: tag})
            const tags = await tag.findAll()
            res.render('./game/index.ejs', {
                title: `Game Lists`,
                games,
                tags
            })
        } catch (error) {
            res.send(error);
        }

    }
    static async create(req, res) {
        try {
            const reqGame = req.body
            const newGame = await game.create({ 
                title: reqGame.title,
                description: reqGame.description,
                yearRelease: reqGame.yearRelease
            })
            let newgameTags = {}
            if(Array.isArray(reqGame.tagId)){
                reqGame.tagId.forEach(async tag => {
                    newgameTags = await gameTags.create({
                        gameId: newGame.id,
                        tagId: tag
                })
            })
            }else if(reqGame.tagId){
                newgameTags = await gameTags.create({
                    gameId: newGame.id,
                    tagId: reqGame.tagId
                })
            }
            res.redirect('/games')
        } catch (error) {
            res.send(error);
        }

    }
    static async delete(req, res) {
        try {
            const deletedId = +req.params.id
            const deletedGame = await game.findByPk(deletedId);
            const tags = await tag.update({gameId: null}, {where: {gameId : deletedId}})
            const fb = await game.destroy({where : {id : deletedId}})  
            if(fb === 1){ //feedback 1 jika proses destroy berhasil
                res.redirect('/games')
            }else{
                res.send(`Game with ID ${deletedId} cannot be deleted`);
            }
        } catch (error) {
            res.send(error);
        }

    }
    static async updateForm(req, res) {
        try {
            const updatedId = +req.params.id
            const oldGame = await game.findByPk(updatedId, {include: tag});
            const tags = await tag.findAll();
            // res.send([oldGame, tags]);
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
            const fbUpdate = await game.update(reqGame ,{where : {id : updatedId}})
            const fbDelete = await gameTags.destroy({where : {gameId : updatedId}})  
            let newgameTags = []
            if(Array.isArray(reqGame.tagId)){
                reqGame.tagId.forEach(async tag => {
                    newgameTags = await gameTags.create({
                        gameId: updatedId,
                        tagId: tag
                })
            })
            }else if (reqGame.tagId){
                newgameTags = await gameTags.create({
                    gameId: oldGame.id,
                    tagId: reqGame.tagId
                })
            }
            // res.send([fbUpdate, fbDelete, newgameTags])
            if(fbUpdate[0] === 1 || fbDelete){ //feedback 1 dalam bentuk array jika proses update berhasil
                res.redirect('/games');
            }else{
                res.send(`Game with ID ${updatedId} cannot be updated`);
            }
        } catch (error) {
            res.send(error);
        }

    }
}

module.exports = GameController;