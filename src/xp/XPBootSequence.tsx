import { useState, useEffect } from "react";

type BootPhase = "bios" | "loading" | "welcome" | "done";

const BIOS_MEMORY_TARGET = 524288;
const XP_STARTUP_SOUND_SOURCES = [
  "/xp-assets/audio/windows-xp-startup.mp3",
  "https://www.myinstants.com/media/sounds/windows-xp-startup.mp3",
  "https://archive.org/download/WinXPStartup/Windows%20XP%20Startup.wav",
] as const;
const BIOS_DETAIL_LINES = [
  "",
  "Auto-Detecting Pri Master .. IDE Hard Disk",
  "Auto-Detecting Sec Master .. ATAPI CDROM",
  "Pri Master : WDC WD800JB-00JJC0 05.01C05",
  "            Ultra DMA Mode-5, S.M.A.R.T. Capable and Status OK",
  "Sec Master : HL-DT-ST CD-ROM GCR-8523B 1.00",
  "            Ultra DMA Mode-2",
  "",
  "Auto-Detecting USB Mass Storage Devices ..",
  "00 USB mass storage devices found and configured.",
  "",
  "PCI device listing ...",
  "Bus No. Device No. Func No. Vendor/Device Class Device",
  "00      1F         01       8086 24CB   IDE Controller",
  "00      1F         05       8086 24C5   Multimedia Device",
  "01      00         00       10DE 0171   Display Controller",
  "",
  "Verifying DMI Pool Data ........",
  "Boot from CD :",
];

function playSyntheticStartupChime() {
  const AudioContextCtor =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext })
      .webkitAudioContext;

  if (!AudioContextCtor) return;

  const context = new AudioContextCtor();
  const master = context.createGain();
  master.gain.setValueAtTime(0.0001, context.currentTime);
  master.gain.exponentialRampToValueAtTime(0.22, context.currentTime + 0.06);
  master.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 1.7);
  master.connect(context.destination);

  const notes = [
    { delay: 0, freq: 392, duration: 0.9 },
    { delay: 0.08, freq: 523.25, duration: 1.05 },
    { delay: 0.22, freq: 659.25, duration: 1 },
    { delay: 0.56, freq: 783.99, duration: 0.72 },
  ];

  notes.forEach((note) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = context.currentTime + note.delay;
    const end = start + note.duration;

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(note.freq, start);
    oscillator.frequency.exponentialRampToValueAtTime(note.freq * 1.012, end);

    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.28, start + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, end);

    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(start);
    oscillator.stop(end + 0.04);
  });

  setTimeout(() => {
    context.close().catch(() => {});
  }, 1900);
}

function playStartupChime() {
  let fallbackPlayed = false;
  const playFallback = () => {
    if (fallbackPlayed) return;
    fallbackPlayed = true;
    playSyntheticStartupChime();
  };

  const playSource = (index: number) => {
    const source = XP_STARTUP_SOUND_SOURCES[index];

    if (!source) {
      playFallback();
      return;
    }

    try {
      const audio = new Audio(source);
      audio.preload = "auto";
      audio.volume = 0.45;

      const playNext = () => playSource(index + 1);
      audio.addEventListener("error", playNext, { once: true });
      audio.play().catch(playNext);
    } catch {
      playSource(index + 1);
    }
  };

  playSource(0);
}

interface Props {
  onComplete: () => void;
}

function XPBootSplashArt() {
  return (
    <svg
      className="xp-boot-art"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id="xp-logo-glow" x="-8%" y="-8%" width="116%" height="116%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="0.45" result="blur" />
          <feOffset dx="0" dy="0" result="offsetBlur" />
          <feMerge>
            <feMergeNode in="offsetBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="xp-flag-soften" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="0.25" />
        </filter>
      </defs>

      <rect width="800" height="600" fill="#000" />

      <g className="xp-boot-brand" filter="url(#xp-logo-glow)">
        <image
          className="xp-boot-flag-image"
          href="/xp-assets/icons/windows-flag.svg"
          x="388"
          y="145"
          width="150"
          height="150"
          preserveAspectRatio="xMidYMid meet"
          filter="url(#xp-flag-soften)"
        />

        <text className="xp-boot-ms-text" x="260" y="282">
          Microsoft
        </text>
        <text className="xp-boot-ms-reg" x="350" y="274">
          ®
        </text>
        <text className="xp-boot-windows-text" x="260" y="335">
          Windows
        </text>
        <text className="xp-boot-windows-reg" x="522" y="297">
          ®
        </text>
        <text className="xp-boot-xp-text" x="542" y="318">
          XP
        </text>
        <text className="xp-boot-xp-trademark" x="626" y="302">
          ™
        </text>
        <text className="xp-boot-professional-text" x="275" y="374">
          Professional
        </text>
      </g>

      <g className="xp-boot-footer">
        <text x="27" y="553">Copyright © 1985-2001</text>
        <text x="27" y="573">Microsoft Corporation</text>
      </g>
      <text className="xp-boot-footer-microsoft" x="680" y="574">
        Microsoft
      </text>
    </svg>
  );
}

export default function XPBootSequence({ onComplete }: Props) {
  const [phase, setPhase] = useState<BootPhase>("bios");
  const [biosLines, setBiosLines] = useState<string[]>([]);
  const [biosMemory, setBiosMemory] = useState(0);

  useEffect(() => {
    if (phase !== "bios") return;

    let i = 0;
    const memoryInterval = setInterval(() => {
      setBiosMemory((prev) => {
        const next = prev + 16384;
        return next >= BIOS_MEMORY_TARGET ? BIOS_MEMORY_TARGET : next;
      });
    }, 55);

    const lineInterval = setInterval(() => {
      if (i < BIOS_DETAIL_LINES.length) {
        setBiosLines((prev) => [...prev, BIOS_DETAIL_LINES[i]]);
        i++;
      }
    }, 130);

    const timer = setTimeout(() => {
      clearInterval(memoryInterval);
      clearInterval(lineInterval);
      setBiosMemory(BIOS_MEMORY_TARGET);
      setPhase("loading");
    }, 3900);

    return () => {
      clearInterval(memoryInterval);
      clearInterval(lineInterval);
      clearTimeout(timer);
    };
  }, [phase]);

  useEffect(() => {
    if (phase !== "loading") return;
    const timer = setTimeout(() => setPhase("welcome"), 4600);
    return () => clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "welcome") return;

    playStartupChime();

    const timer = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 2800);
    return () => clearTimeout(timer);
  }, [phase, onComplete]);

  if (phase === "done") return null;

  if (phase === "bios") {
    return (
      <div className="bios-screen">
        <div className="bios-post">
          <div>AMIBIOS(C)2001 American Megatrends, Inc.</div>
          <div>ASUS P4PE ACPI BIOS Revision 1007</div>
          <div>Copyright(C) 2001, American Megatrends, Inc.</div>
          <div className="bios-gap" />
          <div>Intel(R) Pentium(R) 4 CPU 3.00GHz</div>
          <div>CPU Clock : 3000MHz</div>
          <div>Memory Testing : {biosMemory}K OK</div>
          <div className="bios-gap" />
          {biosLines.map((line, i) => (
            <div key={i} className="bios-line">
              {line || "\u00A0"}
            </div>
          ))}
        </div>
        <div className="bios-help">
          Press DEL to enter SETUP, F8 for BBS POPUP
        </div>
        <div className="bios-id">
          02/08/2002-i845PE-W83627-6A69VA1AC-00
        </div>
      </div>
    );
  }

  if (phase === "loading") {
    return (
      <div className="xp-loading-screen">
        <div className="xp-boot-canvas">
          <XPBootSplashArt />
          <div className="xp-progress-track">
            <div className="xp-progress-blocks">
              <div className="xp-progress-block" />
              <div className="xp-progress-block" />
              <div className="xp-progress-block" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "welcome") {
    return (
      <div className="welcome-screen xp-fade-in">
        <div className="welcome-top-band" />
        <div className="welcome-main-band">
          <div className="welcome-text">welcome</div>
        </div>
        <div className="welcome-bottom-band" />
      </div>
    );
  }

  return null;
}
