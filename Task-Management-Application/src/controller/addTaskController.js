const { where } = require('sequelize');
const Task = require('../modal/Task');

exports.addTask = (req,res,next) =>{

    var task = {
        taskName:req.body.taskName,
        createdDate:req.body.createdDate,
        endDate:req.body.endDate,
        description:req.body.description,
        projectId:req.body.projectId
    }

    Task.create(task).then((result) => {
        console.log(result);
        res.status(201).json({"id" : result.taskId});
    }).catch( (error) => {
        res.status(404);
    })
}

exports.getTasks = (req,res,next) =>{
    const projectId = req.params.projectId;
    Task.findAll({
        where:{
            projectId: projectId
    }}).then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(error =>{
        console.log(error);
        res.status(404);
    });
}