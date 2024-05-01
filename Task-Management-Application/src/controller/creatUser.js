const User = require('../modal/User');
exports.creatUser = (req,res,next) => {
    console.log(req.body);

    const user = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phoneNo:req.body.phoneNo
    }

    console.log('user info: ', user);

    User.create(user).then((result) => {
        console.log(`result: ${JSON.stringify(result.status)}`);
        res.status(201).json({created:"success"});

    }).catch((error) => {
        console.log(`error: ${JSON.stringify(error)}`);
        res.status(400).json({error:error.parent.sqlMessage});
    })
};

exports.getUser = (req,res,next) => {
    //To do return all the created User
    const email = req.params.email;

    User.findByPk(email).then((result) =>{

        
        res.status(200).json(result);

    }).catch((error)=>{
        res.status(404).json({'error':error});
    });
}