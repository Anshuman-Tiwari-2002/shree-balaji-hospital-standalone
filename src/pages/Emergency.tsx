import { motion } from "framer-motion";
import { hospitalInfo } from "@/data/hospitalData";
import { PhoneCall, Ambulance, Clock, AlertTriangle, MapPin } from "lucide-react";

export default function Emergency() {
  return (
    <div className="w-full">

      {/* Hero — full red banner */}
      <div className="relative bg-destructive py-16 lg:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" aria-hidden="true" />
        <div className="container mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 bg-white/15 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20"
          >
            <AlertTriangle className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold font-serif mb-5 leading-tight"
          >
            24×7 Emergency Care
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-xl opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Immediate medical attention when you need it most. Our specialized trauma and emergency team is always ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={`tel:${hospitalInfo.contact.phone.replace(/-/g, "")}`}
              className="flex items-center justify-center gap-2.5 bg-white text-destructive font-bold text-xl h-16 px-9 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 w-full sm:w-auto"
            >
              <PhoneCall className="w-6 h-6" />
              Call: {hospitalInfo.contact.phone}
            </a>
            <a
              href={`tel:${hospitalInfo.contact.mobile}`}
              className="flex items-center justify-center gap-2.5 bg-transparent border-2 border-white/60 text-white font-bold text-xl h-16 px-9 rounded-2xl hover:bg-white/10 hover:border-white transition-all duration-200 w-full sm:w-auto"
            >
              <PhoneCall className="w-6 h-6" />
              Mobile: {hospitalInfo.contact.mobile}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Service cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: Ambulance,
                title: "24/7 Ambulance",
                desc: "Fully equipped life-support ambulances available round-the-clock for safe patient transport.",
              },
              {
                icon: Clock,
                title: "Zero Wait Time",
                desc: "Immediate triaging and attention for critical cases by our dedicated Resident Medical Officers.",
              },
              {
                icon: AlertTriangle,
                title: "Trauma Ready",
                desc: "Advanced ICU, HDU, and multi-specialty Operation Theatres on standby for severe emergencies.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true, margin: "-40px" }}
                className="group bg-card p-8 rounded-2xl shadow-sm border border-border/60 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-destructive/25"
              >
                <div className="w-16 h-16 bg-red-50 dark:bg-red-950/50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <card.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-destructive transition-colors duration-200">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Timeline */}
            <div>
              <p className="section-eyebrow">What Happens When You Arrive</p>
              <h2 className="text-3xl font-bold font-serif mb-10">Step-by-Step Emergency Process</h2>
              <div className="space-y-4 relative before:absolute before:left-5 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-destructive/60 before:via-border before:to-transparent">
                {[
                  {
                    title: "Immediate Triage",
                    desc: "A qualified nurse will quickly assess your condition to determine the urgency of care required.",
                  },
                  {
                    title: "Registration",
                    desc: "While the patient receives immediate care, a family member can complete the swift registration process.",
                  },
                  {
                    title: "Specialist Attention",
                    desc: "The RMO and required specialists are engaged immediately based on the diagnosis.",
                  },
                  {
                    title: "Diagnostics & Action",
                    desc: "Our 24/7 Pathology and Radiology units assist in quick diagnosis for immediate life-saving action.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.09 }}
                    viewport={{ once: true, margin: "-40px" }}
                    className="relative flex items-start gap-4 pl-14"
                  >
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full border-2 border-destructive bg-card flex items-center justify-center z-10 font-bold text-destructive text-sm shadow-sm">
                      {index + 1}
                    </div>
                    <div className="bg-card p-5 rounded-xl border border-border/60 shadow-sm flex-1 hover:border-destructive/20 transition-colors">
                      <h4 className="font-bold text-base mb-1">{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-3">
              <div className="min-h-[420px] rounded-2xl overflow-hidden border shadow-sm">
                <iframe
                  src={hospitalInfo.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "420px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Balaji Life Line Hospital Location"
                />
              </div>
              <a
                href={hospitalInfo.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl border border-border bg-card text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                data-testid="link-emergency-directions"
              >
                <MapPin className="w-4 h-4" />
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
