import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="logo">Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/dashboard">🏠 Dashboard</Link></li>
          <li><Link to="/relatorios">📊 Relatórios</Link></li>
          <li><Link to="/settings">⚙️ Configurações</Link></li>
          <li><Link to="/profile">👤 Perfil</Link></li>
          <li><Link to="/notifications">🔔 Notificações</Link></li>
          <li><Link to="/support">💬 Suporte</Link></li>
          <li><Link to="/faturas">💳 Faturas</Link></li>
          <li><Link to="/integrations">🔗 Integrações</Link></li>

        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
