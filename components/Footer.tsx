export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span className="footer__name">A Sai Bharath</span>
        <span className="footer__meta mono">
          built with Next.js · typeset, not templated
        </span>
        <div className="footer__links mono">
          <a href="https://github.com/asb601" target="_blank" rel="noopener noreferrer" className="link">
            github
          </a>
          <a
            href="https://www.linkedin.com/in/a-sai-bharath-b414662ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            linkedin
          </a>
          <a href="/resume" className="link">
            résumé
          </a>
        </div>
      </div>
    </footer>
  );
}
