import React from "react";
import Topbar from "../components/layout/Topbar";

export default function Invoices() {
  const invoices = [
    { id: 1, date: "2025-09-01", amount: "R$ 450", status: "Pago" },
    { id: 2, date: "2025-08-10", amount: "R$ 1.200", status: "Pendente" },
  ];
  return (
    <div className="page">
      <Topbar title="Faturas" />
      <main className="container">
        <h3>Faturas</h3>
        <div className="card">
          <table className="simple-table">
            <thead><tr><th>ID</th><th>Data</th><th>Valor</th><th>Status</th></tr></thead>
            <tbody>
              {invoices.map(i => (
                <tr key={i.id}><td>{i.id}</td><td>{i.date}</td><td>{i.amount}</td><td>{i.status}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
