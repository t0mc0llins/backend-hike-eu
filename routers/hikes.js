const { Router } = require("express");
const Hike = require("../models").hike;
const Day = require("../models").day;

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

module.exports = router;
