'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  {
    dialect: "sqlite",
    storage: "./database.sqlite",
    logging: console.log
  }
);

const user = sequelize.define('user',{
  uid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: "User",
  freezeTableName: true
});

module.exports = user;
