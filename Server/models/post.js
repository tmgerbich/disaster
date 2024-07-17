'use strict';
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(
  {
    dialect: "sqlite",
    storage: "./database.sqlite",
    logging: console.log
  }
);

const post = sequelize.define('post',{
  pid: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users', // 'Users' refers to the table name
      key: 'uid'
    }
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: 'Users', // 'Users' refers to the table name
      key: 'username'
    }
  },
  dateCreated: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  likeUserIds: {
    type: DataTypes.JSON, // Using JSON to store an array of usernames
    allowNull: true,
    defaultValue: []
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0
  }
}, {
  sequelize,
  modelName: 'Post',
  tableName: "Post",
  freezeTableName: true
});

module.exports = post;
