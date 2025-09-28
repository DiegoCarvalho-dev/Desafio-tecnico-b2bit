import React from "react";
import "../styles/styles.css";

function Notifications() {
  const items = [
    "Novo pedido recebido",
    "Pagamento confirmado",
    "Cliente enviou uma mensagem",
  ];

  return (
    <div className="main-content">
      <h2 className="page-title">🔔 Notificações</h2>
      <div className="card">
        <h3>Últimas notificações</h3>
        <ul>
          {items.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notifications;
