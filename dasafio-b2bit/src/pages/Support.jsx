import React, { useState } from "react";

function Support() {
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    alert("Mensagem enviada para o suporte!");
    setMessage("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Suporte</h2>
      <p>Envie sua dúvida para nossa equipe de suporte.</p>
      <form onSubmit={handleSend} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Digite sua mensagem" rows={5} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Support;
