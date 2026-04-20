export default function ProjectsPage() {
  const completed = [
    {
      title: "JOSHCO HOUSING (2019)",
      client: "Shomang Construction",
      service: "Face brickworks",
      period: "12 months",
      value: "R203,274.80",
      contact: "011 436 1440 (Mr Ramatapa)",
    },
    {
      title: "43 ETOSHA ESTATE (2024)",
      client: "Xaba family",
      service: "Refurbishment & carport",
      period: "6 weeks",
      value: "R87,000.00",
      contact: "083 299 7405 (Mr Thando Xaba)",
    },
    {
      title: "34 ETOSHA ESTATE (2024)",
      client: "Robinson family",
      service: "Refurbishment & patio",
      period: "4 weeks",
      value: "R94,000.00",
      contact: "082 602 2522 (Mrs Lisa Robinson)",
    },
    {
      title: "TURNKEY PROJECT — HOUSE",
      client: "Mreki Family",
      service: "Full turnkey house build",
      period: "—",
      value: "R284,000.00",
      contact: "073 441 2303 (Dilah)",
    },
    {
      title: "GARAGE CONVERSION — ETOSHA ESTATE 41",
      client: "Mr. Robinson",
      service: "Garage conversion",
      period: "—",
      value: "R112,000.00",
      contact: "072 233 0166 (Mr. Robinson)",
    },
    {
      title: "SCHOOLS RENOVATION",
      client: "GDE Gauteng",
      service: "School buildings renovation",
      period: "—",
      value: "—",
      contact: "GDE Gauteng",
    },
  ];

  const current = {
    title: "LUFHERENG SECONDARY SCHOOL",
    client: "Motheo Construction Group",
    service: "Face brickwork",
    value: "R420,000.00",
    contact: "084 837 4197 / 011 789 8440 (QS Dumile Mgodlo)",
  };

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 34, fontWeight: 800 }}>Projects</h1>
      <p style={{ marginTop: 8, opacity: 0.75, lineHeight: 1.7 }}>
        A record of completed and current construction projects across Gauteng.
      </p>

      {/* CURRENT PROJECT */}
      <section style={{ marginTop: 22 }}>
        <h2 style={{ fontSize: 22, fontWeight: 900 }}>Current Project</h2>
        <div
          style={{
            marginTop: 12,
            border: "2px solid #0d9488",
            borderRadius: 14,
            padding: 16,
            background: "rgba(13,148,136,0.04)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "#0d9488",
              color: "#fff",
              fontSize: 11,
              fontWeight: 900,
              padding: "3px 10px",
              borderRadius: 999,
              marginBottom: 8,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            In Progress
          </div>
          <h3 style={{ fontWeight: 900, margin: 0 }}>{current.title}</h3>
          <div style={{ marginTop: 10, display: "grid", gap: 4, color: "#444", lineHeight: 1.7 }}>
            <p style={{ margin: 0 }}><strong>Client:</strong> {current.client}</p>
            <p style={{ margin: 0 }}><strong>Service:</strong> {current.service}</p>
            <p style={{ margin: 0 }}><strong>Value:</strong> {current.value}</p>
            <p style={{ margin: 0 }}><strong>Contact:</strong> {current.contact}</p>
          </div>
        </div>
      </section>

      {/* COMPLETED PROJECTS */}
      <section style={{ marginTop: 28 }}>
        <h2 style={{ fontSize: 22, fontWeight: 900 }}>Completed Projects</h2>
        <div style={{ marginTop: 12, display: "grid", gap: 12 }}>
          {completed.map((p) => (
            <div
              key={p.title}
              style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}
            >
              <h3 style={{ fontWeight: 900, margin: 0 }}>{p.title}</h3>
              <div style={{ marginTop: 10, display: "grid", gap: 4, color: "#444", lineHeight: 1.7 }}>
                <p style={{ margin: 0 }}><strong>Client:</strong> {p.client}</p>
                <p style={{ margin: 0 }}><strong>Service:</strong> {p.service}</p>
                {p.period !== "—" && (
                  <p style={{ margin: 0 }}><strong>Period:</strong> {p.period}</p>
                )}
                {p.value !== "—" && (
                  <p style={{ margin: 0 }}><strong>Value:</strong> {p.value}</p>
                )}
                {p.contact !== "—" && (
                  <p style={{ margin: 0 }}><strong>Contact:</strong> {p.contact}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TOTAL VALUE STRIP */}
      <section
        style={{
          marginTop: 24,
          padding: "14px 18px",
          borderRadius: 14,
          background: "#f9fafb",
          border: "1px solid #e5e7eb",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontSize: 12, fontWeight: 800, color: "#0d9488", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Total Project Portfolio Value
          </div>
          <div style={{ fontSize: 22, fontWeight: 900, marginTop: 2 }}>R1,370,274+</div>
        </div>
        
          href="/request-quote"
          style={{
            padding: "11px 18px",
            borderRadius: 12,
            background: "#111",
            color: "#fff",
            fontWeight: 800,
            textDecoration: "none",
            fontSize: 14,
          }}
      
          Request a Quote →
        </a>
      </section>
    </main>
  );
}
