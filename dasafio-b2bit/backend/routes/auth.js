const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "teste@empresa.com" && password === "123456") {
    return res.json({
      success: true,
      token: "fake-jwt-token",
      user: { email: "teste@empresa.com", name: "Usuário Teste" }
    });
  }

  return res
    .status(401)
    .json({ success: false, message: "Credenciais inválidas" });
});

module.exports = router;
