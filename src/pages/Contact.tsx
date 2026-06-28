import { useState } from "react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/PageHeader";
import { hospitalInfo } from "@/data/hospitalData";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

const contactItems = [
  {
    icon: MapPin,
    title: "Our Location",
    content: null,
    address: true,
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    content: null,
    phones: true,
  },
  {
    icon: Mail,
    title: "Email Address",
    content: null,
    email: true,
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: null,
    hours: true,
  },
] as const;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1200);
  };

  return (
    <div className="w-full">
      <PageHeader
        title="Contact Us"
        subtitle="We are here to help. Reach out to us for any queries or emergencies."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left — Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <p className="section-eyebrow">Reach Us</p>
              <h2 className="text-3xl font-bold font-serif mb-8">Get in Touch</h2>

              <div className="space-y-5 mb-10">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0 border border-primary/15">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-base mb-1">Our Location</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{hospitalInfo.contact.address}</p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0 border border-primary/15">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-base mb-1.5">Phone Numbers</h3>
                    <p className="text-muted-foreground text-sm mb-1">
                      Emergency:{" "}
                      <a
                        href={`tel:${hospitalInfo.contact.phone.replace(/-/g, "")}`}
                        className="text-primary hover:underline font-semibold underline-offset-2"
                        data-testid="link-phone-emergency"
                      >
                        {hospitalInfo.contact.phone}
                      </a>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Mobile:{" "}
                      <a
                        href={`tel:${hospitalInfo.contact.mobile}`}
                        className="text-primary hover:underline font-semibold underline-offset-2"
                        data-testid="link-phone-mobile"
                      >
                        {hospitalInfo.contact.mobile}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0 border border-primary/15">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-base mb-1">Email Address</h3>
                    <a
                      href={`mailto:${hospitalInfo.contact.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm break-all underline-offset-2"
                      data-testid="link-email"
                    >
                      {hospitalInfo.contact.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center text-primary shrink-0 border border-primary/15">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-base mb-1">Working Hours</h3>
                    <p className="text-primary font-semibold text-sm">Open {hospitalInfo.details.timings}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">Emergency services always available</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-80 rounded-2xl overflow-hidden border border-border/60 shadow-sm w-full">
                <iframe
                  src={hospitalInfo.mapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shree Balaji Life Line Hospital on Google Maps"
                />
              </div>
              <a
                href={hospitalInfo.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-primary hover:underline underline-offset-2"
                data-testid="link-get-directions"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps & Get Directions
              </a>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: easeOut }}
              viewport={{ once: true, margin: "-60px" }}
              className="bg-card rounded-2xl shadow-sm border border-border/60 p-8"
            >
              <h2 className="text-2xl font-bold font-serif mb-6">Send us a Message</h2>

              {isSuccess ? (
                <div className="text-center py-14">
                  <div className="w-16 h-16 bg-teal-100 dark:bg-teal-950 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-serif mb-2">Message Received!</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <Button variant="outline" onClick={() => setIsSuccess(false)} className="rounded-xl">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-sm font-medium">Full Name</label>
                    <Input
                      id="contact-name"
                      name="name"
                      placeholder="Your full name"
                      required
                      data-testid="input-contact-name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-sm font-medium">Email Address</label>
                      <Input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        data-testid="input-contact-email"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="text-sm font-medium">Phone Number</label>
                      <Input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="10-digit number"
                        required
                        data-testid="input-contact-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-sm font-medium">Subject</label>
                    <Input
                      id="contact-subject"
                      name="subject"
                      placeholder="How can we help you?"
                      required
                      data-testid="input-contact-subject"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-sm font-medium">Message</label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Type your message here..."
                      className="h-32 resize-none"
                      required
                      data-testid="input-contact-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    disabled={isSubmitting}
                    data-testid="button-contact-submit"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed">
                    For medical emergencies, please call{" "}
                    <a
                      href={`tel:${hospitalInfo.contact.phone.replace(/-/g, "")}`}
                      className="text-destructive font-semibold hover:underline underline-offset-2"
                    >
                      {hospitalInfo.contact.phone}
                    </a>{" "}
                    instead of using this form.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
