import { setItem, removeItem } from "../utils/storage";
import { apiRequest } from "./api";

export async function login(email, password) {
  const data = await apiRequest("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  setItem("token", data.token);
  return data;
}

export async function getProfile() {
  return apiRequest("/profile", { method: "GET" });
}

export function logout() {
  removeItem("token");
}
