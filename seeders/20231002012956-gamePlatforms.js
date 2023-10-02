'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('gamePlatforms', [
      {
        gameId: 1,
        platformId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameId: 1,
        platformId:  5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameId: 1,
        platformId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameId: 2,
        platformId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameId: 2,
        platformId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameId: 3,
        platformId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameId: 3,
        platformId:  5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameId: 4,
        platformId:  6,
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
