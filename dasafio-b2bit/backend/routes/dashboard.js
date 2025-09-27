import { Router } from "express";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const dashboardData = require("../data/dashboardData.json");

const router = Router();

router.get("/", (req, res) => {
  res.json(dashboardData);
});

export default router;
