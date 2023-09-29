const {publisher, game} = require("../models");

class PublisherController {

    static async getPublishers(req, res) {
        try {
            const publishers = await publisher.findAll()
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                res.render('./publisher/index.ejs', {
                    title: `Publisher Lists`,
                    publishers
                })
            }else{
                res.send({
                    message: `All Publishers`,
                    publishers
                })
            }
        } catch (error) {
            res.send(error);
        }

    }
    static async create(req, res) {
        try {
            const reqPublisher = req.body
            const newPublisher = await publisher.create(reqPublisher)
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                res.redirect('/publishers')
            }else{
                res.send({
                    message: `Create a new publisher succes!`,
                    newPublisher
                })
            }
        } catch (error) {
            res.send(error);
        }

    }
    static async delete(req, res) {
        try {
            const deletedId = +req.params.id
            const deletedPublisher = await publisher.findByPk(deletedId);
            const fbUpdateGameId = await game.update({publisherId: null},{where : {publisherId : deletedId}})  
            const fbDeletePublisher = await publisher.destroy({where : {id : deletedId}}) 
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                if(fbDeletePublisher || fbUpdateGameId){ //feedback angka teergantung banyaknya rows ke destroy 
                    res.redirect('/publishers')
                }else{
                    res.send(`Publisher with ID ${deletedId} cannot be deleted`);
                }
            }else if(deletedPublisher){
                res.send({
                    message: `Delete a publisher with ID ${deletedPublisher.id} succes!`,
                    deletedPublisher
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
            const oldPublisher = await publisher.findByPk(updatedId);
            res.render('./publisher/updateForm.ejs', {
                title: `Update Publisher Form`,
                oldPublisher
            })
        } catch (error) {
            res.send(error);
        }

    }
    static async update(req, res) {
        try {
            const updatedId = +req.params.id
            const reqPublisher = req.body
            const oldPublisher = await publisher.findByPk(updatedId);
            const fbUpdatePublisher = await publisher.update(reqPublisher ,{where : {id : updatedId}})
            const updatedPublisher = await publisher.findByPk(updatedId);
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                if(fbUpdatePublisher){ //feedback angka teergantung banyaknya rows ke update 
                    res.redirect('/publishers');
                }else{
                    res.send(`Publisher with ID ${updatedId} cannot be updated`);
                }
            }else if (updatedPublisher){
                res.send({
                    message: `Update a publisher with ID ${updatedPublisher.id} succes!`,
                    oldPublisher,
                    updatedPublisher
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

module.exports = PublisherController;