const { Router } = require("express");
const Hike = require("../models").hike;
const Day = require("../models").day;
const Stage = require("../models").stage;
const Comment = require("../models").comment;
const Map = require("../models").map;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const hikes = await Hike.findAll({ include: Day });
    if (!hikes) {
      res.status(404).send("No hikes found");
      return;
    }
    res.send(hikes);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Server error");
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const hike = await Hike.findByPk(id, {
      include: [Comment, Map, { model: Day, include: [Stage] }],
    });

    if (!hike) {
      res.status(404).send("Hike not found with that id");
      return;
    }

    res.send(hike);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Server error");
  }
});

router.post("/create", async (req, res) => {
  try {
    const {
      title,
      description,
      countryRef,
      seasonRefs,
      startLocation,
      endLocation,
      badgeIds,
      coverImage,
      userId,
    } = req.body;
    if (
      !title ||
      !description ||
      !countryRef ||
      !seasonRefs ||
      !startLocation ||
      !endLocation ||
      !coverImage
    ) {
      res.status(400).send("Incomplete hike generation request.");
      return;
    }
    const hike = await Hike.create({
      title,
      description,
      likes: 0,
      countryRef,
      seasonRefs,
      startLocation,
      endLocation,
      badgeIds,
      coverImage,
      userId,
    });
    res.send(hike);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Server error");
  }
});

router.post("/create/map", async (req, res) => {
  try {
    const {
      minZoom,
      maxBoundSouthWest,
      maxBoundNorthEast,
      center,
      polylineArr,
      hikeId,
    } = req.body;
    if (
      !minZoom ||
      !maxBoundSouthWest ||
      !maxBoundNorthEast ||
      !center ||
      !polylineArr ||
      !hikeId
    ) {
      res.status(400).send("Incomplete map generation request.");
      return;
    }
    const map = await Map.create({
      minZoom,
      maxBoundSouthWest,
      maxBoundNorthEast,
      center,
      polylineArr: JSON.stringify(polylineArr),
      hikeId,
    });
    res.send(map);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
