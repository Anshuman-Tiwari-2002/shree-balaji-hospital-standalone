import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/6 via-primary/4 to-teal-500/4 py-16 lg:py-24 border-b border-primary/10">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/6 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary/40 via-teal-500/40 to-transparent" aria-hidden="true" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <div className="flex items-start gap-4 mb-3">
            <div
              className="w-1.5 shrink-0 rounded-full mt-2 self-stretch bg-gradient-to-b from-primary to-teal-500"
              aria-hidden="true"
            />
            <h1 className="text-4xl lg:text-5xl font-bold font-serif text-foreground leading-tight">
              {title}
            </h1>
          </div>

          {subtitle && (
            <p className="text-lg text-muted-foreground mb-7 ml-5 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}

          <nav className="flex items-center flex-wrap gap-1.5 text-sm text-muted-foreground ml-5" aria-label="Breadcrumb">
            <Link href="/" className="inline-flex items-center gap-1 hover:text-primary transition-colors font-medium">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-primary transition-colors font-medium">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-primary font-semibold">{crumb.label}</span>
                )}
              </div>
            ))}
          </nav>
        </motion.div>
      </div>
    </div>
  );
}
