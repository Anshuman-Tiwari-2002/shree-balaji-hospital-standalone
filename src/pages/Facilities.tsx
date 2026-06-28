import { PageHeader } from "@/components/layout/PageHeader";
import { facilities } from "@/data/hospitalData";
import { FacilityCard } from "@/components/cards/FacilityCard";
import { Heart } from "lucide-react";

export default function Facilities() {
  return (
    <div className="w-full">
      <PageHeader
        title="Hospital Facilities"
        subtitle="Modern infrastructure designed for patient comfort, safety, and rapid recovery."
        breadcrumbs={[{ label: "Facilities" }]}
      />

      <section className="py-16 md:py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">
              Medical & Support Infrastructure
            </h2>
            <p className="text-muted-foreground">
              We provide a comprehensive range of modern medical facilities
              under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, idx) => (
              <FacilityCard key={idx} facility={facility} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-12 text-center">
              Accessibility & Patient Services
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Wheelchair Accessible Entrance",
                "Wheelchair Accessible Parking",
                "Hearing Assistance Available",
                "Gender Neutral Washrooms",
                "Dedicated Nursing Room",
                "Free Parking for Patients",
                "Cashless & NFC Payments",
                "Dietician Services",
                "24/7 Nursing Staff",
                "Patient Counseling Services",
                "Strict Infection Control",
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/25 hover:bg-primary/8 transition-all duration-200"
                >
                  <Heart className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
