"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      stage.belongsTo(models.day);
    }
  }
  stage.init(
    {
      title: DataTypes.STRING,
      description: { type: DataTypes.TEXT, allowNull: false },
      distance: { type: DataTypes.FLOAT, allowNull: false },
      duration: { type: DataTypes.FLOAT, allowNull: false },
      elevation: DataTypes.INTEGER,
      startLocation: { type: DataTypes.STRING, allowNull: false },
      endLocation: { type: DataTypes.STRING, allowNull: false },
      stageOrder: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "stage",
    }
  );
  return stage;
};
