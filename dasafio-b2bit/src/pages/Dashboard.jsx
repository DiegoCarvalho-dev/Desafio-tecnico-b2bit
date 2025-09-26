import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import StatsCard from "../components/dashboard/StatsCard";
import { getProfile } from "../services/auth";
import { Users, DollarSign, Activity } from "lucide-react";

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
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Bem-vindo, {user?.name || "usuário"}!
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatsCard title="Usuários" value="1.240" icon={<Users />} />
            <StatsCard title="Vendas" value="R$ 87.400" icon={<DollarSign />} />
            <StatsCard title="Atividade" value="95%" icon={<Activity />} />
          </div>
        </main>
      </div>
    </div>
  );
}
