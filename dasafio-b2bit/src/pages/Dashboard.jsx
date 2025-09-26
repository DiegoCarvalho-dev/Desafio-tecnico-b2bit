import React, { useEffect, useState } from "react";
import { getProfile, logout } from "../services/auth";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

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
        navigate("/login");
      }
    }
    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Menu lateral */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-6">Painel</h2>
        <nav className="flex flex-col gap-3">
          <button className="text-left hover:bg-gray-200 rounded px-3 py-2">
            Visão Geral
          </button>
          <button className="text-left hover:bg-gray-200 rounded px-3 py-2">
            Configurações
          </button>
          <button
            onClick={handleLogout}
            className="text-left text-red-600 hover:bg-red-100 rounded px-3 py-2"
          >
            Sair
          </button>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <div className="bg-white shadow rounded-xl p-6">
          {user ? (
            <>
              <p className="text-lg mb-2">
                👋 Bem-vindo, <strong>{user.name}</strong>
              </p>
              <p className="text-gray-600">Email: {user.email}</p>
            </>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </main>
    </div>
  );
}
