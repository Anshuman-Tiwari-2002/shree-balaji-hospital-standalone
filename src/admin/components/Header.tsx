import { Bell, CalendarDays, Search } from "lucide-react";

export default function Header() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="bg-white rounded-xl shadow-sm border p-6 flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard
        </h1>

        <div className="flex items-center gap-2 text-gray-500 mt-2">
          <CalendarDays size={16} />
          <span>{today}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="relative p-3 rounded-lg border hover:bg-gray-100 transition">
          <Bell size={20} />

          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 bg-slate-100 rounded-lg px-4 py-2">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            A
          </div>

          <div>
            <p className="font-semibold">Administrator</p>
            <p className="text-xs text-gray-500">
              Shree Balaji Hospital
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}