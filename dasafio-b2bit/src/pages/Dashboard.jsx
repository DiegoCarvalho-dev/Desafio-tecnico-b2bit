import React from "react";
import "../styles/Styles.css";

function Dashboard() {
  return (
    <div className="main-content">
      <h2 className="page-title">Painel de Controle</h2>
      <div className="card">
        <p>📊 Gráfico de desempenho (placeholder)</p>
        <div style={{ background: "#dfe4ea", height: "200px", borderRadius: "6px", marginTop: "10px" }}>
          <p style={{ textAlign: "center", paddingTop: "90px" }}>Aqui entra o gráfico futuramente</p>
        </div>
      </div>
      <div className="card">
        <p>✅ Estatísticas rápidas: vendas, clientes e faturamento</p>
      </div>
    </div>
  );
}

export default Dashboard;
