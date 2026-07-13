import type { Certification } from "../data/certifications";

interface CertificationCardProps {
  cert: Certification;
}

export default function CertificationCard({ cert }: CertificationCardProps) {
  const pdfPreviewSrc =
    cert.type === "pdf" && cert.fileSrc
      ? `${cert.fileSrc}#page=1&zoom=page-width&toolbar=0&navpanes=0&scrollbar=0`
      : undefined;

  const handleClick = () => {
    if (cert.type === "image" && cert.fileSrc) {
      window.open(cert.fileSrc, "_blank");
    } else if (cert.type === "pdf" && cert.fileSrc) {
      window.open(cert.fileSrc, "_blank");
    } else if ((cert.type === "link" || cert.type === "badge") && cert.verifyUrl && cert.verifyUrl !== "#") {
      window.open(cert.verifyUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="card-neu p-5 flex flex-col items-center text-center cursor-pointer group"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      aria-label={`${cert.name} by ${cert.issuer}`}
    >
      {/* Visual area */}
      <div className="cert-preview-frame">
        {cert.thumbnailSrc ? (
          <img
            src={cert.thumbnailSrc}
            alt={cert.name}
            className="cert-preview-image"
          />
        ) : pdfPreviewSrc ? (
          <object
            className="cert-pdf-preview"
            data={pdfPreviewSrc}
            type="application/pdf"
            aria-label={`${cert.name} PDF preview`}
          >
            <div className="flex flex-col items-center gap-2 text-text-secondary/50">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span className="font-mono text-xs">PDF</span>
            </div>
          </object>
        ) : cert.type === "pdf" ? (
          <div className="flex flex-col items-center gap-2 text-text-secondary/50">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span className="font-mono text-xs">PDF</span>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-text-secondary/50">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
              <path d="M9 12l-2 8" />
              <path d="M15 12l2 8" />
            </svg>
            <span className="font-mono text-xs">Certificate</span>
          </div>
        )}
      </div>

      {/* Info */}
      <h4 className="font-display text-sm font-semibold text-text-primary mb-1 group-hover:text-accent transition-colors">
        {cert.name}
      </h4>
      <p className="font-mono text-xs text-text-secondary">{cert.issuer}</p>
      {cert.dateEarned && (
        <p className="font-mono text-xs text-text-secondary/60 mt-1">
          {cert.dateEarned}
        </p>
      )}

      {/* Action hint */}
      {(cert.type === "link" || cert.type === "badge") && cert.verifyUrl && cert.verifyUrl !== "#" && (
        <span className="mt-3 tag-pill text-xs">Verify →</span>
      )}
      {(cert.type === "link" || cert.type === "badge") && (!cert.verifyUrl || cert.verifyUrl === "#") && (
        <span className="mt-3 font-mono text-xs text-text-secondary/40">
          Verification unavailable
        </span>
      )}
      {cert.type === "pdf" && cert.fileSrc && (
        <span className="mt-3 tag-pill text-xs">Open PDF →</span>
      )}
    </div>
  );
}
