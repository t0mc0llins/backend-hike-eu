"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "images",
      [
        {
          description: "Mountains are cool!",
          url: "https://peakvisor.com/img/news/fagaras-mountains.jpg",
          location: "Mt blah blah",
          hikeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "Look at me!",
          url: "https://www.wiredforadventure.com/wp-content/uploads/2016/07/Trekking-Negoiu-Peak-Fagaras-Mountains-Romania.jpg",
          location: "Road to mountain",
          hikeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          description: "It rained a lot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/BenNevis2005.jpg/1200px-BenNevis2005.jpg",
          location: "Scotland",
          hikeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("images", null, {});
  },
};
