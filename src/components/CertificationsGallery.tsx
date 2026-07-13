import { certifications } from "../data/certifications";
import CertificationCard from "./CertificationCard";

export default function CertificationsGallery() {
  if (certifications.length === 0) return null;

  return (
    <div id="certifications-gallery">
      <h2 className="section-heading mb-8">Certifications</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-in">
        {certifications.map((cert, i) => (
          <CertificationCard key={`${cert.name}-${i}`} cert={cert} />
        ))}
      </div>
    </div>
  );
}
