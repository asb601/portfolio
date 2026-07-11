"use client";

import { useEffect, useRef, useState } from "react";
import { retrieve, SUGGESTIONS, type RetrievalResult } from "@/lib/retrieval";

export default function AskConsole() {
  const [q, setQ] = useState("");
  const [result, setResult] = useState<RetrievalResult | null>(null);
  const [shown, setShown] = useState("");
  const [typing, setTyping] = useState(false);
  const timer = useRef<number | null>(null);

  const clearTimer = () => {
    if (timer.current !== null) {
      window.clearInterval(timer.current);
      timer.current = null;
    }
  };

  function run(query: string) {
    const query2 = query.trim();
    if (!query2) return;
    setQ(query2);

    const r = retrieve(query2);
    setResult(r);
    clearTimer();

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setShown(r.answer);
      setTyping(false);
      return;
    }

    setShown("");
    setTyping(true);
    let i = 0;
    const step = Math.max(1, Math.round(r.answer.length / 110));
    timer.current = window.setInterval(() => {
      i += step;
      if (i >= r.answer.length) {
        setShown(r.answer);
        setTyping(false);
        clearTimer();
      } else {
        setShown(r.answer.slice(0, i));
      }
    }, 16);
  }

  useEffect(() => clearTimer, []);

  const goTo = (section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="console" aria-label="Ask this site">
      <div className="console__title">
        <span className="console__titledot" aria-hidden="true" />
        retrieval.ts — ask over ./content
        <span className="console__titlestatus">ready</span>
      </div>
      <form
        className="console__bar"
        onSubmit={(e) => {
          e.preventDefault();
          run(q);
        }}
      >
        <span className="console__prompt" aria-hidden="true">
          ask&nbsp;›
        </span>
        <input
          className="console__input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={(e) => e.target.select()}
          placeholder="what has he built? what's his stack?"
          aria-label="Ask a question about A Sai Bharath"
          autoComplete="off"
          spellCheck={false}
        />
        <button className="console__go" type="submit" aria-label="Run query">
          ↵
        </button>
      </form>

      <div className="console__out" aria-live="polite">
        {result ? (
          <>
            <p className="console__answer">
              {shown}
              {typing && <span className="caret" aria-hidden="true" />}
            </p>
            {!typing && result.sources.length > 0 && (
              <div className="console__sources">
                <span className="console__srclabel">sources</span>
                {result.sources.map((s) => (
                  <button
                    key={s.section + s.label}
                    className="chip"
                    type="button"
                    onClick={() => goTo(s.section)}
                  >
                    {s.label} →
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <p className="console__hint">
            In-browser retrieval over my own docs — the kind of system I build,
            minus the GPU bill. Ask anything, or tap a starter.
          </p>
        )}
      </div>

      <div className="console__suggest">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            className="sugg"
            type="button"
            onClick={() => run(s)}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
