import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const faqCategories = [
  {
    cat: "General",
    faqs: [
      { q: "What services does Sapling Consultancy Services provide?",    a: "We provide comprehensive IT consulting, industrial automation (PLC/SCADA/DCS), cloud & digital solutions, MES, PLM, cybersecurity, and global recruitment & payroll services." },
      { q: "Which industries do you support?",                           a: "We serve Information Technology, Oil & Gas, Pharmaceuticals, Manufacturing, Finance, and Healthcare industries globally." },
      { q: "Where is Sapling Consultancy headquartered?",                 a: "We are headquartered at Compass Building, Al Hamra Industrial Zone FZ, Ras Al Khaimah, UAE. Licensed under RAKEZ (License #47027650) as an FZ-LLC." },
      { q: "Do you support startups as well as enterprises?",            a: "Absolutely. We support both growing startups and large enterprises including Tier-1 companies such as TCS, Cognizant, Wipro, and L&T." },
    ],
  },
  {
    cat: "Services",
    faqs: [
      { q: "What automation platforms do you work with?",  a: "We work with major PLC, SCADA, and DCS platforms including Siemens, Rockwell, ABB, Honeywell Experion, Emerson DeltaV, and Yokogawa CENTUM." },
      { q: "Which PLM platforms do you implement?",        a: "We implement Siemens Teamcenter, PTC Windchill, Dassault Enovia/3DEXPERIENCE, and Optiva for formula and recipe management." },
      { q: "What cloud platforms do you support?",         a: "We work with AWS, Microsoft Azure, and Google Cloud Platform, offering multi-cloud and hybrid cloud strategies tailored to your organisation." },
      { q: "Do you offer cybersecurity services?",         a: "Yes, we provide security risk assessments, penetration testing, IAM design, SOC consulting, and compliance consulting for ISO 27001 and NIST frameworks." },
    ],
  },
  {
    cat: "Engagement",
    faqs: [
      { q: "What engagement models do you offer?",         a: "We offer flexible models including staff augmentation, project-based delivery, managed services, and build-operate-transfer engagements." },
      { q: "How do you ensure quality in consulting?",     a: "We follow rigorous quality processes, use industry best practices, and maintain continuous improvement through client feedback and performance metrics." },
      { q: "Do you offer global payroll management?",      a: "Yes, we provide end-to-end multi-country payroll management including compliance, tax management, and employee benefits administration." },
      { q: "How do I get started with Sapling?",            a: "Simply email info@Saplinguae.com or use our Contact page. Our team will schedule a discovery call to understand your needs and propose the right approach." },
    ],
  },
];

/* ── Single FAQ item ── */
const FaqItem = ({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { q: string; a: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06, duration: 0.5 }}
    className="relative overflow-hidden rounded-2xl cursor-pointer"
    style={{
      background: isOpen ? "#ffffff" : "#F2F7F0",
      border: isOpen ? "1px solid rgba(109,190,46,0.38)" : "1px solid rgba(109,190,46,0.1)",
      boxShadow: isOpen ? "0 8px 32px -8px rgba(13,31,10,0.12)" : "none",
      transition: "all 0.3s",
    }}
    onClick={onToggle}
  >
    {/* Shimmer top */}
    <div
      className="absolute top-0 left-6 right-6 h-px transition-opacity duration-300"
      style={{
        background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)",
        opacity: isOpen ? 1 : 0,
      }}
    />
    {/* Left accent bar */}
    <div
      className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-300"
      style={{
        background: "linear-gradient(to bottom, transparent, #6DBE2E, transparent)",
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "scaleY(1)" : "scaleY(0.3)",
      }}
    />

    <div className="flex items-start gap-4 px-6 py-5 pl-7">
      <span
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "12px",
          fontWeight: 600,
          color: isOpen ? "#6DBE2E" : "rgba(13,31,10,0.2)",
          letterSpacing: "0.08em",
          lineHeight: 1.6,
          flexShrink: 0,
          marginTop: "2px",
          transition: "color 0.3s",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span
        className="flex-1"
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: "14px",
          fontWeight: isOpen ? 500 : 400,
          color: isOpen ? "#0D1F0A" : "rgba(13,31,10,0.68)",
          lineHeight: 1.55,
          transition: "color 0.3s",
        }}
      >
        {faq.q}
      </span>
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300"
        style={{
          background: isOpen ? "linear-gradient(135deg, #7ACC35, #6DBE2E)" : "rgba(109,190,46,0.08)",
          border: isOpen ? "1px solid rgba(143,217,74,0.4)" : "1px solid rgba(109,190,46,0.2)",
          boxShadow: isOpen ? "0 4px 12px rgba(109,190,46,0.28)" : "none",
        }}
      >
        {isOpen
          ? <Minus size={12} strokeWidth={2.5} style={{ color: "#061409" }} />
          : <Plus  size={12} strokeWidth={2.5} style={{ color: "#6DBE2E" }} />
        }
      </div>
    </div>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: "hidden" }}
        >
          <div className="mx-6 ml-7 h-px mb-4" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.12))" }} />
          <p
            className="px-6 pb-6 pl-7"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "13.5px",
              fontWeight: 300,
              color: "rgba(13,31,10,0.55)",
              lineHeight: 1.82,
            }}
          >
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FaqsPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [openMap, setOpenMap] = useState<Record<string, number | null>>({
    General:    0,
    Services:   null,
    Engagement: null,
  });

  const toggle = (cat: string, i: number) =>
    setOpenMap((prev) => ({ ...prev, [cat]: prev[cat] === i ? null : i }));

  return (
    <div className="min-h-screen" style={{ background: "#F8FBF6" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0A1E0D 0%, #061409 55%, #040D06 100%)" }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(109,190,46,0.07) 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Glow orb */}
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(ellipse, rgba(109,190,46,0.09) 0%, transparent 65%)",
            transform: "translate(25%,-25%)",
          }}
        />
        {/* Top border line */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #6DBE2E 25%, #8FD94A 50%, #6DBE2E 75%, transparent 100%)",
            opacity: 0.55,
          }}
        />
        {/* Diagonal SVG lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            className="absolute right-0 top-0 h-full opacity-[0.05]"
            viewBox="0 0 200 600"
            fill="none"
            preserveAspectRatio="none"
            style={{ width: "200px" }}
          >
            <line x1="200" y1="0" x2="0" y2="600" stroke="#6DBE2E" strokeWidth="1.5" />
            <line x1="155" y1="0" x2="-45" y2="600" stroke="#6DBE2E" strokeWidth="0.75" />
          </svg>
        </div>

        <div className="max-w-[1320px] mx-auto px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#6DBE2E", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                Help Centre
              </span>
            </div>

            <div className="overflow-hidden mb-5">
              {["Frequently Asked", "Questions"].map((word, i) => (
                <motion.h1
                  key={i}
                  initial={{ y: 70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="block leading-[1.04]"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(42px, 6vw, 74px)",
                    fontWeight: 600,
                    color: i === 0 ? "#ffffff" : "#6DBE2E",
                    letterSpacing: "-0.025em",
                  }}
                >
                  {word}
                </motion.h1>
              ))}
            </div>

            <motion.div
              className="mb-6 h-px w-16"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.55 }}
              style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))", transformOrigin: "left" }}
            />

            <motion.p
              className="mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "15px", fontWeight: 300, color: "rgba(240,255,240,0.52)", lineHeight: 1.85 }}
            >
              Everything you need to know about Sapling Consultancy Services — our services, engagement models, and global operations.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-px"
                style={{
                  background: "linear-gradient(135deg, #7ACC35 0%, #6DBE2E 50%, #4FA020 100%)",
                  color: "#061409",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(143,217,74,0.45)",
                  boxShadow: "0 4px 20px rgba(109,190,46,0.32), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                Contact Our Team <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ SECTIONS ── */}
      <section className="py-24 lg:py-32" style={{ background: "#F2F7F0" }}>
        <div className="max-w-[960px] mx-auto px-8">
          {faqCategories.map((cat, ci) => (
            <motion.div
              key={cat.cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.6 }}
              className="mb-14 last:mb-0"
            >
              {/* Category heading */}
              <div
                className="flex items-center gap-4 mb-7"
                style={{ borderBottom: "1px solid rgba(109,190,46,0.18)", paddingBottom: "16px" }}
              >
                <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
                <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "28px", fontWeight: 600, color: "#0D1F0A", letterSpacing: "-0.01em" }}>
                  {cat.cat}
                </h2>
                <span className="flex-1 h-px" style={{ background: "rgba(109,190,46,0.15)" }} />
                <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10px", fontWeight: 600, color: "#4FA020", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                  {cat.faqs.length} questions
                </span>
              </div>

              <div className="space-y-3">
                {cat.faqs.map((faq, i) => (
                  <FaqItem
                    key={i}
                    faq={faq}
                    index={i}
                    isOpen={openMap[cat.cat] === i}
                    onToggle={() => toggle(cat.cat, i)}
                  />
                ))}
              </div>
            </motion.div>
          ))}

          {/* ── CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl px-8 py-12 text-center mt-16"
            style={{
              background: "linear-gradient(135deg, #0D1F0A 0%, #132B0F 100%)",
              border: "1px solid rgba(109,190,46,0.25)",
              boxShadow: "0 8px 40px rgba(13,31,10,0.2)",
            }}
          >
            <div className="absolute top-0 left-8 right-8 h-px" style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, #8FD94A, #6DBE2E, transparent)", opacity: 0.7 }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(109,190,46,0.1) 0%, transparent 65%)" }} />
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(109,190,46,0.05) 1px, transparent 0)", backgroundSize: "28px 28px" }} />

            <h3
              className="mb-2 relative z-10"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.02em" }}
            >
              Still have <span style={{ color: "#6DBE2E" }}>questions?</span>
            </h3>
            <div className="relative z-10 flex justify-center mb-5">
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }} />
            </div>
            <p
              className="mb-8 relative z-10 max-w-md mx-auto"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(240,255,240,0.42)", lineHeight: 1.8 }}
            >
              Our team is ready to help you find the right solution for your organisation.
            </p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-px z-10"
              style={{
                background: "linear-gradient(135deg, #7ACC35 0%, #6DBE2E 50%, #4FA020 100%)",
                color: "#061409",
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.07em",
                textTransform: "uppercase",
                border: "1px solid rgba(143,217,74,0.45)",
                boxShadow: "0 4px 20px rgba(109,190,46,0.32), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              Contact Our Team
              <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FaqsPage;