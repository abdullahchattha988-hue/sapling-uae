import { Link } from "react-router-dom";
import { MapPin, Mail, Linkedin, Globe, ArrowUpRight, ShieldCheck, ArrowRight } from "lucide-react";
import logoImg from "@/assets/logo-3.png";

/* ─── Data ───────────────────────────────────────────── */
const serviceLinks = [
  { label: "IT Consulting",         href: "/services/it-consulting"                },
  { label: "Industrial Automation", href: "/services/industrial-automation"        },
  { label: "MES Systems",           href: "/services/manufacturing-systems"        },
  { label: "PLM Systems",           href: "/services/product-lifecycle-management" },
  { label: "Cloud Services",        href: "/services/cloud-digital"                },
  { label: "Recruitment & Payroll", href: "/services/recruitment-payroll"          },
];

const companyLinks = [
  { label: "About Us",        href: "/about"      },
  { label: "Services",        href: "/services"   },
  { label: "Industries",      href: "/industries" },
  { label: "Global Presence", href: "/global"     },
  { label: "FAQs",            href: "/faqs"       },
  { label: "Contact",         href: "/contact"    },
];

const industryLinks = [
  { label: "Information Technology", href: "/industries/information-technology" },
  { label: "Oil & Gas",              href: "/industries/oil-and-gas"            },
  { label: "Pharmaceuticals",        href: "/industries/pharmaceuticals"        },
  { label: "Manufacturing",          href: "/industries/manufacturing"          },
  { label: "Finance",                href: "/industries/finance"                },
  { label: "Healthcare",             href: "/industries/healthcare"             },
];

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/company/sapling-consultancy", label: "LinkedIn" },
  { icon: Globe,    href: "https://www.saplinguae.com",                label: "Website"  },
  { icon: Mail,     href: "mailto:info@saplingconsultancy.com",                label: "Email"    },
];

/* ─── Footer nav link ────────────────────────────────── */
const FLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link
      to={href}
      style={{
        fontFamily: "'DM Sans', system-ui, sans-serif",
        fontSize: "13px",
        fontWeight: 300,
        color: "rgba(240,255,240,0.32)",
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        transition: "color 0.2s, padding-left 0.25s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "#8FD94A";
        el.style.paddingLeft = "10px";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.color = "rgba(240,255,240,0.32)";
        el.style.paddingLeft = "0px";
      }}
    >
      {children}
    </Link>
  </li>
);

/* ─── Column label ───────────────────────────────────── */
const Label = ({ children }: { children: React.ReactNode }) => (
  <p
    style={{
      fontFamily: "'DM Sans', system-ui, sans-serif",
      fontSize: "9px",
      fontWeight: 700,
      color: "rgba(109,190,46,0.6)",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      marginBottom: "18px",
    }}
  >
    {children}
  </p>
);

/* ─── Main Footer ────────────────────────────────────── */
const Footer = () => (
  <footer
    className="relative overflow-hidden"
    style={{
      background: "linear-gradient(170deg, #0A1E0D 0%, #061409 50%, #040D06 100%)",
    }}
  >
    {/* Dot grid */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.018]"
      style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #6DBE2E 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }}
    />

    {/* Ambient blobs */}
    <div
      className="absolute pointer-events-none"
      style={{
        top: "-160px", right: "-100px",
        width: "700px", height: "700px",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(109,190,46,0.06) 0%, transparent 65%)",
      }}
    />
    <div
      className="absolute pointer-events-none"
      style={{
        bottom: "-80px", left: "-60px",
        width: "500px", height: "500px",
        borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(109,190,46,0.035) 0%, transparent 65%)",
      }}
    />

    {/* Top shimmer */}
    <div
      className="absolute top-0 inset-x-0 h-px pointer-events-none"
      style={{
        background: "linear-gradient(90deg, transparent 0%, #6DBE2E 25%, #8FD94A 50%, #6DBE2E 75%, transparent 100%)",
        opacity: 0.6,
      }}
    />

    {/* ══ CTA BAND ══ */}
    <div className="relative" style={{ borderBottom: "1px solid rgba(109,190,46,0.1)" }}>
      <div className="max-w-[1320px] mx-auto px-8 py-14">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, transparent)" }} />
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: "9.5px",
                  fontWeight: 700,
                  color: "rgba(109,190,46,0.65)",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                }}
              >
                Scale With Sapling
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 600,
                color: "rgba(240,255,240,0.9)",
                letterSpacing: "-0.02em",
                lineHeight: 1.08,
              }}
            >
              Ready to transform your{" "}
              <span style={{ color: "#6DBE2E" }}>enterprise operations?</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-px"
              style={{
                background: "linear-gradient(135deg, #7ACC35 0%, #6DBE2E 50%, #4FA020 100%)",
                color: "#061409",
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: "12.5px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "1px solid rgba(143,217,74,0.4)",
                boxShadow: "0 4px 20px rgba(109,190,46,0.32), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              Get in Touch
              <ArrowRight size={13} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-px"
              style={{
                background: "rgba(109,190,46,0.05)",
                color: "rgba(240,255,240,0.55)",
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: "12.5px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                border: "1px solid rgba(109,190,46,0.15)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(109,190,46,0.4)";
                el.style.color = "#8FD94A";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(109,190,46,0.15)";
                el.style.color = "rgba(240,255,240,0.55)";
              }}
            >
              Our Services
              <ArrowUpRight size={13} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* ══ MAIN GRID ══ */}
    <div className="max-w-[1320px] mx-auto px-8 pt-16 pb-12">
      <div className="grid grid-cols-12 gap-8 xl:gap-12">

        {/* Brand */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <Link to="/" className="inline-block mb-6 group">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "rgba(109,190,46,0.2)", transform: "scale(1.3)" }}
              />
              <img
                src={logoImg}
                alt="Sapling Consultancy Services"
                className="relative"
                style={{ height: "44px", width: "auto" }}
              />
            </div>
          </Link>

          <p
            className="mb-6"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "13px",
              fontWeight: 300,
              color: "rgba(240,255,240,0.28)",
              lineHeight: 1.85,
              maxWidth: "260px",
            }}
          >
            Expert global consulting for enterprise clients across 4 continents. RAKEZ-licensed, UAE-headquartered.
          </p>

          {/* Socials */}
          <div className="flex gap-2 mb-8">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: 36, height: 36, borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(109,190,46,0.05)",
                  border: "1px solid rgba(109,190,46,0.12)",
                  color: "rgba(240,255,240,0.32)",
                  transition: "all 0.22s", flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background  = "rgba(109,190,46,0.15)";
                  el.style.borderColor = "rgba(109,190,46,0.45)";
                  el.style.color       = "#6DBE2E";
                  el.style.transform   = "translateY(-3px)";
                  el.style.boxShadow   = "0 6px 16px rgba(0,0,0,0.3), 0 0 10px rgba(109,190,46,0.15)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background  = "rgba(109,190,46,0.05)";
                  el.style.borderColor = "rgba(109,190,46,0.12)";
                  el.style.color       = "rgba(240,255,240,0.32)";
                  el.style.transform   = "translateY(0)";
                  el.style.boxShadow   = "none";
                }}
              >
                <Icon size={14} strokeWidth={1.8} />
              </a>
            ))}
          </div>

          {/* RAKEZ badge */}
          <div
            className="relative overflow-hidden rounded-xl p-4"
            style={{
              background: "linear-gradient(135deg, rgba(109,190,46,0.1) 0%, rgba(109,190,46,0.04) 100%)",
              border: "1px solid rgba(109,190,46,0.2)",
            }}
          >
            <div
              className="absolute top-0 left-4 right-4 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(109,190,46,0.08) 0%, transparent 65%)" }}
            />
            <div className="relative flex items-start gap-2.5">
              <ShieldCheck size={14} strokeWidth={1.8} style={{ color: "#6DBE2E", marginTop: 2, flexShrink: 0 }} />
              <div>
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "9px", fontWeight: 700, color: "rgba(109,190,46,0.7)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "4px" }}>
                  RAKEZ Licensed Entity
                </p>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px", fontWeight: 600, color: "#6DBE2E", lineHeight: 1, letterSpacing: "0.04em", marginBottom: "4px", textShadow: "0 0 20px rgba(109,190,46,0.3)" }}>
                  #47027650
                </p>
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 300, color: "rgba(240,255,240,0.22)" }}>
                  FZ-LLC · Valid to 14 Dec 2026
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="col-span-6 md:col-span-4 lg:col-span-3">
          <Label>Services</Label>
          <ul className="space-y-3.5">
            {serviceLinks.map((l) => <FLink key={l.href} href={l.href}>{l.label}</FLink>)}
          </ul>
        </div>

        {/* Industries */}
        <div className="col-span-6 md:col-span-4 lg:col-span-3">
          <Label>Industries</Label>
          <ul className="space-y-3.5">
            {industryLinks.map((l) => <FLink key={l.href} href={l.href}>{l.label}</FLink>)}
          </ul>
        </div>

        {/* Contact */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <Label>Contact</Label>
          <div className="space-y-5">

            <div className="flex items-start gap-3">
              <div style={{ width: 30, height: 30, borderRadius: "8px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(109,190,46,0.09)", border: "1px solid rgba(109,190,46,0.2)", marginTop: 1 }}>
                <MapPin size={12} strokeWidth={1.8} style={{ color: "#6DBE2E" }} />
              </div>
              <address className="not-italic" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "12.5px", fontWeight: 300, color: "rgba(240,255,240,0.28)", lineHeight: 1.8 }}>
                Compass Building, Al Shohada Road<br />
                Al Hamra Industrial Zone FZ<br />
                Ras Al Khaimah, UAE
              </address>
            </div>

            <div className="flex items-center gap-3">
              <div style={{ width: 30, height: 30, borderRadius: "8px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(109,190,46,0.09)", border: "1px solid rgba(109,190,46,0.2)" }}>
                <Mail size={12} strokeWidth={1.8} style={{ color: "#6DBE2E" }} />
              </div>
              <a
                href="mailto:info@saplingconsultancy.com"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "12.5px", fontWeight: 300, color: "rgba(240,255,240,0.28)", transition: "color 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#6DBE2E"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(240,255,240,0.28)"; }}
              >
                info@saplingconsultancy.com
              </a>
            </div>

            <div className="pt-5" style={{ borderTop: "1px solid rgba(109,190,46,0.08)" }}>
              <Label>Company</Label>
              <ul className="space-y-3">
                {companyLinks.map((l) => <FLink key={l.href} href={l.href}>{l.label}</FLink>)}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* ══ BOTTOM BAR ══ */}
    <div className="relative" style={{ borderTop: "1px solid rgba(109,190,46,0.07)" }}>
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(109,190,46,0.28) 50%, transparent 100%)" }}
      />

      <div className="max-w-[1320px] mx-auto px-8 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">

          <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(240,255,240,0.16)", letterSpacing: "0.02em" }}>
            © {new Date().getFullYear()} Sapling Consultancy Services FZ-LLC. All rights reserved.
          </p>

          <div className="hidden md:flex items-center gap-2.5">
            {["RAKEZ Free Zone", "Licence #47027650", "Ras Al Khaimah, UAE"].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-2.5">
                <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 300, color: "rgba(240,255,240,0.16)", letterSpacing: "0.04em" }}>
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ display: "inline-block", width: 3, height: 3, borderRadius: "50%", background: "rgba(109,190,46,0.38)", flexShrink: 0 }} />
                )}
              </span>
            ))}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2"
            style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "11px", fontWeight: 500, color: "rgba(109,190,46,0.42)", letterSpacing: "0.1em", textTransform: "uppercase", background: "none", border: "none", cursor: "pointer", transition: "color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#6DBE2E"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(109,190,46,0.42)"; }}
          >
            Back to Top
            <span style={{ display: "inline-flex", width: 22, height: 22, borderRadius: "50%", border: "1px solid rgba(109,190,46,0.28)", alignItems: "center", justifyContent: "center" }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 8V2M2 5l3-3 3 3" stroke="#6DBE2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>

        </div>
      </div>
    </div>

  </footer>
);

export default Footer;