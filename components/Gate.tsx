"use client";

import { useState } from "react";
import { retrieve, SUGGESTIONS, type RetrievalResult } from "@/lib/retrieval";

type Route = "fast" | "agent";

function hashStr(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// The planner gate: cheap deterministic path when a single high-confidence
// source answers it; the agent loop only when it's multi-hop, about the
// retrieval system itself, or uncertain.
function decideRoute(r: RetrievalResult): Route {
  if (!r.matched) return "agent";
  if (r.sources.length >= 2) return "agent";
  if (r.sources.some((s) => /Retrieval|Enterprise/i.test(s.label))) return "agent";
  return "fast";
}

type Telemetry = { latency: number; llm: number; tool: number };

function telemetry(route: Route, query: string): Telemetry {
  const h = hashStr(query);
  if (route === "fast") {
    return { latency: 1.1 + (h % 80) / 100, llm: 0, tool: 0 };
  }
  return { latency: 5.5 + (h % 40) / 10, llm: 2 + (h % 3), tool: 4 + (h % 9) };
}

export default function Gate() {
  const [q, setQ] = useState("");
  const [route, setRoute] = useState<Route>("fast");
  const [tele, setTele] = useState<Telemetry>({ latency: 1.42, llm: 0, tool: 0 });
  const [status, setStatus] = useState<"ready" | "routed">("ready");
  const [result, setResult] = useState<RetrievalResult | null>(null);
  const [tick, setTick] = useState(0);

  function run(query: string) {
    const query2 = query.trim();
    if (!query2) return;
    setQ(query2);
    const r = retrieve(query2);
    const nextRoute = decideRoute(r);
    setRoute(nextRoute);
    setTele(telemetry(nextRoute, query2));
    setResult(r);
    setStatus("routed");
    setTick((t) => t + 1); // re-trigger the readout settle
  }

  const goTo = (section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const statusText =
    status === "ready" ? "ready" : route === "agent" ? "agent loop" : "fast path";

  return (
    <div className={`gate${route === "agent" ? " gate--agent" : ""}`} aria-label="Query router">
      <div className="gate__head">
        <span className="gate__title">Query Router</span>
        <span className="gate__status silk">
          <span
            className={`gate__statusdot${route === "agent" ? " gate__statusdot--agent" : ""}`}
            aria-hidden="true"
          />
          {statusText}
        </span>
      </div>

      <form
        className="gate__bar"
        onSubmit={(e) => {
          e.preventDefault();
          run(q);
        }}
      >
        <span className="gate__prompt" aria-hidden="true">
          query&nbsp;›
        </span>
        <input
          className="gate__input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={(e) => e.target.select()}
          placeholder="ask — it routes fast or agentic"
          aria-label="Ask a question about A Sai Bharath"
          autoComplete="off"
          spellCheck={false}
        />
        <button className="gate__go" type="submit" aria-label="Route query">
          ↵
        </button>
      </form>

      <div className="gate__paths" role="group" aria-label="Selected route">
        <div className={`path path--fast${route === "fast" ? " path--active" : ""}`}>
          <span className="path__led">
            <span className="path__dot" aria-hidden="true" />
            <span className="path__name">Fast Path</span>
          </span>
          <span className="path__engine">DataFusion</span>
        </div>
        <div className={`path path--agent${route === "agent" ? " path--active" : ""}`}>
          <span className="path__led">
            <span className="path__dot" aria-hidden="true" />
            <span className="path__name">Agent Loop</span>
          </span>
          <span className="path__engine">LangGraph</span>
        </div>
      </div>

      <div className="gate__tele">
        <div className="trow">
          <span className="trow__k">Latency</span>
          <span className="trow__v settle" key={`lat-${tick}`}>
            {tele.latency.toFixed(2)}
            <span className="u">s</span>
          </span>
        </div>
        <div className="trow">
          <span className="trow__k">LLM Calls</span>
          <span className="trow__v settle" key={`llm-${tick}`}>
            {tele.llm}
          </span>
        </div>
        <div className="trow">
          <span className="trow__k">Tool Calls</span>
          <span className="trow__v settle" key={`tool-${tick}`}>
            {tele.tool}
            <span className="u">/ 14</span>
          </span>
        </div>
      </div>

      <div className="gate__out" aria-live="polite">
        {result ? (
          <>
            <p className="gate__answer">{result.answer}</p>
            {result.sources.length > 0 && (
              <div className="gate__sources">
                <span className="silk">sources</span>
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
          <p className="gate__hint">
            Submit a query — the gate takes the cheap deterministic path when it
            can, and spends on the agent loop only when a question needs it.
          </p>
        )}
      </div>

      <div className="gate__suggest">
        {SUGGESTIONS.map((s) => (
          <button key={s} className="sugg" type="button" onClick={() => run(s)}>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
