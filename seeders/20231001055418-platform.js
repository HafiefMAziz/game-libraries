'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('platforms', [
      {
        name: "Android",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "iOS",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PC",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PS4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "PS5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Switch",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Xbox Series X",
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
