"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "maps",
      [
        {
          maxZoom: 5,
          maxBoundLat: [45.600743, 24.52867],
          maxBoundLng: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 1,
        },
        {
          maxZoom: 5,
          maxBoundLat: [45.600743, 24.52867],
          maxBoundLng: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 2,
        },
        {
          maxZoom: 5,
          maxBoundLat: [45.600743, 24.52867],
          maxBoundLng: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 3,
        },
        {
          maxZoom: 5,
          maxBoundLat: [45.600743, 24.52867],
          maxBoundLng: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 4,
        },
        {
          maxZoom: 5,
          maxBoundLat: [45.600743, 24.52867],
          maxBoundLng: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 5,
        },
        {
          maxZoom: 5,
          maxBoundLat: [45.600743, 24.52867],
          maxBoundLng: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 6,
        },
        {
          maxZoom: 5,
          maxBoundLat: [45.600743, 24.52867],
          maxBoundLng: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 7,
        },
        {
          maxZoom: 5,
          maxBoundLat: [45.600743, 24.52867],
          maxBoundLng: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 8,
        },
        {
          maxZoom: 5,
          maxBoundLat: [45.600743, 24.52867],
          maxBoundLng: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 9,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
