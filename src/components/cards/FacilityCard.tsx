import { CheckCircle2 } from "lucide-react";

interface FacilityCardProps {
  facility: {
    name: string;
    description: string;
  };
}

export function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <div className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 hover:border-teal-500/30 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-teal-500 to-primary transition-all duration-500"
        aria-hidden="true"
      />
      <div className="flex items-start gap-4">
        <div className="shrink-0 mt-0.5 w-10 h-10 bg-teal-50 dark:bg-teal-950/60 rounded-xl flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300 shadow-sm">
          <CheckCircle2 className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <div>
          <h3 className="font-semibold text-base mb-1.5 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors duration-200">
            {facility.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {facility.description}
          </p>
        </div>
      </div>
    </div>
  );
}
