import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";

const Dashboard = () => {
  const salesData = [
    { name: "Jan", vendas: 4000 },
    { name: "Fev", vendas: 3000 },
    { name: "Mar", vendas: 5000 },
    { name: "Abr", vendas: 4500 },
    { name: "Mai", vendas: 6000 },
    { name: "Jun", vendas: 7000 },
  ];

  const clients = [
    { id: 1, nome: "João Silva", ultimaCompra: "12/09/2025", valor: "R$ 450" },
    { id: 2, nome: "Maria Souza", ultimaCompra: "11/09/2025", valor: "R$ 300" },
    { id: 3, nome: "Pedro Santos", ultimaCompra: "10/09/2025", valor: "R$ 700" },
  ];

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Bem-vindo, Usuário 👋</h2>

      <div className="cards-container">
        <div className="card">
          <h3>Vendas Mensais</h3>
          <p className="value">R$ 12.500</p>
        </div>
        <div className="card">
          <h3>Última Venda</h3>
          <p className="value">R$ 450</p>
        </div>
        <div className="card">
          <h3>Clientes Ativos</h3>
          <p className="value">450</p>
        </div>
      </div>

      <div className="chart-section">
        <h3>Gráfico de Vendas</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="vendas" fill="#4F46E5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="table-section">
        <h3>Últimos Clientes</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Última Compra</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.nome}</td>
                <td>{c.ultimaCompra}</td>
                <td>{c.valor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
