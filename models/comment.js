"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comment.belongsTo(models.hike);
      comment.belongsTo(models.user);
    }
  }
  comment.init(
    {
      content: { type: DataTypes.TEXT, allowNull: false },
      likes: { type: DataTypes.INTEGER, allowNull: false },
      imageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comment",
    }
  );
  return comment;
};
