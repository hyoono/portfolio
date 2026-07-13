export interface Seminar {
  title: string;
  organizer: string;
  date: string;
  role: "Attendee" | "Organizer" | "Speaker" | "Panelist";
  description?: string;
  certificateUrl?: string;
}

export const seminars: Seminar[] = [
  {
    title: "Beyond the Breach 2026",
    organizer: "CCIS / Supreme Student Council — Mapua MCL",
    date: "June 2026",
    role: "Organizer",
    description:
      "In-house cybersecurity seminar organized end-to-end: logistics, digital certificates, formal communications, and event coordination.",
  },
  {
    title: "AI at Work",
    organizer: "Direcho Trabaho Program by The Coding School & The Alvarez Foundation",
    date: "June 2026",
    role: "Attendee",
    description:
      "Foundational workplace AI training covering generative AI platforms, prompting strategies, industry use cases, and responsible AI adoption.",
    certificateUrl: "/portfolio-assets/certificates/ai-at-work-2026.pdf",
  },
  {
    title: "Remote Sensing and Geomapping Workshop",
    organizer: "Mapua MCL Information Technology Society",
    date: "June 2025",
    role: "Attendee",
    description:
      "Hands-on workshop covering remote sensing, geomapping fundamentals, mobile data collection, and basic spatial data analysis.",
  },
  {
    title: "Balancing Freedom of Expression with Discipline",
    organizer: "Mapua MCL Office for External Relations",
    date: "August 2024",
    role: "Attendee",
    description:
      "Institutional lecture on peace, justice, strong institutions, student expression, and discipline.",
  },
];
