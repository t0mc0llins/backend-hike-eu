"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "maps",
      [
        {
          minZoom: 14,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 1,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 2,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 3,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 4,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 5,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 6,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 7,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 8,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
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
