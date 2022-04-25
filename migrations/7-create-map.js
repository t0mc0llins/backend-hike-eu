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
      maxBoundSouthWest: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        allowNull: false,
      },
      maxBoundNorthEast: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        allowNull: false,
      },
      center: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        allowNull: false,
      },
      polylineArr: { type: Sequelize.JSON },
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
