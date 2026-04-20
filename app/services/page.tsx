import Link from "next/link";

export default function ServicesPage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 34, fontWeight: 800 }}>Services</h1>
      <p style={{ marginTop: 10, opacity: 0.85, fontSize: 16 }}>
        Services offered viz:
      </p>

      <section style={{ marginTop: 18, display: "grid", gap: 14 }}>
        <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800 }}>Foundations and paving</h2>
          <p style={{ marginTop: 8, lineHeight: 1.7 }}>
            Robust substructures that can withstand dolomitic and quagmire lands.
          </p>
        </div>

        <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800 }}>Brickworks</h2>
          <p style={{ marginTop: 8, lineHeight: 1.7 }}>
            Building robust superstructures.
          </p>
        </div>

        <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800 }}>Plastering</h2>
          <p style={{ marginTop: 8, lineHeight: 1.7 }}>
            Membrane that can withstand harsh weather conditions.
          </p>
        </div>

        <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800 }}>Painting</h2>
          <p style={{ marginTop: 8, lineHeight: 1.7 }}>
            Aesthetic interior and exterior that can inhibit wall and ceiling deterioration.
          </p>
        </div>

        <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800 }}>Garage conversion</h2>
          <p style={{ marginTop: 8, lineHeight: 1.7 }}>
            From stagnant garage space to sanctuary en-suite, valuable goods storage or smart profitable shop or offices.
          </p>
        </div>

        <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800 }}>Residential flats</h2>
          <p style={{ marginTop: 8, lineHeight: 1.7 }}>
            Building conducive residential flats to maximise clients property investment strategy and catalyse "right of access to shelter".
          </p>
        </div>

        <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800 }}>Double storeys</h2>
          <p style={{ marginTop: 8, lineHeight: 1.7 }}>
            Building modern storeys. Building high to circumvent land space expansion limitations.
          </p>
        </div>

        {/* ── NEW: Grass Cutting & Blowing ── */}
        <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800 }}>Grass Cutting & Blowing</h2>
          <p style={{ marginTop: 8, lineHeight: 1.7 }}>
            Professional lawn maintenance and grounds clearing services using petrol brush cutters
            and blowers. Available for residential and commercial properties.
          </p>
        </div>

        {/* ── NEW: Tools & Equipment Hire ── */}
        <div
          style={{
            border: "2px solid #0d9488",
            borderRadius: 14,
            padding: 16,
            background: "rgba(13,148,136,0.04)",
          }}
        >
          <h2 style={{ fontSize: 20, fontWeight: 800, color: "#0d9488" }}>
            Tools & Equipment Hire
          </h2>
          <p style={{ marginTop: 8, lineHeight: 1.7 }}>
            Wide range of construction and garden tools available for daily or weekly hire —
            plate compactors, generators, angle grinders, power floats, brush cutters, ladders,
            welding machines and more. Pick-up and drop-off available.
          </p>
          <Link
            href="/equipment-hire"
            style={{
              display: "inline-block",
              marginTop: 12,
              color: "#0d9488",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            View all hire rates →
          </Link>
        </div>

        {/* ── NEW: FLISP ── */}
        <div style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800 }}>FLISP Assistance</h2>
          <p style={{ marginTop: 8, lineHeight: 1.7 }}>
            We assist qualifying first-time homeowners with the Finance Linked Individual Subsidy
            Programme (FLISP) — from application guidance through to construction delivery.
          </p>
        </div>
      </section>

      <section style={{ marginTop: 24, padding: 16, borderRadius: 14, border: "1px solid #e5e5e5" }}>
        <h2 style={{ fontSize: 20, fontWeight: 900 }}>Accounts, turnkey projects & drawing plans</h2>
        <p style={{ marginTop: 8, lineHeight: 1.7 }}>
          Contact: <strong>065 966 8036</strong> / <strong>lunga@garminconstruction.co.za</strong>
        </p>
      </section>

      <section style={{ marginTop: 24, padding: 16, borderRadius: 14, border: "1px solid #e5e5e5" }}>
        <h2 style={{ fontSize: 20, fontWeight: 900 }}>News / Research</h2>
        <p style={{ marginTop: 8, lineHeight: 1.7 }}>
          Research is based on possibilities of installing fibre on foundations in dolomitic and
          quagmire lands to monitor and early detect substructure foundation risks (cracks, sinking
          & deposition/erosion).
        </p>
      </section>

      <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link
          href="/request-quote"
          style={{
            padding: "12px 16px",
            borderRadius: 12,
            background: "#111",
            color: "#fff",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Request a Quote →
        </Link>
        <Link href="/" style={{ fontWeight: 800, textDecoration: "none" }}>
          Back to Home
        </Link>
      </div>
    </main>
  );
}
