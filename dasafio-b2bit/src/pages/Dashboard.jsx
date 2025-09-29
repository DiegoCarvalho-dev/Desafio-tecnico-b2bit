import React, { useEffect, useState } from "react";
import { fetchDashboardData } from "../services/api";

export default function Dashboard() {
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function carregar() {
      try {
        const dadosAPI = await fetchDashboardData();
        setDados(dadosAPI);
      } catch (e) {
        console.error("Erro no Dashboard:", e);
        setErro(e.message || "Erro ao carregar dashboard");
      }
    }
    carregar();
  }, []);

  if (erro) return <div style={{ padding: 20, color: "red" }}>Erro: {erro}</div>;
  if (!dados) return <div style={{ padding: 20 }}>Carregando...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Bem-vindo, Usuário</h1>
      <pre style={{ background: "#f5f5f5", padding: 12, borderRadius: 6 }}>
        {JSON.stringify(dados, null, 2)}
      </pre>
      {/* aqui você pode renderizar seus cards/graphs usando dados */}
    </div>
  );
}
