import React from "react";
import Topbar from "../components/layout/Topbar";

export default function Reports() {
  return (
    <div className="page">
      <Topbar title="Relatórios" />
      <main className="container">
        <h3>Relatórios</h3>
        <p>Aqui você poderá visualizar relatórios detalhados (filtros, export).</p>
        <div className="card">
          <p className="small">Tabela de exemplo (implemente a tabela/pagination conforme necessidade)</p>
        </div>
      </main>
    </div>
  );
}
