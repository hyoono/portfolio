export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "IT Support / Operations",
    skills: [
      "Technical Troubleshooting",
      "User Onboarding",
      "Helpdesk Support",
      "Platform Training",
      "Process Documentation",
      "Stakeholder Coordination",
      "Training Delivery",
      "Administrative Support",
    ],
  },
  {
    category: "Systems Administration",
    skills: [
      "Windows Administration",
      "WSL2 / Linux Administration",
      "Nginx / PHP-FPM",
      "LAN Deployment",
      "SharePoint Administration",
      "Microsoft 365 Workflows",
      "Tailscale",
      "x11vnc",
      "On-premise Ollama",
    ],
  },
  {
    category: "Languages",
    skills: [
      "PHP",
      "JavaScript / TypeScript",
      "Python",
      "Kotlin",
      "Java",
      "C / C++",
      "C#",
    ],
  },
  {
    category: "Databases",
    skills: ["MySQL / MariaDB", "Oracle DB", "MS SQL Server"],
  },
  {
    category: "Web / App",
    skills: [
      "React",
      "Laravel",
      "REST APIs",
      "Vite",
      "Android / Kotlin",
      "Inertia.js",
      "SOAP Services",
    ],
  },
  {
    category: "Security",
    skills: [
      "Network Vulnerability Management",
      "Data Privacy Legislation",
      "Cryptography (AES/DES)",
      "Keyspace Calculations",
      "Brute-Force Mitigation Analysis",
    ],
  },
  {
    category: "Hardware / IoT",
    skills: [
      "Hardware Troubleshooting",
      "Arduino",
      "ESP32-CAM",
      "ESP32",
      "WEMOS D1 R1",
      "XBee Modules",
      "FreeRTOS",
      "OV2640 Camera",
    ],
  },
  {
    category: "Networking",
    skills: [
      "IEEE 802.15.4",
      "Zigbee Mesh Networking",
      "API Mode Configuration",
      "Fog Computing",
      "Decentralized Communication Networks",
    ],
  },
  {
    category: "Automation",
    skills: [
      "Power Automate",
      "Power Query (M)",
      "Office Scripts",
      "SharePoint",
      "Advanced Excel / Google Sheets",
      "VBA / Macros",
      "VBScript",
      "Report Generation",
    ],
  },
  {
    category: "Cloud / DevOps",
    skills: [
      "Azure App Service",
      "GitHub Actions CI/CD",
      "Google Cloud",
      "Linux Server Deployment",
    ],
  },
  {
    category: "Certifications",
    skills: [
      "CompTIA Tech+",
      "CCNA: Introduction to Networks",
      "Google Cloud Computing Foundations",
      "CyberSocPH Membership",
    ],
  },
];
