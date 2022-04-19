"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "hikes",
      [
        {
          title: "Fagaras mountain trail",
          description:
            "A 4 day hike through the beautiful Fagaras mountains in the famous Transylvania region of Romania. Watch out for bears!",
          likes: 4,
          distance: 60,
          country: "Romania",
          season: "Spring / Summer",
          startLocation: "Medieseni campground",
          endLocation: "Zărnești town",
          badgeIds: [0, 1],
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ben Nevis (CMD route)",
          description:
            "An alternative route up Ben Nevis along the Carn Mor Dearg Arete ridge. Expect plenty of scrambling.",
          likes: 12,
          distance: 18,
          country: "Scotland",
          season: "Spring / Summer / Autumn",
          startLocation: "North Face Car Park, Torlundy",
          endLocation: "North Face Car Park, Torlundy",
          badgeIds: [0, 2],
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("hikes", null, {});
  },
};
