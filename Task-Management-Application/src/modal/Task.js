const database = require('../dao/Mysql');
const Sequelize = require('sequelize');

const Task = database.define('Tasks',{
    taskId: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    taskName: {
        type:Sequelize.STRING,
        allowNull:false
    },
    createdDate:{
        type:Sequelize.DATE,
        allowNull:false,
    },
    endDate:{
        type:Sequelize.DATE,
        allowNull:true
    },
    description:{
        type:Sequelize.STRING,
        allowNull: true
    },
    projectId:{
        type:Sequelize.INTEGER,
        allowNull:false
    }
});

module.exports = Task;