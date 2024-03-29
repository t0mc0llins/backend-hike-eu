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
      hike.hasOne(models.map);
    }
  }
  hike.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
      likes: { type: DataTypes.INTEGER, allowNull: false },
      countryRef: { type: DataTypes.STRING, allowNull: false },
      seasonRefs: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
      },
      startLocation: { type: DataTypes.STRING, allowNull: false },
      endLocation: { type: DataTypes.STRING, allowNull: false },
      badgeIds: DataTypes.ARRAY(DataTypes.INTEGER),
      coverImage: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "hike",
    }
  );
  return hike;
};
