"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("maps", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      minZoom: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      maxBoundLat: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        allowNull: false,
      },
      maxBoundLng: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        allowNull: false,
      },
      center: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
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
    await queryInterface.dropTable("maps");
  },
};
