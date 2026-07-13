export interface Certification {
  name: string;
  issuer: string;
  dateEarned?: string;
  type: "image" | "pdf" | "link" | "badge";
  thumbnailSrc?: string;
  fileSrc?: string;
  verifyUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "CompTIA Tech+ Certification",
    issuer: "CompTIA",
    dateEarned: "December 2025",
    type: "badge",
    thumbnailSrc:
      "https://images.credly.com/images/d358c04b-d081-424f-8221-d5d63f76c144/blob",
    verifyUrl:
      "https://www.credly.com/badges/fd8a476d-5b46-4532-a226-3bf47d08c98c",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    dateEarned: "February 2025",
    type: "badge",
    thumbnailSrc:
      "https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
    verifyUrl:
      "https://www.credly.com/badges/3a80e43a-b45e-4403-9096-7ea30e6d9f8a",
  },
  {
    name: "Google Cloud Computing Foundations Certificate",
    issuer: "Google Cloud",
    dateEarned: "April 2025",
    type: "badge",
    thumbnailSrc:
      "https://images.credly.com/images/4dda8ae4-99ee-476c-bca3-6f0adbab42fe/image.png",
    verifyUrl:
      "https://www.credly.com/badges/8ea81ba0-b75f-4c33-8b45-acb2e3febd2c",
  },
  {
    name: "Build a Secure Google Cloud Network Skill Badge",
    issuer: "Google Cloud",
    dateEarned: "April 2025",
    type: "badge",
    thumbnailSrc:
      "https://images.credly.com/images/e1131ae3-4a52-4af1-9801-b7853767cf79/image.png",
    verifyUrl:
      "https://www.credly.com/badges/e7f1c534-c2ae-4509-b3cf-e84b2fff834c",
  },
  {
    name: "Implement Load Balancing on Compute Engine Skill Badge",
    issuer: "Google Cloud",
    dateEarned: "April 2025",
    type: "badge",
    thumbnailSrc:
      "https://images.credly.com/images/eea11cba-2a98-4bbe-bad2-447878dd34a2/image.png",
    verifyUrl:
      "https://www.credly.com/badges/2ac60dee-fd93-49c9-921c-ec662a347c48",
  },
  {
    name: "Prepare Data for ML APIs on Google Cloud Skill Badge",
    issuer: "Google Cloud",
    dateEarned: "April 2025",
    type: "badge",
    thumbnailSrc:
      "https://images.credly.com/images/68756311-9319-4eeb-a2b7-76defc8dd8a2/image.png",
    verifyUrl:
      "https://www.credly.com/badges/18f5905d-e261-45a8-a431-d0a112246f99",
  },
  {
    name: "Set Up an App Dev Environment on Google Cloud Skill Badge",
    issuer: "Google Cloud",
    dateEarned: "April 2025",
    type: "badge",
    thumbnailSrc:
      "https://images.credly.com/images/42326d44-14ff-4eda-b9c5-7d8f12919253/image.png",
    verifyUrl:
      "https://www.credly.com/badges/d98991ff-29e6-4a3e-9a5a-8bd958244662",
  },
  {
    name: "CyberSocPH Membership",
    issuer: "Cybersecurity Society of the Philippines, Inc.",
    dateEarned: "June 2026",
    type: "pdf",
    fileSrc: "/portfolio-assets/certificates/cybersocph-membership-2026.pdf",
  },
  {
    name: "AI at Work",
    issuer: "Direcho Trabaho Program",
    dateEarned: "June 2026",
    type: "pdf",
    fileSrc: "/portfolio-assets/certificates/ai-at-work-2026.pdf",
  },
  {
    name: "Command Line Basics in Linux",
    issuer: "Coursera",
    dateEarned: "May 2023",
    type: "pdf",
    fileSrc:
      "/portfolio-assets/certificates/coursera-command-line-basics-linux.pdf",
    verifyUrl: "https://coursera.org/verify/LLUDTS2XANJ6",
  },
  {
    name: "Package Installation in Linux",
    issuer: "Coursera",
    dateEarned: "May 2023",
    type: "pdf",
    fileSrc:
      "/portfolio-assets/certificates/coursera-package-installation-linux.pdf",
    verifyUrl: "https://coursera.org/verify/M9CFA8V3KJM9",
  },
];
