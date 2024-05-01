const Project = require('../modal/Project');
exports.addProject = (req,res,next) => {
    console.log(`user request body - ${req.body}`);

    var project = {
        projectName:req.body.projectName,
        description:req.body.description,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        email:req.body.email
    }

    Project.create(project).then((result) => {
        return res.status(201).json({created:"success", Id:result.id});
    }).catch(error =>{
        console.log(error);
        return res.status(400);
    })
    
};

exports.getProject = (req,res,next) => {
    email = req.params.email;

    Project.findAll({
        where:{
            email: email
    }}).then((result) => {
        console.log(result);
        res.status(200).json(result);
    }).catch((error) =>{
        console.log(error);
        res.status(404);
    });
    
};