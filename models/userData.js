const {Sequelize,DataTypes} = require('sequelize');

const sequelize = require('../util/database');

const UserData = sequelize.define('userdata', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phonenumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});



module.exports = UserData;