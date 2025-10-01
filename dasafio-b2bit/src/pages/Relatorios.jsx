import React from "react";
import Topbar from "../components/layout/Topbar";

export default function Relatorios() {
  const reports = [
    { id: 1, name: "Vendas Janeiro", value: 3000 },
    { id: 2, name: "Vendas Fevereiro", value: 2000 },
    { id: 3, name: "Vendas Março", value: 4000 },
  ];

  return (
    <div className="page">
      <Topbar />
      <main className="page-content">
        <h2>Relatórios</h2>
        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Relatório</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {reports.map(r => (
                <tr key={r.id}>
                  <td>{r.id}</td>
                  <td>{r.name}</td>
                  <td>R$ {r.value.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
