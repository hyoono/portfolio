import { useRef, useCallback, useEffect } from "react";

interface Props {
  id: string;
  title: string;
  icon: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  minimized: boolean;
  maximized: boolean;
  zIndex: number;
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  onMaximize: (id: string) => void;
  onFocus: (id: string) => void;
  onMove: (id: string, x: number, y: number) => void;
  children: React.ReactNode;
}

export default function XPWindow({
  id,
  title,
  icon,
  position,
  size,
  minimized,
  maximized,
  zIndex,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onMove,
  children,
}: Props) {
  const dragRef = useRef<{
    startX: number;
    startY: number;
    origX: number;
    origY: number;
  } | null>(null);
  const windowRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (maximized) return;
      e.preventDefault();
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        origX: position.x,
        origY: position.y,
      };
      onFocus(id);
    },
    [id, position, onFocus, maximized]
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragRef.current) return;
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      onMove(id, dragRef.current.origX + dx, dragRef.current.origY + dy);
    };

    const handleMouseUp = () => {
      dragRef.current = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [id, onMove]);

  if (minimized) return null;

  const style: React.CSSProperties = maximized
    ? {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 38, // taskbar height
        zIndex,
        width: "auto",
        height: "auto",
      }
    : {
        position: "absolute",
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
        zIndex,
      };

  return (
    <div
      ref={windowRef}
      className="xp-window-wrapper"
      style={style}
      onMouseDown={() => onFocus(id)}
    >
      <div className="window xp-managed-window">
        <div
          className="title-bar xp-managed-title-bar"
          onMouseDown={handleMouseDown}
          onDoubleClick={() => onMaximize(id)}
        >
          <div className="title-bar-text">
            <img className="xp-title-icon" src={icon} alt="" /> {title}
          </div>
          <div className="title-bar-controls">
            <button
              className="xp-title-button"
              aria-label="Minimize"
              onClick={(e) => {
                e.stopPropagation();
                onMinimize(id);
              }}
            />
            <button
              className="xp-title-button"
              aria-label={maximized ? "Restore" : "Maximize"}
              onClick={(e) => {
                e.stopPropagation();
                onMaximize(id);
              }}
            />
            <button
              className="xp-title-button"
              aria-label="Close"
              onClick={(e) => {
                e.stopPropagation();
                onClose(id);
              }}
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
