import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: number;
  icon: LucideIcon;
}

export default function DashboardCard({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div className="bg-blue-100 p-4 rounded-xl">
          <Icon
            className="text-blue-600"
            size={28}
          />
        </div>

      </div>

    </div>
  );
}