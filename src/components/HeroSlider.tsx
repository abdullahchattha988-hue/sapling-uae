import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.webp";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.webp";
import hero5 from "@/assets/hero-5.jpg";

/* ─── Theme tokens ───────────────────────────────────── */
// Base bg:    #040D06  (near-black, deep forest)
// Surface:    #061409  (dark green-black)
// Accent:     #6DBE2E  (lime green — logo leaf tip)
// Glow:       #8FD94A  (bright lime highlight)
// Muted:      #3A7A18  (deep mid-green)

/* ─── Slide data ─────────────────────────────────────── */
const slides = [
  {
    image: hero1,
    eyebrow: "Global Consulting Excellence",
    headline: ["Grow With Expert", "Global Consulting"],
    subtext:
      "Sapling Consultancy Services delivers world-class IT consulting, industrial automation, MES/PLM systems, cloud transformation, and talent solutions to enterprises across 4 continents.",
    stat: { value: "4", label: "Continents Served" },
  },
  {
    image: hero2,
    eyebrow: "Tier-1 Client Partners",
    headline: ["Trusted by the", "World's Best"],
    subtext:
      "We proudly support Tier-1 organisations including TCS, Cognizant, Wipro, and L&T with advanced consulting and precision talent solutions.",
    stat: { value: "50+", label: "Enterprise Partners" },
  },
  {
    image: hero3,
    eyebrow: "Across 4 Continents",
    headline: ["A Truly Global", "Presence"],
    subtext:
      "Delivering consulting excellence across North America, Europe, the Middle East, and South Asia — from our RAKEZ-licensed UAE headquarters.",
    stat: { value: "12+", label: "Countries Active" },
  },
  {
    image: hero4,
    eyebrow: "Enterprise Technology",
    headline: ["Advanced Technology", "Expertise"],
    subtext:
      "Our consultants specialise in .NET, Java, Python, Cloud, DevOps, SAP, Data Analytics, and Cybersecurity for mission-critical enterprise environments.",
    stat: { value: "200+", label: "Consultants Deployed" },
  },
  {
    image: hero5,
    eyebrow: "Industrial Automation",
    headline: ["Automation at", "Industrial Scale"],
    subtext:
      "End-to-end automation engineering — PLC, SCADA, DCS, MES — for Oil & Gas, Pharmaceuticals, and Manufacturing industries worldwide.",
    stat: { value: "15+", label: "Years of Excellence" },
  },
];

/* ─── Green line SVG accent ──────────────────────────── */
const GreenLine = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`overflow-visible ${className}`}
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="gl-green" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#6DBE2E" stopOpacity="0" />
        <stop offset="40%"  stopColor="#8FD94A" stopOpacity="1" />
        <stop offset="100%" stopColor="#6DBE2E" stopOpacity="0.4" />
      </linearGradient>
    </defs>
    <rect width="120" height="1.5" fill="url(#gl-green)" rx="1" />
  </svg>
);

/* ─── Decorative corner ornament ─────────────────────── */
const CornerOrnament = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 46 L2 2 L46 2" stroke="#6DBE2E" strokeWidth="1.5" strokeOpacity="0.55" fill="none" />
    <path d="M2 46 L2 2 L46 2" stroke="#8FD94A" strokeWidth="0.5" strokeOpacity="0.35" fill="none" strokeDasharray="4 4" />
    <circle cx="2" cy="2" r="2.5" fill="#6DBE2E" fillOpacity="0.75" />
  </svg>
);

/* ─── Slide number ticker ────────────────────────────── */
const SlideTicker = ({ current, total }: { current: number; total: number }) => (
  <div className="flex items-center gap-3">
    <div className="relative overflow-hidden h-[28px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          exit={{   y: -28, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="block font-mono text-[22px] font-light leading-[28px]"
          style={{ color: "#6DBE2E", fontVariantNumeric: "tabular-nums" }}
        >
          {String(current + 1).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
    <span className="text-white/20 text-[13px] font-light">—</span>
    <span className="font-mono text-[13px] font-light" style={{ color: "rgba(255,255,255,0.3)" }}>
      {String(total).padStart(2, "0")}
    </span>
  </div>
);

/* ─── Main component ─────────────────────────────────── */
const HeroSlider = () => {
  const [current, setCurrent]   = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const DURATION = 7000;

  const goTo = useCallback((idx: number) => {
    setCurrent(idx);
    setProgress(0);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = () => setProgress(Math.min((Date.now() - start) / DURATION, 1));
    const raf = setInterval(tick, 50);
    intervalRef.current = setInterval(next, DURATION);
    return () => {
      clearInterval(raf);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [current, next]);

  return (
    <section className="relative h-screen min-h-[640px] max-h-[1000px] overflow-hidden" style={{ background: "#040D06" }}>

      {/* ── Background images ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${current}`}
          initial={{ opacity: 0, scale: 1.07 }}
          animate={{ opacity: 1,  scale: 1    }}
          exit={{   opacity: 0              }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img src={slides[current].image} alt="" className="w-full h-full object-cover" />

          {/* Deep green-tinted overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(4,13,6,0.92) 0%, rgba(4,13,6,0.68) 45%, rgba(4,13,6,0.28) 100%)",
            }}
          />
          {/* Subtle green cast on dark side */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, rgba(10,40,12,0.45) 0%, transparent 60%)",
            }}
          />
          {/* Bottom fade */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(4,13,6,0.85) 0%, rgba(4,13,6,0.2) 30%, transparent 60%)",
            }}
          />
          {/* Top fade for navbar */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(4,13,6,0.38) 0%, transparent 22%)",
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Decorative vertical lines ── */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[1px] opacity-20"
        style={{ background: "linear-gradient(to bottom, transparent, #6DBE2E 30%, #6DBE2E 70%, transparent)" }}
      />
      <div
        className="absolute right-[72px] top-0 bottom-0 w-px opacity-10"
        style={{ background: "linear-gradient(to bottom, transparent, #6DBE2E 40%, #6DBE2E 60%, transparent)" }}
      />

      {/* ── Top green shimmer line ── */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-20"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #6DBE2E 30%, #8FD94A 50%, #6DBE2E 70%, transparent 100%)",
          opacity: 0.45,
        }}
      />

      {/* ── Ambient left glow ── */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[480px] pointer-events-none z-10"
        style={{
          background: "radial-gradient(ellipse at 0% 55%, rgba(109,190,46,0.07) 0%, transparent 65%)",
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1320px] mx-auto px-8 w-full">
          <div className="max-w-[720px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${current}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{   opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Eyebrow */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0   }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-center gap-3 mb-7"
                >
                  <GreenLine className="w-10 h-[2px]" />
                  <span
                    className="text-[11px] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: "#6DBE2E" }}
                  >
                    {slides[current].eyebrow}
                  </span>
                </motion.div>

                {/* Headline */}
                <div className="mb-7 overflow-hidden">
                  {slides[current].headline.map((line, i) => (
                    <motion.h1
                      key={i}
                      initial={{ y: 60, opacity: 0 }}
                      animate={{ y: 0,  opacity: 1 }}
                      transition={{ duration: 0.75, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="block leading-[1.06] text-white"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(44px, 6.5vw, 80px)",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {i === 1 ? (
                        <span style={{ color: "#6DBE2E", textShadow: "0 0 60px rgba(109,190,46,0.25)" }}>
                          {line}
                        </span>
                      ) : (
                        line
                      )}
                    </motion.h1>
                  ))}
                </div>

                {/* Divider */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="origin-left mb-7 w-20 h-px"
                  style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.15))" }}
                />

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0  }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="text-[16px] leading-[1.75] mb-10 max-w-[580px]"
                  style={{
                    color: "rgba(230,255,230,0.65)",
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {slides[current].subtext}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0  }}
                  transition={{ duration: 0.55, delay: 0.55 }}
                  className="flex flex-wrap gap-4 items-center"
                >
                  {/* Primary green CTA */}
                  <Link
                    to="/services"
                    className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-px"
                    style={{
                      background: "linear-gradient(135deg, #7ACC35 0%, #6DBE2E 50%, #4FA020 100%)",
                      color: "#061409",
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(143,217,74,0.5)",
                      boxShadow: "0 4px 24px rgba(109,190,46,0.38), inset 0 1px 0 rgba(255,255,255,0.22)",
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)" }}
                    />
                    Explore Services
                    <ArrowRight
                      size={15}
                      strokeWidth={2.5}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </Link>

                  {/* Secondary outline CTA */}
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg transition-all duration-300 hover:-translate-y-px"
                    style={{
                      background: "rgba(109,190,46,0.06)",
                      color: "rgba(230,255,230,0.85)",
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: "13px",
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(109,190,46,0.28)",
                      backdropFilter: "blur(8px)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(109,190,46,0.12)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(109,190,46,0.45)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(109,190,46,0.06)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(109,190,46,0.28)";
                    }}
                  >
                    Get in Touch
                    <ArrowRight
                      size={15}
                      strokeWidth={2}
                      className="opacity-60 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5"
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── Right side stat card ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`stat-${current}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0  }}
          exit={{   opacity: 0, x: 20  }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="absolute right-16 bottom-32 z-10 hidden xl:block"
        >
          <div
            className="relative px-7 py-6 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(13,36,16,0.92) 0%, rgba(6,20,9,0.88) 100%)",
              border: "1px solid rgba(109,190,46,0.28)",
              backdropFilter: "blur(20px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.55), 0 0 40px rgba(109,190,46,0.05), inset 0 1px 0 rgba(143,217,74,0.1)",
            }}
          >
            <div
              className="absolute top-0 left-6 right-6 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }}
            />
            <div
              className="text-[44px] font-light leading-none mb-1"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: "#6DBE2E",
                textShadow: "0 0 40px rgba(109,190,46,0.35)",
              }}
            >
              {slides[current].stat.value}
            </div>
            <div
              className="text-[11px] font-medium uppercase tracking-[0.18em]"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                color: "rgba(230,255,230,0.4)",
              }}
            >
              {slides[current].stat.label}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Corner ornament (bottom left) ── */}
      <div className="absolute bottom-12 left-8 z-10 opacity-50 hidden lg:block">
        <CornerOrnament />
      </div>

      {/* ── Left nav arrow ── */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all duration-200"
        style={{
          width: 44, height: 44,
          borderRadius: "50%",
          background: "rgba(109,190,46,0.07)",
          border: "1px solid rgba(109,190,46,0.2)",
          backdropFilter: "blur(8px)",
          color: "rgba(230,255,230,0.65)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(109,190,46,0.2)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(109,190,46,0.5)";
          (e.currentTarget as HTMLElement).style.color = "#8FD94A";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(109,190,46,0.07)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(109,190,46,0.2)";
          (e.currentTarget as HTMLElement).style.color = "rgba(230,255,230,0.65)";
        }}
      >
        <ChevronLeft size={19} strokeWidth={1.8} />
      </button>

      {/* ── Right nav arrow ── */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center transition-all duration-200"
        style={{
          width: 44, height: 44,
          borderRadius: "50%",
          background: "rgba(109,190,46,0.07)",
          border: "1px solid rgba(109,190,46,0.2)",
          backdropFilter: "blur(8px)",
          color: "rgba(230,255,230,0.65)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(109,190,46,0.2)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(109,190,46,0.5)";
          (e.currentTarget as HTMLElement).style.color = "#8FD94A";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(109,190,46,0.07)";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(109,190,46,0.2)";
          (e.currentTarget as HTMLElement).style.color = "rgba(230,255,230,0.65)";
        }}
      >
        <ChevronRight size={19} strokeWidth={1.8} />
      </button>

      {/* ── Bottom slide controls bar ── */}
      <div className="absolute bottom-0 left-0 right-0 z-20">

        {/* Progress segments */}
        <div className="flex">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative flex-1 h-[3px] overflow-hidden transition-colors duration-300"
              style={{ background: "rgba(109,190,46,0.1)" }}
              aria-label={`Go to slide ${i + 1}`}
            >
              {i === current && (
                <motion.span
                  className="absolute inset-y-0 left-0"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress * 100}%` }}
                  transition={{ duration: 0, ease: "linear" }}
                  style={{
                    background: "linear-gradient(90deg, #6DBE2E, #8FD94A)",
                    boxShadow: "0 0 8px rgba(109,190,46,0.6)",
                  }}
                />
              )}
              {i < current && (
                <span
                  className="absolute inset-0"
                  style={{ background: "rgba(109,190,46,0.45)" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Bottom info strip */}
        <div
          className="flex items-center justify-between px-8 py-4"
          style={{ background: "linear-gradient(to top, rgba(4,13,6,0.75) 0%, transparent 100%)" }}
        >
          <SlideTicker current={current} total={slides.length} />

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className="transition-all duration-300"
                style={{
                  width:  i === current ? 22 : 6,
                  height: 6,
                  borderRadius: i === current ? 3 : "50%",
                  background: i === current
                    ? "linear-gradient(90deg, #6DBE2E, #8FD94A)"
                    : "rgba(109,190,46,0.28)",
                  boxShadow: i === current ? "0 0 10px rgba(109,190,46,0.5)" : "none",
                }}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.span
              key={`label-${current}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{   opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="hidden md:block text-[11px] uppercase tracking-[0.18em] font-medium"
              style={{ color: "rgba(230,255,230,0.3)", fontFamily: "'DM Sans', system-ui, sans-serif" }}
            >
              {slides[current].eyebrow}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

    </section>
  );
};

export default HeroSlider;
