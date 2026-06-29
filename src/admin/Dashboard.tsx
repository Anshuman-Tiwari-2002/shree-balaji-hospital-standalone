import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardCard from "./components/DashboardCard";

import {
  CalendarDays,
  Clock3,
  CheckCircle2,
  Stethoscope,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex bg-slate-100 min-h-screen">

      <Sidebar />

      <main className="flex-1 p-8">

        <Header />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

          <DashboardCard
            title="Appointments"
            value={18}
            icon={CalendarDays}
          />

          <DashboardCard
            title="Pending"
            value={4}
            icon={Clock3}
          />

          <DashboardCard
            title="Confirmed"
            value={12}
            icon={CheckCircle2}
          />

          <DashboardCard
            title="Doctors"
            value={9}
            icon={Stethoscope}
          />

        </div>

      </main>

    </div>
  );
}