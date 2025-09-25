import { getItem } from "../utils/storage";

const BASE_URL = import.meta.env.VITE_API_URL || "https://api.exemplo.com";

export async function apiRequest(endpoint, options = {}) {
  const token = getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    throw new Error(errorData?.message || "Erro na requisição");
  }

  return response.json();
}
