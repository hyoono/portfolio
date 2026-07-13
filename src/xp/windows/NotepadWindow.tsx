export default function NotepadWindow() {
  const resumeText = `Joshua Fil V. Evasco
========================================
Student Leader & Technologist
BS Information Technology — Cybersecurity
Mapua Malayan Colleges Laguna
Expected Graduation: November 2026

========================================
CONTACT
========================================
Email:    evasco38@gmail.com
GitHub:   github.com/hyoono
LinkedIn: linkedin.com/in/joshuafil-evasco

========================================
EDUCATION
========================================
BS Information Technology — Cybersecurity
Mapua Malayan Colleges Laguna
Expected Graduation: November 2026

Focus Areas:
  • Network Security
  • Cryptography
  • Embedded Systems
  • Full-Stack Web Development

========================================
CERTIFICATIONS
========================================
CompTIA Tech+ — CompTIA (Verified)
CCNA: Introduction to Networks — Cisco
Google Cloud Computing Foundations — Google Cloud
CyberSocPH Membership — CyberSocPH

========================================
EXPERIENCE
========================================
System Developer — IT Practicum
  Student Affairs Office, MMCL
  May 2026–July 2026
  
  • Sole developer of SAO-IS document management system
  • Integrated on-premise Ollama document processing
  • Configured Tailscale + x11vnc remote administration
  • Automated case masterlists using Power Automate
  • Built room availability aggregator
  • Student Advising Report Generator

President — Supreme Student Council
  Mapua Malayan Colleges Laguna
  AY 2024–2025
  
  • Organized Beyond the Breach 2026 seminar
  • Coordinated colleges, departments, and offices
    for Mapua MCL's 20th Foundation Week
  • Managed student-led activities and events end-to-end

Digital Transformation Director — SSC
  March 2024–August 2024
  • Led Mapua MCL Engage rollout and adoption

Events Staff Manager — SSC
  August 2023–August 2024

Core Team Member — ASEAN AI Hackathon
  Smart City Track, 2026

========================================
PROJECTS
========================================
SAO-IS — Document Management System
  React 18, Vite, Laravel 11, PHP 8.2, MySQL,
  Ollama, Tailscale

HopFog — Decentralized Multi-Hop Messaging
  ESP32, Fog Computing, IEEE 802.15.4, XBee,
  AES-128 CTR

Smart Posture & Ergonomics Camera Coach
  ESP32-CAM, FreeRTOS, Computer Vision

Student Advising Report Generator
  C#/.NET, Python

StudentAnalytics — Android App
  Kotlin, PHP SOAP, Azure App Service, GitHub Actions

========================================
SKILLS
========================================
Languages:   Java, Python, C++, C#, C, PHP,
             Kotlin, JavaScript
Databases:   MySQL/MariaDB, Oracle DB, MS SQL
Web/App:     React, Laravel, REST APIs, Vite, SOAP
Security:    Network Vuln. Mgmt, Data Privacy,
             Cryptography (AES/DES)
Hardware:    Arduino, ESP32-CAM, XBee Modules
Networking:  IEEE 802.15.4, Zigbee Mesh, Fog
Automation:  Power Automate, Power Query,
             Office Scripts, SharePoint
Systems:     WSL2/Linux Admin, Tailscale, x11vnc
`;

  return (
    <>
      <div className="xp-menu-bar">
        <span className="xp-menu-bar-item">File</span>
        <span className="xp-menu-bar-item">Edit</span>
        <span className="xp-menu-bar-item">Format</span>
        <span className="xp-menu-bar-item">View</span>
        <span className="xp-menu-bar-item">Help</span>
      </div>
      <textarea
        className="xp-notepad-content"
        defaultValue={resumeText}
        readOnly
        style={{ flex: 1 }}
      />
    </>
  );
}
