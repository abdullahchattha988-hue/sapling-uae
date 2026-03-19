import { useState, useEffect, useRef } from "react";
import {
  Menu, X, Home, ChevronDown, ArrowRight,
  Monitor, Cloud, Settings, Factory, Box, Users2,
  Cpu, Droplets, FlaskConical, Wrench, BarChart3, Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logoImg from "@/assets/logo-3.png";

/* ─── Theme tokens ───────────────────────────────────── */
// Primary: Deep forest green  #0A2010
// Surface: Dark green-black   #061409
// Accent:  Lime / bright green #6DBE2E
// Glow:    Soft lime           #8FD94A
// Text:    Off-white           rgba(240,255,240,0.88)

/* ─── Data ───────────────────────────────────────────── */
const serviceItems = [
  { label: "IT Consulting",         slug: "it-consulting",                icon: Monitor,     desc: ".NET · Java · Python · SAP"      },
  { label: "Cloud & Digital",       slug: "cloud-digital",                icon: Cloud,       desc: "AWS · Azure · GCP · DevOps"      },
  { label: "Industrial Automation", slug: "industrial-automation",        icon: Settings,    desc: "PLC · SCADA · DCS · Siemens"     },
  { label: "MES Systems",           slug: "manufacturing-systems",        icon: Factory,     desc: "Apriso · SAP ME · GE Proficy"    },
  { label: "PLM Systems",           slug: "product-lifecycle-management", icon: Box,         desc: "Teamcenter · Windchill · Enovia" },
  { label: "Recruitment & Payroll", slug: "recruitment-payroll",          icon: Users2,      desc: "Global · Compliant · Fast"       },
];

const industryItems = [
  { label: "Information Technology", slug: "information-technology", icon: Cpu          },
  { label: "Oil & Gas",              slug: "oil-and-gas",            icon: Droplets     },
  { label: "Pharmaceuticals",        slug: "pharmaceuticals",        icon: FlaskConical },
  { label: "Manufacturing",          slug: "manufacturing",          icon: Wrench       },
  { label: "Finance",                slug: "finance",                icon: BarChart3    },
  { label: "Healthcare",             slug: "healthcare",             icon: Heart        },
];

/* ─── Decorative green top line ──────────────────────── */
const GreenDivider = () => (
  <svg width="100%" height="2" viewBox="0 0 640 2" preserveAspectRatio="none" className="block">
    <defs>
      <linearGradient id="gd-green" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#6DBE2E" stopOpacity="0" />
        <stop offset="25%"  stopColor="#8FD94A" stopOpacity="1" />
        <stop offset="50%"  stopColor="#6DBE2E" stopOpacity="1" />
        <stop offset="75%"  stopColor="#8FD94A" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#6DBE2E" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="640" height="1" fill="url(#gd-green)" />
  </svg>
);

/* ─── Services mega panel ────────────────────────────── */
const ServicesDropdown = ({ onClose }: { onClose: () => void }) => (
  <div
    className="w-[680px] overflow-hidden rounded-2xl"
    style={{
      background: "linear-gradient(160deg, #0D2414 0%, #061409 60%, #0A1E0D 100%)",
      border: "1px solid rgba(109,190,46,0.3)",
      boxShadow: "0 32px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(109,190,46,0.07), inset 0 1px 0 rgba(143,217,74,0.1)",
    }}
  >
    <GreenDivider />

    {/* Header */}
    <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <span className="text-[9px] font-semibold uppercase tracking-[0.28em]" style={{ color: "#6DBE2E" }}>
          Our Services
        </span>
        <span className="h-px w-8" style={{ background: "rgba(109,190,46,0.3)" }} />
      </div>
      <Link
        to="/services"
        onClick={onClose}
        className="group flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-all duration-200"
        style={{ color: "rgba(109,190,46,0.7)" }}
      >
        View All
        <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform duration-200" />
      </Link>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-2 gap-px mx-5 mb-5" style={{ background: "rgba(109,190,46,0.08)" }}>
      {serviceItems.map((s) => (
        <Link
          key={s.slug}
          to={`/services/${s.slug}`}
          onClick={onClose}
          className="group relative flex items-center gap-4 px-5 py-4 transition-all duration-200 overflow-hidden"
          style={{ background: "linear-gradient(160deg, #0D2414 0%, #061409 100%)" }}
        >
          {/* Hover overlay */}
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ background: "linear-gradient(135deg, rgba(109,190,46,0.12) 0%, rgba(109,190,46,0.03) 100%)" }}
          />
          {/* Left accent bar */}
          <span
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] rounded-full transition-all duration-300"
            style={{
              background: "linear-gradient(to bottom, transparent, #6DBE2E, transparent)",
              height: "0%",
            }}
            ref={(el) => {
              if (el) {
                el.closest(".group")?.addEventListener("mouseenter", () => { el.style.height = "60%"; });
                el.closest(".group")?.addEventListener("mouseleave", () => { el.style.height = "0%"; });
              }
            }}
          />

          {/* Icon */}
          <div
            className="relative w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
            style={{
              background: "linear-gradient(135deg, rgba(109,190,46,0.2) 0%, rgba(109,190,46,0.06) 100%)",
              border: "1px solid rgba(109,190,46,0.3)",
              boxShadow: "0 2px 8px rgba(109,190,46,0.1)",
            }}
          >
            <s.icon size={15} strokeWidth={1.6} style={{ color: "#6DBE2E" }} />
          </div>

          <div className="relative min-w-0 flex-1">
            <p
              className="text-[13px] font-medium leading-snug transition-colors duration-150 group-hover:text-white"
              style={{ color: "rgba(240,255,240,0.82)" }}
            >
              {s.label}
            </p>
            <p className="text-[11px] mt-0.5 leading-snug" style={{ color: "rgba(109,190,46,0.5)" }}>
              {s.desc}
            </p>
          </div>

          <ArrowRight
            size={13}
            className="relative shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
            style={{ color: "#6DBE2E" }}
          />
        </Link>
      ))}
    </div>

    {/* Footer CTA */}
    <div className="mx-5 mb-5">
      <Link
        to="/services"
        onClick={onClose}
        className="group flex items-center justify-between px-5 py-3.5 rounded-xl transition-all duration-200"
        style={{
          background: "linear-gradient(135deg, rgba(109,190,46,0.14) 0%, rgba(109,190,46,0.04) 100%)",
          border: "1px solid rgba(109,190,46,0.28)",
        }}
      >
        <div>
          <p className="text-[13px] font-semibold" style={{ color: "#8FD94A" }}>
            Explore Full Portfolio
          </p>
          <p className="text-[11px] mt-0.5" style={{ color: "rgba(240,255,240,0.35)" }}>
            End-to-end technology consulting across all verticals
          </p>
        </div>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-transform duration-200 group-hover:scale-110"
          style={{
            background: "linear-gradient(135deg, #6DBE2E, #4FA020)",
            boxShadow: "0 4px 16px rgba(109,190,46,0.45)",
          }}
        >
          <ArrowRight size={13} strokeWidth={2.2} className="text-[#061409]" />
        </div>
      </Link>
    </div>
  </div>
);

/* ─── Industries panel ───────────────────────────────── */
const IndustriesDropdown = ({ onClose }: { onClose: () => void }) => (
  <div
    className="w-[300px] overflow-hidden rounded-2xl"
    style={{
      background: "linear-gradient(160deg, #0D2414 0%, #061409 60%, #0A1E0D 100%)",
      border: "1px solid rgba(109,190,46,0.3)",
      boxShadow: "0 32px 80px rgba(0,0,0,0.85), 0 0 0 1px rgba(109,190,46,0.07), inset 0 1px 0 rgba(143,217,74,0.1)",
    }}
  >
    <GreenDivider />

    {/* Header */}
    <div className="flex items-center gap-3 px-5 py-4">
      <span className="text-[9px] font-semibold uppercase tracking-[0.28em]" style={{ color: "#6DBE2E" }}>
        Industries
      </span>
      <span className="h-px flex-1" style={{ background: "rgba(109,190,46,0.2)" }} />
    </div>

    {/* List */}
    <div className="px-3 pb-3 space-y-0.5">
      {industryItems.map((ind) => (
        <Link
          key={ind.slug}
          to={`/industries/${ind.slug}`}
          onClick={onClose}
          className="group relative flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-150 overflow-hidden"
        >
          <span
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            style={{ background: "linear-gradient(135deg, rgba(109,190,46,0.1) 0%, rgba(109,190,46,0.03) 100%)" }}
          />
          <span
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] rounded-full transition-all duration-300"
            style={{ background: "linear-gradient(to bottom, transparent, #6DBE2E, transparent)", height: "0%" }}
            ref={(el) => {
              if (el) {
                el.closest(".group")?.addEventListener("mouseenter", () => { el.style.height = "60%"; });
                el.closest(".group")?.addEventListener("mouseleave", () => { el.style.height = "0%"; });
              }
            }}
          />

          <div
            className="relative w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-150 group-hover:scale-110"
            style={{
              background: "linear-gradient(135deg, rgba(109,190,46,0.15) 0%, rgba(109,190,46,0.05) 100%)",
              border: "1px solid rgba(109,190,46,0.22)",
            }}
          >
            <ind.icon size={13} strokeWidth={1.6} style={{ color: "#6DBE2E" }} />
          </div>

          <span
            className="relative text-[13px] font-normal flex-1 transition-colors duration-150 group-hover:text-white"
            style={{ color: "rgba(240,255,240,0.75)" }}
          >
            {ind.label}
          </span>

          <ArrowRight
            size={12}
            className="relative shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
            style={{ color: "#6DBE2E" }}
          />
        </Link>
      ))}
    </div>

    {/* Footer */}
    <div className="px-3 pb-3">
      <Link
        to="/industries"
        onClick={onClose}
        className="group flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200"
        style={{
          background: "linear-gradient(135deg, rgba(109,190,46,0.12) 0%, rgba(109,190,46,0.04) 100%)",
          border: "1px solid rgba(109,190,46,0.22)",
        }}
      >
        <span className="text-[12px] font-semibold" style={{ color: "#8FD94A" }}>
          All Industries
        </span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
          style={{
            background: "linear-gradient(135deg, #6DBE2E, #4FA020)",
            boxShadow: "0 4px 12px rgba(109,190,46,0.4)",
          }}
        >
          <ArrowRight size={12} strokeWidth={2.2} className="text-[#061409]" />
        </div>
      </Link>
    </div>
  </div>
);

/* ─── Dropdown wrapper ───────────────────────────────── */
interface DropdownProps {
  label: string;
  active: boolean;
  children: React.ReactNode;
}

const NavDropdown = ({ label, active, children }: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen((p) => !p)}
        className="relative flex items-center gap-1 px-4 py-2 text-[13.5px] font-medium tracking-[0.03em] transition-colors duration-200 group rounded-md"
        style={{ color: active || open ? "#6DBE2E" : "rgba(240,255,240,0.82)" }}
      >
        {label}
        <ChevronDown
          size={12}
          strokeWidth={2.2}
          className={`mt-px transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          style={{ color: active || open ? "#6DBE2E" : "rgba(240,255,240,0.45)" }}
        />
        {/* Animated underline */}
        <span
          className="absolute bottom-0.5 left-4 right-4 h-px transition-transform duration-300 origin-left"
          style={{
            background: "linear-gradient(90deg, #6DBE2E, #8FD94A)",
            transform: active || open ? "scaleX(1)" : "scaleX(0)",
          }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{   opacity: 0, y: 12, scale: 0.97  }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
            style={{ minWidth: "max-content" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ─── Desktop nav link ───────────────────────────────── */
const NavLink = ({ to, active, children }: { to: string; active: boolean; children: React.ReactNode }) => (
  <Link
    to={to}
    className="relative px-4 py-2 text-[13.5px] font-medium tracking-[0.03em] transition-colors duration-200 group rounded-md flex items-center gap-1.5"
    style={{ color: active ? "#6DBE2E" : "rgba(240,255,240,0.82)" }}
  >
    {children}
    <span
      className="absolute bottom-0.5 left-4 right-4 h-px transition-transform duration-300 origin-left group-hover:scale-x-100"
      style={{
        background: "linear-gradient(90deg, #6DBE2E, #8FD94A)",
        transform: active ? "scaleX(1)" : "scaleX(0)",
      }}
    />
  </Link>
);

/* ─── Main Navbar ────────────────────────────────────── */
const Navbar = () => {
  const [scrolled,         setScrolled]         = useState(false);
  const [mobileOpen,       setMobileOpen]       = useState(false);
  const [mobileServices,   setMobileServices]   = useState(false);
  const [mobileIndustries, setMobileIndustries] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServices(false);
    setMobileIndustries(false);
  }, [location]);

  const isServicesActive   = location.pathname.startsWith("/services");
  const isIndustriesActive = location.pathname.startsWith("/industries");
  const closeMobile        = () => setMobileOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "linear-gradient(180deg, rgba(6,20,9,0.96) 0%, rgba(6,20,9,0.91) 100%)"
          : "linear-gradient(180deg, rgba(6,20,9,0.5) 0%, rgba(6,20,9,0.12) 100%)",
        backdropFilter: scrolled ? "blur(28px) saturate(1.4)" : "blur(10px)",
        WebkitBackdropFilter: scrolled ? "blur(28px) saturate(1.4)" : "blur(10px)",
        borderBottom: scrolled
          ? "1px solid rgba(109,190,46,0.22)"
          : "1px solid rgba(109,190,46,0.07)",
        boxShadow: scrolled
          ? "0 4px 40px rgba(0,0,0,0.5), 0 0 60px rgba(109,190,46,0.04)"
          : "none",
      }}
    >
      {/* Top shimmer line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, transparent 0%, #6DBE2E 25%, #8FD94A 50%, #6DBE2E 75%, transparent 100%)",
          opacity: scrolled ? 0.7 : 0.35,
        }}
      />

      {/* Subtle ambient glow behind logo area */}
      <div
        className="absolute top-0 left-0 w-64 h-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(109,190,46,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1320px] mx-auto flex items-center justify-between px-8 h-[74px]">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative">
            {/* Glow halo behind logo */}
            <div
              className="absolute inset-0 rounded-full blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              style={{ background: "rgba(109,190,46,0.25)", transform: "scale(1.4)" }}
            />
            <img
              src={logoImg}
              alt="Sapling Consultancy Services"
              className="relative h-10 w-auto drop-shadow-lg transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-0.5">
          <NavLink to="/" active={location.pathname === "/"}>
            <Home
              size={13}
              strokeWidth={1.8}
              style={{ color: location.pathname === "/" ? "#6DBE2E" : "rgba(240,255,240,0.4)" }}
            />
            Home
          </NavLink>
          <NavLink to="/about" active={location.pathname === "/about"}>About Us</NavLink>

          <NavDropdown label="Services" active={isServicesActive}>
            <ServicesDropdown onClose={() => {}} />
          </NavDropdown>

          <NavDropdown label="Industries" active={isIndustriesActive}>
            <IndustriesDropdown onClose={() => {}} />
          </NavDropdown>

          <NavLink to="/global" active={location.pathname === "/global"}>Global</NavLink>
          <NavLink to="/faqs"   active={location.pathname === "/faqs"}>FAQs</NavLink>
        </div>

        {/* CTA button */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.07em] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-px"
            style={{
              background: "linear-gradient(135deg, #7ACC35 0%, #6DBE2E 50%, #4FA020 100%)",
              color: "#061409",
              border: "1px solid rgba(143,217,74,0.5)",
              boxShadow: "0 2px 20px rgba(109,190,46,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            {/* Shimmer on button */}
            <span
              className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"
            />
            {/* Hover glow pulse */}
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.12) 0%, transparent 70%)" }}
            />
            Contact Us
            <ArrowRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 rounded-lg transition-colors"
          style={{ color: "rgba(240,255,240,0.85)" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen
              ? <motion.span key="x"    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90,  opacity: 0 }} transition={{ duration: 0.15 }} className="block"><X    size={22} /></motion.span>
              : <motion.span key="menu" initial={{ rotate:  90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }} className="block"><Menu size={22} /></motion.span>
            }
          </AnimatePresence>
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{   opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden"
            style={{
              background: "linear-gradient(160deg, #0D2414 0%, #061409 100%)",
              borderTop: "1px solid rgba(109,190,46,0.2)",
            }}
          >
            <div className="max-w-[1320px] mx-auto flex flex-col py-4 px-4 gap-0.5">

              {/* Home */}
              <Link
                to="/"
                onClick={closeMobile}
                className="flex items-center gap-2.5 py-3 px-4 text-[13.5px] font-medium rounded-xl transition-all duration-150"
                style={{
                  color: location.pathname === "/" ? "#6DBE2E" : "rgba(240,255,240,0.7)",
                  background: location.pathname === "/" ? "rgba(109,190,46,0.1)" : "transparent",
                  border: `1px solid ${location.pathname === "/" ? "rgba(109,190,46,0.22)" : "transparent"}`,
                }}
              >
                <Home size={14} strokeWidth={1.8} /> Home
              </Link>

              {/* About */}
              <Link
                to="/about"
                onClick={closeMobile}
                className="py-3 px-4 text-[13.5px] font-medium rounded-xl transition-all duration-150"
                style={{
                  color: location.pathname === "/about" ? "#6DBE2E" : "rgba(240,255,240,0.7)",
                  background: location.pathname === "/about" ? "rgba(109,190,46,0.1)" : "transparent",
                  border: `1px solid ${location.pathname === "/about" ? "rgba(109,190,46,0.22)" : "transparent"}`,
                }}
              >
                About Us
              </Link>

              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setMobileServices((p) => !p)}
                  className="w-full flex items-center justify-between py-3 px-4 text-[13.5px] font-medium rounded-xl transition-all duration-150"
                  style={{
                    color: isServicesActive || mobileServices ? "#6DBE2E" : "rgba(240,255,240,0.7)",
                    background: isServicesActive || mobileServices ? "rgba(109,190,46,0.1)" : "transparent",
                    border: `1px solid ${isServicesActive || mobileServices ? "rgba(109,190,46,0.22)" : "transparent"}`,
                  }}
                >
                  <span>Services</span>
                  <ChevronDown size={14} strokeWidth={2} className={`transition-transform duration-200 ${mobileServices ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServices && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{   height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-3 pt-1 pb-1 space-y-0.5">
                        <Link
                          to="/services"
                          onClick={closeMobile}
                          className="flex items-center gap-2 py-2.5 px-4 text-[11px] font-semibold uppercase tracking-[0.12em] rounded-lg"
                          style={{ color: "#6DBE2E" }}
                        >
                          <ArrowRight size={12} /> All Services
                        </Link>
                        {serviceItems.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            onClick={closeMobile}
                            className="flex items-center gap-3 py-2.5 px-4 text-[13px] rounded-lg transition-all duration-150 hover:bg-white/[0.04]"
                            style={{ color: "rgba(240,255,240,0.6)" }}
                          >
                            <s.icon size={13} strokeWidth={1.7} style={{ color: "#6DBE2E", flexShrink: 0 }} />
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Industries accordion */}
              <div>
                <button
                  onClick={() => setMobileIndustries((p) => !p)}
                  className="w-full flex items-center justify-between py-3 px-4 text-[13.5px] font-medium rounded-xl transition-all duration-150"
                  style={{
                    color: isIndustriesActive || mobileIndustries ? "#6DBE2E" : "rgba(240,255,240,0.7)",
                    background: isIndustriesActive || mobileIndustries ? "rgba(109,190,46,0.1)" : "transparent",
                    border: `1px solid ${isIndustriesActive || mobileIndustries ? "rgba(109,190,46,0.22)" : "transparent"}`,
                  }}
                >
                  <span>Industries</span>
                  <ChevronDown size={14} strokeWidth={2} className={`transition-transform duration-200 ${mobileIndustries ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileIndustries && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{   height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-3 pt-1 pb-1 space-y-0.5">
                        <Link
                          to="/industries"
                          onClick={closeMobile}
                          className="flex items-center gap-2 py-2.5 px-4 text-[11px] font-semibold uppercase tracking-[0.12em] rounded-lg"
                          style={{ color: "#6DBE2E" }}
                        >
                          <ArrowRight size={12} /> All Industries
                        </Link>
                        {industryItems.map((ind) => (
                          <Link
                            key={ind.slug}
                            to={`/industries/${ind.slug}`}
                            onClick={closeMobile}
                            className="flex items-center gap-3 py-2.5 px-4 text-[13px] rounded-lg transition-all duration-150 hover:bg-white/[0.04]"
                            style={{ color: "rgba(240,255,240,0.6)" }}
                          >
                            <ind.icon size={13} strokeWidth={1.7} style={{ color: "#6DBE2E", flexShrink: 0 }} />
                            {ind.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Global & FAQs */}
              {[
                { label: "Global Presence", href: "/global" },
                { label: "FAQs",            href: "/faqs"   },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={closeMobile}
                  className="py-3 px-4 text-[13.5px] font-medium rounded-xl transition-all duration-150"
                  style={{
                    color: location.pathname === link.href ? "#6DBE2E" : "rgba(240,255,240,0.7)",
                    background: location.pathname === link.href ? "rgba(109,190,46,0.1)" : "transparent",
                    border: `1px solid ${location.pathname === link.href ? "rgba(109,190,46,0.22)" : "transparent"}`,
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="pt-3 mt-1" style={{ borderTop: "1px solid rgba(109,190,46,0.15)" }}>
                <Link
                  to="/contact"
                  onClick={closeMobile}
                  className="relative flex items-center justify-center gap-2 w-full py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] rounded-xl overflow-hidden transition-all duration-200 active:opacity-90"
                  style={{
                    background: "linear-gradient(135deg, #7ACC35 0%, #6DBE2E 50%, #4FA020 100%)",
                    color: "#061409",
                    border: "1px solid rgba(143,217,74,0.45)",
                    boxShadow: "0 4px 20px rgba(109,190,46,0.35), inset 0 1px 0 rgba(255,255,255,0.2)",
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                  Contact Us
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;