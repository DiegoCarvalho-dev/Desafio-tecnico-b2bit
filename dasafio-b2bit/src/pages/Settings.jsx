import React from "react";
import Topbar from "../components/layout/Topbar";

export default function Settings() {
  return (
    <div className="page">
      <Topbar />
      <main className="page-content">
        <h2>Configurações</h2>
        <div className="card">Opções de configuração do sistema</div>
      </main>
    </div>
  );
}
