const { where } = require('sequelize');
const Task = require('../modal/Task');

exports.addTask = (req,res,next) =>{

    var task = {
        taskName:req.body.taskName,
        createdData:req.body.createdDate,
        endData:req.body.endDate,
        description:req.body.task.description,
        projectId:req.body.projectId
    }

    Task.create(task).then(result =>{
        res.status(201)
    }).catch(error => {
        res.status(404);
    })
    return res.status(201);
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