"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class hike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      hike.belongsTo(models.user);
      hike.hasMany(models.image);
      hike.hasMany(models.day);
      hike.hasMany(models.comment);
    }
  }
  hike.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      distance: DataTypes.NUMBER,
      country: DataTypes.STRING,
      season: DataTypes.STRING,
      startLocation: DataTypes.STRING,
      endLocation: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "hike",
    }
  );
  return hike;
};
