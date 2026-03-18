import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    q: "What services does Sapling Consultancy Services provide?",
    a: "We provide comprehensive IT consulting, industrial automation (PLC/SCADA/DCS), cloud & digital solutions, MES, PLM, cybersecurity, and global recruitment & payroll services.",
    number: "01",
  },
  {
    q: "Which industries do you support?",
    a: "We serve Information Technology, Oil & Gas, Pharmaceuticals, Manufacturing, Finance, and Healthcare industries globally.",
    number: "02",
  },
  {
    q: "Where is Sapling Consultancy headquartered?",
    a: "We are headquartered at Compass Building, Al Hamra Industrial Zone FZ, Ras Al Khaimah, UAE. We are licensed under RAKEZ (License #47027650) as an FZ-LLC.",
    number: "03",
  },
  {
    q: "Do you provide global recruitment services?",
    a: "Yes, we offer specialised global recruitment and multi-country payroll management across India, the United States, the United Kingdom, UAE, Germany, and more.",
    number: "04",
  },
  {
    q: "Do you support startups as well as enterprises?",
    a: "Absolutely. We support both growing startups and large enterprises including Tier-1 companies such as TCS, Cognizant, Wipro, and L&T.",
    number: "05",
  },
  {
    q: "How do I get started with Sapling?",
    a: "Simply reach out via our Contact page or email info@saplingconsultancy.com. Our team will schedule a discovery call to understand your needs and propose the right approach.",
    number: "06",
  },
];

/* ── FAQ Item ── */
const FaqItem = ({ faq, index, isOpen, onToggle }: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    className="relative overflow-hidden rounded-2xl cursor-pointer"
    style={{
      background: isOpen ? "#ffffff" : "#F2F7F0",
      border: isOpen
        ? "1px solid rgba(109,190,46,0.4)"
        : "1px solid rgba(109,190,46,0.1)",
      boxShadow: isOpen
        ? "0 12px 40px -8px rgba(13,31,10,0.12), 0 0 0 1px rgba(109,190,46,0.08)"
        : "0 1px 4px rgba(13,31,10,0.04)",
      transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
    }}
    onClick={onToggle}
  >
    {/* Green shimmer top line */}
    <div
      className="absolute top-0 left-6 right-6 h-px transition-opacity duration-300"
      style={{
        background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)",
        opacity: isOpen ? 1 : 0,
      }}
    />

    {/* Left accent bar */}
    <div
      className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full transition-all duration-400"
      style={{
        background: "linear-gradient(to bottom, transparent, #6DBE2E, transparent)",
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "scaleY(1)" : "scaleY(0.3)",
      }}
    />

    {/* Trigger row */}
    <div className="flex items-start gap-4 px-6 py-5 pl-8">

      {/* Number */}
      <span
        className="shrink-0 mt-0.5 transition-colors duration-200"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "12px",
          fontWeight: 600,
          color: isOpen ? "#4FA020" : "rgba(13,31,10,0.18)",
          letterSpacing: "0.08em",
          lineHeight: 1.6,
        }}
      >
        {faq.number}
      </span>

      {/* Question */}
      <span
        className="flex-1 text-left transition-colors duration-200"
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: "14px",
          fontWeight: isOpen ? 500 : 400,
          color: isOpen ? "#0D1F0A" : "rgba(13,31,10,0.68)",
          lineHeight: 1.55,
        }}
      >
        {faq.q}
      </span>

      {/* Icon toggle */}
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300"
        style={{
          background: isOpen
            ? "linear-gradient(135deg, #7ACC35 0%, #6DBE2E 100%)"
            : "rgba(109,190,46,0.08)",
          border: isOpen
            ? "1px solid rgba(143,217,74,0.4)"
            : "1px solid rgba(109,190,46,0.2)",
          boxShadow: isOpen ? "0 4px 12px rgba(109,190,46,0.28)" : "none",
          transform: isOpen ? "rotate(0deg)" : "rotate(0deg)",
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen
            ? <motion.span key="minus" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Minus size={12} strokeWidth={2.5} style={{ color: "#061409" }} />
              </motion.span>
            : <motion.span key="plus" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <Plus size={12} strokeWidth={2.5} style={{ color: "#6DBE2E" }} />
              </motion.span>
          }
        </AnimatePresence>
      </div>
    </div>

    {/* Answer */}
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{   height: 0, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: "hidden" }}
        >
          <div
            className="mx-6 h-px mb-4 ml-8"
            style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.12))" }}
          />
          <p
            className="px-6 pb-6 pl-8"
            style={{
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontSize: "13.5px",
              fontWeight: 300,
              color: "rgba(13,31,10,0.6)",
              lineHeight: 1.85,
            }}
          >
            {faq.a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

/* ── Main component ── */
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faqs" className="relative py-24 lg:py-36 overflow-hidden" style={{ background: "#F8FBF6" }}>

      {/* Background ambience */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 5% 50%, rgba(109,190,46,0.06) 0%, transparent 50%), " +
            "radial-gradient(circle at 95% 20%, rgba(109,190,46,0.05) 0%, transparent 45%)",
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
        <div className="grid lg:grid-cols-5 gap-16 xl:gap-20 items-start">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 lg:sticky lg:top-28"
          >
            {/* Eyebrow */}
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
                FAQs
              </span>
            </div>

            {/* Heading */}
            <h2
              className="mb-5 leading-[1.06]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 600,
                color: "#0D1F0A",
                letterSpacing: "-0.02em",
              }}
            >
              Frequently{" "}
              <span className="relative inline-block" style={{ color: "#5AB025" }}>
                Asked
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 5" preserveAspectRatio="none" height="4">
                  <path d="M0 3.5 Q25 1 50 2.5 Q75 4 100 2" stroke="#6DBE2E" strokeWidth="1.5" fill="none" strokeOpacity="0.5" />
                </svg>
              </span>
              <br />Questions
            </h2>

            {/* Green rule */}
            <div
              className="mb-5 h-px w-14"
              style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))" }}
            />

            <p
              className="mb-9 leading-[1.8]"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "rgba(13,31,10,0.52)",
              }}
            >
              Have more questions? Our team is always happy to help you find the right solution for your enterprise needs.
            </p>

            {/* CTA */}
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
                boxShadow: "0 4px 20px rgba(109,190,46,0.28), inset 0 1px 0 rgba(255,255,255,0.22)",
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
              Ask a Question
              <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>

            {/* Stat card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.55 }}
              className="mt-8 relative overflow-hidden rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #0D1F0A 0%, #132B0F 100%)",
                border: "1px solid rgba(109,190,46,0.22)",
                boxShadow: "0 4px 24px rgba(13,31,10,0.15)",
              }}
            >
              <div
                className="absolute top-0 left-4 right-4 h-px"
                style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }}
              />
              {/* Ambient glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(109,190,46,0.1) 0%, transparent 65%)" }}
              />
              <div className="relative px-6 py-5 flex items-center gap-5">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(109,190,46,0.2) 0%, rgba(109,190,46,0.07) 100%)",
                    border: "1px solid rgba(109,190,46,0.3)",
                  }}
                >
                  <MessageCircle size={20} strokeWidth={1.6} style={{ color: "#6DBE2E" }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "38px",
                      fontWeight: 600,
                      color: "#6DBE2E",
                      lineHeight: 1,
                      marginBottom: "4px",
                      textShadow: "0 0 30px rgba(109,190,46,0.25)",
                    }}
                  >
                    {faqs.length}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      fontSize: "11px",
                      fontWeight: 500,
                      color: "rgba(240,255,240,0.32)",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                    }}
                  >
                    Questions Answered
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact nudge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 px-5 py-4 rounded-xl flex items-center gap-3"
              style={{
                background: "rgba(109,190,46,0.06)",
                border: "1px solid rgba(109,190,46,0.14)",
              }}
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ background: "#6DBE2E", boxShadow: "0 0 8px rgba(109,190,46,0.6)" }}
              />
              <p
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "rgba(13,31,10,0.52)",
                  lineHeight: 1.6,
                }}
              >
                Can't find what you need?{" "}
                <Link
                  to="/contact"
                  style={{ color: "#4FA020", fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "2px" }}
                >
                  Contact our team directly
                </Link>
                .
              </p>
            </motion.div>
          </motion.div>

          {/* ── RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 space-y-3"
          >
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}

            {/* Bottom CTA strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.55 }}
              className="relative mt-2 flex items-center justify-between gap-4 px-6 py-5 rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #0D1F0A 0%, #132B0F 100%)",
                border: "1px solid rgba(109,190,46,0.2)",
              }}
            >
              <div
                className="absolute top-0 left-6 right-6 h-px"
                style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }}
              />
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "rgba(240,255,240,0.7)",
                  letterSpacing: "-0.01em",
                }}
              >
                Still have questions? We're here to help.
              </p>
              <Link
                to="/contact"
                className="group shrink-0 inline-flex items-center gap-2 transition-all duration-200"
                style={{
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#6DBE2E",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                }}
              >
                Get in Touch
                <ArrowRight size={12} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;