"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class map extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      map.belongsTo(models.hike);
    }
  }
  map.init(
    {
      minZoom: { type: DataTypes.INTEGER, allowNull: false },
      maxBoundSouthWest: {
        type: DataTypes.ARRAY(DataTypes.FLOAT),
        allowNull: false,
      },
      maxBoundNorthEast: {
        type: DataTypes.ARRAY(DataTypes.FLOAT),
        allowNull: false,
      },
      center: { type: DataTypes.ARRAY(DataTypes.FLOAT), allowNull: false },
      polylineArr: { type: DataTypes.JSON, allowNull: false },
    },
    {
      sequelize,
      modelName: "map",
    }
  );
  return map;
};
