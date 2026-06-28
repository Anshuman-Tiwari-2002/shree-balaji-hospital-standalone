import { PageHeader } from "@/components/layout/PageHeader";
import { Link } from "wouter";

export default function Sitemap() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Departments", path: "/departments" },
    { name: "Doctors", path: "/doctors" },
    { name: "Facilities", path: "/facilities" },
    { name: "Book Appointment", path: "/appointment" },
    { name: "Emergency Care", path: "/emergency" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
  ];

  return (
    <div className="w-full">
      <PageHeader 
        title="Sitemap" 
        breadcrumbs={[{ label: "Sitemap" }]} 
      />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <ul className="grid sm:grid-cols-2 gap-4 text-lg">
            {links.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="text-primary hover:underline flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
