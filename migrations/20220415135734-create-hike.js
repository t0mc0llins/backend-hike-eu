'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      likes: {
        type: Sequelize.INTEGER
      },
      distance: {
        type: Sequelize.NUMBER
      },
      country: {
        type: Sequelize.STRING
      },
      season: {
        type: Sequelize.STRING
      },
      startLocation: {
        type: Sequelize.STRING
      },
      endLocation: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('hikes');
  }
};