import { motion } from "framer-motion";
import { MapPin, ArrowRight, Globe2, Building2, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const regions = [
  { region: "Middle East",   countries: "United Arab Emirates",     badge: "HQ & Operations", active: true,  hq: true,  services: ["All Services", "RAKEZ Licensed HQ"],                                desc: "Our registered headquarters at Compass Building, Al Hamra Industrial Zone FZ, Ras Al Khaimah — the operational heart of our global network." },
  { region: "North America", countries: "United States",            badge: "Active",           active: true,  hq: false, services: ["IT Consulting", "Cloud Services", "Cybersecurity", "Recruitment"],  desc: "Delivering enterprise IT and talent solutions across the US market for leading technology organisations." },
  { region: "Europe",        countries: "United Kingdom · Germany", badge: "Active",           active: true,  hq: false, services: ["IT Consulting", "PLM", "Automation", "Payroll", "Recruitment"],    desc: "Supporting complex engineering and IT programs across the UK and Germany with specialised consultants." },
  { region: "South Asia",    countries: "India",                    badge: "Active",           active: true,  hq: false, services: ["IT Consulting", "Automation", "Recruitment", "Payroll"],            desc: "Deep delivery capability in India — one of our largest talent and consulting hubs globally." },
  { region: "South America", countries: "Expanding",                badge: "Expanding",        active: false, hq: false, services: ["IT Consulting", "Recruitment"],                                      desc: "Actively building our presence in South American markets, driven by growing client demand." },
  { region: "Asia Pacific",  countries: "Expanding",                badge: "Expanding",        active: false, hq: false, services: ["IT Consulting", "Automation", "MES"],                                desc: "Expanding into Asia Pacific to serve manufacturing and technology clients in the region." },
];

const clients = ["TCS", "Cognizant", "Wipro", "L&T"];

const heroStats = [
  { value: "4+",  label: "Continents",         icon: Globe2     },
  { value: "5",   label: "Active Countries",   icon: MapPin     },
  { value: "50+", label: "Enterprise Clients", icon: Building2  },
  { value: "15+", label: "Technologies",       icon: TrendingUp },
];

const RegionCard = ({ r, i }: { r: typeof regions[0]; i: number }) => {

  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const el      = e.currentTarget as HTMLElement;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    const rule    = el.querySelector<HTMLElement>("[data-rule]")!;
    const title   = el.querySelector<HTMLElement>("[data-title]")!;
    const desc    = el.querySelector<HTMLElement>("[data-desc]")!;
    const country = el.querySelector<HTMLElement>("[data-country]")!;
    const tags    = el.querySelectorAll<HTMLElement>("[data-tag]");
    const badge   = el.querySelector<HTMLElement>("[data-badge]")!;
    const dot     = el.querySelector<HTMLElement>("[data-dot]")!;
    const glow    = el.querySelector<HTMLElement>("[data-glow]")!;

    el.style.background     = "linear-gradient(135deg, #0D1F0A 0%, #132B0F 100%)";
    el.style.borderColor    = "rgba(109,190,46,0.42)";
    el.style.transform      = "translateY(-4px)";
    el.style.boxShadow      = "0 20px 50px -10px rgba(13,31,10,0.25)";
    shimmer.style.opacity   = "1";
    rule.style.width        = "56px";
    title.style.color       = "#ffffff";
    desc.style.color        = "rgba(240,255,240,0.5)";
    country.style.color     = "rgba(240,255,240,0.45)";
    glow.style.opacity      = "1";
    badge.style.background  = "rgba(109,190,46,0.15)";
    badge.style.color       = "#8FD94A";
    badge.style.borderColor = "rgba(109,190,46,0.35)";
    dot.style.background    = "#6DBE2E";
    tags.forEach((tag) => {
      tag.style.background  = "rgba(109,190,46,0.12)";
      tag.style.color       = "#8FD94A";
      tag.style.borderColor = "rgba(109,190,46,0.25)";
    });
  };

  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el      = e.currentTarget as HTMLElement;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    const rule    = el.querySelector<HTMLElement>("[data-rule]")!;
    const title   = el.querySelector<HTMLElement>("[data-title]")!;
    const desc    = el.querySelector<HTMLElement>("[data-desc]")!;
    const country = el.querySelector<HTMLElement>("[data-country]")!;
    const tags    = el.querySelectorAll<HTMLElement>("[data-tag]");
    const badge   = el.querySelector<HTMLElement>("[data-badge]")!;
    const dot     = el.querySelector<HTMLElement>("[data-dot]")!;
    const glow    = el.querySelector<HTMLElement>("[data-glow]")!;

    // ALL cards reset to white — no permanent dark state
    el.style.background     = "#ffffff";
    el.style.borderColor    = "rgba(109,190,46,0.12)";
    el.style.transform      = "translateY(0)";
    el.style.boxShadow      = "none";
    shimmer.style.opacity   = "0";
    rule.style.width        = "40px";
    title.style.color       = "#0D1F0A";
    desc.style.color        = "rgba(13,31,10,0.55)";
    country.style.color     = "rgba(13,31,10,0.42)";
    glow.style.opacity      = "0";
    badge.style.background  = r.active ? "rgba(109,190,46,0.08)" : "rgba(107,107,99,0.08)";
    badge.style.color       = r.active ? "#4FA020" : "#6B6B63";
    badge.style.borderColor = r.active ? "rgba(109,190,46,0.22)" : "rgba(107,107,99,0.2)";
    dot.style.background    = r.active ? "#6DBE2E" : "#6B6B63";
    tags.forEach((tag) => {
      tag.style.background  = "#F2F7F0";
      tag.style.color       = "rgba(13,31,10,0.5)";
      tag.style.borderColor = "rgba(109,190,46,0.15)";
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative overflow-hidden rounded-2xl p-7 cursor-default"
      style={{
        background: "#ffffff",
        border: "1px solid rgba(109,190,46,0.12)",
        boxShadow: "none",
        transition: "background 0.35s ease, border-color 0.3s, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s",
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
      <div
        data-glow
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(109,190,46,0.1) 0%, transparent 65%)",
          opacity: 0,
          transition: "opacity 0.35s",
        }}
      />

      <div className="relative flex items-start justify-between mb-4">
        <div className="flex items-center gap-2">
          <MapPin size={12} strokeWidth={1.8} style={{ color: "#6DBE2E", flexShrink: 0 }} />
          <span
            data-country
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              color: "rgba(13,31,10,0.42)",
              letterSpacing: "0.05em",
              transition: "color 0.35s",
            }}
          >
            {r.countries}
          </span>
        </div>
        <span
          data-badge
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "9.5px",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            background: r.active ? "rgba(109,190,46,0.08)" : "rgba(107,107,99,0.08)",
            color: r.active ? "#4FA020" : "#6B6B63",
            borderWidth: "1px",
            borderStyle: "solid" as const,
            borderColor: r.active ? "rgba(109,190,46,0.22)" : "rgba(107,107,99,0.2)",
            transition: "background 0.35s, color 0.35s, border-color 0.35s",
          }}
        >
          <span
            data-dot
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: r.active ? "#6DBE2E" : "#6B6B63",
              transition: "background 0.35s",
            }}
          />
          {r.badge}
        </span>
      </div>

      <h3
        data-title
        className="relative mb-1"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "26px",
          fontWeight: 600,
          color: "#0D1F0A",
          letterSpacing: "-0.01em",
          transition: "color 0.35s",
        }}
      >
        {r.region}
      </h3>

      <div
        data-rule
        className="relative mb-4 h-px"
        style={{
          width: "40px",
          background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))",
          transition: "width 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      <p
        data-desc
        className="relative mb-5"
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: "13.5px",
          fontWeight: 300,
          color: "rgba(13,31,10,0.55)",
          lineHeight: 1.78,
          transition: "color 0.35s",
        }}
      >
        {r.desc}
      </p>

      <div className="relative flex flex-wrap gap-1.5">
        {r.services.map((s) => (
          <span
            key={s}
            data-tag
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "10.5px",
              fontWeight: 500,
              padding: "4px 10px",
              borderRadius: "100px",
              background: "#F2F7F0",
              color: "rgba(13,31,10,0.5)",
              borderWidth: "1px",
              borderStyle: "solid" as const,
              borderColor: "rgba(109,190,46,0.15)",
              transition: "background 0.35s, color 0.35s, border-color 0.35s",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const ClientCard = ({ c, i }: { c: string; i: number }) => {
  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const el      = e.currentTarget as HTMLElement;
    const text    = el.querySelector<HTMLElement>("[data-text]")!;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    el.style.background   = "rgba(109,190,46,0.07)";
    el.style.borderColor  = "rgba(109,190,46,0.38)";
    el.style.transform    = "translateY(-2px)";
    text.style.color      = "#ffffff";
    shimmer.style.opacity = "1";
  };
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el      = e.currentTarget as HTMLElement;
    const text    = el.querySelector<HTMLElement>("[data-text]")!;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    el.style.background   = "rgba(255,255,255,0.03)";
    el.style.borderColor  = "rgba(255,255,255,0.07)";
    el.style.transform    = "translateY(0)";
    text.style.color      = "rgba(240,255,240,0.35)";
    shimmer.style.opacity = "0";
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.55 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative flex items-center justify-center py-8 rounded-2xl overflow-hidden cursor-default"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "all 0.25s",
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
          fontSize: "28px",
          fontWeight: 600,
          color: "rgba(240,255,240,0.35)",
          letterSpacing: "0.04em",
          transition: "color 0.25s",
        }}
      >
        {c}
      </span>
    </motion.div>
  );
};

const GlobalPage = () => (
  <div className="min-h-screen" style={{ background: "#F8FBF6" }}>
    <Navbar />

    {/* HERO */}
    <section
      className="relative pt-36 pb-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0A1E0D 0%, #061409 55%, #040D06 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(109,190,46,0.07) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "650px",
          height: "650px",
          background: "radial-gradient(ellipse, rgba(109,190,46,0.09) 0%, transparent 65%)",
          transform: "translate(25%,-25%)",
        }}
      />
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #6DBE2E 25%, #8FD94A 50%, #6DBE2E 75%, transparent 100%)",
          opacity: 0.55,
        }}
      />
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#6DBE2E", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                Across 4 Continents
              </span>
            </div>
            <div className="overflow-hidden mb-5">
              {["Global", "Presence"].map((word, i) => (
                <motion.h1
                  key={i}
                  initial={{ y: 70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="block leading-[1.04]"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(50px, 7vw, 86px)",
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
              className="mb-8 max-w-xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "15px", fontWeight: 300, color: "rgba(240,255,240,0.52)", lineHeight: 1.85 }}
            >
              Sapling Consultancy Services operates across four continents, delivering consulting services to enterprise clients in the United States, United Kingdom, India, Germany, and UAE.
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
                Start a Partnership <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {heroStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.65 }}
                className="relative overflow-hidden rounded-2xl p-7"
                style={{
                  background: i % 2 === 0 ? "rgba(109,190,46,0.08)" : "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(109,190,46,0.18)",
                  boxShadow: "inset 0 1px 0 rgba(143,217,74,0.08)",
                }}
              >
                <div className="absolute top-0 left-4 right-4 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(109,190,46,0.4), transparent)" }} />
                <s.icon size={16} strokeWidth={1.6} style={{ color: "rgba(109,190,46,0.5)", marginBottom: "12px" }} />
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "48px", fontWeight: 600, color: "#6DBE2E", lineHeight: 1, letterSpacing: "-0.02em", textShadow: "0 0 40px rgba(109,190,46,0.3)", marginBottom: "6px" }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 500, color: "rgba(240,255,240,0.3)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>

    {/* REGIONS */}
    <section className="py-24 lg:py-32" style={{ background: "#F2F7F0" }}>
      <div className="max-w-[1320px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
            <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#4FA020", letterSpacing: "0.22em", textTransform: "uppercase" }}>
              Our Footprint
            </span>
            <span className="h-px flex-1" style={{ background: "rgba(109,190,46,0.15)" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 600, color: "#0D1F0A", letterSpacing: "-0.02em", lineHeight: 1.08 }}>
            Regional <span style={{ color: "#5AB025" }}>Operations</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {regions.map((r, i) => (
            <RegionCard key={r.region} r={r} i={i} />
          ))}
        </div>
      </div>
    </section>

    {/* CLIENTS */}
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0D1F0A 0%, #061409 100%)" }}
    >
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, #8FD94A, #6DBE2E, transparent)", opacity: 0.5 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(109,190,46,0.05) 1px, transparent 0)", backgroundSize: "36px 36px" }} />
      <div className="absolute top-0 right-0 pointer-events-none" style={{ width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(109,190,46,0.07) 0%, transparent 65%)", transform: "translate(25%,-25%)" }} />

      <div className="max-w-[1320px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, #6DBE2E)" }} />
            <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#6DBE2E", letterSpacing: "0.22em", textTransform: "uppercase" }}>
              Client Partnerships
            </span>
            <span className="h-px w-10" style={{ background: "linear-gradient(90deg, #6DBE2E, transparent)" }} />
          </div>
          <h2
            className="mb-4"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.08 }}
          >
            Trusted by <span style={{ color: "#6DBE2E" }}>Tier-1</span> Organisations
          </h2>
          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(240,255,240,0.38)", maxWidth: "480px", margin: "0 auto" }}>
            Sapling has successfully delivered engagements for some of the world's leading enterprise organisations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {clients.map((c, i) => (
            <ClientCard key={c} c={c} i={i} />
          ))}
        </div>

        <div className="text-center">
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
              boxShadow: "0 4px 20px rgba(109,190,46,0.32)",
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            Partner With Us <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default GlobalPage;