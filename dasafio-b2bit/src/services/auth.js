export async function loginUser({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@teste.com" && password === "123456") {
        resolve({ token: "fake-jwt-token", user: { name: "Admin", email } });
      } else {
        reject(new Error("E-mail ou senha inválidos"));
      }
    }, 1000);
  });
}
