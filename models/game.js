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
      game.belongsToMany(models.tag, {through: models.gameTags})
    }
  }
  game.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    yearRelease: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};