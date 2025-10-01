import React, { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import Chart from "../components/ui/Chart";

export default function Dashboard() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    setDados([
      { month: "Jan", faturamento: 4000 },
      { month: "Feb", faturamento: 3000 },
      { month: "Mar", faturamento: 5000 },
      { month: "Apr", faturamento: 7000 },
      { month: "May", faturamento: 6000 },
      { month: "Jun", faturamento: 8000 }
    ]);
  }, []);

  return (
    <div className="main-content">
      <h1>Painel de Controle</h1>
      <div className="cards-grid">
        <Card title="Vendas" value="120" />
        <Card title="Clientes" value="75" />
        <Card title="Faturamento" value="R$ 45.000" />
      </div>
      <h2>Gráfico de Faturamento</h2>
      <Chart data={dados} />
    </div>
  );
}
