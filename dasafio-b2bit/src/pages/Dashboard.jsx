import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Chart from "../components/Chart";
import { getDashboardData } from "../services/api";

function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const dashboard = await getDashboardData();
        setData(dashboard);
      } catch (err) {
        console.error("Erro ao carregar dashboard:", err);
        setError("Não foi possível carregar os dados do dashboard.");
      }
    }
    fetchData();
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!data) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Bem-vindo, usuário</h2>
      <div className="cards grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        <Card title="Vendas Mensais" value={data.monthlySales || 0} />
        <Card title="Última Venda" value={data.lastSale?.value || "-"} />
        <Card title="Cliente" value={data.lastSale?.client || "-"} />
      </div>
      {data.chartData && <Chart chartData={data.chartData} />}
    </div>
  );
}

export default Dashboard;
