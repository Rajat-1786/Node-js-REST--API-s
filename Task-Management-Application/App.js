const http= require('http');
const express =  require('express');
const bodyParser = require('body-parser');
const createUserRouter = require('./src/routes/creatUser');

const app = express();
app.use(bodyParser.json())

app.use('/user',createUserRouter);

app.listen(3000);