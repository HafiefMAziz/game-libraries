'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('games', [
      {
      title: "Baldur's Gate 3",
      description: "Baldur's Gate 3 is a role-playing video game developed and published by Larian Studios. It is the third main game in the Baldur's Gate series, based on the tabletop role-playing system of Dungeons & Dragons.",
      yearRelease: 2023,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "The Elder Scrolls V: Skyrim",
      description: "The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks.",
      yearRelease: 2011,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Starfield",
      description: "Starfield is an action fps role-playing game developed by Bethesda Game Studios and published by Bethesda Softworks.",
      yearRelease: 2023,
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
