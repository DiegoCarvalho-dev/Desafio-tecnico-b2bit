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
  localStorage.setItem("token", data.token);
  return data;
}
