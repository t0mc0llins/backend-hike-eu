"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      day.belongsTo(models.hike);
      day.hasMany(models.stage);
    }
  }
  day.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      dayOrder: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "day",
    }
  );
  return day;
};
