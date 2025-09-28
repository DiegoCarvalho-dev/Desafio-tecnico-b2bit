import React, { useState } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Configurações</h2>
      <p>Personalize sua experiência.</p>
      <div style={{ marginTop: "20px" }}>
        <label>
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          Modo Escuro
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
          Ativar Notificações
        </label>
      </div>
    </div>
  );
}

export default Settings;
