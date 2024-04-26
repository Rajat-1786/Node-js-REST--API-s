const {Sequelize} = require('sequelize');

const database = new Sequelize('TMS','root','Pa$$w0rdmysql',{
    host:'localhost',
    dialect:'mysql'
});

module.exports = database;