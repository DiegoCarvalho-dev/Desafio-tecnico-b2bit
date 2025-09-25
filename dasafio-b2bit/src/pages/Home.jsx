import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Bem-vindo ao Desafio B2bit 🚀</h1>
        <p className="mb-6">Faça login para acessar seu dashboard.</p>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}
