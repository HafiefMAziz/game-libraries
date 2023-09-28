'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('tags', [
      {
      name: "Action",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Adventure",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "FPS",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Strategy",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Simulation",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Role-playing game",
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
