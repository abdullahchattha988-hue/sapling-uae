import { motion } from "framer-motion";
import { Globe, Users, Building2, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { icon: Globe,     value: "4+",     label: "Continents Served",   desc: "Global reach across NA, EU, ME & Asia" },
  { icon: Building2, value: "50+",    label: "Enterprise Clients",  desc: "Tier-1 organisations worldwide"         },
  { icon: Users,     value: "6",      label: "Industries Served",   desc: "From Oil & Gas to Healthcare"           },
  { icon: Award,     value: "Tier-1", label: "Client Partners",     desc: "TCS, Cognizant, Wipro & L&T"           },
];

const highlights = [
  "RAKEZ-licensed UAE headquarters",
  "Operating across 12+ countries",
  "200+ consultants deployed globally",
  "15+ years of collective expertise",
];

const Bracket = ({ flip = false }: { flip?: boolean }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={flip ? "rotate-180" : ""}>
    <path d="M2 30 L2 2 L30 2" stroke="#6DBE2E" strokeWidth="1.5" strokeOpacity="0.55" />
    <circle cx="2" cy="2" r="2" fill="#6DBE2E" fillOpacity="0.75" />
  </svg>
);

/* ── Stat card — all hover colours driven by JS to guarantee visibility ── */
const StatCard = ({ s, i }: { s: typeof stats[0]; i: number }) => {
  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card    = e.currentTarget as HTMLElement;
    const value   = card.querySelector<HTMLElement>("[data-value]")!;
    const label   = card.querySelector<HTMLElement>("[data-label]")!;
    const desc    = card.querySelector<HTMLElement>("[data-desc]")!;
    const arrow   = card.querySelector<HTMLElement>("[data-arrow]")!;
    const shimmer = card.querySelector<HTMLElement>("[data-shimmer]")!;

    card.style.background  = "#0D1F0A";
    card.style.borderColor = "rgba(109,190,46,0.4)";
    card.style.transform   = "translateY(-3px)";
    card.style.boxShadow   = "0 16px 40px rgba(13,31,10,0.18), 0 0 0 1px rgba(109,190,46,0.15)";

    value.style.color         = "#ffffff";
    label.style.color         = "#ffffff";
    desc.style.color          = "rgba(240,255,240,0.42)";
    arrow.style.opacity       = "1";
    arrow.style.transform     = "translateX(0)";
    shimmer.style.opacity     = "1";
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card    = e.currentTarget as HTMLElement;
    const value   = card.querySelector<HTMLElement>("[data-value]")!;
    const label   = card.querySelector<HTMLElement>("[data-label]")!;
    const desc    = card.querySelector<HTMLElement>("[data-desc]")!;
    const arrow   = card.querySelector<HTMLElement>("[data-arrow]")!;
    const shimmer = card.querySelector<HTMLElement>("[data-shimmer]")!;

    card.style.background  = "#FFFFFF";
    card.style.borderColor = "rgba(109,190,46,0.15)";
    card.style.transform   = "translateY(0)";
    card.style.boxShadow   = "0 2px 12px rgba(13,31,10,0.05)";

    value.style.color         = "#0D1F0A";
    label.style.color         = "#0D1F0A";
    desc.style.color          = "rgba(13,31,10,0.4)";
    arrow.style.opacity       = "0";
    arrow.style.transform     = "translateX(4px)";
    shimmer.style.opacity     = "0";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative rounded-2xl p-7 overflow-hidden cursor-default"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(109,190,46,0.15)",
        boxShadow: "0 2px 12px rgba(13,31,10,0.05)",
        transition: "background 0.3s, border-color 0.3s, transform 0.3s, box-shadow 0.3s",
      }}
    >
      {/* Top shimmer */}
      <span
        data-shimmer
        className="absolute top-0 left-4 right-4 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)",
          opacity: 0,
          transition: "opacity 0.3s",
        }}
      />

      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
        style={{
          background: "linear-gradient(135deg, rgba(109,190,46,0.14) 0%, rgba(109,190,46,0.05) 100%)",
          border: "1px solid rgba(109,190,46,0.28)",
        }}
      >
        <s.icon size={18} strokeWidth={1.6} style={{ color: "#6DBE2E" }} />
      </div>

      {/* Value */}
      <div
        data-value
        className="mb-1 leading-none"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "38px",
          fontWeight: 600,
          color: "#0D1F0A",
          letterSpacing: "-0.02em",
          transition: "color 0.3s",
        }}
      >
        {s.value}
      </div>

      {/* Label */}
      <div
        data-label
        className="mb-2"
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: "12.5px",
          fontWeight: 600,
          color: "#0D1F0A",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          transition: "color 0.3s",
        }}
      >
        {s.label}
      </div>

      {/* Desc */}
      <p
        data-desc
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: "11.5px",
          lineHeight: "1.5",
          color: "rgba(13,31,10,0.4)",
          transition: "color 0.3s",
        }}
      >
        {s.desc}
      </p>

      {/* Arrow */}
      <div
        data-arrow
        className="absolute bottom-5 right-5 pointer-events-none"
        style={{
          opacity: 0,
          transform: "translateX(4px)",
          transition: "opacity 0.3s, transform 0.3s",
        }}
      >
        <ArrowRight size={14} strokeWidth={1.8} style={{ color: "#6DBE2E" }} />
      </div>
    </motion.div>
  );
};

/* ── Main section ── */
const AboutSection = () => (
  <section id="about" className="relative py-24 lg:py-36 overflow-hidden" style={{ background: "#F8FBF6" }}>

    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(109,190,46,0.06) 0%, transparent 45%), " +
          "radial-gradient(circle at 85% 75%, rgba(109,190,46,0.05) 0%, transparent 45%)",
      }}
    />
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />

    <div className="max-w-[1320px] mx-auto px-8 relative">
      <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.25))" }} />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.22em]" style={{ color: "#4FA020", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              About Us
            </span>
          </div>

          <h2
            className="mb-6 leading-[1.08]"
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(34px, 4vw, 52px)",
              fontWeight: 600,
              color: "#0D1F0A",
              letterSpacing: "-0.02em",
            }}
          >
            Empowering Global{" "}
            <span className="relative inline-block" style={{ color: "#5AB025" }}>
              Enterprises
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 6" preserveAspectRatio="none" height="5">
                <path d="M0 4 Q50 1 100 3 Q150 5 200 2" stroke="#6DBE2E" strokeWidth="1.5" fill="none" strokeOpacity="0.55" />
              </svg>
            </span>{" "}
            Through Technology
          </h2>

          <p className="leading-[1.8] mb-5" style={{ color: "rgba(13,31,10,0.58)", fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "15px", fontWeight: 300 }}>
            Sapling Consultancy Services FZ-LLC was founded with a clear purpose: to bridge the gap
            between world-class enterprise consulting and the organisations that need it most.
            Operating from the UAE under RAKEZ licensing, we bring a global mindset and deep
            technical expertise to every engagement.
          </p>
          <p className="leading-[1.8] mb-8" style={{ color: "rgba(13,31,10,0.58)", fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "15px", fontWeight: 300 }}>
            With presence across India, the United States, the United Kingdom, the UAE, and
            Germany, we support projects across North America, South America, Europe, and Asia —
            led by Managing Director{" "}
            <strong className="font-semibold" style={{ color: "#0D1F0A" }}>Swapnil Achyut Gokhale</strong>.
          </p>

          <ul className="mb-10 space-y-2.5">
            {highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 size={15} strokeWidth={2} style={{ color: "#6DBE2E", flexShrink: 0 }} />
                <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13.5px", color: "rgba(13,31,10,0.62)" }}>
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>

          <Link
            to="/about"
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
              boxShadow: "0 4px 20px rgba(109,190,46,0.28), inset 0 1px 0 rgba(255,255,255,0.22)",
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            Our Full Story
            <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 opacity-60"><Bracket /></div>
          <div className="absolute -bottom-4 -right-4 opacity-60"><Bracket flip /></div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => <StatCard key={s.label} s={s} i={i} />)}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-5 px-6 py-4 rounded-2xl flex items-center justify-between"
            style={{
              background: "linear-gradient(135deg, #0D1F0A 0%, #132B0F 100%)",
              border: "1px solid rgba(109,190,46,0.22)",
              boxShadow: "0 4px 20px rgba(13,31,10,0.15)",
            }}
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(240,255,240,0.38)", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              RAKEZ Licensed · UAE HQ
            </div>
            <div className="h-px flex-1 mx-5" style={{ background: "rgba(109,190,46,0.2)" }} />
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#6DBE2E", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              Est. Since Day One
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default AboutSection;