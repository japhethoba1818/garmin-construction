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
  ];

  const current = {
    title: "LUFHERENG SECONDARY SCHOOL",
    client: "Motheo Construction Group",
    service: "Face brickwork",
    value: "Estimated R350,000",
    contact: "084 837 4197 / 011 789 8440 (QS Dumile Mgodlo)",
  };

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 34, fontWeight: 800 }}>Projects</h1>

      <section style={{ marginTop: 18 }}>
        <h2 style={{ fontSize: 22, fontWeight: 900 }}>Completed Projects</h2>

        <div style={{ marginTop: 12, display: "grid", gap: 12 }}>
          {completed.map((p) => (
            <div key={p.title} style={{ border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
              <h3 style={{ fontWeight: 900 }}>{p.title}</h3>
              <p>Client: {p.client}</p>
              <p>Service: {p.service}</p>
              <p>Period: {p.period}</p>
              <p>Value: {p.value}</p>
              <p>Contact: {p.contact}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 22 }}>
        <h2 style={{ fontSize: 22, fontWeight: 900 }}>Current Project</h2>

        <div style={{ marginTop: 12, border: "1px solid #e5e5e5", borderRadius: 14, padding: 16 }}>
          <h3 style={{ fontWeight: 900 }}>{current.title}</h3>
          <p>Client: {current.client}</p>
          <p>Service: {current.service}</p>
          <p>Value: {current.value}</p>
          <p>Contact: {current.contact}</p>
        </div>
      </section>
    </main>
  );
}