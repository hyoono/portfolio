import { useState, useCallback, useEffect, useRef } from "react";

export interface WindowDef {
  id: string;
  title: string;
  icon: string;
  component: React.ComponentType<{ windowId: string }>;
  defaultWidth?: number;
  defaultHeight?: number;
}

export interface WindowState {
  id: string;
  title: string;
  icon: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  minimized: boolean;
  maximized: boolean;
  zIndex: number;
  component: React.ComponentType<{ windowId: string }>;
}

let nextZ = 200;
let cascadeOffset = 0;

const TASKBAR_HEIGHT = 38;
const DESKTOP_GUTTER = 12;
const MIN_WINDOW_WIDTH = 320;
const MIN_WINDOW_HEIGHT = 220;

function getDesktopSize() {
  if (typeof window === "undefined") {
    return { width: 1024, height: 730 };
  }

  return {
    width: window.innerWidth,
    height: Math.max(MIN_WINDOW_HEIGHT, window.innerHeight - TASKBAR_HEIGHT),
  };
}

function fitWindowSize(width: number, height: number) {
  const desktop = getDesktopSize();
  const maxWidth = Math.max(MIN_WINDOW_WIDTH, desktop.width - DESKTOP_GUTTER * 2);
  const maxHeight = Math.max(MIN_WINDOW_HEIGHT, desktop.height - DESKTOP_GUTTER * 2);

  return {
    width: Math.min(width, maxWidth),
    height: Math.min(height, maxHeight),
  };
}

function clampWindowPosition(
  x: number,
  y: number,
  size: { width: number; height: number }
) {
  const desktop = getDesktopSize();
  const maxX = Math.max(DESKTOP_GUTTER, desktop.width - size.width - DESKTOP_GUTTER);
  const maxY = Math.max(DESKTOP_GUTTER, desktop.height - size.height - DESKTOP_GUTTER);

  return {
    x: Math.min(Math.max(DESKTOP_GUTTER, x), maxX),
    y: Math.min(Math.max(DESKTOP_GUTTER, y), maxY),
  };
}

export function useWindowManager() {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const windowsRef = useRef(windows);

  useEffect(() => {
    windowsRef.current = windows;
  }, [windows]);

  const openWindow = useCallback((def: WindowDef) => {
    // If already open, focus it
    const existing = windowsRef.current.find((w) => w.id === def.id);
    if (existing) {
      setWindows((prev) =>
        prev.map((w) =>
          w.id === def.id
            ? { ...w, minimized: false, zIndex: ++nextZ }
            : w
        )
      );
      return;
    }

    // Cascade position
    const baseX = 80 + cascadeOffset * 28;
    const baseY = 60 + cascadeOffset * 28;
    cascadeOffset = (cascadeOffset + 1) % 10;

    const size = fitWindowSize(
      def.defaultWidth ?? 640,
      def.defaultHeight ?? 480
    );
    const position = clampWindowPosition(baseX, baseY, size);

    const newWindow: WindowState = {
      id: def.id,
      title: def.title,
      icon: def.icon,
      position,
      size,
      minimized: false,
      maximized: false,
      zIndex: ++nextZ,
      component: def.component,
    };

    setWindows((prev) => [...prev, newWindow]);
  }, []);

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, minimized: true } : w
      )
    );
  }, []);

  const maximizeWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, maximized: !w.maximized, zIndex: ++nextZ } : w
      )
    );
  }, []);

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? { ...w, minimized: false, zIndex: ++nextZ }
          : w
      )
    );
  }, []);

  const moveWindow = useCallback((id: string, x: number, y: number) => {
    const win = windowsRef.current.find((w) => w.id === id);
    const position = win ? clampWindowPosition(x, y, win.size) : { x, y };

    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, position } : w
      )
    );
  }, []);

  const toggleMinimize = useCallback((id: string) => {
    const win = windowsRef.current.find((w) => w.id === id);
    if (!win) return;

    if (win.minimized) {
      // Restore and focus
      focusWindow(id);
    } else {
      // Check if it's the topmost window
      const maxZ = Math.max(...windowsRef.current.map((w) => w.zIndex));
      if (win.zIndex === maxZ) {
        minimizeWindow(id);
      } else {
        focusWindow(id);
      }
    }
  }, [focusWindow, minimizeWindow]);

  return {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    moveWindow,
    toggleMinimize,
  };
}
