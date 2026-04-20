export default function AboutPage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 34, fontWeight: 800 }}>About Garmin Construction</h1>
      <p style={{ marginTop: 10, opacity: 0.85 }}>Tangible Difference</p>

      {/* COMPANY BACKGROUND */}
      <section style={{ marginTop: 18, lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900 }}>Company Background</h2>
        <p style={{ marginTop: 8 }}>
          Garmin Construction was established in 2009 (Reg. No. 2009/127892/23) by Lunga Rasmeni
          (only member of the Close Corporation). The company is 100% black owned, with a footprint
          in Gauteng province and services provided nationwide.
        </p>
      </section>

      {/* VISION */}
      <section style={{ marginTop: 18, lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900 }}>Vision</h2>
        <p style={{ marginTop: 8 }}>
          To be a preferred building and civil work service company, and a community philanthropic
          entity in the Republic.
        </p>
      </section>

      {/* CORE VALUES */}
      <section style={{ marginTop: 18, lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900 }}>Core Values</h2>
        <ul style={{ marginTop: 8 }}>
          <li>Respect people</li>
          <li>Deliver high-quality products</li>
        </ul>
      </section>

      {/* COMPANY DETAILS GRID */}
      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 14 }}>
          Registrations & Affiliations
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 12,
          }}
        >
          {[
            { label: "Registration No.", value: "2009/127892/23" },
            { label: "TCS Number", value: "9932056154" },
            { label: "CIDB", value: "GB; CE & SH – 10047671" },
            { label: "NHBRC", value: "3000252906" },
            { label: "Public Liability", value: "OT115608992" },
            { label: "Established", value: "2009" },
            { label: "Ownership", value: "100% Black Owned" },
            { label: "Province", value: "Gauteng (nationwide)" },
            { label: "Address", value: "77 Red-Ivory St, Lufhereng, Joburg 1724" },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: "12px 14px",
                backgroundColor: "#fafafa",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 800, color: "#0d9488", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {label}
              </div>
              <div style={{ marginTop: 4, fontWeight: 700, fontSize: 14, color: "#111" }}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ORGANOGRAM */}
      <section style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 6 }}>Organogram</h2>
        <p style={{ color: "#6b7280", marginBottom: 20, lineHeight: 1.7 }}>
          Our team structure ensures clear accountability and quality delivery on every project.
        </p>

        {/* Tier 1 — Director */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 0 }}>
          <div style={tierBox("#0d9488", "#ffffff", true)}>Director</div>
        </div>

        {/* Connector */}
        <div style={connector} />

        {/* Tier 2 — Civil Engineer */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={tierBox("#0f766e", "#ffffff", false)}>Civil Engineer</div>
        </div>

        {/* Connector */}
        <div style={connector} />

        {/* Horizontal line spanning tier 3 */}
        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: 2,
              backgroundColor: "#d1d5db",
            }}
          />
        </div>

        {/* Tier 3 — Safety / PM / Foreman */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 12,
            marginTop: 18,
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {["Safety Officer", "Project Manager", "General Foreman"].map((role) => (
            <div key={role} style={tierBox("#e6f7f6", "#0d9488", false)}>
              {role}
            </div>
          ))}
        </div>

        {/* Connector */}
        <div style={connector} />

        {/* Tier 4 — Operators + Workers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 12,
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {["Brushcutter Operator", "Brushcutter Operator", "Construction Workers"].map(
            (role, i) => (
              <div key={i} style={tierBox("#f3f4f6", "#374151", false)}>
                {role}
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
}

// ── Helpers ──────────────────────────────────────────────────

const connector: React.CSSProperties = {
  width: 2,
  height: 28,
  backgroundColor: "#d1d5db",
  margin: "0 auto",
};

function tierBox(bg: string, color: string, large: boolean): React.CSSProperties {
  return {
    backgroundColor: bg,
    color,
    borderRadius: 12,
    padding: large ? "16px 28px" : "12px 16px",
    fontWeight: 900,
    fontSize: large ? 16 : 14,
    textAlign: "center",
    border: "1px solid rgba(0,0,0,0.07)",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  };
}
