import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Department = {
  id: number;
  name: string;
  description: string | null;
  status: string;
};

export default function Departments() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDepartments();
  }, []);

  async function loadDepartments() {
    setLoading(true);

    const { data, error } = await supabase
      .from("departments")
      .select("*")
      .order("name");

    if (error) {
      console.error("Failed to load departments:", error);
    } else {
      setDepartments(data);
    }

    setLoading(false);
  }

  if (loading) {
    return <p className="p-6">Loading departments...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold">Departments</h1>

      <div className="overflow-x-auto rounded-xl border bg-white">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {departments.map((department) => (
              <tr key={department.id} className="border-t">
                <td className="p-3 font-medium">{department.name}</td>

                <td className="p-3">{department.description}</td>

                <td className="p-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                    {department.status}
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
