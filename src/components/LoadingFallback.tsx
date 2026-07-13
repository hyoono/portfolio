export default function LoadingFallback() {
  return (
    <div className="page-container flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="inset-neu px-6 py-4 inline-block">
          <p className="terminal-text text-sm">
            <span className="text-accent">$</span> loading
            <span className="blink-cursor" />
          </p>
        </div>
      </div>
    </div>
  );
}
