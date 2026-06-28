import type { ElementType } from "react";
import { Link } from "wouter";
import { ArrowRight, Stethoscope, Bone, Baby, Smile, HeartPulse, Activity, MonitorPlay, Ear, Brain, Ambulance, Scan, TestTube, Pill } from "lucide-react";

interface DepartmentCardProps {
  department: {
    id: string;
    name: string;
    description: string;
    icon: string;
  };
}

const iconMap: Record<string, ElementType> = {
  Stethoscope, Bone, Baby, Smile, HeartPulse, Activity,
  MonitorPlay, Ear, Brain, Ambulance, Scan, TestTube, Pill,
};

export function DepartmentCard({ department }: DepartmentCardProps) {
  const Icon = iconMap[department.icon] || Stethoscope;

  return (
    <Link href={`/departments/${department.id}`}>
      <div className="group h-full rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary/30 cursor-pointer relative overflow-hidden">
        <div
          className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-teal-500 transition-all duration-500 rounded-b-full"
          aria-hidden="true"
        />

        <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-primary/30 group-hover:shadow-md">
          <Icon className="w-5 h-5" />
        </div>

        <h3 className="font-serif text-lg font-bold mb-2.5 group-hover:text-primary transition-colors duration-200 leading-snug">
          {department.name}
        </h3>

        <p className="text-muted-foreground text-sm mb-5 line-clamp-3 leading-relaxed">
          {department.description}
        </p>

        <div className="flex items-center text-sm font-semibold text-primary mt-auto gap-1 group-hover:gap-2 transition-all duration-200">
          Learn More
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  );
}
