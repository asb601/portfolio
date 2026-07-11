const SECTIONS = [
  { n: "01", label: "Summary", href: "#summary" },
  { n: "02", label: "Experience", href: "#experience" },
  { n: "03", label: "Work", href: "#work" },
  { n: "04", label: "Stack", href: "#stack" },
  { n: "05", label: "Contact", href: "#contact" },
];

export default function Rail() {
  return (
    <aside className="rail" aria-label="Section index">
      <div className="rail__brand">
        A Sai Bharath
        <span className="silk rail__tag">AI-BACKEND · RETRIEVAL</span>
      </div>

      <nav className="rail__index">
        {SECTIONS.map((s) => (
          <a key={s.href} href={s.href} className="rail__link">
            <span className="rail__n">{s.n}</span>
            <span>{s.label}</span>
          </a>
        ))}
      </nav>

      <div className="rail__status">
        <span className="rail__stat">
          <span className="rail__dot" aria-hidden="true" />
          <span className="silk">SYS · AVAILABLE</span>
        </span>
        <span className="silk">HYDERABAD, IN</span>
      </div>
    </aside>
  );
}
