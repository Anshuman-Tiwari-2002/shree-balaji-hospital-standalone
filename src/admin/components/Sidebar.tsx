import {
  LayoutDashboard,
  CalendarDays,
  Stethoscope,
  Building2,
  LogOut,
} from "lucide-react";

import { Link, useLocation } from "wouter";
import { supabase } from "@/lib/supabase";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin/dashboard",
  },
  {
    name: "Appointments",
    icon: CalendarDays,
    href: "/admin/appointments",
  },
  {
    name: "Doctors",
    icon: Stethoscope,
    href: "/admin/doctors",
  },
  {
    name: "Departments",
    icon: Building2,
    href: "/admin/departments",
  },
];

export default function Sidebar() {
  const [location, navigate] = useLocation();

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate("/admin");
  }

  return (
    <aside className="w-64 bg-white border-r h-screen flex flex-col">
      {/* Logo */}

      <div className="border-b p-6">
        <h2 className="text-xl font-bold text-blue-700">🏥 Hospital Admin</h2>

        <p className="text-sm text-gray-500 mt-1">
          Shree Balaji Life Line Hospital
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const active = location === item.href;

          return (
            <Link key={item.name} href={item.href}>
              <div
                className={`flex items-center gap-3 rounded-lg px-4 py-3 cursor-pointer transition-all
                ${
                  active
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >
                <Icon size={20} />

                <span className="font-medium">{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}

      <div className="border-t p-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 rounded-lg px-4 py-3 text-red-600 hover:bg-red-50 transition"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}
