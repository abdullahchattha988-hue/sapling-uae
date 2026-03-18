import industryIt from "@/assets/industry-it.webp";
import industryOilGas from "@/assets/industry-oil-gas.webp";
import industryPharma from "@/assets/industry-pharma.webp";
import industryManufacturing from "@/assets/industry-manufacturing.webp";
import industryFinance from "@/assets/industry-finance.webp";
import industryHealthcare from "@/assets/industry-healthcare.webp";

export interface IndustryData {
  slug: string;
  title: string;
  image: string;
  description: string;
  solutions: string[];
  faqs: { q: string; a: string }[];
}

export const industries: IndustryData[] = [
  {
    slug: "information-technology",
    title: "Information Technology",
    image: industryIt,
    description:
      "We serve IT companies with comprehensive consulting solutions ranging from application development and cloud migration to cybersecurity and digital transformation. Our consultants embed seamlessly into IT organizations, accelerating delivery and innovation.",
    solutions: [
      "Application development and modernization",
      "Cloud infrastructure and DevOps",
      "Quality assurance and testing",
      "IT project management",
      "Cybersecurity consulting",
      "Data engineering and analytics",
    ],
    faqs: [
      { q: "How do you support IT companies?", a: "We provide skilled consultants who integrate with your teams, bringing expertise in development, cloud, QA, and project management." },
      { q: "Do you work with IT startups?", a: "Yes, we support startups with flexible engagement models, helping them build MVPs, scale teams, and establish best practices." },
      { q: "What engagement models do you offer?", a: "We offer staff augmentation, project-based delivery, and managed services tailored to your needs." },
    ],
  },
  {
    slug: "oil-and-gas",
    title: "Oil & Gas",
    image: industryOilGas,
    description:
      "We deliver automation engineering, process control, and IT consulting for upstream, midstream, and downstream Oil & Gas operations. Our engineers have deep domain expertise in PLC, SCADA, DCS systems and operational technology security.",
    solutions: [
      "PLC, SCADA, and DCS engineering",
      "Process safety and SIS implementation",
      "OSI-PI historian and data infrastructure",
      "OT cybersecurity",
      "Advanced process control (APC)",
      "Asset performance management",
    ],
    faqs: [
      { q: "Do you have Oil & Gas domain expertise?", a: "Yes, our automation engineers have extensive experience in upstream, midstream, and downstream operations across major platforms." },
      { q: "What safety systems do you implement?", a: "We implement Safety Instrumented Systems (SIS) using Triconex and HIMA platforms, compliant with IEC 61511." },
      { q: "Can you help with OT cybersecurity?", a: "Yes, we provide operational technology cybersecurity assessments and remediation for control system environments." },
    ],
  },
  {
    slug: "pharmaceuticals",
    title: "Pharmaceuticals",
    image: industryPharma,
    description:
      "Our pharma practice specializes in MES implementation for GMP compliance, validation services, batch record management, and 21 CFR Part 11 compliant systems. We help pharmaceutical manufacturers streamline production while meeting regulatory requirements.",
    solutions: [
      "MES implementation for GMP compliance",
      "Electronic batch record management",
      "21 CFR Part 11 compliance",
      "Validation services (IQ/OQ/PQ)",
      "Quality management systems",
      "Manufacturing process optimization",
    ],
    faqs: [
      { q: "Do you understand pharma regulatory requirements?", a: "Yes, our consultants are well-versed in GMP, FDA 21 CFR Part 11, EU Annex 11, and other pharmaceutical regulations." },
      { q: "What MES platforms do you implement in pharma?", a: "We implement Apriso, Camstar, SAP ME, and Siemens Opcenter for pharmaceutical manufacturing environments." },
      { q: "Do you provide validation services?", a: "Yes, we provide full validation lifecycle support including DQ, IQ, OQ, and PQ documentation and execution." },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    image: industryManufacturing,
    description:
      "We help manufacturers achieve operational excellence through PLM implementation, production optimization, MES deployment, and automation engineering. Our consultants understand the complexities of discrete and process manufacturing environments.",
    solutions: [
      "PLM implementation and integration",
      "MES deployment and optimization",
      "Production planning and scheduling",
      "Quality management systems",
      "Industrial automation engineering",
      "Supply chain digitalization",
    ],
    faqs: [
      { q: "Do you support both discrete and process manufacturing?", a: "Yes, our team has expertise across both discrete manufacturing (automotive, aerospace) and process manufacturing (chemicals, food & beverage)." },
      { q: "How do you approach Industry 4.0?", a: "We help manufacturers adopt Industry 4.0 technologies including IoT, MES, digital twins, and advanced analytics to improve efficiency and reduce costs." },
      { q: "Can you integrate PLM with ERP?", a: "Yes, we specialize in PLM-ERP integration, enabling seamless data flow between engineering and business systems." },
    ],
  },
  {
    slug: "finance",
    title: "Finance",
    image: industryFinance,
    description:
      "We support financial institutions with IT consulting, cloud migration, cybersecurity, and regulatory compliance. Our team understands the unique requirements of banking, insurance, and financial services organisations.",
    solutions: [
      "Cloud migration and architecture",
      "Cybersecurity and compliance (GDPR, SOX)",
      "Digital banking solutions",
      "Core banking modernization",
      "Data analytics and reporting",
      "IT risk management",
    ],
    faqs: [
      { q: "Do you understand financial regulations?", a: "Yes, our consultants are familiar with GDPR, SOX, Basel III, PCI-DSS, and other financial regulations and can help ensure compliance." },
      { q: "Can you help with cloud migration for banks?", a: "Yes, we provide cloud migration strategies specifically designed for financial institutions, with security and compliance as top priorities." },
      { q: "Do you provide cybersecurity services for finance?", a: "Yes, we deliver comprehensive cybersecurity including penetration testing, SOC consulting, and incident response for financial institutions." },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    image: industryHealthcare,
    description:
      "Our healthcare practice delivers health IT consulting, HL7/FHIR integration, digital health platform development, and cybersecurity services. We help healthcare organisations improve patient outcomes through technology.",
    solutions: [
      "Health IT consulting and strategy",
      "HL7 and FHIR integration",
      "Electronic health record optimization",
      "Digital health platform development",
      "Healthcare cybersecurity",
      "Regulatory compliance (HIPAA, HITECH)",
    ],
    faqs: [
      { q: "Do you understand healthcare data standards?", a: "Yes, our team has expertise in HL7 v2/v3, FHIR R4, DICOM, and other healthcare data exchange standards." },
      { q: "Can you help with HIPAA compliance?", a: "Yes, we provide HIPAA compliance assessments, gap analysis, and remediation services for healthcare organisations." },
      { q: "Do you develop patient-facing applications?", a: "Yes, we develop mobile and web applications for patient engagement, telemedicine, and remote patient monitoring." },
    ],
  },
];

export const getIndustryBySlug = (slug: string) => industries.find((i) => i.slug === slug);
