'use strict';
const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize(
  {dialect: "sqlite",
    storage: "./database.sqlite",
    logging :console.log
  });
const comment = sequelize.define('comment',{
    cid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Users', // 'Users' refers to the table name
        key: 'username'
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users', // 'Users' refers to the table name
        key: 'uid'
      }
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Posts', // 'Posts' refers to the table name
        key: 'pid'
      }
    },
    dateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },{
    tableName: "comment",
    freezeTableName: true
  });

  module.exports = comment;