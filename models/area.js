'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Area.belongsTo(models.Materia, {
        foreignKey: 'id_area'
      });
    }
  }
  Area.init({
    nombre: DataTypes.STRING,
    estado: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Area',
    tableName: 'Areas',
  });
  return Area;
};