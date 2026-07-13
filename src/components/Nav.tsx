import { useState, useEffect, useRef } from "react";
import type { MouseEvent, PointerEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Profile" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Work" },
  { to: "/experience", label: "Log" },
  { to: "/cv", label: "CV" },
  { to: "/contact", label: "Contact" },
];

const XP_LONG_PRESS_MS = 900;
const NO_SIGNAL_MS = 4200;

export default function Nav() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "dark" | "light") || "dark";
    }
    return "dark";
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLegacySignal, setShowLegacySignal] = useState(false);
  const longPressTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const launchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const suppressThemeClickRef = useRef(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "light" ? "light" : ""
    );
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (longPressTimerRef.current) clearTimeout(longPressTimerRef.current);
      if (launchTimerRef.current) clearTimeout(launchTimerRef.current);
    };
  }, []);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const clearLongPressTimer = () => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  };

  const beginLegacyBoot = () => {
    if (showLegacySignal) return;

    clearLongPressTimer();
    suppressThemeClickRef.current = true;
    setMobileOpen(false);
    setShowLegacySignal(true);

    void import("../xp/XPExperience");
    void import("../xp/preloadXPAssets").then(({ preloadXPAssets }) => {
      preloadXPAssets();
    });

    const fullscreenRequest = document.documentElement.requestFullscreen?.();
    fullscreenRequest?.catch(() => {});

    launchTimerRef.current = setTimeout(() => {
      navigate("/boot.ini");
    }, NO_SIGNAL_MS);
  };

  const handleThemePressStart = (
    event: PointerEvent<HTMLButtonElement>
  ) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    clearLongPressTimer();
    longPressTimerRef.current = setTimeout(beginLegacyBoot, XP_LONG_PRESS_MS);
  };

  const handleThemePressEnd = () => {
    clearLongPressTimer();
  };

  const handleThemeClick = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    if (suppressThemeClickRef.current || showLegacySignal) {
      event.preventDefault();
      event.stopPropagation();
      suppressThemeClickRef.current = false;
      return;
    }

    toggleTheme();
  };

  const themeButtonHandlers = {
    onClick: handleThemeClick,
    onPointerDown: handleThemePressStart,
    onPointerUp: handleThemePressEnd,
    onPointerLeave: handleThemePressEnd,
    onPointerCancel: handleThemePressEnd,
    onContextMenu: (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    },
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-surface/90 backdrop-blur-md border-b border-border-hairline"
          : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Brand */}
        <Link
          to="/"
          className="nav-brand hover:opacity-100"
          id="nav-logo"
          aria-label="hyoono home"
        >
          <span className="nav-brand-glyph" aria-hidden="true">h&gt;</span>
          <span className="nav-brand-name">hyoono</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-mono text-sm px-4 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === link.to
                  ? "text-accent bg-accent-dim"
                  : "text-text-secondary hover:text-text-primary hover:bg-bg-surface-alt/50"
              }`}
              id={`nav-${link.label.toLowerCase()}`}
            >
              {link.label}
            </Link>
          ))}

          {/* Download Resume Button */}
          <a
            href="/documents/evasco-resume-2026.pdf"
            download
            className="btn-neu ml-2 text-xs py-2 px-4"
            id="nav-resume"
            title="Download resume as PDF"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>

          {/* Theme Toggle */}
          <span className="legacy-trigger ml-2">
            <button
              {...themeButtonHandlers}
              className="btn-neu p-2 text-xs"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-describedby="legacy-trigger-hint"
              id="theme-toggle"
            >
              {theme === "dark" ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <span
              className="legacy-trigger-tooltip"
              id="legacy-trigger-hint"
              role="tooltip"
            >
              Hold to reboot
            </span>
          </span>
        </div>

        {/* Mobile: Theme Toggle + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <span className="legacy-trigger">
            <button
              {...themeButtonHandlers}
              className="btn-neu p-2 text-xs"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              aria-describedby="legacy-trigger-hint-mobile"
              id="theme-toggle-mobile"
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
            <span
              className="legacy-trigger-tooltip"
              id="legacy-trigger-hint-mobile"
              role="tooltip"
            >
              Hold to reboot
            </span>
          </span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="btn-neu p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            id="mobile-menu-toggle"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {showLegacySignal && (
        <div className="legacy-signal-overlay" aria-hidden="true">
          <div className="legacy-signal-scanline" />
          <div className="legacy-signal-box">
            <span>NO SIGNAL</span>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="section-container pb-4 flex flex-col gap-1 bg-bg-surface/95 backdrop-blur-md border-t border-border-hairline">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`font-mono text-sm px-4 py-3 rounded-lg transition-all duration-200 ${
                location.pathname === link.to
                  ? "text-accent bg-accent-dim"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/documents/evasco-resume-2026.pdf"
            download
            onClick={() => setMobileOpen(false)}
            className="btn-neu mt-2 text-xs justify-center"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
