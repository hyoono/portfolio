import { useCallback, useState } from "react";
import type { WindowDef } from "./useWindowManager";
import { desktopIcons } from "./desktopIcons";

interface Props {
  onOpenWindow: (def: WindowDef) => void;
  onOpenError: () => void;
}

export default function XPDesktop({ onOpenWindow, onOpenError }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleDoubleClick = useCallback(
    (icon: (typeof desktopIcons)[0]) => {
      if (icon.id === "recycle") {
        onOpenError();
        return;
      }
      onOpenWindow(icon);
    },
    [onOpenWindow, onOpenError]
  );

  const handleClick = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  return (
    <div className="xp-desktop" onClick={() => setSelectedId(null)}>
      <div className="xp-desktop-icons">
        {desktopIcons.map((icon) => (
          <div
            key={icon.id}
            className={`xp-desktop-icon ${selectedId === icon.id ? "selected" : ""}`}
            onDoubleClick={() => handleDoubleClick(icon)}
            onClick={(e) => {
              e.stopPropagation();
              handleClick(icon.id);
            }}
            title={icon.title}
          >
            <img
              className="xp-desktop-icon-img"
            src={icon.desktopIcon}
            alt={icon.title}
            draggable={false}
          />
            <div className="xp-desktop-icon-label">{icon.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
