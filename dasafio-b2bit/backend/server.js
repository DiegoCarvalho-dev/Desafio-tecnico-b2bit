const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const productRoutes = require("./routes/products");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/products", productRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`🚀 Backend rodando em http://localhost:${PORT}`);
});
