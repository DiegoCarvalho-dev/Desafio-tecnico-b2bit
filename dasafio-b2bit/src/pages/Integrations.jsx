import React from "react";
import Topbar from "../components/layout/Topbar";

export default function Integrations(){
  const items = [
    { id: "gdrive", label: "Google Drive", connected: true },
    { id: "dropbox", label: "Dropbox", connected: false },
    { id: "api", label: "API interna", connected: true },
  ];
  return (
    <div className="page">
      <Topbar title="Integrações" />
      <main className="container">
        <h3>Integrações</h3>
        <div className="grid-cards">
          {items.map(it => (
            <div className="mini-card" key={it.id}>
              <div className="mini-title">{it.label}</div>
              <div className="mini-status">{it.connected ? "Conectado" : "Desconectado"}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
