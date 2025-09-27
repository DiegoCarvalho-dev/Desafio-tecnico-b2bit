import { Link } from "react-router-dom";
import { 
  Home, BarChart, Settings, User, Bell, HelpCircle, 
  CreditCard, Layers, Users, Activity, Calendar 
} from "lucide-react";

export default function Sidebar() {
  const menuItems = [
    { path: "/app/dashboard", label: "Dashboard", icon: <BarChart size={18} /> },
    { path: "/app/reports", label: "Relatórios", icon: <BarChart size={18} /> },
    { path: "/app/settings", label: "Configurações", icon: <Settings size={18} /> },
    { path: "/app/profile", label: "Perfil", icon: <User size={18} /> },
    { path: "/app/notifications", label: "Notificações", icon: <Bell size={18} /> },
    { path: "/app/support", label: "Suporte", icon: <HelpCircle size={18} /> },
    { path: "/app/invoices", label: "Faturas", icon: <CreditCard size={18} /> },
    { path: "/app/integrations", label: "Integrações", icon: <Layers size={18} /> },
    { path: "/app/team", label: "Equipe", icon: <Users size={18} /> },
    { path: "/app/activity", label: "Atividades", icon: <Activity size={18} /> },
    { path: "/app/calendar", label: "Calendário", icon: <Calendar size={18} /> },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg p-4 space-y-4">
      <h2 className="text-lg font-bold">Menu</h2>
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
