const express = require("express");
const cors = require("cors");

const productsRoutes = require("./routes/products");
const dashboardRoutes = require("./routes/dashboard");
const authRoutes = require("./routes/auth"); 

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api/products", productsRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
