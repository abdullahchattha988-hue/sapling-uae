import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Globe2, Heart, Lightbulb, Users, TrendingUp, CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

/* ─── Data ─────────────────────────────────────────────── */
const values = [
  { icon: Award,      title: "Excellence",     desc: "Delivering measurable results with technical precision and an uncompromising commitment to quality in every engagement.", number: "01" },
  { icon: Heart,      title: "Integrity",      desc: "Transparent, ethical partnerships built on honest communication and full accountability to our clients.",                  number: "02" },
  { icon: Lightbulb,  title: "Innovation",     desc: "Continuously adopting cutting-edge technologies and methodologies to keep our clients ahead of the curve.",               number: "03" },
  { icon: Globe2,     title: "Global Mindset", desc: "Culturally aware, internationally experienced teams who understand the nuances of operating across continents.",          number: "04" },
  { icon: Users,      title: "Partnership",    desc: "Long-term relationships built on trust, shared goals, and outcomes that matter to your business.",                       number: "05" },
  { icon: TrendingUp, title: "Growth",         desc: "We measure our success by the growth of our clients — every engagement is an investment in your future.",                number: "06" },
];

const milestones = [
  { year: "2020", event: "Sapling Consultancy Services FZ-LLC founded in Ras Al Khaimah, UAE" },
  { year: "2021", event: "First Tier-1 client engagements with TCS and Wipro commenced"      },
  { year: "2022", event: "Expanded operations to North America and European markets"          },
  { year: "2023", event: "Industrial automation practice launched for Oil & Gas sector"       },
  { year: "2024", event: "50+ enterprise clients across 4 continents milestone reached"       },
  { year: "2025", event: "RAKEZ License #47027650 renewed, continued global expansion"        },
];

const clients    = ["TCS", "Cognizant", "Wipro", "L&T"];
const highlights = [
  "Global enterprise consulting",
  "Tier-1 client delivery record",
  "4+ continents of operation",
  "RAKEZ-licensed & fully compliant",
];

const heroStats = [
  { value: "4+",  label: "Continents"         },
  { value: "50+", label: "Enterprise Clients"  },
  { value: "6",   label: "Industries Served"   },
  { value: "15+", label: "Technologies"        },
];

/* ─── Value card ── JS hover for reliability ── */
const ValueCard = ({ v, i }: { v: typeof values[0]; i: number }) => {
  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const el      = e.currentTarget as HTMLElement;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    const rule    = el.querySelector<HTMLElement>("[data-rule]")!;
    const icon    = el.querySelector<HTMLElement>("[data-icon]")!;
    el.style.borderColor = "rgba(109,190,46,0.42)";
    el.style.transform   = "translateY(-4px)";
    el.style.boxShadow   = "0 20px 50px -12px rgba(13,31,10,0.18)";
    el.style.background  = "#ffffff";
    shimmer.style.opacity = "1";
    rule.style.width      = "56px";
    icon.style.transform  = "scale(1.08)";
  };
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el      = e.currentTarget as HTMLElement;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    const rule    = el.querySelector<HTMLElement>("[data-rule]")!;
    const icon    = el.querySelector<HTMLElement>("[data-icon]")!;
    el.style.borderColor = "rgba(109,190,46,0.12)";
    el.style.transform   = "translateY(0)";
    el.style.boxShadow   = "0 2px 12px rgba(13,31,10,0.04)";
    el.style.background  = "#fafdf8";
    shimmer.style.opacity = "0";
    rule.style.width      = "28px";
    icon.style.transform  = "scale(1)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative p-7 rounded-2xl overflow-hidden cursor-default"
      style={{
        background: "#fafdf8",
        border: "1px solid rgba(109,190,46,0.12)",
        boxShadow: "0 2px 12px rgba(13,31,10,0.04)",
        transition: "background 0.3s, border-color 0.3s, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s",
      }}
    >
      {/* Shimmer line */}
      <div data-shimmer className="absolute top-0 left-4 right-4 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)", opacity: 0, transition: "opacity 0.3s" }}
      />

      {/* Number — faint top right */}
      <div className="absolute top-5 right-6"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "28px", fontWeight: 600, color: "rgba(109,190,46,0.1)", lineHeight: 1 }}>
        {v.number}
      </div>

      {/* Icon */}
      <div data-icon className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
        style={{ background: "linear-gradient(135deg, rgba(109,190,46,0.16) 0%, rgba(109,190,46,0.05) 100%)", border: "1px solid rgba(109,190,46,0.25)", transition: "transform 0.3s" }}>
        <v.icon size={19} strokeWidth={1.6} style={{ color: "#6DBE2E" }} />
      </div>

      {/* Rule */}
      <div data-rule className="mb-4 h-px"
        style={{ width: "28px", background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))", transition: "width 0.35s cubic-bezier(0.22,1,0.36,1)" }}
      />

      <h3 className="mb-3"
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 600, color: "#0D1F0A", letterSpacing: "-0.01em" }}>
        {v.title}
      </h3>
      <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13.5px", fontWeight: 300, color: "rgba(13,31,10,0.52)", lineHeight: 1.78 }}>
        {v.desc}
      </p>
    </motion.div>
  );
};

/* ─── Client card — JS hover ── */
const ClientCard = ({ c, i }: { c: string; i: number }) => {
  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const el   = e.currentTarget as HTMLElement;
    const text = el.querySelector<HTMLElement>("[data-text]")!;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    el.style.borderColor  = "rgba(109,190,46,0.38)";
    el.style.background   = "rgba(109,190,46,0.07)";
    el.style.transform    = "translateY(-2px)";
    text.style.color      = "#ffffff";
    shimmer.style.opacity = "1";
  };
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el   = e.currentTarget as HTMLElement;
    const text = el.querySelector<HTMLElement>("[data-text]")!;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    el.style.borderColor  = "rgba(255,255,255,0.07)";
    el.style.background   = "rgba(255,255,255,0.03)";
    el.style.transform    = "translateY(0)";
    text.style.color      = "rgba(240,255,240,0.38)";
    shimmer.style.opacity = "0";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + i * 0.08 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative flex items-center justify-center py-7 rounded-xl overflow-hidden cursor-default"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        transition: "background 0.25s, border-color 0.25s, transform 0.3s",
      }}
    >
      <div data-shimmer className="absolute top-0 left-3 right-3 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)", opacity: 0, transition: "opacity 0.3s" }}
      />
      <span data-text
        style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "26px", fontWeight: 600, color: "rgba(240,255,240,0.38)", letterSpacing: "0.04em", transition: "color 0.25s" }}>
        {c}
      </span>
    </motion.div>
  );
};

/* ─── Parallax hero section ── */
const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y    = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative pt-36 pb-24 overflow-hidden min-h-[92vh] flex items-center"
      style={{ background: "linear-gradient(160deg, #0A1E0D 0%, #061409 55%, #040D06 100%)" }}>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(109,190,46,0.07) 1px, transparent 0)", backgroundSize: "36px 36px" }}
      />

      {/* Parallax ambient blobs */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0"
          style={{ width: "700px", height: "700px", background: "radial-gradient(ellipse, rgba(109,190,46,0.1) 0%, transparent 65%)", transform: "translate(20%, -20%)" }} />
        <div className="absolute bottom-0 left-0"
          style={{ width: "500px", height: "500px", background: "radial-gradient(ellipse, rgba(109,190,46,0.05) 0%, transparent 65%)", transform: "translate(-20%, 20%)" }} />
      </motion.div>

      {/* Diagonal decorative lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute right-0 top-0 h-full opacity-[0.04]" viewBox="0 0 200 800" fill="none" preserveAspectRatio="none" style={{ width: "200px" }}>
          <line x1="200" y1="0" x2="0" y2="800" stroke="#6DBE2E" strokeWidth="1" />
          <line x1="160" y1="0" x2="-40" y2="800" stroke="#6DBE2E" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Top shimmer */}
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, #6DBE2E 25%, #8FD94A 50%, #6DBE2E 75%, transparent 100%)", opacity: 0.5 }}
      />

      <motion.div style={{ opacity: fade }} className="max-w-[1320px] mx-auto px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <motion.div className="flex items-center gap-3 mb-7"
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
              <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#6DBE2E", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                About Sapling
              </span>
            </motion.div>

            {/* Heading — staggered lines */}
            <div className="overflow-hidden mb-6">
              {["Built on Purpose,", "Driven by"].map((line, i) => (
                <motion.h1 key={i}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="block leading-[1.05]"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(44px, 6vw, 76px)", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.025em" }}>
                  {line}
                </motion.h1>
              ))}
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="block leading-[1.05]"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(44px, 6vw, 76px)", fontWeight: 600, color: "#6DBE2E", letterSpacing: "-0.025em" }}>
                Excellence
              </motion.h1>
            </div>

            {/* Rule */}
            <motion.div className="mb-6 h-px w-16"
              initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
              style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))", transformOrigin: "left" }}
            />

            {/* Subtitle */}
            <motion.p className="mb-8 max-w-xl"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6 }}
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "15.5px", fontWeight: 300, color: "rgba(240,255,240,0.55)", lineHeight: 1.85 }}>
              A RAKEZ-licensed UAE consultancy delivering world-class IT, automation, and talent solutions to enterprise clients across 4 continents.
            </motion.p>

            {/* CTAs */}
            <motion.div className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65, duration: 0.55 }}>
              <Link to="/services"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-px"
                style={{ background: "linear-gradient(135deg, #7ACC35 0%, #6DBE2E 50%, #4FA020 100%)", color: "#061409", fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", border: "1px solid rgba(143,217,74,0.45)", boxShadow: "0 4px 20px rgba(109,190,46,0.32), inset 0 1px 0 rgba(255,255,255,0.2)" }}>
                <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                Our Services
                <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-px"
                style={{ background: "rgba(109,190,46,0.06)", color: "rgba(240,255,240,0.7)", fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", border: "1px solid rgba(109,190,46,0.2)" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(109,190,46,0.45)"; el.style.color = "#8FD94A"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(109,190,46,0.2)"; el.style.color = "rgba(240,255,240,0.7)"; }}>
                Contact Us <ArrowUpRight size={14} strokeWidth={2} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {heroStats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.65 }}
                className="relative overflow-hidden rounded-2xl p-7"
                style={{ background: i % 2 === 0 ? "rgba(109,190,46,0.07)" : "rgba(255,255,255,0.03)", border: "1px solid rgba(109,190,46,0.18)", boxShadow: "inset 0 1px 0 rgba(143,217,74,0.08)" }}>
                <div className="absolute top-0 left-4 right-4 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(109,190,46,0.4), transparent)" }} />
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "52px", fontWeight: 600, color: "#6DBE2E", lineHeight: 1, letterSpacing: "-0.02em", textShadow: "0 0 40px rgba(109,190,46,0.3)", marginBottom: "6px" }}>
                  {s.value}
                </div>
                <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 500, color: "rgba(240,255,240,0.3)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap gap-0 mt-14 pt-10 lg:hidden"
          style={{ borderTop: "1px solid rgba(109,190,46,0.12)" }}>
          {heroStats.map((s, i) => (
            <div key={s.label} className="pr-10 mr-10"
              style={{ borderRight: i < heroStats.length - 1 ? "1px solid rgba(109,190,46,0.15)" : "none" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "36px", fontWeight: 600, color: "#6DBE2E", lineHeight: 1, marginBottom: "4px" }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 500, color: "rgba(240,255,240,0.28)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(248,251,246,0.0))" }} />
    </section>
  );
};

/* ─── Main page ── */
const AboutPage = () => (
  <div className="min-h-screen" style={{ background: "#F8FBF6" }}>
    <Navbar />

    {/* HERO */}
    <HeroSection />

    {/* ══ STORY ══ */}
    <section className="py-24 lg:py-32" style={{ background: "#F8FBF6" }}>
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#4FA020", letterSpacing: "0.22em", textTransform: "uppercase" }}>Our Story</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 600, color: "#0D1F0A", letterSpacing: "-0.02em", lineHeight: 1.08 }}>
              The Vision Behind{" "}
              <span className="relative inline-block" style={{ color: "#5AB025" }}>
                Sapling
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 80 5" preserveAspectRatio="none" height="4">
                  <path d="M0 3.5 Q20 1 40 2.5 Q60 4 80 2" stroke="#6DBE2E" strokeWidth="1.5" fill="none" strokeOpacity="0.55" />
                </svg>
              </span>
            </h2>
            <div className="mt-5 mb-6 h-px w-14" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))" }} />

            {[
              "Sapling Consultancy Services FZ-LLC was founded with a clear purpose: to bridge the gap between world-class enterprise consulting and the organisations that need it most. Operating from the UAE under RAKEZ licensing, we bring a global mindset and deep technical expertise to every engagement.",
              "Our roots lie in project management and IT consulting, but we have grown to serve industries as diverse as Oil & Gas, Pharmaceuticals, Manufacturing, Finance, and Healthcare. Led by Managing Director Swapnil Achyut Gokhale, our team operates with a commitment to quality, integrity, and measurable results.",
              "Today, Sapling is a trusted partner for Tier-1 organisations across four continents — with delivery capability in North America, Europe, the Middle East, and South Asia.",
            ].map((para, i) => (
              <p key={i} className="mb-5" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(13,31,10,0.56)", lineHeight: 1.88 }}>
                {para}
              </p>
            ))}
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative pl-7" style={{ borderLeft: "2px solid rgba(109,190,46,0.2)" }}>
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.55 }}
                  className="mb-8 last:mb-0 relative group"
                >
                  {/* Dot */}
                  <div
                    className="absolute -left-[1.85rem] top-1.5 w-3.5 h-3.5 rounded-full transition-all duration-300 group-hover:scale-125"
                    style={{ background: "linear-gradient(135deg, #8FD94A, #6DBE2E)", border: "2px solid #F8FBF6", boxShadow: "0 0 0 3px rgba(109,190,46,0.22)" }}
                  />
                  {/* Year */}
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "13px", fontWeight: 600, color: "#6DBE2E", letterSpacing: "0.1em", display: "block", marginBottom: "5px" }}>
                    {m.year}
                  </span>
                  {/* Event */}
                  <div
                    className="p-4 rounded-xl transition-all duration-250 group-hover:border-[rgba(109,190,46,0.28)]"
                    style={{ background: "#ffffff", border: "1px solid rgba(109,190,46,0.1)", boxShadow: "0 2px 8px rgba(13,31,10,0.04)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(109,190,46,0.28)";
                      el.style.boxShadow   = "0 4px 16px rgba(13,31,10,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.borderColor = "rgba(109,190,46,0.1)";
                      el.style.boxShadow   = "0 2px 8px rgba(13,31,10,0.04)";
                    }}
                  >
                    <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13.5px", fontWeight: 300, color: "rgba(13,31,10,0.6)", lineHeight: 1.7 }}>
                      {m.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ══ VALUES ══ */}
    <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "#F2F7F0" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 90% 10%, rgba(109,190,46,0.06) 0%, transparent 45%), radial-gradient(circle at 10% 90%, rgba(109,190,46,0.04) 0%, transparent 45%)" }}
      />

      <div className="max-w-[1320px] mx-auto px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
            <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#4FA020", letterSpacing: "0.22em", textTransform: "uppercase" }}>Our Values</span>
            <span className="h-px flex-1" style={{ background: "rgba(109,190,46,0.15)" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 600, color: "#0D1F0A", letterSpacing: "-0.02em", lineHeight: 1.08 }}>
            What We <span style={{ color: "#5AB025" }}>Stand For</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => <ValueCard key={v.title} v={v} i={i} />)}
        </div>
      </div>
    </section>

    {/* ══ LEADERSHIP ══ */}
    <section className="py-24 lg:py-32" style={{ background: "#F8FBF6" }}>
      <div className="max-w-[1320px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Leader card */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#4FA020", letterSpacing: "0.22em", textTransform: "uppercase" }}>Leadership</span>
            </div>
            <h2 className="mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 600, color: "#0D1F0A", letterSpacing: "-0.02em", lineHeight: 1.08 }}>
              Guided by <span style={{ color: "#5AB025" }}>Vision</span>
            </h2>
            <div className="mb-8 h-px w-14" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))" }} />

            <div className="relative overflow-hidden rounded-2xl p-7"
              style={{ background: "linear-gradient(135deg, #0D1F0A 0%, #132B0F 100%)", border: "1px solid rgba(109,190,46,0.25)", boxShadow: "0 8px 40px rgba(13,31,10,0.2)" }}>
              <div className="absolute top-0 left-6 right-6 h-px" style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(109,190,46,0.1) 0%, transparent 65%)" }} />

              <div className="relative flex items-start gap-5">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, rgba(109,190,46,0.22), rgba(109,190,46,0.08))", border: "1px solid rgba(109,190,46,0.35)" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "24px", fontWeight: 600, color: "#6DBE2E" }}>SG</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "24px", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.01em", marginBottom: "3px" }}>
                    Swapnil Achyut Gokhale
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#6DBE2E", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "14px" }}>
                    Managing Director
                  </p>
                  <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13.5px", fontWeight: 300, color: "rgba(240,255,240,0.48)", lineHeight: 1.8 }}>
                    Mr. Gokhale brings extensive experience in global IT consulting, project management, and enterprise technology delivery. Under his leadership, Sapling has grown into a trusted partner for Tier-1 organisations across multiple continents.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Client trust grid */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden rounded-2xl p-8"
              style={{ background: "linear-gradient(160deg, #0D1F0A 0%, #0A1A08 100%)", border: "1px solid rgba(109,190,46,0.2)", boxShadow: "0 8px 40px rgba(13,31,10,0.15)" }}>
              <div className="absolute top-0 left-8 right-8 h-px" style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(109,190,46,0.07) 0%, transparent 55%)" }} />

              <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "9.5px", fontWeight: 600, color: "rgba(109,190,46,0.6)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "16px" }}>
                Trusted by Tier-1 Organisations
              </p>

              <div className="relative grid grid-cols-2 gap-3 mb-7">
                {clients.map((c, i) => <ClientCard key={c} c={c} i={i} />)}
              </div>

              <div className="relative" style={{ borderTop: "1px solid rgba(109,190,46,0.1)", paddingTop: "20px" }}>
                {highlights.map((h, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                    className="flex items-center gap-3 mb-3 last:mb-0">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "rgba(109,190,46,0.12)", border: "1px solid rgba(109,190,46,0.28)" }}>
                      <CheckCircle2 size={11} strokeWidth={2.5} style={{ color: "#6DBE2E" }} />
                    </div>
                    <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(240,255,240,0.48)" }}>
                      {h}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* ══ CTA BANNER ══ */}
    <section className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D1F0A 0%, #061409 100%)", borderTop: "1px solid rgba(109,190,46,0.15)" }}>

      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, #8FD94A, #6DBE2E, transparent)", opacity: 0.5 }}
      />
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(109,190,46,0.05) 1px, transparent 0)", backgroundSize: "36px 36px" }}
      />
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 pointer-events-none"
        style={{ width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(109,190,46,0.08) 0%, transparent 65%)", transform: "translate(25%, -25%)" }}
      />

      <div className="max-w-[1320px] mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, #6DBE2E)" }} />
            <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#6DBE2E", letterSpacing: "0.22em", textTransform: "uppercase" }}>Work With Us</span>
            <span className="h-px w-10" style={{ background: "linear-gradient(90deg, #6DBE2E, transparent)" }} />
          </div>

          <h2 className="mb-5"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.06 }}>
            Ready to Work{" "}
            <span style={{ color: "#6DBE2E" }}>With Us?</span>
          </h2>

          {/* Green rule */}
          <div className="mx-auto mb-6 h-px w-16" style={{ background: "linear-gradient(90deg, rgba(109,190,46,0.3), #6DBE2E, rgba(109,190,46,0.3))" }} />

          <p className="mb-10 mx-auto max-w-xl"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "15px", fontWeight: 300, color: "rgba(240,255,240,0.48)", lineHeight: 1.8 }}>
            Partner with Sapling for expert consulting tailored to your industry.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact"
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-px"
              style={{ background: "linear-gradient(135deg, #7ACC35 0%, #6DBE2E 50%, #4FA020 100%)", color: "#061409", fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", border: "1px solid rgba(143,217,74,0.45)", boxShadow: "0 4px 24px rgba(109,190,46,0.35), inset 0 1px 0 rgba(255,255,255,0.2)" }}>
              <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              Get in Touch
              <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-all duration-200 hover:-translate-y-px"
              style={{ background: "rgba(109,190,46,0.06)", color: "rgba(240,255,240,0.7)", fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13px", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", border: "1px solid rgba(109,190,46,0.2)" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(109,190,46,0.4)"; el.style.color = "#8FD94A"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(109,190,46,0.2)"; el.style.color = "rgba(240,255,240,0.7)"; }}>
              View Services <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    <Footer />
  </div>
);

export default AboutPage;