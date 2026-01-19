export default function AboutPage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 34, fontWeight: 800 }}>About Garmin Construction</h1>
      <p style={{ marginTop: 10, opacity: 0.85 }}>
        Tangible Difference
      </p>

      <section style={{ marginTop: 18, lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900 }}>Company Background</h2>
        <p style={{ marginTop: 8 }}>
          Garmin Construction was established in 2009 (Reg. No. 2009/127892/23) by Lunga Rasmeni (only member of the Close Corporation).
          The company is 100% black owned and has completed projects working with Chandiro Chahumba group in a JV.
        </p>
      </section>

      <section style={{ marginTop: 18, lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900 }}>Vision</h2>
        <p style={{ marginTop: 8 }}>
          To be a preferred building and civil work service company, and a community philanthropic entity in the Republic.
        </p>
      </section>

      <section style={{ marginTop: 18, lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900 }}>Core Values</h2>
        <ul style={{ marginTop: 8 }}>
          <li>Respect people</li>
          <li>Deliver high-quality products</li>
        </ul>
      </section>

      <section style={{ marginTop: 18, lineHeight: 1.8 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900 }}>Registrations & Affiliations</h2>
        <ul style={{ marginTop: 8 }}>
          <li>Reg. No: 2009/127892/23</li>
          <li>TCS: 9932056154</li>
          <li>NHBRC: 3000252906</li>
          <li>Public Liability: OT115608992</li>
          <li>CIDB Registered</li>
        </ul>
      </section>
    </main>
  );
}