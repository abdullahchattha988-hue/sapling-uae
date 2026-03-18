import { motion } from "framer-motion";
import { Monitor, Cloud, Settings, Factory, Box, Users2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import itBanner    from "@/assets/it-consultant-banner.webp";
import autoBanner  from "@/assets/industrial-automation-1.webp";
import mfgBanner   from "@/assets/manufacturing-systems-banner.webp";
import cloudBanner from "@/assets/cloud-services-banner.webp";
import plmImg      from "@/assets/plm-systems-1.webp";
import hrBanner    from "@/assets/recuirement-and-payroll-banner.webp";

const services = [
  {
    icon: Monitor,
    title: "IT Consulting",
    slug: "it-consulting",
    image: itBanner,
    desc: "End-to-end IT strategy, architecture design, digital transformation, and managed services.",
    tags: [".NET", "Java", "Python", "DevOps"],
    number: "01",
  },
  {
    icon: Settings,
    title: "Industrial Automation",
    slug: "industrial-automation",
    image: autoBanner,
    desc: "PLC, SCADA, and DCS engineering for Oil & Gas, Manufacturing, and Pharma environments.",
    tags: ["PLC", "SCADA", "DCS", "Siemens"],
    number: "02",
  },
  {
    icon: Factory,
    title: "MES Systems",
    slug: "manufacturing-systems",
    image: mfgBanner,
    desc: "Manufacturing Execution System design and implementation for production tracking and quality.",
    tags: ["SAP ME", "Apriso", "GE Proficy"],
    number: "03",
  },
  {
    icon: Box,
    title: "PLM Systems",
    slug: "product-lifecycle-management",
    image: plmImg,
    desc: "Product Lifecycle Management consulting across leading platforms for complex engineering workflows.",
    tags: ["Teamcenter", "Windchill", "Enovia"],
    number: "04",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    slug: "cloud-digital",
    image: cloudBanner,
    desc: "Multi-cloud strategy, migration, architecture, and managed operations across leading cloud platforms.",
    tags: ["AWS", "Azure", "GCP", "DevOps"],
    number: "05",
  },
  {
    icon: Users2,
    title: "Recruitment & Payroll",
    slug: "recruitment-payroll",
    image: hrBanner,
    desc: "Global talent acquisition, technical staffing, and compliant multi-country payroll management.",
    tags: ["Global", "Compliant", "Fast"],
    number: "06",
  },
];

const ServicesSection = () => (
  <section
    id="services"
    className="relative py-24 lg:py-36 overflow-hidden"
    style={{ background: "#F8FBF6" }}
  >
    {/* Background ambient blobs */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.055]"
        style={{ background: "radial-gradient(circle, #6DBE2E 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 -left-24 w-[480px] h-[480px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, #6DBE2E 0%, transparent 70%)" }}
      />
      <div
        className="absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.6) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
    </div>

    <div className="max-w-[1320px] mx-auto px-8 relative">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
      >
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-px w-10 shrink-0"
              style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.25))" }}
            />
            <span
              className="text-[10.5px] font-semibold uppercase tracking-[0.22em]"
              style={{ color: "#4FA020", fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              Our Services
            </span>
          </div>

          <h2
            className="leading-[1.08]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(34px, 4vw, 52px)",
              fontWeight: 600,
              color: "#0D1F0A",
              letterSpacing: "-0.02em",
            }}
          >
            Comprehensive Consulting<br />
            <span style={{ color: "#5AB025" }}>Solutions</span>
          </h2>
        </div>

        <Link
          to="/services"
          className="group inline-flex items-center gap-2 shrink-0 transition-all duration-200"
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            color: "#4FA020",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          View All Services
          <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </motion.div>

      {/* Cards grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to={`/services/${s.slug}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden h-full transition-all duration-300"
              style={{
                border: "1px solid rgba(109,190,46,0.14)",
                boxShadow: "0 2px 14px rgba(13,31,10,0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(109,190,46,0.42)";
                el.style.boxShadow   = "0 20px 56px -12px rgba(13,31,10,0.16), 0 0 0 1px rgba(109,190,46,0.18)";
                el.style.transform   = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(109,190,46,0.14)";
                el.style.boxShadow   = "0 2px 14px rgba(13,31,10,0.06)";
                el.style.transform   = "translateY(0)";
              }}
            >
              {/* Image area */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(13,31,10,0.6) 0%, rgba(13,31,10,0.12) 55%, transparent 100%)",
                  }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(90deg, transparent, #6DBE2E, #8FD94A, #6DBE2E, transparent)",
                  }}
                />
                <div
                  className="absolute top-4 left-4"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "rgba(143,217,74,0.75)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {s.number}
                </div>
                <div
                  className="absolute bottom-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: "linear-gradient(135deg, rgba(109,190,46,0.92) 0%, rgba(79,160,32,0.92) 100%)",
                    boxShadow: "0 4px 14px rgba(109,190,46,0.45)",
                  }}
                >
                  <s.icon size={16} strokeWidth={1.8} style={{ color: "#061409" }} />
                </div>
              </div>

              {/* Content area */}
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="mb-3 transition-colors duration-200 group-hover:text-[#4FA020]"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#0D1F0A",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                >
                  {s.title}
                </h3>

                <div
                  className="mb-4 h-px w-10 transition-all duration-300 group-hover:w-16"
                  style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))" }}
                />

                <p
                  className="leading-[1.75] mb-5 flex-1"
                  style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: "13.5px",
                    fontWeight: 300,
                    color: "rgba(13,31,10,0.55)",
                  }}
                >
                  {s.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10.5px] font-semibold px-2.5 py-1 rounded-full transition-all duration-200 group-hover:border-[rgba(109,190,46,0.35)] group-hover:text-[#4FA020]"
                      style={{
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                        letterSpacing: "0.06em",
                        background: "#F2F8EE",
                        color: "rgba(13,31,10,0.5)",
                        border: "1px solid rgba(109,190,46,0.18)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid rgba(109,190,46,0.12)" }}
                >
                  <span
                    className="inline-flex items-center gap-1.5 transition-all duration-200 group-hover:gap-2.5"
                    style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#4FA020",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Learn More
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </span>
                  <div
                    className="w-1.5 h-1.5 rounded-full opacity-35 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "#6DBE2E" }}
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-14 relative flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D1F0A 0%, #132B0F 60%, #0A1E0D 100%)",
          border: "1px solid rgba(109,190,46,0.22)",
          boxShadow: "0 8px 40px rgba(13,31,10,0.2)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(109,190,46,0.08) 0%, transparent 65%)" }}
        />
        <div
          className="absolute top-0 left-8 right-8 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }}
        />

        <div className="relative">
          <p
            className="text-[10.5px] font-semibold uppercase tracking-[0.2em] mb-1"
            style={{ color: "rgba(109,190,46,0.7)", fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            Need a tailored solution?
          </p>
          <p
            style={{
              color: "rgba(240,255,240,0.75)",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "20px",
              fontWeight: 400,
            }}
          >
            Let's discuss your enterprise consulting requirements.
          </p>
        </div>

        <Link
          to="/contact"
          className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg overflow-hidden shrink-0 transition-all duration-300 hover:-translate-y-px"
          style={{
            background: "linear-gradient(135deg, #7ACC35 0%, #6DBE2E 50%, #4FA020 100%)",
            color: "#061409",
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            border: "1px solid rgba(143,217,74,0.45)",
            boxShadow: "0 4px 20px rgba(109,190,46,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
          Get in Touch
          <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </motion.div>

    </div>
  </section>
);

export default ServicesSection;