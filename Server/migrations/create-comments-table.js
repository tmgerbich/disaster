'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Comments', {
      cid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      comment: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'username'
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'uid'
        }
      },
      postId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Posts',
          key: 'pid'
        }
      },
      dateCreated: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
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
    await queryInterface.dropTable('Comments');
  }
};
