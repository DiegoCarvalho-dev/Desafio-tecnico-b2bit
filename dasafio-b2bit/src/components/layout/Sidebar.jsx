import React from "react";
import { NavLink } from "react-router-dom";
import { Home, BarChart2, Settings } from "lucide-react";

const links = [
  { to: "/dashboard", label: "Início", icon: Home },
  { to: "/dashboard/relatorios", label: "Relatórios", icon: BarChart2 },
  { to: "/dashboard/config", label: "Configurações", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-white border-r shadow-sm flex flex-col py-6">
      <nav className="flex-1">
        <ul className="space-y-1">
          {links.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-r-full transition ${
                    isActive ? "bg-blue-100 text-blue-700 font-semibold" : ""
                  }`
                }
              >
                <Icon size={18} />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
