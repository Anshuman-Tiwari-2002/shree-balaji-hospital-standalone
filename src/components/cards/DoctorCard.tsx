import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, GraduationCap, Clock } from "lucide-react";

interface DoctorCardProps {
  doctor: {
    id: string;
    name: string;
    qualification: string;
    specialization: string;
    schedule: string;
    image?: string;
  };
}

function getDoctorAvatarUrl(name: string) {
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1a4f8a&color=fff&size=400&bold=true&format=svg`;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const imgSrc =
    doctor.image && !doctor.image.includes("placeholder")
      ? doctor.image
      : getDoctorAvatarUrl(doctor.name);

  return (
    <div
      className="group rounded-2xl border border-border/60 bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-primary/25"
      data-testid={`card-doctor-${doctor.id}`}
    >
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        <img
          src={imgSrc}
          alt={`Photo of ${doctor.name}`}
          loading="lazy"
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = getDoctorAvatarUrl(doctor.name);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      </div>

      <div className="p-5">
        <h3 className="font-serif text-lg font-bold mb-1.5 leading-snug">{doctor.name}</h3>

        <div className="inline-flex items-center gap-1.5 bg-primary/8 text-primary text-xs font-semibold px-2.5 py-1 rounded-full mb-4 border border-primary/15">
          <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" aria-hidden="true" />
          {doctor.specialization}
        </div>

        <div className="space-y-2 mb-5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5 shrink-0 text-primary/60" />
            <span>{doctor.qualification}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 shrink-0 text-primary/60" />
            <span>{doctor.schedule}</span>
          </div>
        </div>

        <Button
          asChild
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-all duration-200"
          data-testid={`button-book-${doctor.id}`}
        >
          <Link href={`/appointment?doctor=${doctor.id}`}>
            <Calendar className="w-4 h-4 mr-2" />
            Book Appointment
          </Link>
        </Button>
      </div>
    </div>
  );
}
