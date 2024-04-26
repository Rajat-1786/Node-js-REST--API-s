const User = require('../modal/User');
exports.creatUser = (req,res,next) => {
    // console.log(req.body);

    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        username:req.body.username,
        profile_picture_url:req.body.profile_picture_url
    }).then(result => {
        console.log('result', JSON.stringify(result,null,2));
        return res.status(201).json({'id': result.id});
    }).catch(error => {
        res.status(500);
    })
};

exports.getUser = (req,res,next) => {
    //To do return all the created User
    const userID = req.params.userID;
    User.findByPk(userID).then(result =>{
        res.status(200).json(result);
    }).catch(error=>{
        res.status(404).json({'error':error});
    });
}