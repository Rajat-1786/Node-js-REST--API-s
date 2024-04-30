const { where } = require('sequelize');
const Task = require('../modal/Task');

exports.addTask = (req,res,next) =>{
    Task.create(req.body).then(result =>{
        console.log(result);
        res.status(201).json(result);
    }).catch(error => {
        res.status(404);
    })
    return res.status(201);
}

exports.getTasks = (req,res,next) =>{
    const projectName = req.params.projectName;
    Task.findAll({
        where:{
            projectName: projectName
    }}).then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(error =>{
        console.log(error);
        res.status(404);
    });
    return res.status(200);
}