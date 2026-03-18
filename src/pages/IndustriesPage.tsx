import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { industries } from "@/data/industries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import financeImg from "@/assets/industry-finance.webp";
import itImg      from "@/assets/industry-it.webp";
import oilImg     from "@/assets/industry-oil-gas.webp";
import pharmaImg  from "@/assets/industry-pharma.webp";
import mfgImg     from "@/assets/industry-manufacturing.webp";
import healthImg  from "@/assets/industry-healthcare.webp";

const imageMap: Record<string, string> = {
  "information-technology": itImg,
  "oil-and-gas":            oilImg,
  "pharmaceuticals":        pharmaImg,
  "manufacturing":          mfgImg,
  "finance":                financeImg,
  "healthcare":             healthImg,
};

const IndustriesPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen" style={{ background: "#F8FBF6" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section
        className="relative pt-36 pb-24 overflow-hidden"
        style={{ background: "linear-gradient(160deg, #0A1E0D 0%, #061409 55%, #040D06 100%)" }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(109,190,46,0.07) 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* Glow orb */}
        <div
          className="absolute top-0 right-0 pointer-events-none"
          style={{
            width: "650px", height: "650px",
            background: "radial-gradient(ellipse, rgba(109,190,46,0.09) 0%, transparent 65%)",
            transform: "translate(25%,-25%)",
          }}
        />
        {/* Top border line */}
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #6DBE2E 25%, #8FD94A 50%, #6DBE2E 75%, transparent 100%)",
            opacity: 0.55,
          }}
        />
        {/* Diagonal SVG lines */}
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
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#6DBE2E", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                Sectors We Serve
              </span>
            </div>

            <div className="overflow-hidden mb-5">
              {["Industries", "We Serve"].map((word, i) => (
                <motion.h1
                  key={i}
                  initial={{ y: 70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="block leading-[1.04]"
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(48px, 6.5vw, 82px)",
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
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "15px", fontWeight: 300, color: "rgba(240,255,240,0.52)", lineHeight: 1.85, maxWidth: "560px" }}
            >
              Deep domain expertise across six key industries, enabling consultants to deliver solutions that are technically sound and contextually relevant.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── INDUSTRIES GRID ── */}
      <section className="py-24 lg:py-32" style={{ background: "#F2F7F0" }}>
        <div className="max-w-[1320px] mx-auto px-8">

          {/* Section label */}
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
                Our Expertise
              </span>
              <span className="h-px flex-1" style={{ background: "rgba(109,190,46,0.15)" }} />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(32px, 4vw, 50px)", fontWeight: 600, color: "#0D1F0A", letterSpacing: "-0.02em", lineHeight: 1.08 }}>
              Sector <span style={{ color: "#5AB025" }}>Specialisations</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => {
              const img = imageMap[ind.slug] || (ind as any).image;
              return (
                <motion.div
                  key={ind.slug}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={`/industries/${ind.slug}`}
                    className="group relative block rounded-2xl overflow-hidden"
                    style={{ aspectRatio: "4/3" }}
                  >
                    {/* Image */}
                    <img
                      src={img}
                      alt={ind.title}
                      className="w-full h-full object-cover"
                      style={{ transition: "transform 0.65s cubic-bezier(0.22,1,0.36,1)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.07)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                    />

                    {/* Base gradient overlay */}
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(4,13,6,0.88) 0%, rgba(4,13,6,0.35) 50%, transparent 75%)" }}
                    />

                    {/* Hover green tint */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{ background: "rgba(109,190,46,0.08)", transition: "opacity 0.35s" }}
                    />

                    {/* Top shimmer on hover */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100"
                      style={{
                        background: "linear-gradient(90deg, transparent, #6DBE2E, #8FD94A, #6DBE2E, transparent)",
                        transition: "opacity 0.35s",
                      }}
                    />

                    {/* Border */}
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        border: "1px solid rgba(109,190,46,0.12)",
                        transition: "border-color 0.35s",
                      }}
                    />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      {/* Eyebrow */}
                      <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100" style={{ transition: "opacity 0.3s" }}>
                        <span className="h-px w-5" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
                        <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "9px", fontWeight: 700, color: "rgba(143,217,74,0.85)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                          View Practice
                        </span>
                      </div>

                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <p
                            style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "11.5px", fontWeight: 300, color: "rgba(240,255,240,0.45)", lineHeight: 1.5, marginBottom: "4px" }}
                            className="line-clamp-1"
                          >
                            {ind.description.split(".")[0]}.
                          </p>
                          <h3
                            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "24px", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.01em", lineHeight: 1.1 }}
                          >
                            {ind.title}
                          </h3>
                        </div>

                        {/* Arrow button */}
                        <div
                          className="shrink-0"
                          style={{
                            width: 38, height: 38, borderRadius: "10px",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            background: "rgba(255,255,255,0.08)",
                            border: "1px solid rgba(255,255,255,0.2)",
                            transition: "all 0.3s",
                          }}
                          onMouseEnter={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background  = "linear-gradient(135deg, #7ACC35, #6DBE2E)";
                            el.style.borderColor = "rgba(143,217,74,0.5)";
                            el.style.boxShadow   = "0 4px 14px rgba(109,190,46,0.4)";
                          }}
                          onMouseLeave={(e) => {
                            const el = e.currentTarget as HTMLElement;
                            el.style.background  = "rgba(255,255,255,0.08)";
                            el.style.borderColor = "rgba(255,255,255,0.2)";
                            el.style.boxShadow   = "none";
                          }}
                        >
                          <ArrowRight
                            size={15}
                            strokeWidth={2}
                            style={{ color: "#ffffff", transition: "transform 0.3s" }}
                            className="group-hover:translate-x-0.5 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      {/* Bottom green rule — slides in on hover */}
                      <div
                        className="mt-4 h-px opacity-0 group-hover:opacity-100"
                        style={{
                          background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))",
                          transition: "opacity 0.4s",
                        }}
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
            className="text-center max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-10" style={{ background: "linear-gradient(90deg, transparent, #6DBE2E)" }} />
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10.5px", fontWeight: 600, color: "#6DBE2E", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                Custom Engagements
              </span>
              <span className="h-px w-10" style={{ background: "linear-gradient(90deg, #6DBE2E, transparent)" }} />
            </div>

            <h2
              className="mb-4"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.08 }}
            >
              Don't See Your <span style={{ color: "#6DBE2E" }}>Industry?</span>
            </h2>

            <div className="flex justify-center mb-6">
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }} />
            </div>

            <p
              className="mb-10"
              style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "15px", fontWeight: 300, color: "rgba(240,255,240,0.42)", lineHeight: 1.85 }}
            >
              We work across many sectors. Contact us to discuss how Vedant can serve your specific industry needs.
            </p>

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
              Talk to Our Team
              <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustriesPage;