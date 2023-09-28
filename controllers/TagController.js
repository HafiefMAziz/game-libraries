const {tag, gameTag} = require("../models");

class TagController {

    static async getTags(req, res) {
        try {
            const tags = await tag.findAll()
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                res.render('./tag/index.ejs', {
                    title: `Tag Lists`,
                    tags
                })
            }else{
                res.send({
                    message: `All Tags`,
                    tags
                })
            }
        } catch (error) {
            res.send(error);
        }

    }
    static async create(req, res) {
        try {
            const reqTag = req.body
            const newTag = await tag.create(reqTag)
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                res.redirect('/tags')
            }else{
                res.send({
                    message: `Create a new tag succes!`,
                    newTag
                })
            }
        } catch (error) {
            res.send(error);
        }

    }
    static async delete(req, res) {
        try {
            const deletedId = +req.params.id
            const deletedTag = await tag.findByPk(deletedId);
            const fbDeleteGameTag = await gameTag.destroy({where : {tagId : deletedId}})  
            const fbDeleteTag = await tag.destroy({where : {id : deletedId}}) 
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                if(fbDeleteTag || fbDeleteGameTag){ //feedback angka teergantung banyaknya rows ke destroy 
                    res.redirect('/tags')
                }else{
                    res.send(`Tag with ID ${deletedId} cannot be deleted`);
                }
            }else if(deletedTag){
                res.send({
                    message: `Delete a tag with ID ${deletedTag.id} succes!`,
                    deletedTag
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
            const oldTag = await tag.findByPk(updatedId);
            res.render('./tag/updateForm.ejs', {
                title: `Update Tag Form`,
                oldTag
            })
        } catch (error) {
            res.send(error);
        }

    }
    static async update(req, res) {
        try {
            const updatedId = +req.params.id
            const reqTag = req.body
            const oldTag = await tag.findByPk(updatedId);
            const fbUpdateTag = await tag.update(reqTag ,{where : {id : updatedId}})
            const updatedTag = await tag.findByPk(updatedId);
            const acceptHeader = req.get("Accept"); //untuk pisahin lewat FrontEnd dan Backend
            if(acceptHeader && acceptHeader.includes("text/html")) {
                if(fbUpdateTag){ //feedback angka teergantung banyaknya rows ke update 
                    res.redirect('/tags');
                }else{
                    res.send(`Tag with ID ${updatedId} cannot be updated`);
                }
            }else if (updatedTag){
                res.send({
                    message: `Update a tag with ID ${updatedTag.id} succes!`,
                    oldTag,
                    updatedTag
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

module.exports = TagController;