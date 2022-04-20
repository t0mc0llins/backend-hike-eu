"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "days",
      [
        {
          title: "Day 1 - Medieseni to Saua Puha",
          description:
            "This first day is the hardest with a lot of uphill to reach the spine of the mountains. Set off before 8am to give yourself enough time. You can camp by the mountain hut found off the road at the Saua Puha crossroads.",
          distance: 14,
          duration: "9-11",
          elevation: 2500,
          startLocation: "Medieseni campground",
          endLocation: "Saua Puha",
          dayOrder: 1,
          hikeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Day 2 - Saua Puha to Vf. Paltinul",
          description:
            "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
          distance: 20,
          duration: "7-9",
          elevation: 400,
          startLocation: "Saua Puha",
          endLocation: "Vf. Paltinul",
          dayOrder: 2,
          hikeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Day 3 - Vf. Paltinul to Vf. Other thing",
          description:
            "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
          distance: 11,
          duration: "5-6",
          elevation: 400,
          startLocation: "Vf. Paltinul",
          endLocation: "Vf. Other thing",
          dayOrder: 3,
          hikeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Day 4 - Vf. Other thing to Vf. Other thing",
          description:
            "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
          distance: 15,
          duration: "9",
          elevation: 2200,
          startLocation: "Vf. Paltinul",
          endLocation: "Zărnești town",
          dayOrder: 4,
          hikeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ben Nevis (CMD route)",
          description:
            "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
          distance: 18,
          duration: "8+",
          elevation: 2200,
          startLocation: "North Face Car Park, Torlundy",
          endLocation: "North Face Car Park, Torlundy",
          dayOrder: 1,
          hikeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("days", null, {});
  },
};
