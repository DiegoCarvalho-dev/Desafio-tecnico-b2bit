import React from "react";
import "../styles/styles.css";

function Support() {
  return (
    <div className="main-content">
      <h2 className="page-title">💬 Suporte</h2>
      <div className="card">
        <h3>Envie sua dúvida</h3>
        <textarea placeholder="Digite sua mensagem..." style={{ width: "100%", height: "100px" }} />
        <br />
        <button className="btn">Enviar</button>
      </div>
    </div>
  );
}

export default Support;
