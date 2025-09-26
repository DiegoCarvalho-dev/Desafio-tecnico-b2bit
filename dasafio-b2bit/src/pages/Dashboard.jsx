import React from "react";
import Card from "../components/Card";
import Chart from "../components/Chart";
import { mockData } from "../data/mockData";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Bem-vindo, Usuário</h2>
      <p>Aqui é um resumo do desempenho da sua empresa:</p>

      <div className="cards">
        <Card title="Vendas Mensais" value={`R$ ${mockData.kpis.vendasMensais}`} />
        <Card title="Últimas Vendas" value={mockData.kpis.ultimasVendas} />
        <Card title="Clientes" value={mockData.kpis.clientes} />
        <Card title="Valor" value={mockData.kpis.valor} />
      </div>

      <Chart labels={mockData.vendasMensais.labels} data={mockData.vendasMensais.data} />
    </div>
  );
}
