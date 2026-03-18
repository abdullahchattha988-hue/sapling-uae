import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Consultation", desc: "Understanding client requirements." },
  { num: "02", title: "Strategy & Planning", desc: "Designing technical and workforce solutions." },
  { num: "03", title: "Implementation", desc: "Deploying expert consultants and technology systems." },
  { num: "04", title: "Execution", desc: "Supporting project development and automation." },
  { num: "05", title: "Long-Term Support", desc: "Ensuring continuous improvement and operational success." },
];

const ProcessSection = () => (
  <section id="process" className="py-20 lg:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">Our Process</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
          How We Work
        </h2>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative flex items-start gap-6 mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 gradient-primary rounded-full flex items-center justify-center z-10 text-primary-foreground font-bold text-sm shrink-0">
              {step.num}
            </div>

            {/* Content */}
            <div
              className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
              }`}
            >
              <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
              <p className="text-muted-foreground text-sm mt-1">{step.desc}</p>
            </div>

            {/* Spacer for other side */}
            <div className="hidden md:block md:w-[calc(50%-2rem)]" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
