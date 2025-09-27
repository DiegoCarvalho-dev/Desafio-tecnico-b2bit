import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    monthlySales: 12500,
    lastSale: {
      value: 450,
      client: "João Silva",
    },
    chartData: [
      { month: "Jan", sales: 3000 },
      { month: "Feb", sales: 2000 },
      { month: "Mar", sales: 4000 },
      { month: "Apr", sales: 3500 },
      { month: "May", sales: 5000 },
      { month: "Jun", sales: 2500 },
    ],
  });
});

export default router;
