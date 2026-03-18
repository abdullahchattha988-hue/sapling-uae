import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Monitor, Cloud, Settings, Factory, Box, Users2, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import itBanner    from "@/assets/it-consultant-banner.webp";
import autoBanner  from "@/assets/industrial-automation-1.webp";
import mfgBanner   from "@/assets/manufacturing-systems-banner.webp";
import cloudBanner from "@/assets/cloud-services-banner.webp";
import plmImg      from "@/assets/plm-systems-1.webp";
import hrBanner    from "@/assets/recuirement-and-payroll-banner.webp";
import hrImg       from "@/assets/recuirement-and-payroll.webp";

const serviceExtras: Record<string, { icon: React.ElementType; image: string }> = {
  "it-consulting":                { icon: Monitor,  image: itBanner    },
  "cloud-digital":                { icon: Cloud,    image: cloudBanner },
  "industrial-automation":        { icon: Settings, image: autoBanner  },
  "manufacturing-systems":        { icon: Factory,  image: mfgBanner   },
  "product-lifecycle-management": { icon: Box,      image: plmImg      },
  "recruitment-payroll":          { icon: Users2,   image: hrBanner    },
  "recuirement-payroll":          { icon: Users2,   image: hrBanner    },
};

const ServiceCard = ({
  slug, title, description, items, image, icon: Icon, index, linkTo,
}: {
  slug: string; title: string; description: string; items: string[];
  image: string; icon: React.ElementType; index: number; linkTo: string;
}) => {
  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.borderColor = "rgba(109,190,46,0.35)";
    el.style.boxShadow   = "0 16px 48px -8px rgba(13,31,10,0.14)";
    el.style.transform   = "translateY(-3px)";
    const img = el.querySelector<HTMLElement>("[data-img]");
    if (img) img.style.transform = "scale(1.06)";
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]");
    if (shimmer) shimmer.style.opacity = "1";
  };
  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.borderColor = "rgba(109,190,46,0.12)";
    el.style.boxShadow   = "0 2px 12px rgba(13,31,10,0.05)";
    el.style.transform   = "translateY(0)";
    const img = el.querySelector<HTMLElement>("[data-img]");
    if (img) img.style.transform = "scale(1)";
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]");
    if (shimmer) shimmer.style.opacity = "0";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={linkTo}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="group relative block rounded-2xl overflow-hidden"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(109,190,46,0.12)",
          boxShadow: "0 2px 12px rgba(13,31,10,0.05)",
          transition: "border-color 0.3s, box-shadow 0.35s, transform 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div data-shimmer className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none z-10"
          style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, #8FD94A, #6DBE2E, transparent)", opacity: 0, transition: "opacity 0.3s" }}
        />

        <div className="aspect-[16/9] overflow-hidden relative">
          <img data-img src={image} alt={title}
            className="w-full h-full object-cover"
            style={{ transition: "transform 0.65s cubic-bezier(0.22,1,0.36,1)" }}
          />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(4,13,6,0.35) 0%, transparent 60%)" }}
          />
        </div>

        <div className="p-7">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "linear-gradient(135deg, rgba(109,190,46,0.16), rgba(109,190,46,0.05))", border: "1px solid rgba(109,190,46,0.25)" }}>
              <Icon size={17} strokeWidth={1.7} style={{ color: "#6DBE2E" }} />
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "20px", fontWeight: 600, color: "#0D1F0A", letterSpacing: "-0.01em" }}>
              {title}
            </h3>
          </div>

          <div className="mb-4 h-px w-8" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))" }} />

          <p className="mb-4 line-clamp-2"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13.5px", fontWeight: 300, color: "rgba(13,31,10,0.55)", lineHeight: 1.75 }}>
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-5">
            {items.slice(0, 4).map((tag) => (
              <span key={tag}
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 500, color: "rgba(13,31,10,0.5)", padding: "4px 10px", borderRadius: "999px", background: "#F2F7F0", border: "1px solid rgba(109,190,46,0.15)" }}>
                {tag}
              </span>
            ))}
            {items.length > 4 && (
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 500, color: "rgba(13,31,10,0.4)", padding: "4px 10px", borderRadius: "999px", background: "#F2F7F0", border: "1px solid rgba(109,190,46,0.12)" }}>
                +{items.length - 4}
              </span>
            )}
          </div>

          <span className="inline-flex items-center gap-1.5 transition-all duration-200 group-hover:gap-3"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "12.5px", fontWeight: 600, color: "#4FA020", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Learn More <ArrowRight size={13} strokeWidth={2.5} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

const ServicesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const allServices = [...services];

  const hasRecruitment = allServices.some(
    (s) => s.slug === "recruitment-payroll" || s.slug === "recuirement-payroll"
  );

  const recruitmentSlug = "recruitment-payroll";
  if (!hasRecruitment) {
    allServices.push({
      slug:        recruitmentSlug,
      title:       "Recruitment & Payroll",
      description: "Global talent acquisition, technical staffing, and compliant multi-country payroll management for enterprise clients worldwide.",
      items:       ["Global Hiring", "Contract Staffing", "Multi-Country Payroll", "Compliant", "Fast"],
      details:     [],
      faqs:        [],
      image:       hrImg,
    } as any);
  }

  return (
    <div className="min-h-screen" style={{ background: "#F8FBF6" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-20 relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0A1E0D 0%, #061409 55%, #040D06 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(109,190,46,0.06) 1px, transparent 0)", backgroundSize: "36px 36px" }}
        />
        <div className="absolute top-0 right-0 pointer-events-none"
          style={{ width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(109,190,46,0.08) 0%, transparent 65%)", transform: "translate(25%,-25%)" }}
        />
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 0%, #6DBE2E 30%, #8FD94A 50%, #6DBE2E 70%, transparent 100%)", opacity: 0.5 }}
        />

        <div className="max-w-[1320px] mx-auto px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#6DBE2E", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                What We Offer
              </span>
            </div>
            <h1 className="mb-5"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(42px, 6vw, 72px)", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.025em", lineHeight: 1.05 }}>
              Our <span style={{ color: "#6DBE2E" }}>Services</span>
            </h1>
            <div className="mb-5 h-px w-16" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))" }} />
            <p className="max-w-2xl"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "15px", fontWeight: 300, color: "rgba(240,255,240,0.52)", lineHeight: 1.85 }}>
              Comprehensive consulting solutions across IT, cloud, industrial automation, manufacturing systems, PLM, and global talent services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24" style={{ background: "#F2F7F0" }}>
        <div className="max-w-[1320px] mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((s, i) => {
              const extra = serviceExtras[s.slug];
              const icon  = extra?.icon  ?? Monitor;
              const image = extra?.image ?? (s as any).image ?? itBanner;

              const linkTo = (s.slug === "recruitment-payroll" || s.slug === "recuirement-payroll")
                ? `/services/${recruitmentSlug}`
                : `/services/${s.slug}`;

              return (
                <ServiceCard
                  key={s.slug}
                  slug={s.slug}
                  title={s.title}
                  description={s.description}
                  items={s.items}
                  image={image}
                  icon={icon}
                  index={i}
                  linkTo={linkTo}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0D1F0A 0%, #061409 100%)", borderTop: "1px solid rgba(109,190,46,0.15)" }}>
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, #8FD94A, #6DBE2E, transparent)", opacity: 0.45 }}
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(109,190,46,0.04) 1px, transparent 0)", backgroundSize: "36px 36px" }}
        />

        <div className="max-w-[1320px] mx-auto px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, #6DBE2E)" }} />
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#6DBE2E", letterSpacing: "0.22em", textTransform: "uppercase" }}>Get Started</span>
              <span className="h-px w-10" style={{ background: "linear-gradient(90deg, #6DBE2E, transparent)" }} />
            </div>
            <h2 className="mb-4"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.08 }}>
              Not Sure Which Service{" "}
              <span style={{ color: "#6DBE2E" }}>You Need?</span>
            </h2>
            <p className="mb-8 max-w-xl mx-auto"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(240,255,240,0.45)", lineHeight: 1.8 }}>
              Talk to our team. We'll assess your needs and recommend the right consulting approach.
            </p>
            <Link to="/contact"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-px"
              style={{ background: "linear-gradient(135deg, #7ACC35 0%, #6DBE2E 50%, #4FA020 100%)", color: "#061409", fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", border: "1px solid rgba(143,217,74,0.45)", boxShadow: "0 4px 20px rgba(109,190,46,0.32), inset 0 1px 0 rgba(255,255,255,0.2)" }}>
              <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              Schedule a Consultation
              <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;