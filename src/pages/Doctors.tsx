import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/PageHeader";
import { doctors } from "@/data/hospitalData";
import { DoctorCard } from "@/components/cards/DoctorCard";

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

export default function Doctors() {
  return (
    <div className="w-full">
      <PageHeader
        title="Our Doctors"
        subtitle="Meet our dedicated team of experienced medical professionals committed to your health."
        breadcrumbs={[{ label: "Doctors" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {doctors.map((doctor, i) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: (i % 4) * 0.08, ease: easeOut }}
                viewport={{ once: true, margin: "-40px" }}
              >
                <DoctorCard doctor={doctor} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
