'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gamePlatform extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      gamePlatform.belongsTo(models.game)
      gamePlatform.belongsTo(models.platform)
    }
  }
  gamePlatform.init({
    gameId: DataTypes.INTEGER,
    platformId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'gamePlatform',
  });
  return gamePlatform;
};