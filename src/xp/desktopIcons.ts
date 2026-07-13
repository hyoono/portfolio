import type { WindowDef } from "./useWindowManager";
import AboutWindow from "./windows/AboutWindow";
import ProjectsWindow from "./windows/ProjectsWindow";
import ExperienceWindow from "./windows/ExperienceWindow";
import ContactWindow from "./windows/ContactWindow";
import SkillsWindow from "./windows/SkillsWindow";
import CertsWindow from "./windows/CertsWindow";
import NotepadWindow from "./windows/NotepadWindow";
import PinballWindow from "./windows/PinballWindow";

export type DesktopIconDef = WindowDef & { desktopIcon: string };

export const desktopIcons: DesktopIconDef[] = [
  {
    id: "about",
    title: "My Documents",
    icon: "/xp-assets/icons/my-documents.png",
    desktopIcon: "/xp-assets/icons/my-documents.png",
    component: AboutWindow,
    defaultWidth: 680,
    defaultHeight: 520,
  },
  {
    id: "skills",
    title: "My Computer",
    icon: "/xp-assets/icons/my-computer.png",
    desktopIcon: "/xp-assets/icons/my-computer.png",
    component: SkillsWindow,
    defaultWidth: 720,
    defaultHeight: 500,
  },
  {
    id: "projects",
    title: "Internet Explorer",
    icon: "/xp-assets/icons/ie.png",
    desktopIcon: "/xp-assets/icons/ie.png",
    component: ProjectsWindow,
    defaultWidth: 750,
    defaultHeight: 550,
  },
  {
    id: "contact",
    title: "Outlook Express",
    icon: "/xp-assets/icons/outlook.png",
    desktopIcon: "/xp-assets/icons/outlook.png",
    component: ContactWindow,
    defaultWidth: 600,
    defaultHeight: 450,
  },
  {
    id: "experience",
    title: "My Experience",
    icon: "/xp-assets/icons/notepad-list.png",
    desktopIcon: "/xp-assets/icons/notepad-list.png",
    component: ExperienceWindow,
    defaultWidth: 640,
    defaultHeight: 480,
  },
  {
    id: "resume",
    title: "Resume.txt - Notepad",
    icon: "/xp-assets/icons/notepad.png",
    desktopIcon: "/xp-assets/icons/notepad.png",
    component: NotepadWindow,
    defaultWidth: 580,
    defaultHeight: 480,
  },
  {
    id: "certs",
    title: "Certifications",
    icon: "/xp-assets/icons/certificate.png",
    desktopIcon: "/xp-assets/icons/certificate.png",
    component: CertsWindow,
    defaultWidth: 460,
    defaultHeight: 480,
  },
  {
    id: "pinball",
    title: "3D Pinball for Windows - Space Cadet",
    icon: "/xp-assets/icons/pinball.png",
    desktopIcon: "/xp-assets/icons/pinball.png",
    component: PinballWindow,
    defaultWidth: 720,
    defaultHeight: 560,
  },
  {
    id: "recycle",
    title: "Recycle Bin",
    icon: "/xp-assets/icons/recycle-bin-empty.webp",
    desktopIcon: "/xp-assets/icons/recycle-bin-empty.webp",
    component: () => null,
  },
];
