const { Router } = require("express");
const Hike = require("../models").hike;
const Day = require("../models").day;
const Stage = require("../models").stage;
const Comment = require("../models").comment;
const Map = require("../models").map;
const authMiddleware = require("../auth/middleware");

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

router.post("/create", authMiddleware, async (req, res) => {
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

router.post("/create/map", authMiddleware, async (req, res) => {
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

router.post("/create/day", authMiddleware, async (req, res) => {
  try {
    const { title, description, dayOrder, hikeId } = req.body;
    if (!title || !description || !dayOrder || !hikeId) {
      res.status(400).send("Incomplete day generation request.");
      return;
    }
    const day = await Day.create({
      title,
      description,
      dayOrder,
      hikeId,
    });
    res.send(day);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Server error");
  }
});

router.post("/create/stage", authMiddleware, async (req, res) => {
  try {
    const {
      title,
      description,
      distance,
      duration,
      elevation,
      startLocation,
      endLocation,
      stageOrder,
      dayId,
    } = req.body;
    if (
      !title ||
      !description ||
      !distance ||
      !duration ||
      !elevation ||
      !startLocation ||
      !endLocation ||
      !stageOrder ||
      !dayId
    ) {
      res.status(400).send("Incomplete stage generation request.");
      return;
    }
    const stage = await Stage.create({
      title,
      description,
      distance,
      duration,
      elevation,
      startLocation,
      endLocation,
      stageOrder,
      dayId,
    });
    res.send(stage);
  } catch (e) {
    console.log(e.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
