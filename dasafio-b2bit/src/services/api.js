// src/services/api.js
const API_URL = "http://localhost:5000"; // porta correta do backend

export async function login(email, password) {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Credenciais inválidas");

  return data; // retorna { success: true, token: "fake-jwt-token" }
}

export async function fetchDashboardData() {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/dashboard`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new Error(err?.message || "Erro ao buscar dados do dashboard");
  }

  return res.json();
}

export async function validateToken() {
  const token = localStorage.getItem("token");
  if (!token) return false;

  const res = await fetch(`${API_URL}/api/validate-token`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.ok;
}

export function logout() {
  localStorage.removeItem("token");
}
