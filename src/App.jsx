import React, { useState, useEffect, useRef } from "react";
import { PROFILE, EDUCATION, CERTS, TRACKS } from "./data";

/* ---------------------------------------------------------------
   SWAPNIL NARWADE — PORTFOLIO
   Concept: one source, two build targets. A persistent terminal-style
   status bar lets the visitor switch which "binary" of Swapnil they
   compile: analyst.build or developer.build. Section structure stays
   constant; the lens (copy, projects, skills) recompiles per target.
----------------------------------------------------------------- */

const ACCENTS = {
  analyst: {
    accent: "#D97B4F",
    accentSoft: "rgba(217,123,79,0.14)",
    accentLine: "rgba(217,123,79,0.35)",
  },
  developer: {
    accent: "#3FB8AF",
    accentSoft: "rgba(63,184,175,0.14)",
    accentLine: "rgba(63,184,175,0.35)",
  },
};

function useCompileTransition(track) {
  const [compiling, setCompiling] = useState(false);
  const [displayTrack, setDisplayTrack] = useState(track);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (track === displayTrack) return;
    setCompiling(true);
    timeoutRef.current = setTimeout(() => {
      setDisplayTrack(track);
      setCompiling(false);
    }, 480);
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track]);

  return { compiling, displayTrack };
}

function StatusBar({ track, setTrack }) {
  const accent = ACCENTS[track].accent;
  return (
    <div className="statusbar">
      <div className="statusbar-inner">
        <span className="status-prompt">
          <span className="dim">$</span> whoami <span className="dim">→</span>{" "}
          <span className="status-name">swapnil-narwade</span>
        </span>
        <div className="target-switch" role="tablist" aria-label="Select build target">
          {Object.values(TRACKS).map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={track === t.key}
              className={`target-btn ${track === t.key ? "active" : ""}`}
              style={
                track === t.key
                  ? { color: ACCENTS[t.key].accent, borderColor: ACCENTS[t.key].accentLine }
                  : undefined
              }
              onClick={() => setTrack(t.key)}
            >
              <span className="target-dot" style={{ background: ACCENTS[t.key].accent }} />
              {t.target}
            </button>
          ))}
        </div>
      </div>
      <div className="statusbar-rule" style={{ background: accent }} />
    </div>
  );
}

function CompileOverlay({ visible, track }) {
  const accent = ACCENTS[track].accent;
  if (!visible) return null;
  return (
    <div className="compile-overlay" aria-hidden="true">
      <div className="compile-text" style={{ color: accent }}>
        <span className="dim">$</span> building target → {TRACKS[track].target}
        <span className="cursor-blink">_</span>
      </div>
      <div className="scanline" style={{ background: accent }} />
    </div>
  );
}

function Hero({ track }) {
  const data = TRACKS[track];
  const accent = ACCENTS[track].accent;
  return (
    <header className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <div className="hero-eyebrow" style={{ color: accent }}>
            <span className="dim">// </span>active target: {data.target}
          </div>
          <h1 className="hero-name">
            Swapnil <span className="hero-name-last">Narwade</span>
          </h1>
          <p className="hero-tagline">{data.tagline}</p>
          <p className="hero-summary">{data.summary}</p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              style={{ background: accent }}
              href="#projects"
            >
              View build output →
            </a>
            <a className="btn btn-ghost" style={{ borderColor: ACCENTS[track].accentLine }} href="#contact">
              Get in touch
            </a>
          </div>
          <div className="hero-meta">
            <span>{PROFILE.location}</span>
            <span className="meta-sep">·</span>
            <span>Open to internships</span>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="hero-portrait-frame" style={{ borderColor: accent }}>
            <img
              className="hero-portrait"
              src={`${import.meta.env.BASE_URL}Profile_Photo.jpeg`}
              alt="Swapnil Narwade"
            />
          </div>
          <div
            className="hero-portrait-tag"
            style={{ color: accent, borderColor: ACCENTS[track].accentLine }}
          >
            build: ok ✓
          </div>
        </div>
      </div>
    </header>
  );
}

function SkillsSection({ track }) {
  const data = TRACKS[track];
  const accent = ACCENTS[track].accent;
  return (
    <section className="section" id="skills">
      <h2 className="section-title">
        <span className="section-tag" style={{ color: accent }}>
          ./skills
        </span>
        Toolchain
      </h2>
      <div className="skills-grid">
        {data.skillGroups.map((g) => (
          <div className="skill-card" key={g.group}>
            <div className="skill-group-label">{g.group}</div>
            <div className="skill-pills">
              {g.skills.map((s) => (
                <span
                  className="pill"
                  key={s}
                  style={{ borderColor: ACCENTS[track].accentLine }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection({ track }) {
  const data = TRACKS[track];
  const accent = ACCENTS[track].accent;
  return (
    <section className="section" id="projects">
      <h2 className="section-title">
        <span className="section-tag" style={{ color: accent }}>
          ./projects
        </span>
        Build output
      </h2>
      <div className="projects-list">
        {data.projects.map((p, i) => (
          <article className="project-card" key={p.title}>
            <div className="project-index" style={{ color: accent }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="project-body">
              <div className="project-head">
                <h3 className="project-title">{p.title}</h3>
                {p.link && (
                  <a
                    className="project-link"
                    style={{ color: accent }}
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    repo →
                  </a>
                )}
              </div>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="stack-chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
              <ul className="project-points">
                {p.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationSection({ track }) {
  const accent = ACCENTS[track].accent;
  return (
    <section className="section" id="education">
      <h2 className="section-title">
        <span className="section-tag" style={{ color: accent }}>
          ./education
        </span>
        Academic log
      </h2>
      <div className="timeline">
        {EDUCATION.map((e) => (
          <div className="timeline-row" key={e.degree}>
            <div className="timeline-year">{e.year}</div>
            <div className="timeline-dot" style={{ background: accent }} />
            <div className="timeline-content">
              <div className="timeline-degree">{e.degree}</div>
              <div className="timeline-school">{e.school}</div>
              <div className="timeline-meta">{e.meta}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CertsSection({ track }) {
  const accent = ACCENTS[track].accent;
  return (
    <section className="section" id="certs">
      <h2 className="section-title">
        <span className="section-tag" style={{ color: accent }}>
          ./certs
        </span>
        Verified artifacts
      </h2>
      <div className="certs-grid">
        {CERTS.map((c) => (
          <div className="cert-card" key={c.label}>
            <div className="cert-label" style={{ color: accent }}>
              {c.label}
            </div>
            <div className="cert-detail">{c.detail}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ track }) {
  const accent = ACCENTS[track].accent;
  const data = TRACKS[track];
  return (
    <section className="section contact-section" id="contact">
      <h2 className="section-title">
        <span className="section-tag" style={{ color: accent }}>
          ./contact
        </span>
        Open a connection
      </h2>
      <p className="contact-line">
        Currently looking for internship opportunities as a {data.label}. If something fits — reach out.
      </p>
      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${PROFILE.email}`}>
          <span className="contact-k">email</span>
          <span className="contact-v">{PROFILE.email}</span>
        </a>
        <a className="contact-card" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
          <span className="contact-k">phone</span>
          <span className="contact-v">{PROFILE.phone}</span>
        </a>
        <a className="contact-card" href={PROFILE.github} target="_blank" rel="noreferrer">
          <span className="contact-k">github</span>
          <span className="contact-v">SwapnilNarwade1203</span>
        </a>
        <a className="contact-card" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
          <span className="contact-k">linkedin</span>
          <span className="contact-v">swapnilnarwade1203</span>
        </a>
      </div>
      <div className="footer-note">
        Built with React · two targets, one source · {new Date().getFullYear()}
      </div>
    </section>
  );
}

export default function App() {
  const [track, setTrack] = useState("developer");
  const { compiling, displayTrack } = useCompileTransition(track);
  const accent = ACCENTS[displayTrack].accent;

  return (
    <div
      className="app-root"
      style={{ "--accent": accent, "--accent-soft": ACCENTS[displayTrack].accentSoft }}
    >
      <StatusBar track={track} setTrack={setTrack} />
      <CompileOverlay visible={compiling} track={track} />
      <main className={`main-content ${compiling ? "is-compiling" : ""}`}>
        <Hero track={displayTrack} />
        <SkillsSection track={displayTrack} />
        <ProjectsSection track={displayTrack} />
        <EducationSection track={displayTrack} />
        <CertsSection track={displayTrack} />
        <Contact track={displayTrack} />
      </main>
    </div>
  );
}
