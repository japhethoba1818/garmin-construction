export default function AboutPage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 34, fontWeight: 800 }}>About Garmin Construction</h1>
      <p style={{ marginTop: 10, opacity: 0.85 }}>Tangible Difference</p>

      {/* COMPANY BACKGROUND */}
      <section style={{ marginTop: 18, lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900 }}>Company Background</h2>
        <p style={{ marginTop: 8 }}>
          Garmin Construction was established in 2009 (Reg. No. 2009/127892/23) by{" "}
          <strong>Lunga Rasmeni</strong>, the only member of the Close Corporation. The company is{" "}
          <strong>100% black owned</strong>, operating as a close corporation with a footprint in
          Gauteng province and providing services nationwide.
        </p>
        <p style={{ marginTop: 8 }}>
          Services offered include General Building & Civil Works, Grass Cutting & Blowing, and
          Tools & Equipment Hire — under the motto <em>"Tangible Difference"</em>.
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
        <div
          style={{
            marginTop: 12,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 12,
          }}
        >
          {["Respect people", "Deliver high-quality products"].map((value) => (
            <div
              key={value}
              style={{
                background: "rgba(13,148,136,0.06)",
                border: "1px solid #0d9488",
                borderRadius: 12,
                padding: "14px 16px",
                fontWeight: 700,
                color: "#0d9488",
                fontSize: 15,
              }}
            >
              ✓ {value}
            </div>
          ))}
        </div>
      </section>

      {/* REGISTRATIONS */}
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
              <div style={{
                fontSize: 11,
                fontWeight: 800,
                color: "#0d9488",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}>
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
        <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 6 }}>Our Team</h2>
        <p style={{ color: "#6b7280", marginBottom: 24, lineHeight: 1.7 }}>
          Our team structure ensures clear accountability and quality delivery on every project.
        </p>

        {/* Tier 1 — Director */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 0 }}>
          <div style={tierBox("#0d9488", "#ffffff", true)}>
            <div>Director</div>
            <div style={{ fontSize: 13, fontWeight: 700, opacity: 0.85, marginTop: 4 }}>Lunga Rasmeni</div>
          </div>
        </div>

        <div style={connector} />

        {/* Tier 2 — Civil Engineer */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={tierBox("#0f766e", "#ffffff", false)}>
            <div>Civil Engineer</div>
            <div style={{ fontSize: 12, fontWeight: 600, opacity: 0.85, marginTop: 4 }}>Amity Mukombami</div>
          </div>
        </div>

        <div style={connector} />

        {/* Tier 3 — Safety / PM / Foreman */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 12,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          {[
            { role: "Safety Officer", name: "Sonele Maramncwa" },
            { role: "Project Manager", name: "Murendeni Makhado" },
            { role: "General Foreman", name: "Liteboho Motuba" },
          ].map(({ role, name }) => (
            <div key={role} style={tierBox("#e6f7f6", "#0d9488", false)}>
              <div>{role}</div>
              <div style={{ fontSize: 12, fontWeight: 600, opacity: 0.8, marginTop: 4 }}>{name}</div>
            </div>
          ))}
        </div>

        <div style={connector} />

        {/* Tier 4 — Operators + Workers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 12,
            maxWidth: 700,
            margin: "0 auto",
          }}
        >
          {[
            { role: "Brushcutter Operator", name: "Justice Maseko" },
            { role: "Brushcutter Operator", name: "Sbusiso Ximba" },
            { role: "Construction Workers", name: "Blue Team" },
          ].map(({ role, name }, i) => (
            <div key={i} style={tierBox("#f3f4f6", "#374151", false)}>
              <div>{role}</div>
              <div style={{ fontSize: 12, fontWeight: 600, opacity: 0.7, marginTop: 4 }}>{name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        style={{
          marginTop: 36,
          padding: "20px 22px",
          borderRadius: 14,
          background: "#f0fdfa",
          border: "1px solid #0d9488",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 14,
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontWeight: 900, fontSize: 16 }}>Get in touch</div>
          <div style={{ color: "#444", marginTop: 4, lineHeight: 1.7 }}>
            77 Red-Ivory Street, Lufhereng, Joburg 1724<br />
            Tel: 011 765 0182 | Cell: 065 966 8036<br />
            info@garminconstruction.co.za
          </div>
        </div>
        <a 
  href="/contact"
  style={{
    backgroundColor: "#0d9488",
    color: "#fff",
    padding: "11px 20px",
    borderRadius: "10px",
    fontWeight: "900",
    textDecoration: "none",
    fontSize: "14px",
    display: "inline-block"
  }}
>
  Contact Us →
</a>
      </section>
    </main>
  );
}

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