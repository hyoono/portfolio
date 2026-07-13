import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./xp.css";

import XPBootSequence from "./XPBootSequence";
import XPDesktop from "./XPDesktop";
import XPTaskbar from "./XPTaskbar";
import XPStartMenu from "./XPStartMenu";
import XPWindow from "./XPWindow";
import { useWindowManager } from "./useWindowManager";
import type { WindowDef } from "./useWindowManager";

function exitFullscreen() {
  if (!document.fullscreenElement) return;
  const fullscreenExit = document.exitFullscreen?.();
  fullscreenExit?.catch(() => {});
}

export default function XPExperience() {
  const [booted, setBooted] = useState(false);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [showShutdown, setShowShutdown] = useState(false);
  const [showError, setShowError] = useState(false);
  const [shuttingDown, setShuttingDown] = useState(false);
  const navigate = useNavigate();

  const {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    moveWindow,
    toggleMinimize,
  } = useWindowManager();

  const handleBootComplete = useCallback(() => {
    setBooted(true);
  }, []);

  const handleOpenWindow = useCallback(
    (def: WindowDef) => {
      openWindow(def);
      setStartMenuOpen(false);
    },
    [openWindow]
  );

  const handleShutDown = useCallback(() => {
    setShowShutdown(true);
  }, []);

  const handleShutDownConfirm = useCallback(() => {
    setShuttingDown(true);
    setShowShutdown(false);
    setTimeout(() => {
      exitFullscreen();
      navigate("/");
    }, 1500);
  }, [navigate]);

  const handleDesktopClick = useCallback(() => {
    setStartMenuOpen(false);
  }, []);

  return (
    <div className="xp-experience" onClick={handleDesktopClick}>
      {/* Boot Sequence */}
      {!booted && <XPBootSequence onComplete={handleBootComplete} />}

      {/* Desktop */}
      {booted && !shuttingDown && (
        <>
          <XPDesktop
            onOpenWindow={handleOpenWindow}
            onOpenError={() => setShowError(true)}
          />

          {/* Windows */}
          {windows.map((win) => {
            const Component = win.component;
            return (
              <XPWindow
                key={win.id}
                id={win.id}
                title={win.title}
                icon={win.icon}
                position={win.position}
                size={win.size}
                minimized={win.minimized}
                maximized={win.maximized}
                zIndex={win.zIndex}
                onClose={closeWindow}
                onMinimize={minimizeWindow}
                onMaximize={maximizeWindow}
                onFocus={focusWindow}
                onMove={moveWindow}
              >
                <Component windowId={win.id} />
              </XPWindow>
            );
          })}

          {/* Start Menu */}
          {startMenuOpen && (
            <XPStartMenu
              onOpenWindow={handleOpenWindow}
              onShutDown={handleShutDown}
              onClose={() => setStartMenuOpen(false)}
              onSwitchToModern={() => {
                exitFullscreen();
                navigate("/");
              }}
            />
          )}

          {/* Taskbar */}
          <XPTaskbar
            windows={windows}
            onStartClick={() => setStartMenuOpen((v) => !v)}
            onTaskbarAppClick={toggleMinimize}
            startMenuOpen={startMenuOpen}
          />

          {/* Shut Down Dialog */}
          {showShutdown && (
            <div
              className="xp-shutdown-overlay"
              onClick={() => setShowShutdown(false)}
            >
              <div
                className="xp-shutdown-dialog"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="xp-shutdown-title">
                  Turn off computer
                </div>
                <div className="xp-shutdown-buttons">
                  <div className="xp-shutdown-btn" onClick={() => setShowShutdown(false)}>
                    <img className="xp-shutdown-btn-icon" src="/xp-assets/icons/shutdown.png" alt="" style={{ width: 48, height: 48, filter: "hue-rotate(180deg) brightness(1.3)" }} />
                    Stand By
                  </div>
                  <div className="xp-shutdown-btn" onClick={handleShutDownConfirm}>
                    <img className="xp-shutdown-btn-icon" src="/xp-assets/icons/shutdown.png" alt="" style={{ width: 48, height: 48 }} />
                    Turn Off
                  </div>
                  <div className="xp-shutdown-btn" onClick={() => window.location.reload()}>
                    <img className="xp-shutdown-btn-icon" src="/xp-assets/icons/shutdown.png" alt="" style={{ width: 48, height: 48, filter: "hue-rotate(90deg) brightness(1.2)" }} />
                    Restart
                  </div>
                </div>
                <button
                  className="xp-shutdown-cancel"
                  onClick={() => setShowShutdown(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Recycle Bin Error Dialog */}
          {showError && (
            <div
              className="xp-shutdown-overlay"
              style={{ background: "rgba(0,0,0,0.3)" }}
              onClick={() => setShowError(false)}
            >
              <div
                className="window xp-managed-window xp-error-window"
                style={{ width: 360, margin: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="title-bar xp-managed-title-bar">
                  <div className="title-bar-text">Recycle Bin</div>
                  <div className="title-bar-controls">
                    <button
                      className="xp-title-button"
                      aria-label="Close"
                      onClick={() => setShowError(false)}
                    />
                  </div>
                </div>
                <div
                  className="window-body"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: 16,
                  }}
                >
                  <img className="xp-error-icon" src="/xp-assets/icons/error.png" alt="Error" style={{ width: 32, height: 32 }} />
                  <div>
                    <p style={{ fontWeight: "bold", marginBottom: 4 }}>
                      This program has performed an illegal operation.
                    </p>
                    <p style={{ fontSize: 11, color: "#555" }}>
                      The Recycle Bin is empty. Joshua doesn't delete his work.
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "4px 8px 8px",
                  }}
                >
                  <button
                    style={{ padding: "3px 24px" }}
                    onClick={() => setShowError(false)}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Shutting down black screen */}
      {shuttingDown && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999,
          }}
        >
          <div style={{ color: "#ff8c1a", fontSize: 18, fontFamily: "Franklin Gothic Medium, Tahoma" }}>
            Windows is shutting down...
          </div>
        </div>
      )}
    </div>
  );
}
