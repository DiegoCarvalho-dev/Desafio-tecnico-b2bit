const API_URL = "http://localhost:5000/api";

export async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Falha no login");
  return res.json();
}

export async function getDashboardData() {
  const res = await fetch(`${API_URL}/dashboard`);
  if (!res.ok) throw new Error("Erro ao carregar dados do dashboard");
  return res.json();
}
