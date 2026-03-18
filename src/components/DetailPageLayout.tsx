import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

interface DetailPageLayoutProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumbs: { label: string; href?: string }[];
  children: ReactNode;
}

const DetailPageLayout = ({ title, subtitle, image, breadcrumbs, children }: DetailPageLayoutProps) => (
  <div className="min-h-screen bg-white">
    <Navbar />

    {/* Hero */}
    <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1929]/90 to-[#0B1929]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1929]/40 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-12">
        <div className="max-w-[1280px] mx-auto px-6 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-4">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.href ? (
                  <Link to={b.href} className="font-body text-xs text-white/50 hover:text-[#C8973A] transition-colors">
                    {b.label}
                  </Link>
                ) : (
                  <span className="font-body text-xs text-white/70">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight size={12} className="text-white/30" />}
              </span>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="font-body text-white/65 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Back link */}
    <div className="bg-[#F4F2ED] border-b border-[#E8E5DF]">
      <div className="max-w-[1280px] mx-auto px-6 py-4">
        <Link
          to={breadcrumbs[breadcrumbs.length - 2]?.href || "/"}
          className="inline-flex items-center gap-2 font-body text-sm text-warmgray hover:text-[#C8973A] transition-colors"
        >
          <ArrowLeft size={14} />
          Back to {breadcrumbs[breadcrumbs.length - 2]?.label}
        </Link>
      </div>
    </div>

    {/* Main content */}
    <main className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {children}
      </div>
    </main>

    <ContactSection />
    <Footer />
  </div>
);

export default DetailPageLayout;
