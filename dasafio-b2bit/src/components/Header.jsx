import React from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        CliqDrive 🚀
      </Link>

      <nav className="flex gap-4">
        <Link to="/login" className="text-gray-700 hover:text-blue-600">
          Login
        </Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">
          Dashboard
        </Link>
        <Button>
          <Link to="/login">Sair</Link>
        </Button>
      </nav>
    </header>
  );
}
