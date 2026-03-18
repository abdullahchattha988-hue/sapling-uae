import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "We begin by deeply understanding your business objectives, challenges, and requirements. Our team conducts thorough assessments to identify opportunities for improvement and growth.",
    detail: "Discovery · Assessment · Scoping",
  },
  {
    num: "02",
    title: "Strategy & Planning",
    desc: "Our experts design comprehensive technical and workforce solutions tailored to your needs. We create detailed roadmaps, define milestones, and establish success criteria.",
    detail: "Roadmap · KPIs · Milestones",
  },
  {
    num: "03",
    title: "Implementation",
    desc: "We deploy expert consultants and cutting-edge technology systems. Our structured approach ensures minimal disruption while maximising the value of new solutions.",
    detail: "Deployment · Integration · Validation",
  },
  {
    num: "04",
    title: "Execution",
    desc: "Our team supports project development and automation with hands-on expertise. We ensure quality delivery through rigorous testing, validation, and stakeholder communication.",
    detail: "QA · Testing · Delivery",
  },
  {
    num: "05",
    title: "Long-Term Support",
    desc: "We provide continuous improvement and operational support to ensure sustained success. Our team remains engaged to optimise performance and adapt to evolving needs.",
    detail: "Optimisation · Support · Growth",
  },
];

const ProcessPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: "linear-gradient(160deg, #0D1F35 0%, #071220 55%, #060f1a 100%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(200,151,58,0.07) 1px, transparent 0)", backgroundSize: "36px 36px" }} />
        <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent 0%, #C8973A 30%, #E4B96A 50%, #C8973A 70%, transparent 100%)", opacity: 0.45 }} />
        <div className="max-w-[1320px] mx-auto px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #C8973A, rgba(200,151,58,0.3))" }} />
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#C8973A", letterSpacing: "0.22em", textTransform: "uppercase" }}>How We Work</span>
            </div>
            <h1 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(42px, 6vw, 74px)", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              Our Proven <span style={{ color: "#C8973A" }}>Process</span>
            </h1>
            <div className="mb-6 h-px w-16" style={{ background: "linear-gradient(90deg, #C8973A, rgba(200,151,58,0.2))" }} />
            <p className="mb-8 max-w-2xl" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "16px", fontWeight: 300, color: "rgba(255,255,255,0.58)", lineHeight: 1.8 }}>
              A structured methodology that delivers results — from first consultation to long-term partnership and sustained success.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.65 }} className="flex flex-wrap gap-0 mt-14 pt-10" style={{ borderTop: "1px solid rgba(200,151,58,0.12)" }}>
            {[{ value: "5", label: "Clear Stages" }, { value: "100%", label: "Client Visibility" }, { value: "KPI", label: "Driven Delivery" }].map((s, i, arr) => (
              <div key={s.label} className="pr-10 mr-10" style={{ borderRight: i < arr.length - 1 ? "1px solid rgba(200,151,58,0.15)" : "none" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "36px", fontWeight: 600, color: "#C8973A", lineHeight: 1, marginBottom: "4px" }}>{s.value}</div>
                <div style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 500, color: "rgba(255,255,255,0.3)", letterSpacing: "0.16em", textTransform: "uppercase" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════ STEPS ══════════ */}
      <section className="py-24 lg:py-36 bg-white relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-8">

          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #C8973A, rgba(200,151,58,0.3))" }} />
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#C8973A", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                Methodology
              </span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 600, color: "#0B1929", letterSpacing: "-0.02em", lineHeight: 1.08 }}>
              Five Stages to <span style={{ color: "#C8973A" }}>Success</span>
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Vertical gold connector line */}
            <div
              className="absolute left-[27px] top-10 bottom-10 w-px hidden lg:block"
              style={{ background: "linear-gradient(to bottom, #C8973A, rgba(200,151,58,0.15))" }}
            />

            <div className="space-y-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex gap-8 items-start"
                >
                  {/* Number node */}
                  <div
                    className="relative w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 z-10 transition-all duration-300 group-hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #D4A04A 0%, #C8973A 100%)",
                      boxShadow: "0 4px 20px rgba(200,151,58,0.35)",
                    }}
                  >
                    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px", fontWeight: 600, color: "#071220", letterSpacing: "0.04em" }}>
                      {step.num}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className="group flex-1 relative overflow-hidden rounded-2xl p-7 transition-all duration-300"
                    style={{ background: "#F4F2ED", border: "1px solid rgba(200,151,58,0.12)" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "#ffffff";
                      el.style.borderColor = "rgba(200,151,58,0.35)";
                      el.style.boxShadow = "0 12px 40px -8px rgba(11,25,41,0.14)";
                      el.style.transform = "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.background = "#F4F2ED";
                      el.style.borderColor = "rgba(200,151,58,0.12)";
                      el.style.boxShadow = "none";
                      el.style.transform = "translateX(0)";
                    }}
                  >
                    {/* Hover gold shimmer */}
                    <div className="absolute top-0 left-4 right-4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(90deg, transparent, #C8973A, transparent)" }} />

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="mb-1" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "26px", fontWeight: 600, color: "#0B1929", letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                          {step.title}
                        </h3>
                        <div className="mb-4 h-px w-10 group-hover:w-16 transition-all duration-300" style={{ background: "linear-gradient(90deg, #C8973A, rgba(200,151,58,0.2))" }} />
                        <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(11,25,41,0.55)", lineHeight: 1.8 }}>
                          {step.desc}
                        </p>
                      </div>

                      {/* Detail pill */}
                      <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full shrink-0 self-start"
                        style={{ background: "rgba(200,151,58,0.08)", border: "1px solid rgba(200,151,58,0.2)" }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#C8973A" }} />
                        <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#C8973A", letterSpacing: "0.08em" }}>
                          {step.detail}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ CTA STRIP ══════════ */}
      <div className="max-w-[1320px] mx-auto px-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #0B1929 0%, #0f2236 100%)", border: "1px solid rgba(200,151,58,0.2)" }}
        >
          <div className="absolute top-0 left-8 right-8 h-px" style={{ background: "linear-gradient(90deg, transparent, #C8973A, transparent)" }} />
          <div>
            <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10px", fontWeight: 600, color: "rgba(200,151,58,0.7)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "4px" }}>Ready to begin?</p>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 600, color: "rgba(255,255,255,0.88)" }}>
              Let's start with a discovery consultation.
            </p>
          </div>
          <a href="/contact" className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg overflow-hidden shrink-0 transition-all duration-300 hover:-translate-y-px"
            style={{ background: "linear-gradient(135deg, #D4A04A 0%, #C8973A 50%, #B8822A 100%)", color: "#071220", fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.07em", textTransform: "uppercase", border: "1px solid rgba(228,185,106,0.45)", boxShadow: "0 4px 20px rgba(200,151,58,0.3)" }}
          >
            <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            Schedule Consultation
            <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default ProcessPage;