const express = require("express");
const router = express.Router();
const dashboardData = require("../data/dashboardData.json");

router.get("/", (req, res) => {
  res.json(dashboardData);
});

module.exports = router;
