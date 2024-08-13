'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let areas = ['Básica', 'profesionalizante', 'titulación'];

    for (let area of areas) {
      await queryInterface.bulkInsert('Areas', [{
        nombre: area,
        estado: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Areas', null, {});
  }
};
