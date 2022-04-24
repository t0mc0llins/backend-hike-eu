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
      maxZoom: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      maxBoundLat: {
        type: Sequelize.ARRAY(Sequelize.DOUBLE),
        allowNull: false,
      },
      maxBoundLng: {
        type: Sequelize.ARRAY(Sequelize.DOUBLE),
        allowNull: false,
      },
      center: {
        type: Sequelize.ARRAY(Sequelize.DOUBLE),
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
