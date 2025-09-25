import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button"; 

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Logo
      </Link>
      <nav>
        <Link to="/login" className="mr-4">
          Login
        </Link>
        <Link to="/dashboard" className="mr-4">
          Dashboard
        </Link>
        <Button onClick={() => alert("Você clicou no botão do Header!")}>
          Botão Header
        </Button>
      </nav>
    </header>
  );
}
