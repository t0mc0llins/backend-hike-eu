"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "maps",
      [
        {
          minZoom: 14,
          maxBoundSouthWest: [45.5642,24.5538],
          maxBoundNorthEast: [45.6122,24.6407],
          center: [45.5882,24.5972],
          polylineArr: "[[{\"lat\":45.585347131857944,\"lng\":24.55744743347168},{\"lat\":45.58348498468996,\"lng\":24.56053733825684},{\"lat\":45.58144255870755,\"lng\":24.5610523223877},{\"lat\":45.57927990903364,\"lng\":24.56603050231934},{\"lat\":45.58000080151392,\"lng\":24.568090438842773},{\"lat\":45.58108212288001,\"lng\":24.56766128540039},{\"lat\":45.58330477362148,\"lng\":24.573841094970703},{\"lat\":45.58372526521474,\"lng\":24.576673507690433},{\"lat\":45.58678875176006,\"lng\":24.581308364868168},{\"lat\":45.58829039978974,\"lng\":24.58671569824219},{\"lat\":45.59057282785786,\"lng\":24.590835571289066},{\"lat\":45.59339570260598,\"lng\":24.592809677124027},{\"lat\":45.596098321976,\"lng\":24.59650039672852},{\"lat\":45.59471699944833,\"lng\":24.602336883544925},{\"lat\":45.59687905445139,\"lng\":24.606370925903324},{\"lat\":45.59892091880099,\"lng\":24.60697174072266},{\"lat\":45.598080160126045,\"lng\":24.611606597900394},{\"lat\":45.5983203781758,\"lng\":24.61615562438965},{\"lat\":45.59952145299877,\"lng\":24.622592926025394},{\"lat\":45.60192352551555,\"lng\":24.62319374084473},{\"lat\":45.603905157923606,\"lng\":24.626197814941406},{\"lat\":45.60336471966302,\"lng\":24.632549285888675},{\"lat\":45.601262965825164,\"lng\":24.632463455200195},{\"lat\":45.60174337364402,\"lng\":24.636754989624023},{\"lat\":45.602764226600755,\"lng\":24.63658332824707},{\"lat\":45.60300442459696,\"lng\":24.639844894409183}]]",
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 1,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          polylineArr: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 2,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          polylineArr: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 3,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          polylineArr: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 4,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          polylineArr: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 5,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          polylineArr: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 6,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          polylineArr: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 7,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          polylineArr: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 8,
        },
        {
          minZoom: 5,
          maxBoundSouthWest: [45.600743, 24.52867],
          maxBoundNorthEast: [45.569178, 24.587386],
          center: [45.580669, 24.558188],
          polylineArr: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          hikeId: 9,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("maps", null, {});
  },
};
