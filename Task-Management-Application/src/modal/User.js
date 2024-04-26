const database = require('../dao/Mysql');
const {Sequelize} = require('sequelize');

const User = database.define('Users',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
            len:[3,20]
        }
    },
    email:{
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false
    },
    username:{
        type:Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    profile_picture_url:{
        type:Sequelize.BLOB,
        allowNull: true
    }
})

module.exports = User;