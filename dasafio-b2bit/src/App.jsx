import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Bem-vindo ao desafio B2bit 🚀</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
