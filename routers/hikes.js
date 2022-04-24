const { Router } = require("express");
const Hike = require("../models").hike;
const Day = require("../models").day;
const Stage = require("../models").stage;
const Comment = require("../models").comment;

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
      include: [Comment, { model: Day, include: [Stage] }],
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

module.exports = router;
