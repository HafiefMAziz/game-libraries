const {genre, gameGenre} = require("../models");

class GenreController {

    static async getGenres(req, res) {
        try {
            const genres = await genre.findAll()
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                res.render('./genre/index.ejs', {
                    title: `Genre Lists`,
                    genres
                })
            }else{
                res.send({
                    message: `All Genres`,
                    genres
                })
            }
        } catch (error) {
            res.send(error);
        }

    }
    static async create(req, res) {
        try {
            const reqGenre = req.body
            const newGenre = await genre.create(reqGenre)
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                res.redirect('/genres')
            }else{
                res.send({
                    message: `Create a new genre succes!`,
                    newGenre
                })
            }
        } catch (error) {
            res.send(error);
        }

    }
    static async delete(req, res) {
        try {
            const deletedId = +req.params.id
            const deletedGenre = await genre.findByPk(deletedId);
            const fbDeleteGameGenre = await gameGenre.destroy({where : {genreId : deletedId}})  
            const fbDeleteGenre = await genre.destroy({where : {id : deletedId}}) 
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                if(fbDeleteGenre || fbDeleteGameGenre){ //feedback angka teergantung banyaknya rows ke destroy 
                    res.redirect('/genres')
                }else{
                    res.send(`Genre with ID ${deletedId} cannot be deleted`);
                }
            }else if(deletedGenre){
                res.send({
                    message: `Delete a genre with ID ${deletedGenre.id} succes!`,
                    deletedGenre
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
            const oldGenre = await genre.findByPk(updatedId);
            res.render('./genre/updateForm.ejs', {
                title: `Update Genre Form`,
                oldGenre
            })
        } catch (error) {
            res.send(error);
        }

    }
    static async update(req, res) {
        try {
            const updatedId = +req.params.id
            const reqGenre = req.body
            const oldGenre = await genre.findByPk(updatedId);
            const fbUpdateGenre = await genre.update(reqGenre ,{where : {id : updatedId}})
            const updatedGenre = await genre.findByPk(updatedId);
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                if(fbUpdateGenre){ //feedback angka teergantung banyaknya rows ke update 
                    res.redirect('/genres');
                }else{
                    res.send(`Genre with ID ${updatedId} cannot be updated`);
                }
            }else if (updatedGenre){
                res.send({
                    message: `Update a genre with ID ${updatedGenre.id} succes!`,
                    oldGenre,
                    updatedGenre
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

module.exports = GenreController;