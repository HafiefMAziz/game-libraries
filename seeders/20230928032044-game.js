'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('games', [
      {
      title: "Baldur's Gate 3",
      imageUrl: "https://www.giantbomb.com/a/uploads/original/33/338034/3481194-9104276158-100a5.jpg",
      description: "Baldur’s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power. Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.\nMysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.\nFrom the creators of Divinity: Original Sin 2 comes a next-generation RPG, set in the world of Dungeons & Dragons",
      yearRelease: 2023,
      publisherId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "The Elder Scrolls V: Skyrim",
      imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202009/2818/FuG72QFUf4aRYbSBAMNH2xwm.png",
      description: "The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more. Skyrim Special Edition also brings the full power of mods to the PC and consoles. New quests, environments, characters, dialogue, armor, weapons and more - with Mods, there are no limits to what you can experience.",
      yearRelease: 2011,
      publisherId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Starfield",
      imageUrl: "https://assets-prd.ignimgs.com/2022/01/28/starfield-ign-sq-1643334195275.jpg",
      description: "Starfield is the first new universe in over 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity's greatest mystery.\nIn the year 2330, humanity has ventured beyond our solar system, settling new planets, and living as a spacefaring people. You will join Constellation - the last group of space explorers seeking rare artifacts throughout the galaxy - and navigate the vast expanse of space in Bethesda Game Studios' biggest and most ambitious game.",
      yearRelease: 2023,
      publisherId: 1,
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
