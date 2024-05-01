const database = require('../dao/Mysql');
const {Sequelize} = require('sequelize');

const User = database.define('Users',{
    name:{
        type:Sequelize.STRING,
        allowNull: false,
        validate: {
            len:[3,20]
        }
    },
    email:{
        type:Sequelize.STRING,
        primaryKey:true,
        unique: true
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false
    },
    phoneNo:{
        type:Sequelize.STRING,
        allowNull:true
    }
})

module.exports = User;