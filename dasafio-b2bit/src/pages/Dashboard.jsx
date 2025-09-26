import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Chart from "../components/Chart";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [dados, setDados] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/dashboard");
        setDados(response.data);
      } catch (error) {
        navigate("/"); 
      }
    };
    fetchData();
  }, [navigate]);

  if (!dados) return <p>Carregando...</p>;

  return (
    <div className="dashboard">
      <h2>Bem-vindo, Usuário</h2>
      <p>Aqui é um resumo do desempenho da sua empresa:</p>

      <div className="cards">
        <Card title="Vendas Mensais" value={`R$ ${dados.kpis.vendasMensais}`} />
        <Card title="Últimas Vendas" value={dados.kpis.ultimasVendas} />
        <Card title="Clientes" value={dados.kpis.clientes} />
        <Card title="Valor" value={dados.kpis.valor} />
      </div>

      <Chart labels={dados.vendasMensais.labels} data={dados.vendasMensais.data} />
    </div>
  );
}
