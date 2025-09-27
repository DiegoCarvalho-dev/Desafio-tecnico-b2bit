import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Chart from "../components/Chart";
import { getDashboardData } from "../services/api";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const dashboard = await getDashboardData();
        setData(dashboard);
      } catch (err) {
        console.error("Erro ao carregar dashboard:", err);
      }
    }
    fetchData();
  }, []);

  if (!data) return <p>Carregando...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Bem-vindo, Usuário</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Vendas Mensais" value={data.monthlySales} />
        <Card title="Última Venda" value={data.lastSale.value} />
        <Card title="Cliente" value={data.lastSale.client} />
      </div>
      <Chart chartData={data.chartData} />
    </div>
  );
}

export default Dashboard;
