const database = require('../dao/Mysql');
const Sequelize = require('sequelize');

// "name": "Project Alpha",
// "description": "This is the first project for the team.",
// "start_date": "2024-04-22",
// "end_date": "2024-05-22",
// "team_members": ["member1_id", "member2_id"],
// "tags": ["important", "urgent"],

const Project = database.define('Project',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    projectName:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    description:{
        type:Sequelize.STRING,
        allowNull:true
    },
    start_date:{
        type:Sequelize.DATE,
        allowNull:false
    },
    end_date:{
        type:Sequelize.DATE,
        allowNull:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports = Project;