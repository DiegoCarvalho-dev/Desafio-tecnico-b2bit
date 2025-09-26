import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Alert from "../components/ui/Alert";

export default function Login() {
  const [alert, setAlert] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    setAlert({ type: "success", message: "Login efetuado com sucesso!" });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <Input label="E-mail" type="email" required />
          <Input label="Senha" type="password" required />
          <Button type="submit" variant="primary" className="w-full">
            Entrar
          </Button>
        </form>
        {alert && <Alert type={alert.type} message={alert.message} />}
      </div>
    </div>
  );
}
