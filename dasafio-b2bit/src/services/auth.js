import { apiRequest } from "./api";
import * as mock from "./authMock";
import { setItem, removeItem } from "../utils/storage";

const USE_MOCK = import.meta.env.VITE_USE_MOCK === "true";

export async function login(email, password) {
  if (USE_MOCK) return mock.login(email, password);

  const data = await apiRequest("/auth/login/", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const token = data?.access || data?.token || data?.access_token;
  if (!token) throw new Error("Token não retornado pela API");

  setItem("token", token);
  return data;
}

export async function getProfile() {
  if (USE_MOCK) return mock.getProfile();
  return apiRequest("/auth/profile/", { method: "GET" });
}

export function logout() {
  if (USE_MOCK) return mock.logout();
  removeItem("token");
}
