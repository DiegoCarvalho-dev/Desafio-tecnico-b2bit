import React from "react";
import { useLocation } from "react-router-dom";

export default function Header({ user }) {
  const location = useLocation();

  const routeTitles = {
    "/dashboard": "Dashboard",
    "/relatorios": "Relatórios",
    "/settings": "Configurações",
    "/profile": "Perfil",
    "/notifications": "Notificações",
    "/support": "Suporte",
    "/faturas": "Faturas",
    "/integrations": "Integrações",
  };

  const title = routeTitles[location.pathname] || "Admin";

  return (
    <header className="topbar">
      <h1>{title}</h1>
      <div className="user-info">
        <span>{user?.name || "Usuário"}</span>
        <img
          src="https://via.placeholder.com/40"
          alt="avatar"
          className="avatar"
        />
      </div>
    </header>
  );
}
