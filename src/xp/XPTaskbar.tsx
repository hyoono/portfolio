import { useState, useEffect } from "react";
import type { WindowState } from "./useWindowManager";

interface Props {
  windows: WindowState[];
  onStartClick: () => void;
  onTaskbarAppClick: (id: string) => void;
  startMenuOpen: boolean;
}

export default function XPTaskbar({
  windows,
  onStartClick,
  onTaskbarAppClick,
  startMenuOpen,
}: Props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const timeStr = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="xp-taskbar" onClick={(e) => e.stopPropagation()}>
      {/* Start Button */}
      <button
        className="xp-start-button"
        onClick={(e) => {
          e.stopPropagation();
          onStartClick();
        }}
        style={startMenuOpen ? { filter: "brightness(0.85)" } : {}}
      >
        <img
          className="start-flag-img"
          src="/xp-assets/icons/windows-flag.svg"
          alt=""
          draggable={false}
        />
        <span>start</span>
      </button>

      {/* Quick Launch */}
      <div className="xp-quick-launch">
        <img
          src="/xp-assets/icons/ie.png"
          alt="IE"
          style={{ width: 16, height: 16, cursor: "pointer" }}
          title="Launch Internet Explorer"
        />
        <img
          src="/xp-assets/icons/outlook.png"
          alt="Outlook"
          style={{ width: 16, height: 16, cursor: "pointer" }}
          title="Launch Outlook Express"
        />
      </div>

      {/* Running Apps */}
      <div className="xp-running-apps">
        {windows.map((win) => (
          <div
            key={win.id}
            className={`xp-taskbar-app ${!win.minimized ? "active" : ""}`}
            onClick={() => onTaskbarAppClick(win.id)}
            title={win.title}
          >
            <img
              className="xp-taskbar-app-icon"
              src={win.icon}
              alt=""
              style={{ width: 16, height: 16, objectFit: "contain" }}
            />
            <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
              {win.title}
            </span>
          </div>
        ))}
      </div>

      {/* System Tray */}
      <div className="xp-system-tray">
        <img
          src="/xp-assets/icons/volume.png"
          alt="Volume"
          style={{ width: 16, height: 16 }}
          title="Volume"
        />
        <img
          src="/xp-assets/icons/network.png"
          alt="Network"
          style={{ width: 16, height: 16 }}
          title="Network"
        />
        <span className="xp-clock">{timeStr}</span>
      </div>
    </div>
  );
}
