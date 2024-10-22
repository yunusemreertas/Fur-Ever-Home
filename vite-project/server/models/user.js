// This file defines a simple User model with two fields: username and password.


const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;
