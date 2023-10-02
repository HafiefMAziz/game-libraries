'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      game.belongsToMany(models.genre, {through: models.gameGenre})
      game.belongsToMany(models.platform, {through: models.gamePlatform})
      game.belongsTo(models.publisher)
    }
  }
  game.init({
    title: DataTypes.STRING,
    imageUrl: DataTypes.TEXT,
    description: DataTypes.TEXT,
    yearRelease: DataTypes.INTEGER,
    publisherId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};