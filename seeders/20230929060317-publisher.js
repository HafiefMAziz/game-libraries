'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('publishers', [
      {
      name: "Bethesda",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "CD Projekt Red",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Larian Studios",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Rockstar Games",
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
