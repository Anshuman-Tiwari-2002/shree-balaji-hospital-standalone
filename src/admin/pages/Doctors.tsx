import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Doctor = {
  id: number;
  name: string;
  department: string;
  qualification: string | null;
  experience: number | null;
  status: string;
};

export default function Doctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDoctors();
  }, []);

  async function loadDoctors() {
    setLoading(true);

    const { data, error } = await supabase
      .from("doctors")
      .select("*")
      .order("name");

    if (error) {
      console.error("Failed to load doctors:", error);
    } else {
      setDoctors(data);
    }

    setLoading(false);
  }

  if (loading) {
    return <p className="p-6">Loading doctors...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Doctors</h1>

      <div className="overflow-x-auto rounded-xl border bg-white">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Doctor</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Qualification</th>
              <th className="p-3 text-left">Experience</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id} className="border-t">
                <td className="p-3 font-medium">{doctor.name}</td>
                <td className="p-3">{doctor.department}</td>
                <td className="p-3">{doctor.qualification}</td>
                <td className="p-3">{doctor.experience} Years</td>
                <td className="p-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    {doctor.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
