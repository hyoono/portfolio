export default function PinballWindow() {
  return (
    <div className="xp-pinball-window">
      <div className="xp-pinball-playfield">
        <iframe
          className="xp-pinball-frame"
          src="/xp-assets/pinball/index.html"
          title="3D Pinball for Windows - Space Cadet"
          allow="autoplay; fullscreen; gamepad"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
