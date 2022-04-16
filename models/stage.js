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
      description: DataTypes.STRING,
      distance: DataTypes.NUMBER,
      duration: DataTypes.STRING,
      elevation: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "stage",
    }
  );
  return stage;
};
