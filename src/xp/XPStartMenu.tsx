import type { WindowDef } from "./useWindowManager";
import { desktopIcons } from "./desktopIcons";

interface Props {
  onOpenWindow: (def: WindowDef) => void;
  onShutDown: () => void;
  onClose: () => void;
  onSwitchToModern: () => void;
}

export default function XPStartMenu({
  onOpenWindow,
  onShutDown,
  onClose,
}: Props) {
  const handleItemClick = (id: string) => {
    const icon = desktopIcons.find((i) => i.id === id);
    if (icon) {
      onOpenWindow(icon);
      onClose();
    }
  };

  return (
    <div className="xp-start-menu" onClick={(e) => e.stopPropagation()}>
      {/* Header */}
      <div className="xp-start-menu-header">
        <div className="xp-start-menu-avatar">
          <img
            src="/xp-assets/icons/users.png"
            alt="User"
            style={{ width: 36, height: 36, borderRadius: 4 }}
          />
        </div>
        <div className="xp-start-menu-name">Joshua</div>
      </div>

      {/* Body */}
      <div className="xp-start-menu-body">
        {/* Left column — Programs */}
        <div className="xp-start-menu-left">
          <div
            className="xp-start-menu-item"
            onClick={() => handleItemClick("projects")}
          >
            <img className="xp-start-menu-item-icon" src="/xp-assets/icons/ie.png" alt="" />
            <div>
              <div style={{ fontWeight: "bold" }}>Internet Explorer</div>
              <div style={{ color: "#888", fontSize: 10 }}>Browse Projects</div>
            </div>
          </div>
          <div
            className="xp-start-menu-item"
            onClick={() => handleItemClick("contact")}
          >
            <img className="xp-start-menu-item-icon" src="/xp-assets/icons/outlook.png" alt="" />
            <div>
              <div style={{ fontWeight: "bold" }}>Outlook Express</div>
              <div style={{ color: "#888", fontSize: 10 }}>Send a Message</div>
            </div>
          </div>

          <div className="xp-start-menu-separator" />

          <div
            className="xp-start-menu-item"
            onClick={() => handleItemClick("resume")}
          >
            <img className="xp-start-menu-item-icon" src="/xp-assets/icons/notepad.png" alt="" />
            Notepad — Resume
          </div>
          <div
            className="xp-start-menu-item"
            onClick={() => handleItemClick("experience")}
          >
            <img className="xp-start-menu-item-icon" src="/xp-assets/icons/notepad-list.png" alt="" />
            My Experience
          </div>
          <div
            className="xp-start-menu-item"
            onClick={() => handleItemClick("certs")}
          >
            <img className="xp-start-menu-item-icon" src="/xp-assets/icons/certificate.png" alt="" />
            Certifications
          </div>

          <div className="xp-start-menu-separator" />

          <div className="xp-start-menu-item" style={{ color: "#888" }}>
            <img className="xp-start-menu-item-icon" src="/xp-assets/icons/folder.png" alt="" style={{ opacity: 0.5 }} />
            All Programs ▶
          </div>
        </div>

        {/* Right column — Places */}
        <div className="xp-start-menu-right">
          <div
            className="xp-start-menu-item"
            onClick={() => handleItemClick("about")}
          >
            <img className="xp-start-menu-item-icon" src="/xp-assets/icons/my-documents.png" alt="" />
            My Documents
          </div>
          <div
            className="xp-start-menu-item"
            onClick={() => handleItemClick("skills")}
          >
            <img className="xp-start-menu-item-icon" src="/xp-assets/icons/my-computer.png" alt="" />
            My Computer
          </div>
          <div
            className="xp-start-menu-item"
            onClick={() => handleItemClick("experience")}
          >
            <img className="xp-start-menu-item-icon" src="/xp-assets/icons/notepad-list.png" alt="" />
            My Experience
          </div>

          <div className="xp-start-menu-separator" />

          <div className="xp-start-menu-item" style={{ opacity: 0.6 }}>
            <img className="xp-start-menu-item-icon" src="/xp-assets/icons/folder.png" alt="" />
            Control Panel
          </div>
          <div className="xp-start-menu-item" style={{ opacity: 0.6 }}>
            <img className="xp-start-menu-item-icon" src="/xp-assets/icons/printer.png" alt="" />
            Printers &amp; Faxes
          </div>
          <div className="xp-start-menu-item" style={{ opacity: 0.6 }}>
            <img className="xp-start-menu-item-icon" src="/xp-assets/icons/folder.png" alt="" />
            Help and Support
          </div>
          <div className="xp-start-menu-item" style={{ opacity: 0.6 }}>
            <img className="xp-start-menu-item-icon" src="/xp-assets/icons/folder.png" alt="" />
            Search
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="xp-start-menu-footer">
        <button
          onClick={() => {
            onClose();
            onShutDown();
          }}
        >
          <img src="/xp-assets/icons/shutdown.png" alt="" style={{ width: 16, height: 16 }} />
          Turn Off Computer
        </button>
      </div>
    </div>
  );
}
