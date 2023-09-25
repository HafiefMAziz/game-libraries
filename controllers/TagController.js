const {game, tag} = require("../models");

class TagController {

    static async getTags(req, res) {
        try {
            const tags = await tag.findAll()
            res.render('./tag/index.ejs', {
                title: `Tag Lists`,
                tags
            })
        } catch (error) {
            res.send(error);
        }

    }
    static async create(req, res) {
        try {
            const reqTag = req.body
            const newTag = await tag.create(reqTag)
            res.redirect('/tags')
        } catch (error) {
            res.send(error);
        }

    }
    static async delete(req, res) {
        try {
            const deletedId = +req.params.id
            const deletedTag = await tag.findByPk(deletedId);
            const tags = await tag.update({tagId: null}, {where: {tagId : deletedId}})
            const fb = await tag.destroy({where : {id : deletedId}})  
            if(fb === 1){ //feedback 1 jika proses destroy berhasil
                res.redirect('/tags')
            }else{
                res.send(`Tag with ID ${deletedId} cannot be deleted`);
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
            const fb = await tag.update(reqTag ,{where : {id : updatedId}})
            if(fb[0] === 1){ //feedback 1 dalam bentuk array jika proses update berhasil
                res.redirect('/tags');
            }else{
                res.send(`Tag with ID ${updatedId} cannot be updated`);
            }
        } catch (error) {
            res.send(error);
        }

    }
}

module.exports = TagController;