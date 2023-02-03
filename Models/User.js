const Sequelize = require('sequelize')

const sequelize = require('../util/database')

const Users = sequelize.define('Users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,   
    },
    Number: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true 
    },
    password: {
        type: Sequelize.STRING,
    }

})

module.exports = Users