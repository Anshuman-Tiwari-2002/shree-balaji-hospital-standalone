import { PageHeader } from "@/components/layout/PageHeader";
import { Link } from "wouter";
import { Clock, Tag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

const posts: BlogPost[] = [
  {
    slug: "signs-of-heart-attack",
    title: "Warning Signs of a Heart Attack You Should Never Ignore",
    excerpt:
      "Recognising the early warning signs of a cardiac event can save lives. Learn what symptoms require immediate emergency care and when to call an ambulance.",
    category: "Health Tips",
    readTime: "4 min read",
    date: "June 15, 2025",
    image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "importance-of-nicu",
    title: "Why a NICU Makes All the Difference for Premature Babies",
    excerpt:
      "Our Neonatal Intensive Care Unit is equipped to support the most vulnerable newborns. Here is what families need to know about premature care.",
    category: "Hospital News",
    readTime: "5 min read",
    date: "May 28, 2025",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "managing-diabetes",
    title: "Managing Diabetes: Diet, Exercise, and Regular Check-ups",
    excerpt:
      "A practical guide for diabetic patients and their caregivers on day-to-day lifestyle management and when to consult a specialist.",
    category: "Health Tips",
    readTime: "6 min read",
    date: "May 10, 2025",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "orthopaedic-care",
    title: "When Should You See an Orthopaedic Specialist?",
    excerpt:
      "Joint pain, fractures, and sports injuries are best treated by experts. Know when home care isn't enough and a specialist visit is essential.",
    category: "Health Tips",
    readTime: "3 min read",
    date: "April 22, 2025",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "hospital-expansion",
    title: "Shree Balaji Life Line Hospital Expands ICU Capacity",
    excerpt:
      "We are proud to announce the addition of new ICU beds and advanced monitoring equipment to better serve critical care patients in Noida.",
    category: "Hospital News",
    readTime: "2 min read",
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "womens-health-obstetrics",
    title: "A Guide to Safe Pregnancy: What to Expect at Every Stage",
    excerpt:
      "Our gynaecology and obstetrics team outlines the key milestones and antenatal check-ups every expecting mother should know about.",
    category: "Health Tips",
    readTime: "7 min read",
    date: "March 18, 2025",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
  },
];

const categoryColors: Record<string, string> = {
  "Health Tips":
    "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950 dark:text-teal-300 dark:border-teal-800",
  "Hospital News":
    "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  "Patient Stories":
    "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800",
};

const easeOut = [0.25, 0.46, 0.45, 0.94] as const;

export default function Blog() {
  return (
    <div className="w-full">
      <PageHeader
        title="Health Blog & News"
        subtitle="Stay updated with the latest health tips, hospital news, and medical insights."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-muted-foreground border border-border rounded-full px-4 py-1.5">
              Full blog launching soon — illustrative articles below
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: easeOut }}
                viewport={{ once: true, margin: "-40px" }}
                className="group bg-card rounded-2xl border border-border/60 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col hover:border-primary/20"
                data-testid={`card-blog-${post.slug}`}
              >
                <div className="aspect-video overflow-hidden bg-muted relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${
                        categoryColors[post.category] ??
                        "bg-muted text-muted-foreground border-border"
                      }`}
                    >
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-lg font-bold mb-3 text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all duration-200"
                      data-testid={`link-blog-${post.slug}`}
                    >
                      Read More
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
