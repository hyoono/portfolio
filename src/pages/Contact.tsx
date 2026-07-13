const channels = [
  {
    label: "Email",
    title: "evasco38@gmail.com",
    href: "mailto:evasco38@gmail.com",
    detail: "Best first contact for recruiting, project follow-up, and formal inquiries.",
  },
  {
    label: "Professional Profile",
    title: "LinkedIn",
    href: "https://linkedin.com/in/joshuafil-evasco",
    detail: "linkedin.com/in/joshuafil-evasco",
  },
  {
    label: "Code / Repositories",
    title: "GitHub",
    href: "https://github.com/hyoono",
    detail: "github.com/hyoono",
  },
  {
    label: "Document",
    title: "Resume",
    href: "/documents/evasco-resume-2026.pdf",
    detail: "Download the current 2-page resume. Phone contact is listed there.",
  },
];

export default function Contact() {
  return (
    <div className="page-container">
      <div
        className="section-container pt-20 md:pt-28 pb-28 md:pb-36 fade-in"
        id="contact-page"
      >
        <div className="terminal-text mb-4 md:mb-6 text-base">
          <span className="text-accent">&gt;</span> open channels
        </div>

        <h1 className="section-heading mb-6 md:mb-8">Contact</h1>

        <p className="text-text-secondary text-base md:text-lg max-w-3xl mb-12 md:mb-14 leading-relaxed">
          Based in Carmona, Cavite, Philippines. Interested in IT support,
          systems administration, cybersecurity-adjacent operations, and
          practical internal systems work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {channels.map((channel) => (
            <a
              key={channel.href}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={
                channel.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="project-card min-h-0"
              id={`contact-${channel.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            >
              <p className="project-card-role">{channel.label}</p>
              <h2 className="font-display text-xl text-text-primary mt-4">
                {channel.title}
              </h2>
              <p className="mt-3 text-text-secondary font-mono text-sm leading-relaxed">
                {channel.detail}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
