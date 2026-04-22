"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

export default function Home() {
  const projectImages = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        src: `/images/projects/project-${i + 1}.jpeg`,
        alt: `Garmin Construction project ${i + 1}`,
      })),
    []
  );

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const isOpen = lightboxIndex !== null;
  const active = lightboxIndex !== null ? projectImages[lightboxIndex] : null;

  const close = () => setLightboxIndex(null);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + projectImages.length) % projectImages.length);
  };

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % projectImages.length);
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, lightboxIndex, projectImages.length]);

  return (
    <main className="container">
      {/* HERO */}
      <section
        className="card"
        style={{
          padding: 22,
          background:
            "linear-gradient(135deg, rgba(18,162,161,0.10) 0%, rgba(79,230,210,0.08) 40%, #ffffff 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
          <Image
            src="/images/logo.jpeg"
            alt="Garmin Construction logo"
            width={52}
            height={52}
            priority
            style={{ borderRadius: 12 }}
          />
          <div>
            <h1 style={{ margin: 0, fontSize: 36, fontWeight: 900 }}>Garmin Construction</h1>
            <p style={{ margin: "6px 0 0 0", color: "var(--muted)", fontWeight: 700 }}>
              Tangible Difference
            </p>
          </div>
        </div>

        <p style={{ marginTop: 14, fontSize: 16, lineHeight: 1.7, color: "var(--ink)" }}>
          Building and civil works with a focus on strong substructures, quality finishes, and
          reliable delivery — from foundations to modern double storeys.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
          <a className="btnPrimary" href="/request-quote">Request a Quote</a>
          <a className="btnGhost" href="/services">View Services</a>
          <a className="btnGhost" href="tel:0659668036">Call: 065 966 8036</a>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
          <span className="badge">Established 2009</span>
          <span className="badge">CIDB Registered</span>
          <span className="badge">NHBRC: 3000252906</span>
          <span className="badge">TCS: 9932056154</span>
          <span className="badge">100% Black Owned</span>
        </div>
      </section>

      {/* QUICK SERVICES */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900 }}>What we do</h2>
        <p style={{ marginTop: 6, color: "var(--muted)", lineHeight: 1.7 }}>
          Core services engineered for durability, neat finishing, and practical value.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 12,
            marginTop: 12,
          }}
        >
          {[
            ["Foundations & Paving", "Robust substructures that can withstand dolomitic and quagmire lands."],
            ["Brickworks", "Building robust superstructures for long-term strength."],
            ["Plastering", "Membrane that can withstand harsh weather conditions."],
            ["Painting", "Aesthetic interior/exterior that inhibits wall and ceiling deterioration."],
            ["Garage Conversion", "Turn garage space into an en-suite, storage, office, or shop."],
            ["Double Storeys", "Modern storeys to overcome land space limitations."],
          ].map(([title, desc]) => (
            <div key={title} className="card">
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900 }}>{title}</h3>
              <p style={{ marginTop: 8, color: "var(--muted)", lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 12 }}>
          <a href="/services" style={{ color: "var(--brand)", fontWeight: 900, textDecoration: "none" }}>
            See full service list →
          </a>
        </div>

        {/* EQUIPMENT HIRE BANNER */}
        <div
          style={{
            marginTop: 16,
            padding: "18px 20px",
            borderRadius: 16,
            border: "2px solid #0d9488",
            background: "rgba(13,148,136,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 14,
          }}
        >
          <div>
            <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900, color: "#0d9488" }}>
              🔧 Tools & Equipment Hire
            </h3>
            <p style={{ margin: "6px 0 0 0", color: "var(--muted)", lineHeight: 1.6, maxWidth: 520 }}>
              Plate compactors, generators, angle grinders, power floats, brush cutters and more —
              available daily or weekly. Pick-up & drop-off included.
            </p>
          </div>
          
          <a 
            href="/equipment-hire"
            style={{
              backgroundColor: "#0d9488",
              color: "#ffffff",
              padding: "11px 20px",
              borderRadius: "10px",
              fontWeight: "900",
              textDecoration: "none",
              whiteSpace: "nowrap",
              fontSize: "14px",
              display: "inline-block"
            }}
          >
            View Hire Rates →
          </a>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900 }}>Featured work</h2>
        <p style={{ marginTop: 6, color: "var(--muted)", lineHeight: 1.7 }}>
          A snapshot of completed and current projects.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 12,
            marginTop: 12,
          }}
        >
          {[
            ["JOSHCO Housing (2019)", "Face brickworks • 12 months • R203,247"],
            ["Etosha Estate (2024)", "Refurbishment & patio/carport • 4–6 weeks"],
            ["Lufhereng Secondary School", "Face brickwork • Current project • R420,000"],
          ].map(([title, meta]) => (
            <div key={title} className="card">
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 900 }}>{title}</h3>
              <p style={{ marginTop: 8, color: "var(--muted)", lineHeight: 1.7 }}>{meta}</p>
              <a href="/projects" style={{ color: "var(--brand)", fontWeight: 900, textDecoration: "none" }}>
                View details →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM STRUCTURE STRIP */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900 }}>Our Team</h2>
        <p style={{ marginTop: 6, color: "var(--muted)", lineHeight: 1.7 }}>
          A skilled, experienced team delivering quality on every project.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 12,
            marginTop: 12,
          }}
        >
          {[
            { role: "DIRECTOR", name: "Lunga Rasmeni", color: "#0d9488", text: "#ffffff" },
            { role: "Civil Engineer", name: "Amity Mukombami", color: "#0f766e", text: "#ffffff" },
            { role: "Project Manager", name: "Murendeni Makhado", color: "#e6f7f6", text: "#0d9488" },
            { role: "Safety Officer", name: "Sonele Maramncwa", color: "#e6f7f6", text: "#0d9488" },
            { role: "General Foreman", name: "Liteboho Motuba", color: "#e6f7f6", text: "#0d9488" },
            { role: "Construction Workers", name: "Blue Team", color: "#f3f4f6", text: "#374151" },
          ].map(({ role, name, color, text }) => (
            <div
              key={role}
              style={{
                backgroundColor: color,
                color: text,
                borderRadius: 12,
                padding: "14px 16px",
                fontWeight: 900,
                fontSize: 14,
                textAlign: "center",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div>{role}</div>
              <div style={{ fontWeight: 600, fontSize: 12, marginTop: 4, opacity: 0.8 }}>{name}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 12 }}>
          <a href="/about" style={{ color: "var(--brand)", fontWeight: 900, textDecoration: "none" }}>
            Full organogram →
          </a>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900 }}>Project gallery</h2>
        <p style={{ marginTop: 6, color: "var(--muted)", lineHeight: 1.7 }}>
          Click any photo to view full-screen. Use arrows or your keyboard to navigate.
        </p>

        <div
          style={{
            marginTop: 12,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 12,
          }}
        >
          {projectImages.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setLightboxIndex(idx)}
              className="card"
              style={{
                padding: 0,
                overflow: "hidden",
                borderRadius: 16,
                cursor: "pointer",
                textAlign: "left",
                background: "transparent",
                border: "none",
              }}
              aria-label={`Open image ${idx + 1} in gallery`}
            >
              <div style={{ position: "relative", width: "100%", height: 230 }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 900, color: "var(--ink)" }}>Project {idx + 1}</span>
                <span style={{ color: "var(--muted)", fontWeight: 800, fontSize: 12 }}>View →</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      {isOpen && active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(1100px, 100%)",
              background: "#0b0b0b",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 10,
                padding: "10px 12px",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 900 }}>
                  {(lightboxIndex ?? 0) + 1} / {projectImages.length}
                </span>
                <span style={{ color: "rgba(255,255,255,0.65)", fontWeight: 700, fontSize: 12 }}>
                  Use ← → keys • ESC to close
                </span>
              </div>
              <button
                type="button"
                onClick={close}
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(0,0,0,0.35)",
                  color: "rgba(255,255,255,0.9)",
                  padding: "8px 10px",
                  borderRadius: 12,
                  cursor: "pointer",
                  fontWeight: 900,
                }}
                aria-label="Close preview"
              >
                ✕
              </button>
            </div>

            <div style={{ position: "relative", width: "100%", height: "min(72vh, 720px)" }}>
              <Image
                src={active.src}
                alt={active.alt}
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "contain", background: "#0b0b0b" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 12,
                background: "rgba(255,255,255,0.06)",
              }}
            >
              <button
                type="button"
                onClick={prev}
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(0,0,0,0.35)",
                  color: "rgba(255,255,255,0.9)",
                  padding: "10px 12px",
                  borderRadius: 12,
                  cursor: "pointer",
                  fontWeight: 900,
                }}
                aria-label="Previous image"
              >
                ← Previous
              </button>
              <a
                href={active.src}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 900,
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.25)",
                  paddingBottom: 2,
                }}
              >
                Open original
              </a>
              <button
                type="button"
                onClick={next}
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(0,0,0,0.35)",
                  color: "rgba(255,255,255,0.9)",
                  padding: "10px 12px",
                  borderRadius: 12,
                  cursor: "pointer",
                  fontWeight: 900,
                }}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}