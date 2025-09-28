import React, { useState } from "react";
import "../styles/styles.css";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="main-content">
      <h2 className="page-title">⚙️ Configurações</h2>
      <div className="card">
        <h3>Personalize sua experiência</h3>
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          Ativar Modo Escuro
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          Ativar Notificações
        </label>
      </div>
    </div>
  );
}

export default Settings;
