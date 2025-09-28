import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState("Usuário Exemplo");
  const [email, setEmail] = useState("usuario@email.com");
  const [password, setPassword] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    alert("Perfil atualizado com sucesso!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Perfil</h2>
      <p>Gerencie suas informações pessoais.</p>
      <form onSubmit={handleSave} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Nova Senha" />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default Profile;
