import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin, Globe, ShieldCheck, Send, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

/* ── Data ─────────────────────────────────────────────── */
const contactDetails = [
  { icon: Mail,   label: "Email Us",      value: "info@saplinguae.com",                                          href: "mailto:info@saplinguae.com" },
  { icon: Globe,  label: "Visit Website", value: "www.saplinguae.com",                                           href: "https://www.saplinguae.com" },
  { icon: MapPin, label: "Headquarters",  value: "Compass Building, Al Hamra Industrial Zone FZ, Ras Al Khaimah, UAE", href: "#" },
];
const credentials = [
  { label: "Licence No",  value: "47027650"                        },
  { label: "Type",        value: "Freezone · FZ-LLC"               },
  { label: "Manager",     value: "Swapnil Achyut Gokhale"          },
  { label: "Activity",    value: "Project Management Consultancy"  },
  { label: "Valid Until", value: "14 December 2026"                },
];

const fields = [
  { label: "Full Name",     type: "text",  placeholder: "Your full name",    id: "name"    },
  { label: "Company",       type: "text",  placeholder: "Your company name", id: "company" },
  { label: "Email Address", type: "email", placeholder: "your@email.com",    id: "email"   },
];

const trustPoints = [
  "Response within 24 hours",
  "No-commitment discovery call",
  "Serving 4+ continents",
];

/* ── Corner bracket ── */
const Bracket = ({ flip = false }: { flip?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={flip ? "rotate-180" : ""}>
    <path d="M2 22 L2 2 L22 2" stroke="#6DBE2E" strokeWidth="1.5" strokeOpacity="0.6" />
    <circle cx="2" cy="2" r="1.8" fill="#6DBE2E" fillOpacity="0.8" />
  </svg>
);

/* ── Form input ── */
const FormInput = ({
  label, type, placeholder, id, textarea = false,
}: {
  label: string; type: string; placeholder: string; id: string; textarea?: boolean;
}) => {
  const [focused, setFocused] = useState(false);

  const base: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "10px",
    fontFamily: "'DM Sans', system-ui, sans-serif",
    fontSize: "13.5px",
    fontWeight: 300,
    color: "#0D1F0A",
    background: focused ? "#ffffff" : "#F5FAF3",
    border: focused ? "1px solid rgba(109,190,46,0.55)" : "1px solid rgba(109,190,46,0.18)",
    outline: "none",
    boxShadow: focused ? "0 0 0 3px rgba(109,190,46,0.1)" : "none",
    transition: "all 0.22s",
    resize: "none" as const,
  };

  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: "block",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: "10px",
          fontWeight: 600,
          color: focused ? "#4FA020" : "rgba(13,31,10,0.4)",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          marginBottom: "6px",
          transition: "color 0.2s",
        }}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={4}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={base}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={base}
        />
      )}
    </div>
  );
};

/* ── Contact detail row with JS hover ── */
const ContactRow = ({
  icon: Icon, label, value, href, i,
}: {
  icon: React.ElementType; label: string; value: string; href: string; i: number;
}) => {
  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.background   = "#ffffff";
    el.style.borderColor  = "rgba(109,190,46,0.32)";
    el.style.boxShadow    = "0 4px 20px rgba(13,31,10,0.07)";
    el.style.transform    = "translateX(4px)";
  };
  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.background   = "rgba(255,255,255,0.65)";
    el.style.borderColor  = "rgba(109,190,46,0.12)";
    el.style.boxShadow    = "none";
    el.style.transform    = "translateX(0)";
  };

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      initial={{ opacity: 0, x: -14 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="flex items-start gap-4 p-4 rounded-xl"
      style={{
        background: "rgba(255,255,255,0.65)",
        border: "1px solid rgba(109,190,46,0.12)",
        transition: "background 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.3s",
      }}
    >
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
        style={{
          background: "linear-gradient(135deg, rgba(109,190,46,0.18) 0%, rgba(109,190,46,0.06) 100%)",
          border: "1px solid rgba(109,190,46,0.28)",
        }}
      >
        <Icon size={15} strokeWidth={1.7} style={{ color: "#6DBE2E" }} />
      </div>
      <div className="min-w-0">
        <p
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            color: "rgba(13,31,10,0.32)",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            marginBottom: "2px",
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            color: "rgba(13,31,10,0.68)",
            lineHeight: 1.5,
          }}
        >
          {value}
        </p>
      </div>
    </motion.a>
  );
};

/* ── Main component ── */
const ContactSection = () => (
  <section
    id="contact"
    className="relative py-24 lg:py-36 overflow-hidden"
    style={{ background: "#F2F7F0" }}
  >
    {/* Ambient radial blobs */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle at 8% 30%, rgba(109,190,46,0.07) 0%, transparent 48%), " +
          "radial-gradient(circle at 92% 70%, rgba(109,190,46,0.05) 0%, transparent 45%)",
      }}
    />

    {/* Faint grid */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.022]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }}
    />

    <div className="max-w-[1320px] mx-auto px-8 relative">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
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
            Get In Touch
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "clamp(34px, 4vw, 52px)",
              fontWeight: 600,
              color: "#0D1F0A",
              letterSpacing: "-0.02em",
              lineHeight: 1.06,
            }}
          >
            Ready to Scale Your{" "}
            <span className="relative inline-block" style={{ color: "#5AB025" }}>
              Enterprise?
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 5" preserveAspectRatio="none" height="4">
                <path d="M0 3.5 Q75 1 150 2.5 Q225 4 300 2" stroke="#6DBE2E" strokeWidth="1.5" fill="none" strokeOpacity="0.5" />
              </svg>
            </span>
          </h2>

          {/* Trust pills */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {trustPoints.map((pt) => (
              <div
                key={pt}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(109,190,46,0.08)",
                  border: "1px solid rgba(109,190,46,0.2)",
                }}
              >
                <CheckCircle2 size={11} strokeWidth={2.5} style={{ color: "#6DBE2E" }} />
                <span
                  style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: "10.5px",
                    fontWeight: 500,
                    color: "#4FA020",
                    letterSpacing: "0.04em",
                  }}
                >
                  {pt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10 xl:gap-14 items-start">

        {/* ── LEFT ── */}
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-2 space-y-5"
        >
          <p
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              color: "rgba(13,31,10,0.52)",
              lineHeight: 1.85,
            }}
          >
            Partner with Sapling Consultancy for expert consulting tailored to your industry. Our team of specialists is ready to help you achieve measurable results.
          </p>

          {/* Contact rows */}
          <div className="space-y-3 pt-1">
            {contactDetails.map(({ icon, label, value, href }, i) => (
              <ContactRow key={label} icon={icon} label={label} value={value} href={href} i={i} />
            ))}
          </div>

          {/* RAKEZ card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl p-5"
            style={{
              background: "linear-gradient(135deg, #0D1F0A 0%, #132B0F 100%)",
              border: "1px solid rgba(109,190,46,0.22)",
              boxShadow: "0 4px 24px rgba(13,31,10,0.15)",
            }}
          >
            {/* Green shimmer top */}
            <div
              className="absolute top-0 left-5 right-5 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }}
            />
            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(109,190,46,0.09) 0%, transparent 65%)" }}
            />

            {/* Corner brackets */}
            <div className="absolute top-3 left-3 opacity-45"><Bracket /></div>
            <div className="absolute bottom-3 right-3 opacity-45"><Bracket flip /></div>

            {/* Header */}
            <div className="relative flex items-center gap-2.5 mb-4">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(109,190,46,0.25), rgba(109,190,46,0.1))",
                  border: "1px solid rgba(109,190,46,0.3)",
                }}
              >
                <ShieldCheck size={13} strokeWidth={1.8} style={{ color: "#6DBE2E" }} />
              </div>
              <span
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  color: "rgba(109,190,46,0.8)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                RAKEZ Licensed Entity
              </span>
            </div>

            {/* Credential rows */}
            <div className="relative space-y-2.5">
              {credentials.map(({ label, value }, i) => (
                <div
                  key={label}
                  className="flex items-start justify-between gap-4 py-2"
                  style={{
                    borderBottom: i < credentials.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "rgba(240,255,240,0.22)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      flexShrink: 0,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: "12px",
                      fontWeight: 400,
                      color: "rgba(240,255,240,0.62)",
                      textAlign: "right",
                      lineHeight: 1.4,
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── RIGHT — Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-3 relative"
        >
          <div
            className="relative overflow-hidden rounded-2xl p-8"
            style={{
              background: "#ffffff",
              border: "1px solid rgba(109,190,46,0.2)",
              boxShadow: "0 12px 48px -12px rgba(13,31,10,0.1), 0 2px 8px rgba(13,31,10,0.04)",
            }}
          >
            {/* Green shimmer top */}
            <div
              className="absolute top-0 left-8 right-8 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }}
            />

            {/* Ambient top glow */}
            <div
              className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(109,190,46,0.05) 0%, transparent 70%)" }}
            />

            {/* Corner ornament */}
            <div className="absolute top-4 right-4 opacity-35"><Bracket flip /></div>

            {/* Form heading */}
            <div className="relative mb-7">
              <h3
                className="mb-1"
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "28px",
                  fontWeight: 600,
                  color: "#0D1F0A",
                  letterSpacing: "-0.01em",
                }}
              >
                Quick Enquiry
              </h3>
              <div
                className="h-px w-10"
                style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))" }}
              />
            </div>

            {/* Fields */}
            <div className="relative space-y-5">
              {/* Two-column row for Name & Company */}
              <div className="grid sm:grid-cols-2 gap-5">
                {fields.slice(0, 2).map((f) => (
                  <FormInput key={f.id} {...f} />
                ))}
              </div>

              {/* Email full width */}
              <FormInput {...fields[2]} />

              {/* Message */}
              <FormInput
                label="Message"
                type="text"
                placeholder="Tell us about your project or challenge..."
                id="message"
                textarea
              />

              {/* Submit */}
              <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.15 }}>
                <Link
                  to="/contact"
                  className="group relative flex items-center justify-center gap-2.5 w-full py-4 rounded-xl overflow-hidden transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #7ACC35 0%, #6DBE2E 50%, #4FA020 100%)",
                    color: "#061409",
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    border: "1px solid rgba(143,217,74,0.45)",
                    boxShadow: "0 4px 24px rgba(109,190,46,0.32), inset 0 1px 0 rgba(255,255,255,0.22)",
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                  <Send size={14} strokeWidth={2.2} />
                  Submit Enquiry
                  <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px" style={{ background: "rgba(109,190,46,0.12)" }} />
                <span
                  style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: "10px",
                    fontWeight: 500,
                    color: "rgba(13,31,10,0.28)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  Or reach us directly
                </span>
                <div className="flex-1 h-px" style={{ background: "rgba(109,190,46,0.12)" }} />
              </div>

              {/* Direct email pill */}
              <a
                href="mailto:info@saplinguae.com"
                className="group flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl transition-all duration-250"
                style={{
                  background: "rgba(109,190,46,0.05)",
                  border: "1px solid rgba(109,190,46,0.18)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background  = "rgba(109,190,46,0.09)";
                  el.style.borderColor = "rgba(109,190,46,0.32)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.background  = "rgba(109,190,46,0.05)";
                  el.style.borderColor = "rgba(109,190,46,0.18)";
                }}
              >
                <Mail size={13} strokeWidth={1.8} style={{ color: "#6DBE2E" }} />
                <span
                  style={{
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "rgba(13,31,10,0.6)",
                  }}
                >
                  info@saplinguae.com
                </span>
              </a>

              {/* Privacy note */}
              <p
                className="text-center"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: "11px",
                  fontWeight: 300,
                  color: "rgba(13,31,10,0.28)",
                  lineHeight: 1.6,
                }}
              >
                By submitting you agree to our privacy policy. We respond within 24 hours.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default ContactSection;