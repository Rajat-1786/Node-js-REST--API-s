const Project = require('../modal/Project');
exports.addProject = (req,res,next) => {
    console.log(req.body);
    Project.create(req.body).then(result => {
        return res.status(201).json({
            "Id":result.id});
    }).catch(error =>{
        console.log(error);
        return res.status(400);
    })
    
};

exports.getProject = (req,res,next) => {
    id = req.params.projectName;

    Project.findByPk(id).then(result =>{
        return res.status(200).json(result);
    }).catch(error =>{
        return res.status(400);
    })
    
};