"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key:
            process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE",
          subject: `Portfolio message from ${form.name}`,
          ...form,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 6000);
      } else throw new Error("failed");
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <p className="eyebrow">
          <span className="eyebrow__cmd">./<b>contact.sh</b></span>
          <span className="eyebrow__meta">open to roles</span>
        </p>

        <div className="contact__grid">
          <div className="contact__aside">
            <p className="lede">
              I&apos;m open to roles and interesting problems in AI backend and
              LLM systems. The fastest way to reach me:
            </p>
            <a href="mailto:asb.bharath601@gmail.com" className="contact__email">
              asb.bharath601@gmail.com
            </a>
            <ul className="contact__links">
              <li>
                <span className="contact__lk">github</span>
                <a
                  href="https://github.com/asb601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  github.com/asb601
                </a>
              </li>
              <li>
                <span className="contact__lk">linkedin</span>
                <a
                  href="https://www.linkedin.com/in/a-sai-bharath-b414662ab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  a-sai-bharath
                </a>
              </li>
              <li>
                <span className="contact__lk">phone</span>
                <a href="tel:+916300824195" className="link">
                  +91 63008 24195
                </a>
              </li>
            </ul>
          </div>

          <form className="contact__form" onSubmit={onSubmit}>
            <label className="field">
              <span className="field__label">name</span>
              <input
                className="field__input"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                autoComplete="name"
              />
            </label>
            <label className="field">
              <span className="field__label">email</span>
              <input
                className="field__input"
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                autoComplete="email"
              />
            </label>
            <label className="field">
              <span className="field__label">message</span>
              <textarea
                className="field__input field__area"
                name="message"
                value={form.message}
                onChange={onChange}
                required
                rows={5}
              />
            </label>
            <button
              className="btn btn--solid contact__submit"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "sending…" : "send message ↵"}
            </button>
            {status === "success" && (
              <p className="contact__note contact__note--ok">
                Sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="contact__note contact__note--err">
                Couldn&apos;t send. Email me directly at asb.bharath601@gmail.com.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
