'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Materias', [{
      nombre: 'Materia 1',
      creditos: 4,
      descripción: 'Materia descripcion 1',
      id_area: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Materias', null, {});
  }
};
