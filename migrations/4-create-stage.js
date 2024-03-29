"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("stages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      distance: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      duration: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      elevation: {
        type: Sequelize.INTEGER,
      },
      startLocation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endLocation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stageOrder: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("stages");
  },
};
