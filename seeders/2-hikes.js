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
          coverImage:
            "https://www.romanianfriend.com/uploads/media/dsc-0673-edit-frontend-gallery-image.jpeg",
          mapImage:
            "https://intotheworld.eu/itw/wp-content/uploads/2015/08/localizare-fagaras-vest.jpg",
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
          coverImage:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/dd/49/e2/the-mighty-ben-is-sleeping.jpg?w=1200&h=-1&s=1",
          mapImage:
            "http://littlewanderluststories.com/wp-content/uploads/2017/09/map-1024x724.jpg",
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
