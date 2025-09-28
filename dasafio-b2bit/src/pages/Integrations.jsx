import React from "react";

function Integrations() {
  const integrations = [
    { id: 1, name: "Google Drive", status: "Conectado ✅" },
    { id: 2, name: "Dropbox", status: "Não conectado ❌" },
    { id: 3, name: "API Interna", status: "Conectado ✅" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Integrações</h2>
      <p>Gerencie suas integrações com serviços externos.</p>
      <ul>
        {integrations.map((i) => (
          <li key={i.id}>
            {i.name} - {i.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Integrations;
