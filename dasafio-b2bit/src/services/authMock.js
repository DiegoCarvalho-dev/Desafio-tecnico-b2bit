import { setItem, removeItem } from "../utils/storage";

const MOCK_USER = { name: "Usuário de Teste", email: "teste@b2bit.com" };
const MOCK_TOKEN = "mock-token-123";

export async function login(email, password) {
 
  await new Promise((r) => setTimeout(r, 600));

  if (email === "teste@b2bit.com" && password === "123456") {
    setItem("token", MOCK_TOKEN);
    return { token: MOCK_TOKEN, user: MOCK_USER };
  }

  const err = new Error("Credenciais inválidas");
  err.status = 401;
  throw err;
}

export async function getProfile() {
  await new Promise((r) => setTimeout(r, 300));
  const token = localStorage.getItem("token");
  if (token === MOCK_TOKEN) {
    return MOCK_USER;
  }
  const err = new Error("Não autorizado");
  err.status = 403;
  throw err;
}

export function logout() {
  removeItem("token");
}
