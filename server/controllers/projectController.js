const uuid = require('uuid')
const path = require('path');
const {Project, ProjectInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
const {where} = require("sequelize");

class ProjectController {
    async create(req, res, next){
        try {
            let {name, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const project = await Project.create({name, img: fileName})


            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ProjectInfo.create({
                        title: i.title,
                        description: i.description,
                        projectId: project.id
                    })
                )
            }


            return res.json(project)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req,res){
        const projects = await Project.findAll()
        return res.json(projects)
    }

    async getOne(req,res){
        const {id} = req.params
        const project = await Project.findOne(
            {
                where: {id},
                include: [{model: ProjectInfo, as: 'info'}]
            })
        return res.json(project)
    }

    async destroy(req, res, next) {
        try {
            const { id } = req.params;
            const project = await Project.findOne(
                {
                    where: {id}
                });

            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }

            await Project.destroy({ where: { id } });
            return res.json({ message: 'Project deleted successfully' });
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
}

module.exports = new ProjectController();