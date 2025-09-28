import React from "react";
import "../styles/styles.css";

function Integrations() {
  return (
    <div className="main-content">
      <h2 className="page-title">🔗 Integrações</h2>
      <div className="card">
        <h3>Gerencie suas integrações</h3>
        <ul>
          <li>Google Drive ✅ Conectado</li>
          <li>Dropbox ❌ Não conectado</li>
          <li>API Interna ✅ Conectada</li>
        </ul>
      </div>
    </div>
  );
}

export default Integrations;
