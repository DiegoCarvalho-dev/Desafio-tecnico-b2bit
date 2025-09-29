const API_URL = "http://localhost:4000";

export async function login(email, password) {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error(data?.message || "Credenciais inválidas");
  return data;
}

export async function getProducts() {
  const res = await fetch(`${API_URL}/api/products`);
  if (!res.ok) throw new Error("Erro ao buscar produtos");
  return res.json();
}
  
export async function getDashboard() {
  const res = await fetch(`${API_URL}/api/dashboard`);
  if (!res.ok) throw new Error("Erro ao carregar dashboard");
  return res.json();
}
