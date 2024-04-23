exports.creatUser = (req,res,next) => {

    res.status(201);
};

exports.getUser = (req,res,next) => {
    //To do return all the created User
    const userID = req.params.userID;
    res.status(200).json({
        "userId":userID
    });
}