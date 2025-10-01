import React from "react";
import Topbar from "../components/layout/Topbar";

export default function Profile() {
  const userRaw = localStorage.getItem("user");
  const user = userRaw ? JSON.parse(userRaw) : { name: "Usuário", email: "" };

  return (
    <div className="page">
      <Topbar />
      <main className="page-content">
        <h2>Perfil</h2>
        <div className="card profile-card">
          <p><strong>Nome:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </main>
    </div>
  );
}
