import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "teste@teste.com" && password === "123456") {
    return res.json({
      success: true,
      token: "fake-jwt-token",
      user: { name: "Usuário Teste", email }
    });
  }

  res.status(401).json({ success: false, message: "Credenciais inválidas" });
});

export default router;
