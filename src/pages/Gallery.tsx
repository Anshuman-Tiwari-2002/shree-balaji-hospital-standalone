import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageHeader } from "@/components/layout/PageHeader";
import { X, ZoomIn } from "lucide-react";

type Category = "All" | "Wards" | "ICU/NICU" | "Operation Theatre" | "Reception" | "Pharmacy" | "Outdoor";

interface GalleryImage {
  url: string;
  title: string;
  category: Exclude<Category, "All">;
}

const images: GalleryImage[] = [
  { url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop", title: "Hospital Exterior", category: "Outdoor" },
  { url: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop", title: "Reception & Registration Desk", category: "Reception" },
  { url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop", title: "Deluxe Patient Ward", category: "Wards" },
  { url: "https://images.unsplash.com/photo-1485841938031-1bf81239b815?q=80&w=1200&auto=format&fit=crop", title: "Operation Theatre", category: "Operation Theatre" },
  { url: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=1200&auto=format&fit=crop", title: "ICU — Intensive Care Unit", category: "ICU/NICU" },
  { url: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=1200&auto=format&fit=crop", title: "Hospital Pharmacy", category: "Pharmacy" },
  { url: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1200&auto=format&fit=crop", title: "General Ward — Patient Room", category: "Wards" },
  { url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop", title: "NICU — Neonatal Intensive Care", category: "ICU/NICU" },
  { url: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1200&auto=format&fit=crop", title: "Hospital Garden", category: "Outdoor" },
  { url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200&auto=format&fit=crop", title: "OPD Consultation Cabin", category: "Reception" },
  { url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop", title: "Pathology Laboratory", category: "Pharmacy" },
  { url: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=1200&auto=format&fit=crop", title: "Critical Care — HDU Setup", category: "ICU/NICU" },
  { url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop", title: "Surgical Suite Preparation", category: "Operation Theatre" },
  { url: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1200&auto=format&fit=crop", title: "A/C Private Ward Room", category: "Wards" },
  { url: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=1200&auto=format&fit=crop", title: "Hospital Entrance — Accessible", category: "Outdoor" },
];

const categories: Category[] = ["All", "Wards", "ICU/NICU", "Operation Theatre", "Reception", "Pharmacy", "Outdoor"];

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxImg, setLightboxImg] = useState<GalleryImage | null>(null);

  const filtered = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <div className="w-full">
      <PageHeader
        title="Photo Gallery"
        subtitle="Take a visual tour of our modern facilities and infrastructure."
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">

          {/* Category filter pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`filter-${cat.toLowerCase().replace(/[\s/]+/g, "-")}`}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-sm shadow-primary/20"
                    : "bg-background text-muted-foreground border-border/60 hover:border-primary/50 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((img, idx) => (
              <motion.div
                key={`${img.category}-${img.title}`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, delay: idx * 0.04, ease: easeOut }}
                className="group relative aspect-square rounded-2xl overflow-hidden bg-muted cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
                onClick={() => setLightboxImg(img)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setLightboxImg(img)}
                aria-label={`View larger image: ${img.title}`}
                data-testid={`gallery-image-${idx}`}
              >
                <img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/60 mb-1">
                    {img.category}
                  </span>
                  <h3 className="text-white font-serif text-lg font-bold leading-tight">{img.title}</h3>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">No images in this category.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/94 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Photo: ${lightboxImg.title}`}
          >
            <button
              className="absolute top-4 right-4 p-2.5 rounded-xl bg-white/10 hover:bg-white/25 text-white transition-colors border border-white/15"
              onClick={() => setLightboxImg(null)}
              aria-label="Close lightbox"
              data-testid="button-close-lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.25, ease: easeOut }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImg.url.replace("w=1200", "w=1600")}
                alt={lightboxImg.title}
                className="w-full max-h-[78vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="text-center mt-5">
                <p className="text-white font-serif text-xl font-bold">{lightboxImg.title}</p>
                <p className="text-white/50 text-xs mt-1.5 uppercase tracking-[0.16em]">{lightboxImg.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
