export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  type: "practicum" | "leadership" | "competition";
  description: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    id: "ssc-events",
    title: "Events Staff Manager",
    organization: "Supreme Student Council, Mapua MCL",
    period: "August 2023 - August 2024",
    type: "leadership",
    description:
      "Managed event logistics and staff coordination for student council events while helping establish the Events Staff Manager function.",
    highlights: [
      "Recruited, trained, and managed a 20+ member events team for campus-wide student initiatives.",
      "Coordinated staff scheduling, task delegation, accountability, and post-event reporting.",
      "Worked across vendors, facilities, officers, and academic departments to keep events moving on schedule.",
    ],
  },
  {
    id: "ssc-digital-transformation",
    title: "Digital Transformation Director",
    organization: "Supreme Student Council, Mapua MCL",
    period: "March 2024 - August 2024",
    type: "leadership",
    description:
      "Established and led the Digital Transformation function for student governance, focusing on platform adoption and workflow digitalization.",
    highlights: [
      "Defined the structure, goals, and roadmap for the council's digital transformation work.",
      "Led the initial rollout of Mapua MCL Engage for student organization management.",
      "Designed workflow digitalization efforts to replace manual administrative processes with scalable digital systems.",
    ],
  },
  {
    id: "ssc-president",
    title: "President, Supreme Student Council",
    organization: "Mapua Malayan Colleges Laguna",
    period: "August 2024 - August 2025",
    type: "leadership",
    description:
      "Directed council operations while bridging governance, logistics, technical delivery, and student-facing support across large-scale initiatives.",
    highlights: [
      "Led student governance operations and supervised committee officers across administrative and student-facing work.",
      "Managed campus-wide events with attendance ranging from several hundred to 1,000+ students, faculty, staff, and guests.",
      "Served as a primary student liaison for policy, welfare, and operational concerns.",
    ],
  },
  {
    id: "ccis-representative",
    title: "SSC Representative",
    organization: "CCIS Student Council, Mapua MCL",
    period: "August 2024 - August 2025",
    type: "leadership",
    description:
      "Represented the College of Computer and Information Sciences in institution-wide student governance and cross-college initiatives.",
    highlights: [
      "Participated in governance sessions involving student welfare, academic support, and technology engagement.",
      "Co-organized initiatives and represented CCIS concerns in broader student council coordination.",
    ],
  },
  {
    id: "engage-adoption",
    title: "Mapua MCL Engage Integration & Adoption Lead",
    organization: "Mapua Malayan Colleges Laguna",
    period: "March 2024 - March 2026",
    type: "leadership",
    description:
      "Led first-year campus adoption work for Mapua MCL Engage, combining platform support, officer training, stakeholder coordination, documentation, and adoption analysis.",
    highlights: [
      "Onboarded 30+ student organizations and 1,000+ students into the platform.",
      "Trained 60+ organization officers through in-depth walkthroughs, process support, and follow-up troubleshooting.",
      "Supported 50+ posted and integrated events while helping officers and administrators resolve platform-use issues.",
      "Created integration and platform documentation for repeatable onboarding, support, and administrative coordination.",
    ],
  },
  {
    id: "practicum-sao",
    title: "System Developer (IT Practicum, IT199F)",
    organization: "Student Affairs Office, Mapua MCL",
    period: "May 2026 - July 2026",
    type: "practicum",
    description:
      "Completed IT Practicum at the Student Affairs Office as sole developer of SAO-IS and builder of practical office automation tools.",
    highlights: [
      "Designed and built SAO-IS, a production Laravel 11 + React/Vite Document Management System deployed on an Ubuntu server for internal office use.",
      "Implemented document routing, student records management, disciplinary case workflow, notifications, and multi-role user access control.",
      "Integrated a locally hosted Ollama LLM for on-premise AI-assisted document processing without external API dependency.",
      "Configured Tailscale + x11vnc for secure off-site administration of the production Linux server.",
      "Built automation tools for disciplinary case tracking, SharePoint room availability, advising reports, shifting reports, and document workflows.",
    ],
  },
  {
    id: "asean-hackathon",
    title: "Core Team Member — ASEAN AI Hackathon",
    organization: "ASEAN AI Hackathon, Smart City Track",
    period: "2026",
    type: "competition",
    description:
      "Competed as a core team member building AI-driven smart city solutions under hackathon time pressure.",
    highlights: [
      "Built AI-driven solutions for urban sustainability and smart city infrastructure.",
      "Practiced rapid prototyping, team coordination, and technical communication under strict time constraints.",
    ],
  },
];
