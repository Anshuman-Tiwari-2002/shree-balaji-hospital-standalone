import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/PageHeader";
import { departments } from "@/data/hospitalData";
import { DepartmentCard } from "@/components/cards/DepartmentCard";

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

export default function Departments() {
  return (
    <div className="w-full">
      <PageHeader
        title="Our Departments"
        subtitle="Specialized care units equipped with modern technology and expert medical professionals."
        breadcrumbs={[{ label: "Departments" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: (i % 8) * 0.06, ease: easeOut }}
                viewport={{ once: true, margin: "-40px" }}
                className="h-full"
              >
                <DepartmentCard department={dept} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
