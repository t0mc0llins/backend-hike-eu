"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("hikes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      likes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      distance: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      season: {
        type: Sequelize.STRING,
      },
      startLocation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      endLocation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      badgeIds: { type: Sequelize.ARRAY(Sequelize.INTEGER) },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      coverImage: { type: Sequelize.STRING },
      mapImage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("hikes");
  },
};
