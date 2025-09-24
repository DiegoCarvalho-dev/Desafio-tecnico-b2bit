import React from "react";
import logo from "../../assets/logo.png"; 

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-sm p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
        <div className="flex justify-center mb-4">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        <h1 className="text-center text-2xl font-semibold mb-6 text-[#002274]">Sign in</h1>

        <form aria-label="form-login">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="seu@exemplo.com"
            className="mt-1 mb-4 block w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#002274]"
          />

          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className="mt-1 mb-4 block w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#002274]"
          />

          <button
            type="submit"
            className="w-full py-2 rounded bg-[#002274] text-white font-medium hover:opacity-95"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}
