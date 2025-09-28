import React, { useState } from "react";

export default function Profile() {
  const [form, setForm] = useState({ nome: "", email: "" });
  const [erros, setErros] = useState({});

  function validar() {
    const errosTemp = {};
    if (!form.nome) errosTemp.nome = "Nome é obrigatório";
    if (!form.email.includes("@")) errosTemp.email = "E-mail inválido";
    setErros(errosTemp);
    return Object.keys(errosTemp).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validar()) {
      alert("Perfil atualizado com sucesso!");
    }
  }

  return (
    <div className="main-content">
      <h1>Perfil</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          type="text"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
        />
        {erros.nome && <span className="erro">{erros.nome}</span>}

        <label>E-mail:</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        {erros.email && <span className="erro">{erros.email}</span>}

        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
