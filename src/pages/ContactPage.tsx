import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Linkedin, Send, CheckCircle2, Globe, ShieldCheck, ArrowRight, Clock, Users2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceOptions = ["IT Consulting", "Industrial Automation", "MES Systems", "PLM Systems", "Cloud Services", "Cybersecurity", "Recruitment", "Global Payroll", "Other"];

/* ── Field label wrapper ── */
const Field = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <label style={{ display: "block", fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "9.5px", fontWeight: 700, color: "rgba(13,31,10,0.4)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "7px" }}>
      {label}
    </label>
    {children}
  </div>
);

const inputBase = (focused: boolean): React.CSSProperties => ({
  width: "100%", padding: "12px 16px", borderRadius: "10px",
  fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13.5px", fontWeight: 300,
  color: "#0D1F0A",
  background: focused ? "#ffffff" : "#F5FAF3",
  border: focused ? "1px solid rgba(109,190,46,0.55)" : "1px solid rgba(109,190,46,0.18)",
  outline: "none",
  boxShadow: focused ? "0 0 0 3px rgba(109,190,46,0.1)" : "none",
  transition: "all 0.22s",
  resize: "none" as const,
});

/* ── Contact row with JS hover ── */
const ContactRow = ({ icon: Icon, label, value, href }: { icon: React.ElementType; label: string; value: string; href: string }) => {
  const handleEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.background = "#ffffff"; el.style.borderColor = "rgba(109,190,46,0.32)";
    el.style.boxShadow = "0 4px 20px rgba(13,31,10,0.07)"; el.style.transform = "translateX(4px)";
  };
  const handleLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget as HTMLElement;
    el.style.background = "rgba(255,255,255,0.65)"; el.style.borderColor = "rgba(109,190,46,0.12)";
    el.style.boxShadow = "none"; el.style.transform = "translateX(0)";
  };
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
      onMouseEnter={handleEnter} onMouseLeave={handleLeave}
      className="flex items-center gap-4 p-4 rounded-xl"
      style={{ background: "rgba(255,255,255,0.65)", border: "1px solid rgba(109,190,46,0.12)", transition: "all 0.25s" }}>
      <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: "linear-gradient(135deg, rgba(109,190,46,0.18) 0%, rgba(109,190,46,0.06) 100%)", border: "1px solid rgba(109,190,46,0.28)" }}>
        <Icon size={14} strokeWidth={1.8} style={{ color: "#6DBE2E" }} />
      </div>
      <div>
        <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "9.5px", fontWeight: 600, color: "rgba(13,31,10,0.3)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "2px" }}>{label}</p>
        <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13px", fontWeight: 400, color: "rgba(13,31,10,0.68)" }}>{value}</p>
      </div>
    </a>
  );
};

const ContactPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", service: "", country: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="min-h-screen" style={{ background: "#F2F7F0" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0A1E0D 0%, #061409 55%, #040D06 100%)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(109,190,46,0.07) 1px, transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 right-0 pointer-events-none"
          style={{ width: "600px", height: "600px", background: "radial-gradient(ellipse, rgba(109,190,46,0.09) 0%, transparent 65%)", transform: "translate(25%,-25%)" }} />
        <div className="absolute top-0 inset-x-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent 0%, #6DBE2E 25%, #8FD94A 50%, #6DBE2E 75%, transparent 100%)", opacity: 0.55 }} />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg className="absolute right-0 top-0 h-full opacity-[0.05]" viewBox="0 0 200 600" fill="none" preserveAspectRatio="none" style={{ width: "200px" }}>
            <line x1="200" y1="0" x2="0" y2="600" stroke="#6DBE2E" strokeWidth="1.5" />
            <line x1="155" y1="0" x2="-45" y2="600" stroke="#6DBE2E" strokeWidth="0.75" />
          </svg>
        </div>

        <div className="max-w-[1320px] mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
                <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#6DBE2E", letterSpacing: "0.22em", textTransform: "uppercase" }}>Reach Out</span>
              </div>
              <div className="overflow-hidden mb-5">
                {["Let's Start a", "Conversation"].map((line, i) => (
                  <motion.h1 key={i}
                    initial={{ y: 70, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="block leading-[1.04]"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(42px, 6vw, 72px)", fontWeight: 600, color: i === 0 ? "#ffffff" : "#6DBE2E", letterSpacing: "-0.025em" }}>
                    {line}
                  </motion.h1>
                ))}
              </div>
              <motion.div className="mb-5 h-px w-16" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.55 }}
                style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))", transformOrigin: "left" }} />
              <motion.p className="mb-6 max-w-xl" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "15px", fontWeight: 300, color: "rgba(240,255,240,0.5)", lineHeight: 1.85 }}>
                Ready to discuss your project? Our team of expert consultants is here to help you achieve measurable results.
              </motion.p>
            </motion.div>

            {/* Right — trust stats */}
            <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-col gap-4">
              {[
                { icon: Clock,   value: "24h",  label: "Response Time",     desc: "We get back to every enquiry within one business day" },
                { icon: Users2,  value: "50+",  label: "Enterprise Clients", desc: "Trusted by Tier-1 organisations across 4 continents"  },
                { icon: Globe,   value: "12+",  label: "Countries",          desc: "Active consulting and payroll operations worldwide"   },
              ].map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 + i * 0.1, duration: 0.6 }}
                  className="relative flex items-center gap-5 p-5 rounded-2xl overflow-hidden"
                  style={{ background: "rgba(109,190,46,0.07)", border: "1px solid rgba(109,190,46,0.2)", boxShadow: "inset 0 1px 0 rgba(143,217,74,0.08)" }}>
                  <div className="absolute top-0 left-4 right-4 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(109,190,46,0.35), transparent)" }} />
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "linear-gradient(135deg, rgba(109,190,46,0.2), rgba(109,190,46,0.07))", border: "1px solid rgba(109,190,46,0.3)" }}>
                    <s.icon size={18} strokeWidth={1.6} style={{ color: "#6DBE2E" }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "28px", fontWeight: 600, color: "#6DBE2E", lineHeight: 1, marginBottom: "2px", textShadow: "0 0 20px rgba(109,190,46,0.25)" }}>
                      {s.value}
                    </div>
                    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10px", fontWeight: 600, color: "rgba(240,255,240,0.5)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "3px" }}>{s.label}</div>
                    <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(240,255,240,0.32)", lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FORM + DETAILS ── */}
      <section className="py-24 lg:py-32" style={{ background: "#F2F7F0" }}>
        <div className="max-w-[1320px] mx-auto px-8">
          <div className="grid lg:grid-cols-5 gap-12 xl:gap-16 items-start">

            {/* LEFT — contact info */}
            <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 space-y-4">
              <p className="mb-6" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(13,31,10,0.52)", lineHeight: 1.85 }}>
                Whether you need IT consulting, industrial automation support, talent solutions, or any of our other services — we'd love to hear from you.
              </p>

              <ContactRow icon={Mail}     label="Email Us"      value="info@SaplingConsultancy.com"      href="mailto:info@SaplingConsultancy.com" />
              <ContactRow icon={Globe}    label="Visit Website" value="www.Sapling.com"        href="https://www.saplinguae.com" />
              <ContactRow icon={Linkedin} label="LinkedIn"      value="Sapling-Consultancy"      href="https://linkedin.com/company/Sapling-Consultancy" />

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.65)", border: "1px solid rgba(109,190,46,0.12)" }}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: "linear-gradient(135deg, rgba(109,190,46,0.18) 0%, rgba(109,190,46,0.06) 100%)", border: "1px solid rgba(109,190,46,0.28)" }}>
                  <MapPin size={14} strokeWidth={1.8} style={{ color: "#6DBE2E" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "9.5px", fontWeight: 600, color: "rgba(13,31,10,0.3)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "4px" }}>Registered Office</p>
                  <address style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(13,31,10,0.62)", lineHeight: 1.75, fontStyle: "normal" }}>
                    Compass Building, Al Shohada Road<br />
                    Al Hamra Industrial Zone FZ<br />
                    Ras Al Khaimah, UAE
                  </address>
                </div>
              </div>

              {/* RAKEZ badge */}
              <div className="relative overflow-hidden rounded-2xl p-5"
                style={{ background: "linear-gradient(135deg, #0D1F0A 0%, #132B0F 100%)", border: "1px solid rgba(109,190,46,0.22)", boxShadow: "0 4px 20px rgba(13,31,10,0.12)" }}>
                <div className="absolute top-0 left-5 right-5 h-px" style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }} />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(109,190,46,0.08) 0%, transparent 65%)" }} />
                <div className="relative flex items-start gap-3">
                  <ShieldCheck size={14} strokeWidth={1.8} style={{ color: "#6DBE2E", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "9px", fontWeight: 700, color: "rgba(109,190,46,0.65)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "4px" }}>RAKEZ Licensed Entity</p>
                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "20px", fontWeight: 600, color: "#6DBE2E", lineHeight: 1, letterSpacing: "0.04em", marginBottom: "4px", textShadow: "0 0 20px rgba(109,190,46,0.25)" }}>#47027650</p>
                    <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 300, color: "rgba(240,255,240,0.28)" }}>FZ-LLC · Valid to 14 Dec 2026</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-2xl p-8"
                style={{ background: "#ffffff", border: "1px solid rgba(109,190,46,0.2)", boxShadow: "0 16px 56px -12px rgba(13,31,10,0.1)" }}>
                <div className="absolute top-0 left-8 right-8 h-px" style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }} />
                <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(109,190,46,0.04) 0%, transparent 70%)" }} />

                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div key="success"
                      initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      className="relative text-center py-14">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                        style={{ background: "linear-gradient(135deg, rgba(109,190,46,0.2), rgba(109,190,46,0.07))", border: "1px solid rgba(109,190,46,0.3)" }}>
                        <CheckCircle2 size={28} strokeWidth={1.8} style={{ color: "#6DBE2E" }} />
                      </div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "34px", fontWeight: 600, color: "#0D1F0A", marginBottom: "10px", letterSpacing: "-0.01em" }}>
                        Message <span style={{ color: "#5AB025" }}>Sent!</span>
                      </h3>
                      <div className="h-px w-12 mx-auto mb-5" style={{ background: "linear-gradient(90deg, rgba(109,190,46,0.3), #6DBE2E, rgba(109,190,46,0.3))" }} />
                      <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(13,31,10,0.5)", lineHeight: 1.78, maxWidth: "340px", margin: "0 auto" }}>
                        Thank you for reaching out. A member of our team will get back to you within 1 business day.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="relative mb-7">
                        <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "30px", fontWeight: 600, color: "#0D1F0A", letterSpacing: "-0.01em", marginBottom: "6px" }}>
                          Send Us a <span style={{ color: "#5AB025" }}>Message</span>
                        </h3>
                        <div className="h-px w-12" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))" }} />
                      </div>

                      <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="relative space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                          <Field label="Full Name *">
                            <input type="text" required placeholder="Your full name" value={form.name} onChange={(e) => set("name", e.target.value)}
                              style={inputBase(focused === "name")} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
                          </Field>
                          <Field label="Company Name *">
                            <input type="text" required placeholder="Your company" value={form.company} onChange={(e) => set("company", e.target.value)}
                              style={inputBase(focused === "company")} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} />
                          </Field>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                          <Field label="Email Address *">
                            <input type="email" required placeholder="your@email.com" value={form.email} onChange={(e) => set("email", e.target.value)}
                              style={inputBase(focused === "email")} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
                          </Field>
                          <Field label="Phone Number">
                            <input type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={(e) => set("phone", e.target.value)}
                              style={inputBase(focused === "phone")} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} />
                          </Field>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5">
                          <Field label="Service of Interest">
                            <select value={form.service} onChange={(e) => set("service", e.target.value)}
                              style={{ ...inputBase(focused === "service"), appearance: "none" as any }}
                              onFocus={() => setFocused("service")} onBlur={() => setFocused(null)}>
                              <option value="">Select a service...</option>
                              {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                          </Field>
                          <Field label="Country / Region *">
                            <input type="text" required placeholder="Your country" value={form.country} onChange={(e) => set("country", e.target.value)}
                              style={inputBase(focused === "country")} onFocus={() => setFocused("country")} onBlur={() => setFocused(null)} />
                          </Field>
                        </div>
                        <Field label="Message *">
                          <div>
                            <textarea required minLength={50} rows={5} placeholder="Tell us about your project, requirements, or questions..."
                              value={form.message} onChange={(e) => set("message", e.target.value)}
                              style={{ ...inputBase(focused === "message"), resize: "none" }}
                              onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />
                            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 300, color: form.message.length >= 50 ? "#4FA020" : "rgba(13,31,10,0.3)", textAlign: "right", marginTop: "4px", transition: "color 0.2s" }}>
                              {form.message.length} / 50 min {form.message.length >= 50 ? "✓" : ""}
                            </p>
                          </div>
                        </Field>

                        <motion.button type="submit" whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}
                          className="group relative w-full flex items-center justify-center gap-2.5 py-4 rounded-xl overflow-hidden transition-all duration-300"
                          style={{ background: "linear-gradient(135deg, #7ACC35 0%, #6DBE2E 50%, #4FA020 100%)", color: "#061409", fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", border: "1px solid rgba(143,217,74,0.45)", boxShadow: "0 4px 24px rgba(109,190,46,0.32), inset 0 1px 0 rgba(255,255,255,0.22)", cursor: "pointer" }}>
                          <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                          <Send size={14} strokeWidth={2.2} />
                          Send Message
                          <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                        </motion.button>

                        <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(13,31,10,0.28)", textAlign: "center", lineHeight: 1.6 }}>
                          By submitting you agree to our privacy policy. We respond within 24 hours.
                        </p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;