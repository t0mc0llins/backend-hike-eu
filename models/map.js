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
      maxZoom: { type: DataTypes.INTEGER, allowNull: false },
      maxBoundLat: {
        type: DataTypes.ARRAY(DataTypes.DOUBLE),
        allowNull: false,
      },
      maxBoundLng: {
        type: DataTypes.ARRAY(DataTypes.DOUBLE),
        allowNull: false,
      },
      center: { type: DataTypes.ARRAY(DataTypes.DOUBLE), allowNull: false },
    },
    {
      sequelize,
      modelName: "map",
    }
  );
  return map;
};
