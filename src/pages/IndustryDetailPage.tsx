import { useParams, Navigate, Link } from "react-router-dom";
import { getIndustryBySlug } from "@/data/industries";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import DetailPageLayout from "@/components/DetailPageLayout";

/* ── Banner images (hero) ── */
import financeImgBanner from "@/assets/ind-finance.webp";
import itImgBanner      from "@/assets/ind-IT.webp";
import oilImgBanner     from "@/assets/ind-oil-gas.webp";
import pharmaImgBanner  from "@/assets/ind-pharma.webp";
import mfgImgBanner     from "@/assets/ind-manufacturing.webp";
import healthImgBanner  from "@/assets/ind-healthcare.webp";

/* ── Description images (inline card) ── */
import financeImg from "@/assets/industry-finance.webp";
import itImg      from "@/assets/industry-it.webp";
import oilImg     from "@/assets/industry-oil-gas.webp";
import pharmaImg  from "@/assets/industry-pharma.webp";
import mfgImg     from "@/assets/industry-manufacturing.webp";
import healthImg  from "@/assets/industry-healthcare.webp";

const bannerMap: Record<string, string> = {
  "information-technology": itImgBanner,
  "oil-and-gas":            oilImgBanner,
  "pharmaceuticals":        pharmaImgBanner,
  "manufacturing":          mfgImgBanner,
  "finance":                financeImgBanner,
  "healthcare":             healthImgBanner,
};

const contentMap: Record<string, string> = {
  "information-technology": itImg,
  "oil-and-gas":            oilImg,
  "pharmaceuticals":        pharmaImg,
  "manufacturing":          mfgImg,
  "finance":                financeImg,
  "healthcare":             healthImg,
};

/* ── FAQ item ── */
const FaqItem = ({ faq, index }: { faq: { q: string; a: string }; index: number }) => {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.07 }}
      className="relative overflow-hidden rounded-xl cursor-pointer"
      style={{
        background: open ? "#ffffff" : "#F2F7F0",
        border: open ? "1px solid rgba(109,190,46,0.38)" : "1px solid rgba(109,190,46,0.1)",
        boxShadow: open ? "0 8px 28px -8px rgba(13,31,10,0.1)" : "none",
        transition: "all 0.3s",
      }}
      onClick={() => setOpen(!open)}
    >
      <div
        className="absolute top-0 left-5 right-5 h-px transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)", opacity: open ? 1 : 0 }}
      />
      <div
        className="absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-300"
        style={{
          background: "linear-gradient(to bottom, transparent, #6DBE2E, transparent)",
          opacity: open ? 1 : 0,
          transform: open ? "scaleY(1)" : "scaleY(0.3)",
        }}
      />
      <div className="flex items-start gap-4 px-6 py-4 pl-7">
        <span
          className="flex-1 text-left transition-colors duration-200"
          style={{
            fontFamily: "'DM Sans', system-ui, sans-serif",
            fontSize: "14px",
            fontWeight: open ? 500 : 400,
            color: open ? "#0D1F0A" : "rgba(13,31,10,0.65)",
            lineHeight: 1.55,
          }}
        >
          {faq.q}
        </span>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300"
          style={{
            background: open ? "linear-gradient(135deg, #7ACC35, #6DBE2E)" : "rgba(109,190,46,0.08)",
            border: open ? "1px solid rgba(143,217,74,0.4)" : "1px solid rgba(109,190,46,0.2)",
            boxShadow: open ? "0 4px 10px rgba(109,190,46,0.28)" : "none",
          }}
        >
          {open
            ? <ChevronUp size={13} strokeWidth={2.5} style={{ color: "#061409" }} />
            : <ChevronDown size={13} strokeWidth={2.5} style={{ color: "#6DBE2E" }} />
          }
        </div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="mx-6 ml-7 h-px mb-3" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.12))" }} />
            <p
              className="px-6 pb-5 pl-7"
              style={{
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontSize: "13.5px",
                fontWeight: 300,
                color: "rgba(13,31,10,0.58)",
                lineHeight: 1.82,
              }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ── Solution card ── */
const SolutionCard = ({ solution, index }: { solution: string; index: number }) => {
  const handleEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const el      = e.currentTarget as HTMLElement;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    el.style.background   = "#ffffff";
    el.style.borderColor  = "rgba(109,190,46,0.35)";
    el.style.transform    = "translateY(-2px)";
    el.style.boxShadow    = "0 8px 24px -6px rgba(13,31,10,0.1)";
    shimmer.style.opacity = "1";
  };
  const handleLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el      = e.currentTarget as HTMLElement;
    const shimmer = el.querySelector<HTMLElement>("[data-shimmer]")!;
    el.style.background   = "#F2F7F0";
    el.style.borderColor  = "rgba(109,190,46,0.1)";
    el.style.transform    = "translateY(0)";
    el.style.boxShadow    = "none";
    shimmer.style.opacity = "0";
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative flex items-start gap-3 p-4 rounded-xl overflow-hidden"
      style={{ background: "#F2F7F0", border: "1px solid rgba(109,190,46,0.1)", transition: "all 0.25s" }}
    >
      <div
        data-shimmer
        className="absolute top-0 left-3 right-3 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)", opacity: 0, transition: "opacity 0.3s" }}
      />
      <div
        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: "linear-gradient(135deg, rgba(109,190,46,0.2), rgba(109,190,46,0.07))", border: "1px solid rgba(109,190,46,0.28)" }}
      >
        <CheckCircle2 size={11} strokeWidth={2.5} style={{ color: "#6DBE2E" }} />
      </div>
      <span
        style={{
          fontFamily: "'DM Sans', system-ui, sans-serif",
          fontSize: "13.5px",
          fontWeight: 300,
          color: "rgba(13,31,10,0.68)",
          lineHeight: 1.6,
        }}
      >
        {solution}
      </span>
    </motion.div>
  );
};

/* ── Main page ── */
const IndustryDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = getIndustryBySlug(slug || "");
  if (!industry) return <Navigate to="/industries" replace />;

  const bannerImg  = bannerMap[industry.slug]  || (industry as any).image;
  const contentImg = contentMap[industry.slug] || (industry as any).image;

  return (
    <DetailPageLayout
      title={industry.title}
      subtitle={industry.description}
      image={bannerImg}
      breadcrumbs={[
        { label: "Home",       href: "/"           },
        { label: "Industries", href: "/industries" },
        { label: industry.title },
      ]}
    >
      <div className="grid lg:grid-cols-3 gap-12 xl:gap-16">

        {/* ── MAIN CONTENT ── */}
        <div className="lg:col-span-2 space-y-12">

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
              <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "10px", fontWeight: 600, color: "#4FA020", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                Industry Overview
              </span>
            </div>
            <h2
              className="mb-5"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(26px, 3.2vw, 40px)", fontWeight: 600, color: "#0D1F0A", letterSpacing: "-0.02em", lineHeight: 1.1 }}
            >
              Our {industry.title}{" "}
              <span style={{ color: "#5AB025" }}>Practice</span>
            </h2>

            {/* Description + image side by side */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="mb-5 h-px w-12" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))" }} />
                <p style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "14.5px", fontWeight: 300, color: "rgba(13,31,10,0.58)", lineHeight: 1.9 }}>
                  {industry.description}
                </p>
              </div>

              {/* Description image */}
              <div
                className="relative rounded-2xl overflow-hidden group"
                style={{ aspectRatio: "4/3", border: "1px solid rgba(109,190,46,0.18)", boxShadow: "0 4px 24px rgba(13,31,10,0.1)" }}
              >
                <img
                  src={contentImg}
                  alt={industry.title}
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.65s cubic-bezier(0.22,1,0.36,1)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.06)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(4,13,6,0.65) 0%, rgba(4,13,6,0.1) 50%, transparent 70%)" }} />
                <div
                  className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, #8FD94A, #6DBE2E, transparent)", opacity: 0.75 }}
                />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="h-px w-5" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
                    <span style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "9px", fontWeight: 700, color: "rgba(143,217,74,0.85)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                      {industry.title}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "26px", fontWeight: 600, color: "#0D1F0A", letterSpacing: "-0.01em" }}>
                Solutions We Provide
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {industry.solutions.map((s: string, i: number) => (
                <SolutionCard key={i} solution={s} index={i} />
              ))}
            </div>
          </motion.div>

          {/* FAQs */}
          {industry.faqs && industry.faqs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 shrink-0" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "26px", fontWeight: 600, color: "#0D1F0A", letterSpacing: "-0.01em" }}>
                  Common Questions
                </h3>
              </div>
              <div className="space-y-3">
                {industry.faqs.map((faq: { q: string; a: string }, i: number) => (
                  <FaqItem key={i} faq={faq} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* ── SIDEBAR ── */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="sticky top-28 space-y-5"
          >
            {/* CTA */}
            <div
              className="relative overflow-hidden rounded-2xl p-6"
              style={{ background: "linear-gradient(135deg, #0D1F0A 0%, #132B0F 100%)", border: "1px solid rgba(109,190,46,0.25)", boxShadow: "0 8px 32px rgba(13,31,10,0.2)" }}
            >
              <div className="absolute top-0 left-5 right-5 h-px" style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }} />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(109,190,46,0.1) 0%, transparent 65%)" }} />
              <h3
                className="relative mb-1"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 600, color: "#ffffff", letterSpacing: "-0.01em" }}
              >
                Work With Us
              </h3>
              <div className="relative h-px w-8 mb-4" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.2))" }} />
              <p
                className="relative mb-5"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(240,255,240,0.42)", lineHeight: 1.75 }}
              >
                Explore how Vedant's {industry.title} expertise can drive results for your organisation.
              </p>
              <Link
                to="/contact"
                className="group relative flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-px"
                style={{
                  background: "linear-gradient(135deg, #7ACC35 0%, #6DBE2E 50%, #4FA020 100%)",
                  color: "#061409",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(143,217,74,0.4)",
                  boxShadow: "0 4px 20px rgba(109,190,46,0.32), inset 0 1px 0 rgba(255,255,255,0.2)",
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                Get in Touch
                <ArrowRight size={14} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Services link */}
            <div
              className="relative overflow-hidden rounded-2xl p-6"
              style={{ background: "#F2F7F0", border: "1px solid rgba(109,190,46,0.15)", boxShadow: "0 2px 12px rgba(13,31,10,0.04)" }}
            >
              <div className="absolute top-0 left-5 right-5 h-px" style={{ background: "linear-gradient(90deg, transparent, #6DBE2E, transparent)" }} />
              <div className="flex items-center gap-2.5 mb-3">
                <div className="h-px w-6" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px", fontWeight: 600, color: "#0D1F0A" }}>
                  Explore Our Services
                </h3>
              </div>
              <p className="mb-4" style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "12.5px", fontWeight: 300, color: "rgba(13,31,10,0.5)", lineHeight: 1.7 }}>
                See how our consulting services align with your industry needs.
              </p>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 transition-all duration-200"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "12.5px", fontWeight: 600, color: "#4FA020", letterSpacing: "0.05em", textTransform: "uppercase" }}
              >
                View All Services <ArrowRight size={13} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Other industries */}
            <div
              className="relative overflow-hidden rounded-2xl p-5"
              style={{ background: "#F2F7F0", border: "1px solid rgba(109,190,46,0.12)" }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="h-px w-6" style={{ background: "linear-gradient(90deg, #6DBE2E, rgba(109,190,46,0.3))" }} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px", fontWeight: 600, color: "#0D1F0A" }}>
                  Other Industries
                </h3>
              </div>
              <Link
                to="/industries"
                className="group inline-flex items-center gap-2 transition-all duration-200"
                style={{ fontFamily: "'DM Sans', system-ui, sans-serif", fontSize: "12.5px", fontWeight: 600, color: "#4FA020", letterSpacing: "0.05em", textTransform: "uppercase" }}
              >
                All Industries <ArrowRight size={13} strokeWidth={2.5} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </DetailPageLayout>
  );
};

export default IndustryDetailPage;