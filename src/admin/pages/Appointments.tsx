import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import AppointmentStatusBadge from "../components/AppointmentStatusBadge";
import AppointmentDetailsModal from "../components/AppointmentDetailsModal";

type Appointment = {
  id: number;
  created_at: string;
  name: string;
  phone: string;
  email: string;
  department: string;
  doctor: string;
  appointment_date: string;
  appointment_time: string;
  message: string | null;
  status: string;
  email_sent: boolean;
  sms_sent: boolean;
};

export default function Appointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    loadAppointments();

    const channel = supabase
      .channel("appointments-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "appointments",
        },
        () => {
          loadAppointments();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  async function loadAppointments() {
    setLoading(true);

    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to load appointments:", error);
    } else {
      setAppointments(data);
    }

    setLoading(false);
  }

  async function updateStatus(id: number, status: string) {
    const { error } = await supabase
      .from("appointments")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("Failed to update appointment:", error);
      return;
    }

    setSelectedAppointment(null);
  }

  const filteredAppointments = appointments.filter((appointment) => {
    const matchesSearch =
      appointment.name.toLowerCase().includes(search.toLowerCase()) ||
      appointment.phone.includes(search) ||
      appointment.doctor.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || appointment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalAppointments = appointments.length;

  const pendingCount = appointments.filter(
    (a) => a.status === "Pending",
  ).length;

  const confirmedCount = appointments.filter(
    (a) => a.status === "Confirmed",
  ).length;

  const cancelledCount = appointments.filter(
    (a) => a.status === "Cancelled",
  ).length;

  if (loading) {
    return <p className="p-6">Loading appointments...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Appointments</h1>

      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search by patient, phone, doctor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg border p-3"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-lg border p-3"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Confirmed</option>
          <option>Cancelled</option>
        </select>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Appointments</p>

          <h2 className="mt-2 text-3xl font-bold">{totalAppointments}</h2>
        </div>

        <div className="rounded-xl border bg-yellow-50 p-5 shadow-sm">
          <p className="text-sm text-yellow-700">Pending</p>

          <h2 className="mt-2 text-3xl font-bold text-yellow-600">
            {pendingCount}
          </h2>
        </div>

        <div className="rounded-xl border bg-green-50 p-5 shadow-sm">
          <p className="text-sm text-green-700">Confirmed</p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {confirmedCount}
          </h2>
        </div>

        <div className="rounded-xl border bg-red-50 p-5 shadow-sm">
          <p className="text-sm text-red-700">Cancelled</p>

          <h2 className="mt-2 text-3xl font-bold text-red-600">
            {cancelledCount}
          </h2>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border bg-white">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Patient</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Doctor</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredAppointments.map((appointment) => (
              <tr key={appointment.id} className="border-t hover:bg-slate-50">
                <td className="p-3">{appointment.name}</td>
                <td className="p-3">{appointment.phone}</td>
                <td className="p-3">{appointment.department}</td>
                <td className="p-3">{appointment.doctor}</td>
                <td className="p-3">{appointment.appointment_date}</td>
                <td className="p-3">{appointment.appointment_time}</td>
                <td className="p-3">
                  <AppointmentStatusBadge status={appointment.status} />
                </td>
                <td className="p-3 text-right">
                  <button
                    onClick={() => setSelectedAppointment(appointment)}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AppointmentDetailsModal
        appointment={selectedAppointment}
        onClose={() => setSelectedAppointment(null)}
        onStatusChange={updateStatus}
      />
    </div>
  );
}
