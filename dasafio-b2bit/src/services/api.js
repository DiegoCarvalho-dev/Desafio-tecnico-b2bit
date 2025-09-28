const API_URL = "http://localhost:4000";

export async function fetchDashboardData() {
  const res = await fetch(`${API_URL}/dashboard`);
  if (!res.ok) throw new Error("Erro ao buscar dados");
  return res.json();
}
