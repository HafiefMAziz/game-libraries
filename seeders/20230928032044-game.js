"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("games", [
      {
        title: "Baldur's Gate 3",
        imageUrl:
          "https://www.giantbomb.com/a/uploads/original/33/338034/3481194-9104276158-100a5.jpg",
        description:
          "Baldur's Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power. Gather your party and return to the Forgotten Realms in a tale of fellowship and betrayal, sacrifice and survival, and the lure of absolute power.\nMysterious abilities are awakening inside you, drawn from a mind flayer parasite planted in your brain. Resist, and turn darkness against itself. Or embrace corruption, and become ultimate evil.\nFrom the creators of Divinity: Original Sin 2 comes a next-generation RPG, set in the world of Dungeons & Dragons",
        yearRelease: 2023,
        publisherId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Divinity: Original Sin 2",
        imageUrl:
          "https://image.api.playstation.com/cdn/UP3526/CUSA12611_00/A2Mt96jRTqaw5EtIwCHkUZXGpvqIZmSF.png",
        description:
          "The Divine is dead. The Void approaches. And the powers lying dormant within you are soon to awaken. The battle for Divinity has begun. Choose wisely and trust sparingly; darkness lurks within every heart.\nGather your party. Master deep, tactical combat. Venture as a party of up to four - but know that only one of you will have the chance to become a God.",
        yearRelease: 2017,
        publisherId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Elden Ring",
        imageUrl:
          "https://image.api.playstation.com/vulcan/ap/rnd/202108/0410/2odx6gpsgR6qQ16YZ7YkEt2B.png",
        description:
          "Elden Ring is a 2022 action role-playing game developed by FromSoftware. It was directed by Hidetaka Miyazaki with worldbuilding provided by fantasy writer George R. R. Martin.\nRise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
        yearRelease: 2022,
        publisherId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Pokemon: Black & White",
        imageUrl:
          "https://static.tvtropes.org/pmwiki/pub/images/pokemonbw8_4.png",
        description:
          "The long-awaited fifth generation of Pokémon games begin with Pokémon Black and Pokémon White. There are 156 brand new Pokémon, including 13 new legendaries, taking the total to 649!.",
        yearRelease: 2010,
        publisherId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Elder Scrolls V: Skyrim",
        imageUrl:
          "https://image.api.playstation.com/vulcan/ap/rnd/202009/2818/FuG72QFUf4aRYbSBAMNH2xwm.png",
        description:
          "The Elder Scrolls V: Skyrim is an action role-playing video game developed by Bethesda Game Studios and published by Bethesda Softworks. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more. Skyrim Special Edition also brings the full power of mods to the PC and consoles. New quests, environments, characters, dialogue, armor, weapons and more - with Mods, there are no limits to what you can experience.",
        yearRelease: 2011,
        publisherId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Legend of Zelda: Breath of the Wild",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/en/c/c6/The_Legend_of_Zelda_Breath_of_the_Wild.jpg",
        description:
          "Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure. Now on Nintendo Switch, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like.",
        yearRelease: 2017,
        publisherId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Witcher 3",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMDU4ODc1M2UtODg3Ny00NDViLTkxNmQtMzMzZWM1NGRmYTNjXkEyXkFqcGdeQXVyODY5Njk4Njc@._V1_FMjpg_UX1000_.jpg",
        description:
          "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
        yearRelease: 2015,
        publisherId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Red Dead Redemption 2",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BMjMyZDY5NTctMzQ0Ny00ZTU0LWE1ZDYtNDYzMjAxYjA1ZGYxXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg",
        description:
          "Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.",
        yearRelease: 2022,
        publisherId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Starfield",
        imageUrl:
          "https://assets-prd.ignimgs.com/2022/01/28/starfield-ign-sq-1643334195275.jpg",
        description:
          "Starfield is the first new universe in over 25 years from Bethesda Game Studios. In this next generation role-playing game set amongst the stars, create any character you want and explore with unparalleled freedom as you embark on an epic journey to answer humanity's greatest mystery.\nIn the year 2330, humanity has ventured beyond our solar system, settling new planets, and living as a spacefaring people. You will join Constellation - the last group of space explorers seeking rare artifacts throughout the galaxy - and navigate the vast expanse of space in Bethesda Game Studios' biggest and most ambitious game.",
        yearRelease: 2023,
        publisherId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
