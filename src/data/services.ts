import serviceItConsulting from "@/assets/it-consultant.webp";
import serviceCloud from "@/assets/cloud-services-1.webp";
import serviceAutomation from "@/assets/industrial-automation-1.webp";
import serviceManufacturing from "@/assets/manufacturing-systems-1.webp";
import servicePlm from "@/assets/plm-systems-1.webp";

export interface ServiceData {
  slug: string;
  title: string;
  image: string;
  description: string;
  details: string[];
  items: string[];
  faqs: { q: string; a: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "it-consulting",
    title: "IT Consulting",
    image: serviceItConsulting,
    description:
      "Our IT consulting division delivers end-to-end technology solutions leveraging the latest frameworks and platforms. We help enterprises modernize legacy systems, build scalable applications, and optimize their technology stack for peak performance.",
    details: [
      "Custom application development using modern frameworks",
      "Legacy system modernization and migration",
      "Enterprise resource planning with SAP modules",
      "Data-driven decision making through analytics",
      "Mainframe modernization and support",
      "IT governance and compliance advisory",
    ],
    items: [".NET", "Java", "Python", "Full Stack", "Mainframes", "Data Analytics", "SAP (FICO, MM, SD)"],
    faqs: [
      { q: "What programming languages do your IT consultants specialize in?", a: "Our consultants are experts in .NET, Java, Python, and full-stack development technologies including React, Angular, Node.js, and more." },
      { q: "Do you support SAP implementations?", a: "Yes, we provide comprehensive SAP consulting including FICO, MM, and SD modules, covering implementation, customization, and support." },
      { q: "Can you help with legacy system modernization?", a: "Absolutely. We specialize in modernizing mainframe and legacy systems to cloud-native architectures while ensuring business continuity." },
      { q: "Do you provide data analytics services?", a: "Yes, we offer end-to-end data analytics including data warehousing, business intelligence, and advanced analytics using modern tools and platforms." },
    ],
  },
  {
    slug: "cloud-digital",
    title: "Cloud & Digital Solutions",
    image: serviceCloud,
    description:
      "We enable digital transformation through cloud-first strategies, DevOps practices, and cutting-edge digital technologies. Our team helps organizations migrate to the cloud, implement CI/CD pipelines, and secure their infrastructure.",
    details: [
      "Multi-cloud strategy and migration (AWS, Azure, GCP)",
      "DevOps implementation and CI/CD pipeline setup",
      "IoT solution development and integration",
      "User experience design and frontend development",
      "Industrial control system cybersecurity",
      "Cloud cost optimization and FinOps",
    ],
    items: ["DevOps", "AWS", "Azure", "Google Cloud", "IoT", "UI/UX", "ICS Cybersecurity"],
    faqs: [
      { q: "Which cloud platforms do you support?", a: "We work with AWS, Microsoft Azure, and Google Cloud Platform, offering multi-cloud and hybrid cloud strategies." },
      { q: "What DevOps services do you offer?", a: "We provide CI/CD pipeline setup, infrastructure as code, containerization with Docker/Kubernetes, monitoring, and automated testing." },
      { q: "Do you handle ICS cybersecurity?", a: "Yes, we specialize in Industrial Control System cybersecurity, protecting SCADA, DCS, and PLC systems from cyber threats." },
      { q: "Can you help with IoT implementations?", a: "We design and implement IoT solutions including sensor integration, edge computing, data collection, and real-time monitoring dashboards." },
    ],
  },
  {
    slug: "industrial-automation",
    title: "Industrial Automation",
    image: serviceAutomation,
    description:
      "Our industrial automation team delivers comprehensive control system solutions for process industries. From DCS and PLC/SCADA implementation to safety systems and advanced process control, we ensure operational excellence.",
    details: [
      "DCS design, configuration, and commissioning",
      "PLC and SCADA system development",
      "Safety Instrumented Systems (SIS) with Triconex and HIMA",
      "Advanced Process Control (APC) implementation",
      "OSI-PI historian and data infrastructure",
      "Control system migration and upgrades",
    ],
    items: ["DCS Systems", "PLC / SCADA", "Safety Systems", "Triconex", "HIMA", "OSI-PI"],
    faqs: [
      { q: "What DCS platforms do you work with?", a: "We work with major DCS platforms including Honeywell Experion, Emerson DeltaV, ABB 800xA, and Yokogawa CENTUM." },
      { q: "Do you implement safety systems?", a: "Yes, we design and implement Safety Instrumented Systems using Triconex and HIMA platforms, ensuring compliance with IEC 61511." },
      { q: "What is OSI-PI and how do you use it?", a: "OSI-PI is a real-time data infrastructure. We implement PI systems for process data collection, visualization, and analytics across plant operations." },
      { q: "Can you help with existing automation upgrades?", a: "We specialize in control system migrations and upgrades, minimizing downtime while modernizing your automation infrastructure." },
    ],
  },
  {
    slug: "manufacturing-systems",
    title: "Manufacturing Systems (MES)",
    image: serviceManufacturing,
    description:
      "We implement and support Manufacturing Execution Systems (MES) and enterprise manufacturing intelligence platforms. Our solutions bridge the gap between shop floor operations and enterprise systems.",
    details: [
      "MES implementation with Apriso and Camstar",
      "Process simulation and optimization with AspenTech",
      "GE Proficy for manufacturing intelligence",
      "Siemens IT solutions for smart manufacturing",
      "SAP Manufacturing Integration (ME/MII)",
      "OEE tracking and production analytics",
    ],
    items: ["Apriso", "AspenTech", "GE Proficy", "Siemens Opcenter", "SAP ME / MII", "Camstar"],
    faqs: [
      { q: "What MES platforms do you implement?", a: "We implement Apriso (Dassault Systèmes), Camstar, GE Proficy, and SAP ME/MII for comprehensive manufacturing execution." },
      { q: "How does AspenTech help manufacturing?", a: "AspenTech provides process simulation, optimization, and supply chain management tools that help reduce costs and improve operational efficiency." },
      { q: "Can you integrate MES with ERP systems?", a: "Yes, we specialize in integrating MES platforms with SAP and other ERP systems for seamless data flow between shop floor and business systems." },
      { q: "Do you support Siemens manufacturing IT?", a: "We provide consulting for Siemens manufacturing IT solutions including SIMATIC IT and Opcenter for Industry 4.0 initiatives." },
    ],
  },
  {
    slug: "product-lifecycle-management",
    title: "PLM Systems",
    image: servicePlm,
    description:
      "Our PLM consulting helps organizations manage the entire lifecycle of their products from inception through engineering design, manufacturing, and service. We implement world-class PLM platforms tailored to your needs.",
    details: [
      "Siemens Teamcenter implementation and customization",
      "PTC Windchill deployment and integration",
      "Dassault ENOVIA for collaborative product development",
      "Optiva for formula and recipe management",
      "PLM-ERP and PLM-MES integration strategies",
      "CAD/CAM data migration and governance",
    ],
    items: ["Siemens Teamcenter", "PTC Windchill", "Dassault Enovia", "3DEXPERIENCE", "Optiva"],
    faqs: [
      { q: "Which PLM platform is best for my organization?", a: "The choice depends on your industry and requirements. Teamcenter excels in complex manufacturing, Windchill in engineering-centric environments, and ENOVIA in collaborative development." },
      { q: "What is Optiva used for?", a: "Optiva specializes in formula and recipe management, particularly for food, beverage, chemical, and pharmaceutical industries." },
      { q: "Can you migrate from one PLM system to another?", a: "Yes, we have extensive experience in PLM migrations, ensuring data integrity and minimal disruption to engineering workflows." },
      { q: "Do you offer PLM training?", a: "We provide comprehensive training programs for all PLM platforms, from end-user training to administrator and developer courses." },
    ],
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
