import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  MessageSquare,
  History,
  LogOut,
  Bot
} from "lucide-react";

const menu = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Chat", path: "/ask", icon: MessageSquare },
  { name: "Historial de búsqueda", path: "/history", icon: History },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-sidebar text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center gap-2">
        <Bot className="w-6 h-6 text-primary" />
        <div>
          <p className="font-bold">DocuAssist AI</p>
          <p className="text-xs text-slate-400">Asistente</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 space-y-1">
        {menu.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition
               ${isActive
                 ? "bg-primary text-white"
                 : "text-slate-300 hover:bg-sidebarHover"}`
            }
          >
            <Icon className="w-4 h-4" />
            {name}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <p className="text-sm">John Doe</p>
        <p className="text-xs text-slate-400 mb-2">Soporte Técnico</p>
        <button className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300">
          <LogOut className="w-4 h-4" />
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
}
