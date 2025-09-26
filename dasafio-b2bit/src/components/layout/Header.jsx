import React from "react";
import { logout } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../utils/toast";

export default function Header({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    showToast("Logout efetuado com sucesso", "success");
    navigate("/login");
  };

  return (
    <header className="h-16 bg-white border-b shadow-sm flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        <span className="font-bold text-lg text-gray-700">B2Bit Dashboard</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">{user?.name}</span>
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.name || "U")}&background=0D8ABC&color=fff`}
          alt="avatar"
          className="w-9 h-9 rounded-full"
        />
        <button
          onClick={handleLogout}
          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm"
        >
          Sair
        </button>
      </div>
    </header>
  );
}
