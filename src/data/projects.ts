export interface Project {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  stack: string[];
  hardware?: string[];
  screenshots?: string[];
  repoUrl?: string;
  featured?: boolean;
  category?:
    | "operations"
    | "capstone"
    | "practicum"
    | "automation"
    | "hardware"
    | "mobile"
    | "hackathon";
  yearLevel?: 1 | 2 | 3 | 4;
  role?: string;
  status?: string;
  impact?: string[];
  body: string;
}

export const projects: Project[] = [
  {
    title: "Mapua MCL Engage Adoption",
    slug: "anthology-engage-adoption",
    summary:
      "Led first-year platform adoption for student organizations through onboarding, training, tech support, analytics, and admin coordination.",
    tags: ["IT Support", "Platform Adoption", "Training", "Data Analysis"],
    stack: [
      "Mapua MCL Engage",
      "Platform Documentation",
      "Data Analysis",
      "Helpdesk Support",
      "Stakeholder Coordination",
      "Organization Onboarding",
    ],
    screenshots: [
      "/portfolio-assets/projects/anthology-engage/statistics.jpeg",
      "/portfolio-assets/projects/anthology-engage/home-logged-in.jpeg",
      "/portfolio-assets/projects/anthology-engage/home-logged-out.jpeg",
    ],
    featured: true,
    category: "operations",
    yearLevel: 3,
    role: "Digital Transformation Director / Community Administrator",
    status: "Adoption rollout, March 2024 - March 2026",
    impact: [
      "30+ student organizations onboarded",
      "1,000+ students onboarded",
      "60+ officers trained",
      "50+ events posted and integrated",
      "Helpline-style platform support and documentation",
    ],
    body: `Mapua MCL Engage is the clearest proof of my IT support and platform-adoption work: I helped turn a new campus system into an actual operating process for student organizations.

**Scope of work:**
- Organization onboarding for student groups adopting the platform
- In-depth officer training and platform walkthroughs
- Tech support and helpline-style troubleshooting during real use
- Stakeholder and admin coordination across student leaders and campus offices
- Integration notes, usage documentation, and platform process documentation
- Data analysis to monitor adoption and operational activity

The work was less about writing code and more about making technology usable at scale: answering confused users, documenting repeatable processes, coordinating with administrators, and keeping the rollout moving while organizations learned a new system.`,
  },
  {
    title: "HopFog — Decentralized Multi-Hop Messaging System",
    slug: "hopfog",
    summary:
      "A capstone prototype for resilient off-grid messaging using fog computing, ESP32 nodes, IEEE 802.15.4 / XBee networking, and AES-128 CTR encryption.",
    tags: ["Networking", "Cybersecurity", "Hardware", "Capstone"],
    stack: [
      "Fog Computing",
      "IEEE 802.15.4",
      "XBee / Zigbee",
      "ESP32",
      "Android",
      "AES-128 CTR",
      "Network Testing",
    ],
    hardware: [
      "ESP32 fog access point nodes",
      "XBee S2C / XBee-PRO S2C modules",
      "microSD local storage",
      "Android mobile clients",
      "Community workstation dashboard",
      "Digi XCTU",
    ],
    screenshots: [
      "/portfolio-assets/projects/hopfog/system-architecture.png",
      "/portfolio-assets/projects/hopfog/system-deployment.png",
      "/portfolio-assets/projects/hopfog/admin-dashboard.png",
      "/portfolio-assets/projects/hopfog/mobile-home.jpeg",
      "/portfolio-assets/projects/hopfog/mobile-message.jpeg",
    ],
    repoUrl: "https://github.com/hyoono/HopFog-Node",
    featured: true,
    category: "capstone",
    yearLevel: 4,
    role: "Project Manager / Lead Developer",
    status: "Capstone prototype, 2025 - 2026",
    impact: [
      "Off-grid short messaging without internet or cellular connectivity",
      "Average 2.20s HopFog delivery versus 3.70s SMS benchmark in manuscript testing",
      "AES-128 CTR encryption validated through interception testing",
      "Two-hop IEEE 802.15.4 community deployment model",
    ],
    body: `HopFog is a community-level communication prototype for situations where mobile networks or internet access are unreliable. It combines ESP32 fog access point nodes, XBee modules operating under IEEE 802.15.4, an Android messaging application, and a local dashboard for community officials.

**Key contributions:**
- Led project direction and technical coordination
- Designed around fog nodes that handle local routing, storage, encryption, decryption, and forwarding
- Implemented an architecture for resident-to-resident messages, SOS alerts, and community broadcasts
- Applied AES-128 CTR encryption to transmitted message data
- Conducted network performance, one-way delay, payload-size, concurrent-load, and comparative latency testing

The manuscript reports that HopFog delivered test messages at an average of 2.20 seconds compared with a 3.70 second SMS benchmark, and that transmitted data remained unreadable during interception validation. The project sits closest to my preferred kind of work: hardware setup, network behavior, security reasoning, troubleshooting, and making a prototype survive real testing instead of just looking correct on paper.`,
  },
  {
    title: "SAO-IS — Student Affairs Document System",
    slug: "sao-is",
    summary:
      "A LAN-deployed Student Affairs Office document management system for routing, workflow handling, student records, notifications, and role-based access.",
    tags: ["Systems", "Practicum", "Laravel", "React"],
    stack: [
      "React 18",
      "Vite",
      "Laravel 11",
      "PHP 8.2",
      "MySQL / MariaDB",
      "Nginx",
      "PHP-FPM",
      "WSL2 Ubuntu",
      "Ollama",
      "Tailscale",
      "x11vnc",
    ],
    screenshots: [
      "/portfolio-assets/projects/sao-is/approvals-queue.png",
      "/portfolio-assets/projects/sao-is/notifications.png",
      "/portfolio-assets/projects/sao-is/user-management.png",
      "/portfolio-assets/projects/sao-is/document-workflow.png",
    ],
    repoUrl: "https://github.com/hyoono/SAO-IS",
    featured: true,
    category: "practicum",
    yearLevel: 4,
    role: "System Developer / Sole Developer",
    status: "LAN-deployed internal system, May - July 2026",
    impact: [
      "Production Laravel + React/Vite DMS for Student Affairs Office use",
      "10-table relational schema designed from scratch",
      "35+ REST API endpoints",
      "On-premise Ollama integration without external API dependency",
      "Tailscale + x11vnc remote administration setup",
    ],
    body: `SAO-IS is a web-based document management and workflow system built for the Student Affairs Office at Mapua Malayan Colleges Laguna. It handles document routing and tracking, student records, disciplinary case workflow, notifications, search, filtering, and multi-role user access.

**Technical scope:**
- Sole developer and architect of the Laravel 11 + React/Vite system
- 10-table relational database schema designed from scratch
- 35+ REST API endpoints covering CRUD, search, filtering, workflow, and role-based access
- LAN deployment on an Ubuntu server using WSL2, Nginx, PHP-FPM, and MySQL/MariaDB
- On-premise Ollama integration for AI-assisted document processing without external API dependency
- Tailscale + x11vnc setup for secure off-site system administration

This is the strongest software proof that I can translate office operations into a working internal system: schema, workflow, deployment, user roles, remote administration, and the practical realities of supporting a system used by real institutional users.`,
  },
  {
    title: "SAO Practicum Automation Toolkit",
    slug: "sao-practicum-automation",
    summary:
      "A set of office automation tools for case tracking, room availability checking, advising reports, shifting reports, and repetitive document workflows.",
    tags: ["Automation", "SharePoint", "Excel", "Power Automate"],
    stack: [
      "SharePoint",
      "Power Automate",
      "Power Query M",
      "Office Scripts",
      "Advanced Excel",
      "Python",
      "C# / .NET",
      "VBScript",
    ],
    screenshots: ["/portfolio-assets/projects/sao-automation/sarge.png"],
    featured: true,
    category: "automation",
    yearLevel: 4,
    role: "System Developer / Office automation support",
    status: "Operational practicum tooling",
    impact: [
      "Automated disciplinary case masterlist updates",
      "Built room availability aggregation with SharePoint calendar discovery",
      "Generated advising and shifting reports from inconsistent source data",
    ],
    body: `During practicum, several of the most useful systems were not large applications. They were smaller automation tools that removed repetitive office work and reduced manual checking.

**Included tools:**
- Disciplinary case masterlist automation using SharePoint, dynamic Excel formulas, Office Scripts, and Power Automate
- Room availability aggregator using Power Query M to discover SharePoint calendar lists and surface schedules through Excel
- Student Advising Report Generator built as a native Windows application for offline report generation
- Python script for Shifting Request report generation from Microsoft Forms exports into Mapua MCL-branded Excel workbooks
- VBScript and Excel automation for offline report generation and data cleanup
- Document drafting support for formal student disciplinary case decisions

This work shows the part of IT support that does not always fit neatly into a single job title: understand the process, find the recurring pain, build a tool people can actually use, and support it when edge cases appear.`,
  },
  {
    title: "Smart Posture & Ergonomics Camera Coach",
    slug: "smart-posture-coach",
    summary:
      "A dual-microcontroller IoT project combining ESP32-CAM, WEMOS D1 R1, sensors, and real-time feedback for posture monitoring.",
    tags: ["IoT", "Hardware", "Troubleshooting", "Computer Vision"],
    stack: ["Arduino", "C++", "FreeRTOS", "REST API", "MJPEG Streaming"],
    hardware: [
      "ESP32-CAM",
      "WEMOS D1 R1 / ESP8266",
      "HC-SR04 ultrasonic sensor",
      "OLED display",
      "RGB LED",
      "Buzzer",
      "OV2640 camera",
    ],
    screenshots: ["/portfolio-assets/projects/posture-coach/prototype.jpg"],
    repoUrl: "https://github.com/hyoono/posture-coach-iot",
    featured: false,
    category: "hardware",
    yearLevel: 3,
    role: "Hardware / firmware integrator",
    status: "Coursework prototype",
    impact: [
      "Standalone Wi-Fi access point for local dashboard access",
      "Live camera feed and posture scoring",
      "Sensor-driven feedback through display, LED, and buzzer",
    ],
    body: `The Smart Posture & Ergonomics Camera Coach is a hardware-heavy IoT project using an ESP32-CAM and WEMOS D1 R1 to monitor posture and provide real-time feedback.

**Technical details:**
- ESP32-CAM creates a standalone Wi-Fi access point and hosts the local dashboard
- MJPEG live camera feed and posture scoring are exposed through the dashboard
- WEMOS D1 R1 handles sensor readings and feedback devices
- Feedback is delivered through OLED display, RGB LED, and buzzer
- Ultrasonic distance monitoring supports eye-to-screen distance checks

This project is useful portfolio evidence because it is not a clean web-only build. It involves wiring, firmware, device communication, constrained hardware, and the kind of troubleshooting that happens when software meets actual electronics.`,
  },
  {
    title: "StudentAnalytics",
    slug: "student-analytics",
    summary:
      "A native Android analytics app backed by a PHP SOAP service, Azure App Service deployment, and GitHub Actions CI/CD.",
    tags: ["Mobile", "Azure", "Backend"],
    stack: [
      "Kotlin",
      "Android",
      "PHP",
      "SOAP",
      "Azure App Service",
      "GitHub Actions",
    ],
    screenshots: [
      "/portfolio-assets/projects/student-analytics/mobile-analytics.jpg",
      "/portfolio-assets/projects/student-analytics/soap-service.jpeg",
    ],
    repoUrl: "https://github.com/hyoono/StudentAnalyticsApp",
    featured: false,
    category: "mobile",
    yearLevel: 3,
    role: "Mobile and backend developer",
    status: "Academic project",
    impact: [
      "Native Android app connected to a cloud-hosted backend",
      "SOAP service with grade analysis, course comparison, predictive modeling, and scholarship eligibility modules",
      "Azure App Service deployment with GitHub Actions CI/CD",
    ],
    body: `StudentAnalytics is a native Android application built with Kotlin and backed by a SOAP-based PHP web service hosted on Microsoft Azure.

The system exposes four analytical modules: grade analysis, course performance comparison, predictive academic modeling, and scholarship eligibility assessment. It also demonstrates a complete mobile-to-backend path: Android UI, SOAP service integration, cloud deployment, CI/CD, and environment-aware development across local and production setups.

It is a supporting project rather than a flagship, but it helps show range across mobile, backend, and Azure-hosted coursework.`,
  },
  {
    title: "ASEAN AI Hackathon — Smart City Track",
    slug: "asean-ai-hackathon",
    summary:
      "A time-boxed 2026 smart city prototype built with a team under hackathon constraints.",
    tags: ["AI", "Hackathon", "Smart City"],
    stack: ["AI/ML Prototyping", "Team Coordination", "Rapid Delivery"],
    screenshots: [],
    featured: false,
    category: "hackathon",
    role: "Core team member",
    status: "2026 competition prototype",
    impact: [
      "Built under strict time constraints",
      "Focused on urban sustainability and smart city infrastructure",
    ],
    body: `Competed as a core team member at the ASEAN AI Hackathon on the Smart City track in 2026. The challenge required building AI-driven solutions for urban sustainability and smart city infrastructure under strict time pressure.

The value of this entry is not that it is the most polished system. It shows delivery under pressure: scope control, team coordination, quick prototyping, and communicating a technical idea clearly enough for a competition setting.`,
  },
];

export const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();

export const allCategories = [
  { value: "all", label: "All" },
  { value: "operations", label: "Operations" },
  { value: "capstone", label: "Capstone" },
  { value: "practicum", label: "Practicum" },
  { value: "automation", label: "Automation" },
  { value: "hardware", label: "Hardware" },
  { value: "mobile", label: "Mobile" },
  { value: "hackathon", label: "Hackathon" },
] as const;
