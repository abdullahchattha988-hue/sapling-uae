import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Award, Cpu, Globe2, UserCheck, ShieldCheck, TrendingUp,
  CheckCircle2, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

/* ── Animated counter ─────────────────────────────────── */
const Counter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref               = useRef<HTMLSpanElement>(null);
  const inView            = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step  = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 25);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ── Data ─────────────────────────────────────────────── */
const stats = [
  { value: 4,  suffix: "+", label: "Continents",        sub: "Global Operations" },
  { value: 50, suffix: "+", label: "Enterprise Clients", sub: "TCS, Wipro & More" },
  { value: 6,  suffix: "",  label: "Industries",         sub: "Sectors Served"    },
  { value: 15, suffix: "+", label: "Technologies",       sub: "Enterprise Stack"  },
];

const strengths = [
  {
    icon: Award,
    title: "Tier-1 Experience",
    desc: "Proven track record delivering for TCS, Wipro, Cognizant, and L&T across global enterprise environments.",
    highlight: "TCS · Wipro · Cognizant · L&T",
    number: "01",
  },
  {
    icon: Cpu,
    title: "Deep Technical Expertise",
    desc: "Specialists in IT consulting, PLC/SCADA/DCS, MES, PLM, cloud transformation, and cybersecurity.",
    highlight: "15+ Technology Domains",
    number: "02",
  },
  {
    icon: Globe2,
    title: "4-Continent Reach",
    desc: "Active delivery capability across North America, Europe, the Middle East, and South Asia.",
    highlight: "US · UK · UAE · India · Germany",
    number: "03",
  },
  {
    icon: UserCheck,
    title: "End-to-End Talent Solutions",
    desc: "Specialised technical recruitment, contract staffing, and compliant multi-country payroll management.",
    highlight: "Global · Compliant · Fast",
    number: "04",
  },
  {
    icon: ShieldCheck,
    title: "Fully Licensed & Compliant",
    desc: "RAKEZ FZ-LLC registered entity (License #47027650) — built for international enterprise engagements.",
    highlight: "RAKEZ · License #47027650",
    number: "05",
  },
  {
    icon: TrendingUp,
    title: "Measurable Outcomes",
    desc: "Every engagement is driven by clear KPIs, agreed milestones, and an unwavering commitment to client success.",
    highlight: "KPI-Driven Delivery",
    number: "06",
  },
];

const clients = ["TCS", "Cognizant", "Wipro", "L&T"];

const checkPoints = [
  "Dedicated engagement managers on every project",
  "Flexible models: staff augmentation, managed services & project-based",
  "ISO-aligned delivery processes",
  "Transparent reporting and regular milestone reviews",
];

/* ── Green divider SVG ────────────────────────────────── */
const GreenDivider = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 300 2" fill="none" className={`w-full ${className}`} preserveAspectRatio="none" height="2">
    <defs>
      <linearGradient id="gd-wcu" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#6DBE2E" stopOpacity="0"   />
        <stop offset="40%"  stopColor="#8FD94A" stopOpacity="0.8" />
        <stop offset="70%"  stopColor="#6DBE2E" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#6DBE2E" stopOpacity="0"   />
      </linearGradient>
    </defs>
    <rect width="300" height="1.5" fill="url(#gd-wcu)" />
  </svg>
);

/* ── Strength card — JS-driven hover ─────────────────── */
const StrengthCard = ({ s, i }: { s: typeof strengths[0]; i: number }) => {
  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const el   = e.currentTarget as HTMLElement;
    const rule = el.querySelector<HTMLElement>("[data-rule]")!;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    el.style.background   = "rgba(109,190,46,0.07)";
    el.style.borderColor  = "rgba(109,190,46,0.4)";
    el.style.transform    = "translateY(-3px)";
    el.style.boxShadow    = "0 16px 48px rgba(0,0,0,0.3), 0 0 0 1px rgba(109,190,46,0.1)";
    rule.style.width      = "56px";
    shimmer.style.opacity = "1";
  };
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el   = e.currentTarget as HTMLElement;
    const rule = el.querySelector<HTMLElement>("[data-rule]")!;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    el.style.background   = "rgba(255,255,255,0.03)";
    el.style.borderColor  = "rgba(255,255,255,0.07)";
    el.style.transform    = "translateY(0)";
    el.style.boxShadow    = "none";
    rule.style.width      = "32px";
    shimmer.style.opacity = "0";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative p-7 rounded-2xl overflow-hidden cursor-default"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "background 0.3s, border-color 0.3s, transform 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Top shimmer */}
      <div
        data-shimmer
        className="absolute top-0 left-4 right-4 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)",
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      />

      {/* Slide number */}
      <div
        className="absolute top-5 right-6 opacity-20"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "32px",
          fontWeight: 600,
          color: "#6DBE2E",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {s.number}
      </div>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
        style={{
          background: "linear-gradient(135deg, rgba(109,190,46,0.18) 0%, rgba(109,190,46,0.06) 100%)",
          border: "1px solid rgba(109,190,46,0.25)",
        }}
      >
        <s.icon size={20} strokeWidth={1.6} style={{ color: "#6DBE2E" }} />
      </div>

      {/* Title */}
      <h3
        className="mb-1"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "21px",
          fontWeight: 600,
          color: "rgba(240,255,240,0.9)",
          letterSpacing: "-0.01em",
          lineHeight: 1.2,
        }}
      >
        {s.title}
      </h3>

      {/* Green rule */}
      <div
        data-rule
        className="mb-4 h-px"
        style={{
          width: "32px",
          background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))",
          transition: "width 0.3s",
        }}
      />

      {/* Description */}
      <p
        className="leading-[1.75] mb-5"
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: "13.5px",
          fontWeight: 300,
          color: "rgba(240,255,240,0.42)",
        }}
      >
        {s.desc}
      </p>

      {/* Highlight pill */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
        style={{
          border: "1px solid rgba(109,190,46,0.22)",
          background: "rgba(109,190,46,0.06)",
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#6DBE2E" }} />
        <span
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "10.5px",
            fontWeight: 600,
            color: "#6DBE2E",
            letterSpacing: "0.08em",
          }}
        >
          {s.highlight}
        </span>
      </div>
    </motion.div>
  );
};

/* ── Client card — JS-driven hover ───────────────────── */
const ClientCard = ({ c, i }: { c: string; i: number }) => {
  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLElement;
    const text = el.querySelector<HTMLElement>("[data-text]")!;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    el.style.background   = "rgba(109,190,46,0.07)";
    el.style.borderColor  = "rgba(109,190,46,0.35)";
    el.style.transform    = "translateY(-2px)";
    el.style.boxShadow    = "0 12px 32px rgba(0,0,0,0.25)";
    text.style.color      = "#ffffff";
    shimmer.style.opacity = "1";
  };
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget as HTMLElement;
    const text = el.querySelector<HTMLElement>("[data-text]")!;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    el.style.background   = "rgba(255,255,255,0.03)";
    el.style.borderColor  = "rgba(255,255,255,0.07)";
    el.style.transform    = "translateY(0)";
    el.style.boxShadow    = "none";
    text.style.color      = "rgba(240,255,240,0.32)";
    shimmer.style.opacity = "0";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative flex items-center justify-center py-7 px-6 rounded-2xl overflow-hidden cursor-default"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "background 0.3s, border-color 0.3s, transform 0.3s, box-shadow 0.3s",
      }}
    >
      <div
        data-shimmer
        className="absolute top-0 left-4 right-4 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)",
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      />
      <span
        data-text
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "26px",
          fontWeight: 600,
          color: "rgba(240,255,240,0.32)",
          letterSpacing: "0.04em",
          transition: "color 0.3s",
        }}
      >
        {c}
      </span>
    </motion.div>
  );
};

/* ── Main component ───────────────────────────────────── */
const WhyChooseUs = () => (
  <section
    id="why-choose-us"
    className="relative overflow-hidden"
    style={{ background: "#061409" }}
  >
    {/* Dot grid */}
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #6DBE2E 1px, transparent 0)",
        backgroundSize: "36px 36px",
      }}
    />

    {/* Ambient glow blobs */}
    <div
      className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(ellipse, rgba(109,190,46,0.07) 0%, transparent 70%)",
        transform: "translate(30%, -30%)",
      }}
    />
    <div
      className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
      style={{
        background: "radial-gradient(ellipse, rgba(109,190,46,0.04) 0%, transparent 70%)",
        transform: "translate(-30%, 30%)",
      }}
    />

    {/* Vertical decorative line */}
    <div
      className="absolute top-0 bottom-0 right-[80px] w-px pointer-events-none hidden xl:block"
      style={{
        background: "linear-gradient(to bottom, transparent, rgba(109,190,46,0.08) 30%, rgba(109,190,46,0.08) 70%, transparent)",
      }}
    />

    {/* ══ STATS BAR ══ */}
    <div style={{ borderBottom: "1px solid rgba(109,190,46,0.08)" }}>
      <div className="max-w-[1320px] mx-auto px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center lg:text-left px-6 py-2"
            >
              {i > 0 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-14 hidden lg:block"
                  style={{
                    background: "linear-gradient(to bottom, transparent, rgba(109,190,46,0.2), transparent)",
                  }}
                />
              )}

              <div
                className="leading-none mb-2"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(44px, 5vw, 64px)",
                  fontWeight: 600,
                  color: "#6DBE2E",
                  letterSpacing: "-0.02em",
                  textShadow: "0 0 40px rgba(109,190,46,0.28)",
                }}
              >
                <Counter target={s.value} suffix={s.suffix} />
              </div>

              <div
                className="mb-0.5"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "rgba(240,255,240,0.9)",
                  letterSpacing: "0.01em",
                }}
              >
                {s.label}
              </div>

              <div
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: "10px",
                  fontWeight: 500,
                  color: "rgba(240,255,240,0.22)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {s.sub}
              </div>

              <div
                className="mt-4 h-px w-8 lg:w-12 mx-auto lg:mx-0"
                style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>

    {/* ══ MAIN SECTION ══ */}
    <div className="max-w-[1320px] mx-auto px-8 py-24 lg:py-32 relative z-10">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
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
                color: "#6DBE2E",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Why Choose Us
            </span>
          </div>

          <h2
            className="leading-[1.06] max-w-2xl"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(36px, 4.5vw, 58px)",
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.02em",
            }}
          >
            What Sets{" "}
            <span style={{ color: "#6DBE2E" }}>Sapling</span>
            <br className="hidden md:block" /> Apart
          </h2>
        </div>

        <Link
          to="/about"
          className="group inline-flex items-center gap-2 shrink-0 transition-all duration-200"
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "13px",
            fontWeight: 600,
            color: "#6DBE2E",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Learn About Us
          <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </motion.div>

      {/* Strengths grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {strengths.map((s, i) => <StrengthCard key={s.title} s={s} i={i} />)}
      </div>

      {/* ══ BOTTOM ROW ══ */}
      <div
        className="grid lg:grid-cols-2 gap-12 items-center pt-14"
        style={{ borderTop: "1px solid rgba(109,190,46,0.08)" }}
      >
        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-px w-8 shrink-0"
              style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }}
            />
            <span
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                color: "rgba(109,190,46,0.7)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Our Commitment
            </span>
          </div>

          <h3
            className="mb-7 leading-[1.1]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(26px, 3vw, 36px)",
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "-0.01em",
            }}
          >
            Our Commitment to<br />
            <span style={{ color: "#6DBE2E" }}>Every Client</span>
          </h3>

          <div className="space-y-4 mb-9">
            {checkPoints.map((pt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="flex items-start gap-3.5"
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{
                    background: "linear-gradient(135deg, rgba(109,190,46,0.2), rgba(109,190,46,0.08))",
                    border: "1px solid rgba(109,190,46,0.3)",
                  }}
                >
                  <CheckCircle2 size={12} strokeWidth={2.5} style={{ color: "#6DBE2E" }} />
                </div>
                <span
                  style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "rgba(240,255,240,0.55)",
                    lineHeight: 1.7,
                  }}
                >
                  {pt}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
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
              boxShadow: "0 4px 20px rgba(109,190,46,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            Start a Conversation
            <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: "10px",
                fontWeight: 600,
                color: "rgba(240,255,240,0.22)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              Trusted by Tier-1 Organisations
            </span>
            <span className="flex-1 h-px" style={{ background: "rgba(109,190,46,0.1)" }} />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {clients.map((c, i) => <ClientCard key={c} c={c} i={i} />)}
          </div>

          {/* Bottom note */}
          <div
            className="mt-5 px-5 py-4 rounded-xl"
            style={{
              background: "rgba(109,190,46,0.04)",
              border: "1px solid rgba(109,190,46,0.12)",
            }}
          >
            <GreenDivider className="mb-3 opacity-50" />
            <p
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: "12px",
                fontWeight: 300,
                color: "rgba(240,255,240,0.28)",
                lineHeight: 1.65,
              }}
            >
              Sapling has successfully delivered engagements for these Tier-1 global organisations and more — across 4 continents.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;