import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import { getProfile } from "../services/auth";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const profile = await getProfile();
        setUser(profile);
      } catch (err) {
        console.error("Erro ao carregar perfil:", err);
      }
    }
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header user={user} />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Bem-vindo, {user?.name || "usuário"}!
        </h1>
        <p className="text-gray-600">Aqui virão as estatísticas e cards do sistema.</p>
      </main>
    </div>
  );
}
