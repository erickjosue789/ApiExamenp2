'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Materia.hasMany(models.Area, {
        foreignKey: 'id_area'
      });
    }
  }
  Materia.init({
    nombre: DataTypes.STRING,
    creditos: DataTypes.INTEGER,
    descripción: DataTypes.STRING,
    id_area: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Materia',
    tableName: 'Materias',
  });
  return Materia;
};