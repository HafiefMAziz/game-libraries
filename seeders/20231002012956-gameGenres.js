'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('gameGenres', [
      {
        gameId: 1,
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameId: 1,
        genreId:  5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameId: 1,
        genreId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameId: 2,
        genreId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameId: 2,
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameId: 3,
        genreId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameId: 3,
        genreId:  5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        gameId: 3,
        genreId:  8,
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
