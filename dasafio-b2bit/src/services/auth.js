import { setItem, getItem, removeItem } from "../utils/storage";

export async function login(email, password) {
  const response = await fetch("https://api.exemplo.com/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Erro no login");
  }

  const data = await response.json();
  setItem("token", data.token);
  return data;
}

export async function getProfile() {
  const token = getItem("token");
  if (!token) throw new Error("Token não encontrado");

  const response = await fetch("https://api.exemplo.com/profile", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar perfil");
  }

  return await response.json();
}

export function logout() {
  removeItem("token");
}
