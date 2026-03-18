import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import financeImg from "@/assets/industry-finance.webp";
import itImg       from "@/assets/industry-it.webp";
import oilImg      from "@/assets/industry-oil-gas.webp";
import pharmaImg   from "@/assets/industry-pharma.webp";
import mfgImg      from "@/assets/industry-manufacturing.webp";
import healthImg   from "@/assets/industry-healthcare.webp";

const industries = [
  { name: "Information Technology", image: itImg,      slug: "it",            desc: "Digital transformation, cloud & enterprise architecture", number: "01" },
  { name: "Oil & Gas",              image: oilImg,     slug: "oil-gas",       desc: "Automation, OT security & process control",               number: "02" },
  { name: "Pharmaceuticals",        image: pharmaImg,  slug: "pharma",        desc: "MES, GMP compliance & validation",                        number: "03" },
  { name: "Manufacturing",          image: mfgImg,     slug: "manufacturing", desc: "PLM, MES & production optimisation",                      number: "04" },
  { name: "Finance",                image: financeImg, slug: "finance",       desc: "Cloud migration, cybersecurity & compliance",             number: "05" },
  { name: "Healthcare",             image: healthImg,  slug: "healthcare",    desc: "Health IT, HL7/FHIR & digital health",                   number: "06" },
];

/* ── Corner bracket ── */
const Bracket = ({ flip = false }: { flip?: boolean }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className={flip ? "rotate-180" : ""}>
    <path d="M2 26 L2 2 L26 2" stroke="#6DBE2E" strokeWidth="1.5" strokeOpacity="0.7" />
    <circle cx="2" cy="2" r="2" fill="#6DBE2E" fillOpacity="0.85" />
  </svg>
);

/* ── Industry card with rich JS-driven hover ── */
const IndustryCard = ({ ind, i }: { ind: typeof industries[0]; i: number }) => {
  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el      = e.currentTarget as HTMLElement;
    const img     = el.querySelector<HTMLElement>("[data-img]")!;
    const greenTint = el.querySelector<HTMLElement>("[data-tint]")!;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    const rule    = el.querySelector<HTMLElement>("[data-rule]")!;
    const desc    = el.querySelector<HTMLElement>("[data-desc]")!;
    const arrow   = el.querySelector<HTMLElement>("[data-arrow]")!;
    const bracket = el.querySelector<HTMLElement>("[data-bracket]")!;
    const num     = el.querySelector<HTMLElement>("[data-num]")!;

    el.style.transform   = "translateY(-6px) scale(1.015)";
    el.style.boxShadow   = "0 28px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(109,190,46,0.35)";
    el.style.borderColor = "rgba(109,190,46,0.45)";

    img.style.transform  = "scale(1.08)";

    greenTint.style.opacity  = "1";
    shimmer.style.opacity    = "1";
    rule.style.width         = "48px";
    bracket.style.opacity    = "0.7";
    bracket.style.transform  = "translateY(0)";
    num.style.opacity        = "0.85";

    desc.style.opacity   = "1";
    desc.style.transform = "translateY(0)";

    arrow.style.background   = "linear-gradient(135deg, #6DBE2E, #4FA020)";
    arrow.style.borderColor  = "#6DBE2E";
    arrow.style.boxShadow    = "0 4px 14px rgba(109,190,46,0.45)";
  };

  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el      = e.currentTarget as HTMLElement;
    const img     = el.querySelector<HTMLElement>("[data-img]")!;
    const greenTint = el.querySelector<HTMLElement>("[data-tint]")!;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    const rule    = el.querySelector<HTMLElement>("[data-rule]")!;
    const desc    = el.querySelector<HTMLElement>("[data-desc]")!;
    const arrow   = el.querySelector<HTMLElement>("[data-arrow]")!;
    const bracket = el.querySelector<HTMLElement>("[data-bracket]")!;
    const num     = el.querySelector<HTMLElement>("[data-num]")!;

    el.style.transform   = "translateY(0) scale(1)";
    el.style.boxShadow   = "0 2px 16px rgba(11,25,41,0.07)";
    el.style.borderColor = "rgba(109,190,46,0.12)";

    img.style.transform  = "scale(1)";

    greenTint.style.opacity  = "0";
    shimmer.style.opacity    = "0";
    rule.style.width         = "28px";
    bracket.style.opacity    = "0";
    bracket.style.transform  = "translateY(-4px)";
    num.style.opacity        = "0.45";

    desc.style.opacity   = "0";
    desc.style.transform = "translateY(8px)";

    arrow.style.background   = "rgba(255,255,255,0.07)";
    arrow.style.borderColor  = "rgba(255,255,255,0.22)";
    arrow.style.boxShadow    = "none";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/industries/${ind.slug}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="relative block rounded-2xl overflow-hidden"
        style={{
          aspectRatio: "4/3",
          border: "1px solid rgba(109,190,46,0.12)",
          boxShadow: "0 2px 16px rgba(11,25,41,0.07)",
          transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s, border-color 0.3s",
        }}
      >
        {/* Image */}
        <img
          data-img
          src={ind.image}
          alt={ind.name}
          className="w-full h-full object-cover"
          style={{ transition: "transform 0.75s cubic-bezier(0.22,1,0.36,1)" }}
        />

        {/* Base dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(4,13,6,0.93) 0%, rgba(4,13,6,0.45) 50%, rgba(4,13,6,0.12) 100%)",
          }}
        />

        {/* Green tint on hover */}
        <div
          data-tint
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(109,190,46,0.2) 0%, rgba(109,190,46,0.07) 50%, transparent 100%)",
            opacity: 0,
            transition: "opacity 0.4s",
          }}
        />

        {/* Green shimmer top border */}
        <div
          data-shimmer
          className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent, #6DBE2E, #8FD94A, #6DBE2E, transparent)",
            opacity: 0,
            transition: "opacity 0.3s",
          }}
        />

        {/* Slide number top-left */}
        <div
          data-num
          className="absolute top-5 left-5 pointer-events-none"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "13px",
            fontWeight: 600,
            color: "rgba(143,217,74,0.9)",
            letterSpacing: "0.1em",
            opacity: 0.45,
            transition: "opacity 0.3s",
          }}
        >
          {ind.number}
        </div>

        {/* Corner bracket top-right */}
        <div
          data-bracket
          className="absolute top-4 right-4 pointer-events-none"
          style={{
            opacity: 0,
            transform: "translateY(-4px)",
            transition: "opacity 0.3s, transform 0.35s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <Bracket flip />
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">

          {/* Green rule */}
          <div
            data-rule
            className="mb-3 h-px"
            style={{
              width: "28px",
              background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.25))",
              transition: "width 0.4s cubic-bezier(0.22,1,0.36,1)",
            }}
          />

          <div className="flex items-end justify-between gap-3">
            <div className="min-w-0">

              {/* Desc — slides up on hover */}
              <p
                data-desc
                className="mb-1.5 leading-snug pointer-events-none"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: "11.5px",
                  fontWeight: 300,
                  color: "rgba(143,217,74,0.8)",
                  letterSpacing: "0.02em",
                  opacity: 0,
                  transform: "translateY(8px)",
                  transition: "opacity 0.35s, transform 0.4s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                {ind.desc}
              </p>

              {/* Name */}
              <h3
                className="leading-tight"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(18px, 2vw, 22px)",
                  fontWeight: 600,
                  color: "rgba(240,255,240,0.93)",
                  letterSpacing: "-0.01em",
                }}
              >
                {ind.name}
              </h3>
            </div>

            {/* Arrow button */}
            <div
              data-arrow
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
              style={{
                border: "1px solid rgba(255,255,255,0.22)",
                background: "rgba(255,255,255,0.07)",
                transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
              }}
            >
              <ArrowRight
                size={14}
                strokeWidth={2}
                style={{
                  color: "white",
                  transform: "rotate(-45deg)",
                  transition: "transform 0.3s",
                }}
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

/* ── Main section ── */
const IndustriesSection = () => (
  <section id="industries" className="relative py-24 lg:py-36 overflow-hidden" style={{ background: "#F8FBF6" }}>

    {/* Subtle green ambient */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle at 80% 10%, rgba(109,190,46,0.05) 0%, transparent 45%), " +
          "radial-gradient(circle at 10% 90%, rgba(109,190,46,0.04) 0%, transparent 45%)",
      }}
    />

    <div className="max-w-[1320px] mx-auto px-8">

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
              style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: "10.5px",
                fontWeight: 600,
                color: "#4FA020",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Industries
            </span>
          </div>

          <h2
            className="leading-[1.06]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(34px, 4vw, 52px)",
              fontWeight: 600,
              color: "#0D1F0A",
              letterSpacing: "-0.02em",
            }}
          >
            Sectors We{" "}
            <span style={{ color: "#5AB025" }}>Serve</span>
          </h2>
        </div>

        <Link
          to="/industries"
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
          All Industries
          <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </motion.div>

      {/* Cards grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {industries.map((ind, i) => (
          <IndustryCard key={ind.name} ind={ind} i={i} />
        ))}
      </div>

      {/* Bottom strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="relative mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0D1F0A 0%, #132B0F 100%)",
          border: "1px solid rgba(109,190,46,0.22)",
          boxShadow: "0 4px 24px rgba(13,31,10,0.15)",
        }}
      >
        {/* Green shimmer top */}
        <div
          className="absolute top-0 left-8 right-8 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }}
        />

        <div>
          <p
            className="text-[10.5px] font-semibold uppercase tracking-[0.2em] mb-1"
            style={{ color: "rgba(109,190,46,0.7)", fontFamily: "'DM Sans', system-ui, sans-serif" }}
          >
            Cross-industry expertise
          </p>
          <p
            style={{
              color: "rgba(240,255,240,0.78)",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Deep sector knowledge across every vertical we serve.
          </p>
        </div>

        <Link
          to="/industries"
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
            boxShadow: "0 4px 20px rgba(109,190,46,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
          Explore All Industries
          <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </Link>
      </motion.div>

    </div>
  </section>
);

export default IndustriesSection;