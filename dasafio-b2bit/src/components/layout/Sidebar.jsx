import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Sidebar.css";

const items = [
  { to: "/dashboard", label: "Dashboard", emoji: "🏠" },
  { to: "/relatorios", label: "Relatórios", emoji: "📊" },
  { to: "/settings", label: "Configurações", emoji: "⚙️" },
  { to: "/profile", label: "Perfil", emoji: "👤" },
  { to: "/notifications", label: "Notificações", emoji: "🔔" },
  { to: "/support", label: "Suporte", emoji: "💬" },
  { to: "/faturas", label: "Faturas", emoji: "💳" },
  { to: "/integrations", label: "Integrações", emoji: "🔗" },
  { to: "/team", label: "Equipe", emoji: "👥" },
  { to: "/activity", label: "Atividades", emoji: "📋" },
  { to: "/calendar", label: "Calendário", emoji: "📅" },
];

export default function Sidebar() {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-brand">
        <img 
          src="/B2Bit Logo (1).png" 
          alt="B2Bit" 
          className="sidebar-logo"
          style={{
            height: '50px',
            width: 'auto',
            margin: '0 auto',
            display: 'block'
          }}
        />
      </div>

      <nav className="sidebar-nav">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            className={({ isActive }) =>
              "sidebar-link" + (isActive ? " active" : "")
            }
          >
            <span className="sidebar-emoji">{it.emoji}</span>
            <span>{it.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer small">
        © {new Date().getFullYear()} B2Bit
      </div>
    </aside>
  );
}