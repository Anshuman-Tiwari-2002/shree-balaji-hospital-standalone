import { useEffect, useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";
import { hospitalInfo, departments, doctors } from "@/data/hospitalData";
import { DepartmentCard } from "@/components/cards/DepartmentCard";
import { DoctorCard } from "@/components/cards/DoctorCard";
import {
  PhoneCall, Calendar, Clock, ShieldCheck, Activity, Users, Building2,
  BadgeCheck, Stethoscope, HeartPulse, Baby, ChevronRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => `${Math.round(v)}${suffix}`);
  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, to, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [isInView, motionValue, to]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const trustBadges = [
  { icon: BadgeCheck, label: "Govt. Registered" },
  { icon: HeartPulse, label: "24×7 Emergency" },
  { icon: Baby, label: "ICU & NICU Ready" },
  { icon: Stethoscope, label: "Expert Doctors" },
];

const heroStats = [
  { value: 18, suffix: "+", label: "Total Beds" },
  { value: 7, suffix: "+", label: "Expert Doctors" },
  { value: 13, suffix: "+", label: "Departments" },
  { value: 2, suffix: "+", label: "Years of Service" },
];

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: easeOut,
    },
  }),
};

export default function Home() {
  return (
    <div className="w-full">

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=85&w=1920&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1920"
            height="1080"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#061e4f]/95 via-[#061e4f]/80 to-[#061e4f]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061e4f]/70 via-transparent to-transparent" />
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
              >
                <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white px-4 py-2 rounded-full text-sm font-semibold mb-7 shadow-sm">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  24×7 Emergency Care Available
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl lg:text-[4.25rem] font-bold font-serif text-white tracking-tight leading-[1.1] mb-6"
              >
                Trusted Healthcare <br />
                <span className="text-teal-300">for Every Family</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
              >
                Providing modern medical diagnostics, specialized treatments, and compassionate patient-centered care to the community of Gautam Buddha Nagar.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mb-12"
              >
                <Button
                  size="lg"
                  asChild
                  className="h-14 px-8 text-base bg-teal-500 hover:bg-teal-400 text-white border-0 shadow-lg shadow-teal-500/30 hover:shadow-teal-400/40 transition-all duration-300"
                >
                  <Link href="/appointment">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="h-14 px-8 text-base bg-red-600 hover:bg-red-500 text-white border-0 shadow-lg shadow-red-600/30 hover:shadow-red-500/40 transition-all duration-300"
                >
                  <a href={`tel:${hospitalInfo.contact.phone.replace(/-/g, "")}`}>
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Emergency: {hospitalInfo.contact.phone}
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3"
              >
                {trustBadges.map((badge, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-3 text-white"
                  >
                    <badge.icon className="w-4 h-4 text-teal-300 shrink-0" />
                    <span className="text-xs font-semibold leading-tight">{badge.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right: floating info card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="hidden lg:flex flex-col gap-4 self-center"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
                <p className="text-white/60 text-xs font-bold uppercase tracking-[0.18em] mb-4">Quick Reach</p>
                <div className="space-y-3">
                  <a href={`tel:${hospitalInfo.contact.phone.replace(/-/g, "")}`} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center group-hover:bg-red-500/40 transition-colors">
                      <PhoneCall className="w-4 h-4 text-red-300" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs">Emergency Helpline</p>
                      <p className="text-white font-bold text-lg tracking-wide">{hospitalInfo.contact.phone}</p>
                    </div>
                  </a>
                  <div className="border-t border-white/15" />
                  <a href={`tel:${hospitalInfo.contact.mobile}`} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/40 transition-colors">
                      <PhoneCall className="w-4 h-4 text-green-300" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs">Reception / Appointment</p>
                      <p className="text-white font-bold text-lg tracking-wide">{hospitalInfo.contact.mobile}</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-teal-500/20 backdrop-blur-md border border-teal-400/30 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-400/20 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-teal-300" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Open 24 Hours · 7 Days</p>
                  <p className="text-white/60 text-sm">Emergency, OPD & Pharmacy</p>
                </div>
              </div>

              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl px-5 py-4">
                <p className="text-white/50 text-xs font-bold uppercase tracking-[0.18em] mb-1">Address</p>
                <p className="text-white/90 text-sm leading-relaxed">{hospitalInfo.contact.address}</p>
                <a
                  href={hospitalInfo.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-teal-300 hover:text-teal-200 text-xs font-semibold mt-2 transition-colors"
                >
                  Get Directions <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Animated stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/20"
        >
          <div className="container mx-auto px-4 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
              {heroStats.map((stat, i) => (
                <div key={i} className="text-center px-4 py-2">
                  <p className="text-3xl md:text-4xl font-bold text-white">
                    <CountUp to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      {/* ─────────────────────────────────────────────────────────────── */}

      {/* Why Choose Us */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="section-eyebrow">Why Us</p>
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Why Choose Shree Balaji?</h2>
            <p className="text-muted-foreground">We combine modern medical technology with compassionate care to deliver the best healthcare outcomes for our patients.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "24×7 Emergency", desc: "Round-the-clock emergency response and trauma care with dedicated RMOs." },
              { icon: Users, title: "Experienced Doctors", desc: "A team of highly qualified specialists across various medical disciplines." },
              { icon: Activity, title: "Advanced Equipment", desc: "Modern diagnostics, ICU, NICU, and fully-equipped operation theatres." },
              { icon: ShieldCheck, title: "Patient-Centered Care", desc: "Ethical medical care with individualized treatment plans for every patient." },
              { icon: Building2, title: "Modern Infrastructure", desc: "Clean, hygienic premises with A/C wards and comfortable facilities." },
              { icon: PhoneCall, title: "Accessible Support", desc: "Easy booking, 24/7 ambulance, cashless payments, and counseling." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariants}
                className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/8 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold mb-2.5">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-4">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Specialties</p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-3">Our Departments</h2>
              <p className="text-muted-foreground">Comprehensive medical specialties under one roof, equipped with modern technology and expert specialists.</p>
            </div>
            <Button variant="outline" asChild className="shrink-0 rounded-xl">
              <Link href="/departments">View All Departments</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {departments.slice(0, 8).map((dept, i) => (
              <motion.div
                key={dept.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariants}
              >
                <DepartmentCard department={dept} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA Banner */}
      <section className="py-20 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Medical Emergency?</h2>
            <p className="text-lg opacity-90 mb-9 max-w-2xl mx-auto leading-relaxed">
              Our emergency and trauma center is open 24/7 with dedicated doctors and ambulances on standby.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="h-14 px-8 text-lg font-bold w-full sm:w-auto shadow-lg hover:shadow-xl transition-shadow"
                asChild
              >
                <a href={`tel:${hospitalInfo.contact.phone.replace(/-/g, "")}`}>
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Call Now: {hospitalInfo.contact.phone}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-bold w-full sm:w-auto bg-transparent border-white/50 text-white hover:bg-white/10 hover:border-white"
                asChild
              >
                <a href={`tel:${hospitalInfo.contact.mobile}`}>
                  Mobile: {hospitalInfo.contact.mobile}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Doctors Preview */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-4">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Our Team</p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-3">Our Medical Experts</h2>
              <p className="text-muted-foreground">Meet our highly qualified team of doctors dedicated to providing you with the best medical care.</p>
            </div>
            <Button variant="outline" asChild className="shrink-0 rounded-xl">
              <Link href="/doctors">View All Doctors</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {doctors.slice(0, 4).map((doctor, i) => (
              <motion.div
                key={doctor.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={cardVariants}
              >
                <DoctorCard doctor={doctor} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-eyebrow">Got Questions?</p>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Find answers to common questions about our hospital services and facilities.</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-2">
              {[
                {
                  q: "Do you provide emergency services?",
                  a: `Yes, we provide 24/7 emergency and trauma care services. We also have a 24/7 ambulance service available. You can reach our emergency department directly at ${hospitalInfo.contact.phone}.`,
                },
                {
                  q: "Is parking available at the hospital?",
                  a: "Yes, we offer free parking for patients and visitors. Our entrance and parking areas are also fully wheelchair accessible.",
                },
                {
                  q: "How do I book an appointment?",
                  a: `You can book an appointment online through our website's Appointment section, call our reception at ${hospitalInfo.contact.mobile}, or visit the hospital in person at Sec 123, Noida.`,
                },
                {
                  q: "Are cashless facilities available?",
                  a: "Yes, we accept cashless payments and are empanelled with major healthcare directories and insurance providers. We also support NFC and digital payments.",
                },
                {
                  q: "Do you have ICU and NICU facilities?",
                  a: "Yes, we are equipped with an Intensive Care Unit (ICU), High Dependency Unit (HDU), and a dedicated Neonatal Intensive Care Unit (NICU) with round-the-clock monitoring.",
                },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i + 1}`}
                  className="border border-border/60 rounded-xl px-1 data-[state=open]:border-primary/30 data-[state=open]:shadow-sm transition-all duration-200"
                >
                  <AccordionTrigger className="px-5 py-4 text-left font-semibold hover:no-underline hover:text-primary transition-colors text-sm md:text-base">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-4 text-muted-foreground leading-relaxed text-sm">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

    </div>
  );
}
