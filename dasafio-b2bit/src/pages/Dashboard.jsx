import React, { useEffect, useState } from "react";
import { getProfile, logout } from "../services/auth";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      try {
        const profile = await getProfile();
        setUser(profile);
      } catch (error) {
        console.error("Erro ao carregar perfil:", error);
      }
    }
    fetchUser();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        {user ? (
          <>
            <p className="mb-4">
              Bem-vindo, <strong>{user.name}</strong> 👋
            </p>
            <p className="mb-6">Email: {user.email}</p>
          </>
        ) : (
          <p>Carregando...</p>
        )}
        <Button onClick={handleLogout}>Sair</Button>
      </div>
    </div>
  );
}
