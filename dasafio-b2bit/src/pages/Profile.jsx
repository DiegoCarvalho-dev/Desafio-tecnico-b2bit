import React from "react";
import "../styles/styles.css";

function Profile() {
  return (
    <div className="main-content">
      <h2 className="page-title">👤 Perfil</h2>
      <div className="card">
        <h3>Gerenciar suas informações pessoais</h3>
        <p><b>Usuário:</b> usuario_exemplo</p>
        <p><b>Email:</b> usuario@gmail.com</p>
        <label>
          Nova senha:
          <input type="password" placeholder="Digite nova senha" />
        </label>
      </div>
    </div>
  );
}

export default Profile;
