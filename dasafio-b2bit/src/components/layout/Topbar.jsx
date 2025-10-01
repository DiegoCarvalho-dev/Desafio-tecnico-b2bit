import React from "react";

export default function Topbar({ title }) {
  const user = (() => {
    try {
      const raw = localStorage.getItem("user");
      if (!raw) return null;
      const u = JSON.parse(raw);
      return u?.name || u?.username || null;
    } catch {
      return null;
    }
  })();

  return (
    <header className="topbar">
      <div className="topbar-content">
        <div className="topbar-welcome">
          <h1>{title || "Dashboard"}</h1>
          {user && <p className="welcome-text">Olá, {user}</p>}
        </div>
        <div className="topbar-actions">
          <div className="quick-actions">
            <span className="app-name">B2Bit</span>
          </div>
        </div>
      </div>
    </header>
  );
}