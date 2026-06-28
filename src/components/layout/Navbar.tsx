import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Moon, Sun, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { hospitalInfo } from "@/data/hospitalData";
import { AnimatePresence, motion } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/departments", label: "Departments" },
    { href: "/doctors", label: "Doctors" },
    { href: "/facilities", label: "Facilities" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/96 backdrop-blur-lg shadow-[0_2px_24px_rgba(0,0,0,0.08)] border-b border-border/60"
          : "bg-background border-b border-transparent"
      }`}
    >
      {/* Emergency top bar */}
      <div className="bg-destructive text-destructive-foreground px-4 py-2 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2 font-medium">
            <Phone className="h-3.5 w-3.5 shrink-0" />
            <a
              href={`tel:${hospitalInfo.contact.phone.replace(/-/g, "")}`}
              className="hover:underline underline-offset-2"
            >
              Emergency: {hospitalInfo.contact.phone}
            </a>
          </div>
          <div className="hidden sm:flex gap-4 text-xs font-medium opacity-90">
            <span>24/7 Available</span>
            <span aria-hidden="true">·</span>
            <span>Plot No-1, Sec 123, Noida</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex flex-col group" aria-label="Shree Balaji Life Line Hospital — Home">
            <span className="font-serif text-2xl font-bold text-primary leading-none group-hover:text-primary/80 transition-colors">
              Shree Balaji
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.22em] font-semibold mt-0.5">
              Life Line Hospital
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors group ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-primary transition-all duration-300 ${
                      isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0 group-hover:opacity-60 group-hover:scale-x-100"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative text-muted-foreground overflow-hidden rounded-lg"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              data-testid="button-theme-toggle"
            >
              <Sun className="h-4.5 w-4.5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4.5 w-4.5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm hover:shadow-md transition-all duration-200 rounded-xl"
              data-testid="button-book-appointment-nav"
            >
              <Link href="/appointment">
                <Calendar className="mr-2 h-4 w-4" />
                Book Appointment
              </Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl text-muted-foreground hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            data-testid="button-menu-toggle"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden border-t bg-background/98 backdrop-blur-lg px-4 py-3 shadow-lg"
          >
            <nav className="flex flex-col gap-0.5 mb-3" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center justify-between pt-3 border-t gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-xl"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button asChild className="flex-1 rounded-xl" data-testid="button-book-appointment-mobile">
                <Link href="/appointment">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
