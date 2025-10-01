const express = require("express");
const router = express.Router();

const products = [
  { id: 1, name: "Produto A", price: 100 },
  { id: 2, name: "Produto B", price: 200 },
  { id: 3, name: "Produto C", price: 300 },
];

router.get("/", (req, res) => {
  res.json(products);
});

router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: "Produto não encontrado" });
  }
  res.json(product);
});

module.exports = router;
