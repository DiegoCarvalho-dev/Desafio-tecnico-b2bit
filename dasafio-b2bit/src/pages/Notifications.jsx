import React from "react";

function Notifications() {
  const notifications = [
    { id: 1, message: "Novo pedido recebido 📦" },
    { id: 2, message: "Pagamento confirmado 💳" },
    { id: 3, message: "Cliente enviou uma mensagem 📩" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Notificações</h2>
      <ul>
        {notifications.map((n) => (
          <li key={n.id}>{n.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
