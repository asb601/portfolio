import AskConsole from "@/components/AskConsole";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero__grid">
        <div className="hero__intro">
          <p className="hero__status rise rise-1">
            <span className="hero__dot" aria-hidden="true" />
            available for roles · Hyderabad, IN
          </p>

          <h1 className="hero__name rise rise-2">A Sai Bharath</h1>

          <p className="hero__role rise rise-3">AI Backend Engineer</p>
          <p className="hero__sub rise rise-3">
            LLM systems · RAG pipelines · agentic workflows
          </p>

          <p className="hero__thesis rise rise-4">
            I build production LLM systems — retrieval that stays fast and cheap
            when it can, and goes agentic only when a question actually needs it.
          </p>

          <p className="flow hero__flow rise rise-5">
            <b>ingest</b> <span className="arrow">→</span> <b>parse</b>{" "}
            <span className="arrow">→</span> <b>embed</b>{" "}
            <span className="arrow">→</span> <b>index</b>{" "}
            <span className="arrow">→</span> <b>retrieve</b>{" "}
            <span className="arrow">→</span> <b>rerank</b>{" "}
            <span className="arrow">→</span> <b>answer</b>
          </p>

          <div className="hero__actions rise rise-6">
            <a href="#work" className="btn btn--solid">
              View work
            </a>
            <a href="/resume" className="btn">
              Résumé
            </a>
            <a
              href="https://github.com/asb601"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
            <a href="mailto:asb.bharath601@gmail.com" className="btn">
              Email
            </a>
          </div>
        </div>

        <div className="hero__console rise rise-4">
          <AskConsole />
        </div>
      </div>
    </section>
  );
}
