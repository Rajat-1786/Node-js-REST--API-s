const http= require('http');
const express =  require('express');
const bodyParser = require('body-parser');
const createUserRouter = require('./src/routes/creatUser');
const sequelize = require('./src/dao/Mysql');
const addProjectRouter = require('./src/routes/addProjectRoute')

const app = express();
app.use(bodyParser.json())

app.use('/user',createUserRouter);
app.use('/addProject', addProjectRouter);
app.use('/project',addProjectRouter);

sequelize.sync().then(result => {
    // console.log(result);
    app.listen(3000)
})
.catch(error =>{
    console.error(error);
})
