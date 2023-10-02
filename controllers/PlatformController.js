const {platform, gamePlatform} = require("../models");

class PlatformController {

    static async getPlatforms(req, res) {
        try {
            const platforms = await platform.findAll()
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                res.render('./platform/index.ejs', {
                    title: `Platform Lists`,
                    platforms
                })
            }else{
                res.send({
                    message: `All Platforms`,
                    platforms
                })
            }
        } catch (error) {
            res.send(error);
        }

    }
    static async create(req, res) {
        try {
            const reqPlatform = req.body
            const newPlatform = await platform.create(reqPlatform)
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                res.redirect('/platforms')
            }else{
                res.send({
                    message: `Create a new platform succes!`,
                    newPlatform
                })
            }
        } catch (error) {
            res.send(error);
        }

    }
    static async delete(req, res) {
        try {
            const deletedId = +req.params.id
            const deletedPlatform = await platform.findByPk(deletedId);
            const fbDeleteGamePlatform = await gamePlatform.destroy({where : {platformId : deletedId}})  
            const fbDeletePlatform = await platform.destroy({where : {id : deletedId}}) 
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                if(fbDeletePlatform || fbDeleteGamePlatform){ //feedback angka teergantung banyaknya rows ke destroy 
                    res.redirect('/platforms')
                }else{
                    res.send(`Platform with ID ${deletedId} cannot be deleted`);
                }
            }else if(deletedPlatform){
                res.send({
                    message: `Delete a platform with ID ${deletedPlatform.id} succes!`,
                    deletedPlatform
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
            const oldPlatform = await platform.findByPk(updatedId);
            res.render('./platform/updateForm.ejs', {
                title: `Update Platform Form`,
                oldPlatform
            })
        } catch (error) {
            res.send(error);
        }

    }
    static async update(req, res) {
        try {
            const updatedId = +req.params.id
            const reqPlatform = req.body
            const oldPlatform = await platform.findByPk(updatedId);
            const fbUpdatePlatform = await platform.update(reqPlatform ,{where : {id : updatedId}})
            const updatedPlatform = await platform.findByPk(updatedId);
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                if(fbUpdatePlatform){ //feedback angka teergantung banyaknya rows ke update 
                    res.redirect('/platforms');
                }else{
                    res.send(`Platform with ID ${updatedId} cannot be updated`);
                }
            }else if (updatedPlatform){
                res.send({
                    message: `Update a platform with ID ${updatedPlatform.id} succes!`,
                    oldPlatform,
                    updatedPlatform
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

module.exports = PlatformController;