'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      pid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      body: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'uid'
        }
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'username'
        }
      },
      dateCreated: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      likeUserIds: {
        type: Sequelize.JSON,
        allowNull: true,
        defaultValue: []
      },
      likes: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};
