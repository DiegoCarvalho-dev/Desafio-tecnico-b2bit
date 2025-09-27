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
          <li><Link to="/configuracoes">⚙️ Configurações</Link></li>
          <li><Link to="/perfil">👤 Perfil</Link></li>
          <li><Link to="/notificacoes">🔔 Notificações</Link></li>
          <li><Link to="/suporte">💬 Suporte</Link></li>
          <li><Link to="/faturas">💳 Faturas</Link></li>
          <li><Link to="/integracoes">🔗 Integrações</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
