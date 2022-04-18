"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("images", "hikeId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "hikes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("comments", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("comments", "hikeId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "hikes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("hikes", "userId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("days", "hikeId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "hikes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("stages", "dayId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "days",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("images", "hikeId");
    await queryInterface.removeColumn("comments", "userId");
    await queryInterface.removeColumn("comments", "hikeId");
    await queryInterface.removeColumn("hikes", "userId");
    await queryInterface.removeColumn("days", "hikeId");
    await queryInterface.removeColumn("stages", "dayId");
  },
};
