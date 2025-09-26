import { User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Desafio B2bit</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Olá, Usuário</span>
        <div className="bg-blue-100 p-2 rounded-full">
          <User className="w-5 h-5 text-blue-600" />
        </div>
      </div>
    </nav>
  );
}
