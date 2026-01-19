import Image from "next/image";

export default function Home() {
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
            <h1 style={{ margin: 0, fontSize: 36, fontWeight: 900 }}>
              Garmin Construction
            </h1>
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
          <a className="btnPrimary" href="/request-quote">
            Request a Quote
          </a>
          <a className="btnGhost" href="/services">
            View Services
          </a>
          <a className="btnGhost" href="tel:0659668036">
            Call: 065 966 8036
          </a>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
          <span className="badge">Established 2009</span>
          <span className="badge">CIDB Registered</span>
          <span className="badge">NHBRC: 3000252906</span>
          <span className="badge">TCS: 9932056154</span>
        </div>
      </section>

      {/* QUICK SERVICES */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900 }}>What we do</h2>
        <p style={{ marginTop: 6, color: "var(--muted)", lineHeight: 1.7 }}>
          Core services engineered for durability, neat finishing, and practical value.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, marginTop: 12 }}>
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
      </section>

      {/* FEATURED PROJECTS */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 900 }}>Featured work</h2>
        <p style={{ marginTop: 6, color: "var(--muted)", lineHeight: 1.7 }}>
          A snapshot of completed and current projects.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12, marginTop: 12 }}>
          {[
            ["JOSHCO Housing (2019)", "Face brickworks • 12 months"],
            ["Etosha Estate (2024)", "Refurbishment & patio/carport • 4–6 weeks"],
            ["Lufhereng Secondary School", "Face brickwork • Current project"],
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

      {/* FOOTER */}
      <footer style={{ marginTop: 22, paddingTop: 16, borderTop: "1px solid var(--line)", color: "var(--muted)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
          <div>
            <strong style={{ color: "var(--ink)" }}>Garmin Construction</strong>
            <div>Tangible Difference</div>
          </div>

          <div>
            <div><strong style={{ color: "var(--ink)" }}>Contact</strong></div>
            <div>065 966 8036</div>
            <div>info@garminconstruction.co.za</div>
          </div>

          <div>
            <div><strong style={{ color: "var(--ink)" }}>Locations</strong></div>
            <div>Soweto</div>
            <div>Lufhereng Doornkop</div>
          </div>
        </div>

        <div style={{ marginTop: 10, fontSize: 12 }}>
          Reg. No. 2009/127892/23 • NHBRC 3000252906 • Public Liability OT115608992
        </div>
      </footer>
    </main>
  );
}