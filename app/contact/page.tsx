export default function ContactPage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 34, fontWeight: 800 }}>Contact</h1>

      <div style={{ marginTop: 14, lineHeight: 1.9 }}>
        <p><strong>Tel:</strong> 011 931 0644</p>
        <p><strong>Cell / WhatsApp:</strong> 065 966 8036</p>
        <p><strong>Email:</strong> info@garminconstruction.co.za</p>
        <p><strong>Email:</strong> lunga@garminconstruction.co.za</p>

        <p style={{ marginTop: 16 }}>
          <strong>Address 1:</strong> 4030 Apricot Crescent, Thubelisha Greenvillage, Soweto
        </p>
        <p>
          <strong>Address 2:</strong> 77 Red-Ivory Street, Lufhereng Doornkop 1724
        </p>
      </div>

      <div style={{ marginTop: 18 }}>
        <a href="/request-quote" style={{ fontWeight: 800, textDecoration: "none" }}>
          Request a Quote →
        </a>
      </div>
    </main>
  );
}