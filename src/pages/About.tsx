import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/PageHeader";
import { hospitalInfo } from "@/data/hospitalData";
import { CheckCircle2, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

export default function About() {
  return (
    <div className="w-full">
      <PageHeader
        title="About Us"
        subtitle="Dedicated to excellence in healthcare and patient well-being since 2023."
        breadcrumbs={[{ label: "About" }]}
      />

      {/* Hospital Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <p className="section-eyebrow">Our Story</p>
              <h2 className="text-3xl font-bold font-serif mb-6">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Established on{" "}
                  <strong className="text-foreground">
                    {hospitalInfo.registration.date}
                  </strong>
                  , {hospitalInfo.name} was founded with a clear vision: to
                  provide a premium, compassionate healthcare experience right
                  in the heart of Gautam Buddha Nagar.
                </p>
                <p>
                  Located at{" "}
                  <strong className="text-foreground">
                    {hospitalInfo.contact.address}
                  </strong>
                  , we serve families across Noida and neighboring areas with a
                  commitment to ethical medical care and individualized
                  treatment plans.
                </p>
                <p>
                  With{" "}
                  <strong className="text-foreground">
                    {hospitalInfo.details.totalBeds} beds
                  </strong>
                  , modern operation theatres, advanced ICU and NICU setups, and
                  a team of highly qualified medical professionals, we ensure
                  every patient receives the best possible care — close to home.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="font-semibold text-base text-foreground">
                  Hospital Highlights
                </h3>
                <ul className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    "Ethical, individualized medical care",
                    "Modern technology in labs and OTs",
                    "Easily accessible Noida location",
                    "24/7 RMO & nursing staff",
                    "Private and shared room options",
                    "Strict infection control protocols",
                    "Cashless & NFC payments accepted",
                    "24×7 ambulance service",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  className="rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <Link href="/appointment">Book an Appointment</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative"
            >
              <div className="aspect-4/3 rounded-2xl overflow-hidden bg-muted shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1400&auto=format&fit=crop"
                  alt="Shree Balaji Life Line Hospital — Reception and patient registration area"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-5 rounded-2xl shadow-xl border border-border/60 max-w-xs hidden md:block">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-bold text-foreground">
                    Govt. Registered Hospital
                  </span>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>
                    Reg No:{" "}
                    <span className="font-semibold text-foreground">
                      {hospitalInfo.registration.number}
                    </span>
                  </div>
                  <div>
                    Cert:{" "}
                    <span className="font-semibold text-foreground">
                      {hospitalInfo.registration.certificateNo}
                    </span>
                  </div>
                  <div>
                    Valid till:{" "}
                    <span className="font-semibold text-foreground">
                      {hospitalInfo.registration.validTill}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-b">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-eyebrow">Our Purpose</p>
            <h2 className="text-3xl font-bold font-serif mb-3">
              Mission, Vision & Values
            </h2>
            <p className="text-muted-foreground">
              The principles that guide every decision we make at Shree Balaji
              Life Line Hospital.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Our Mission",
                body: "To deliver high-quality, compassionate, and affordable healthcare services to our community, ensuring patient safety and satisfaction through modern medical practices.",
              },
              {
                title: "Our Vision",
                body: "To be the most trusted and preferred healthcare destination in Gautam Buddha Nagar, recognised for clinical excellence and patient-centric care.",
              },
              {
                title: "Core Values",
                body: "Compassion, Integrity, Excellence, Teamwork, and Patient First. We believe in treating every patient as a member of our own family.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: easeOut }}
                viewport={{ once: true, margin: "-40px" }}
                className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div
                  className="w-1 h-8 rounded-full bg-gradient-to-b from-primary to-teal-500 mb-5"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold font-serif mb-4 text-primary">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="section-eyebrow">Our Scale</p>
            <h2 className="text-3xl font-bold font-serif mb-4">
              Our Infrastructure
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern medical technology combined with a compassionate care
              environment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                stat: "18",
                label: "Total Beds",
                sub: "Including ICU, HDU, NICU",
              },
              {
                stat: "24×7",
                label: "Emergency Care",
                sub: "Always open, always ready",
              },
              {
                stat: "7+",
                label: "Qualified Doctors",
                sub: "Across multiple specialties",
              },
              {
                stat: "13+",
                label: "Departments",
                sub: "Comprehensive medical care",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: easeOut }}
                viewport={{ once: true, margin: "-40px" }}
                className="group bg-primary/5 border border-primary/10 rounded-2xl p-6 text-center hover:bg-primary hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="text-4xl font-bold text-primary group-hover:text-white transition-colors duration-300 mb-2">
                  {item.stat}
                </div>
                <div className="font-semibold text-foreground group-hover:text-white transition-colors duration-300 mb-1">
                  {item.label}
                </div>
                <div className="text-xs text-muted-foreground group-hover:text-white/75 transition-colors duration-300">
                  {item.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation & Certificate */}
      <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900 border-t border-b">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-eyebrow">Official Recognition</p>
              <h2 className="text-3xl font-bold font-serif mb-6">
                Accreditation & Registration
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Shree Balaji Life Line Hospital is officially registered with
                the Government of Uttar Pradesh under the Department of Medical
                Health & Family Welfare, Gautam Buddha Nagar.
              </p>
              <div className="space-y-1 text-sm">
                {[
                  {
                    label: "Registration Number",
                    value: hospitalInfo.registration.number,
                  },
                  {
                    label: "Certificate Number",
                    value: hospitalInfo.registration.certificateNo,
                  },
                  {
                    label: "Registered Since",
                    value: hospitalInfo.registration.date,
                  },
                  {
                    label: "Valid Till",
                    value: hospitalInfo.registration.validTill,
                  },
                  {
                    label: "Issued By",
                    value: hospitalInfo.registration.issuedBy,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-3 border-b border-border last:border-0"
                  >
                    <span className="font-semibold text-foreground sm:w-48 shrink-0 text-sm">
                      {item.label}
                    </span>
                    <span className="text-muted-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border/60 shadow-md">
              <img
                src="/images/image_1782573842455.png"
                alt="Medical Establishment Certificate — Shree Balaji Life Line Hospital, issued by CMO Gautam Buddha Nagar"
                className="w-full object-contain bg-white"
                loading="lazy"
              />{" "}
              <div className="bg-primary/5 px-4 py-3 border-t border-border/60 text-xs text-muted-foreground text-center">
                Official Medical Establishment Certificate — Govt of Uttar
                Pradesh
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="section-eyebrow">Leadership</p>
          <h2 className="text-3xl font-bold font-serif mb-4">
            Management Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-14">
            Led by a dedicated team committed to raising the standard of
            healthcare in the region.
          </p>
          <div className="flex flex-wrap justify-center gap-12">
            {[
              { name: "Farhan Ali", role: "Co-Owner / Partner" },
              { name: "Vinay Kumar Pandey", role: "Co-Owner / Partner" },
              { name: "Dr. Rajesh Sharma", role: "Person Incharge (MBBS)" },
            ].map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: easeOut }}
                viewport={{ once: true, margin: "-40px" }}
                className="text-center group"
              >
                <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden ring-2 ring-border group-hover:ring-primary/40 group-hover:scale-105 transition-all duration-300 shadow-sm">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(person.name)}&background=1a4f8a&color=fff&size=200&bold=true&format=svg`}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-200">
                  {person.name}
                </h4>
                <p className="text-sm text-primary font-medium mt-1 opacity-80">
                  {person.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-serif mb-4">Find Us</h2>
          <p className="opacity-90 mb-8 max-w-xl mx-auto leading-relaxed">
            {hospitalInfo.contact.address}
          </p>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="shadow-lg hover:shadow-xl transition-shadow rounded-xl"
            data-testid="link-maps-directions"
          >
            <a
              href={hospitalInfo.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Get Directions on Google Maps
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
