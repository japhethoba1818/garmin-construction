export default function ContactPage() {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/garminconstruction?utm_source=qr&igsh=MWt2N3BxYWdkc3Zxcw==",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            fill="currentColor"
            d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 4.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6Zm0 2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM17.8 6.7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
          />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@garminconstruction?_r=1&_t=ZS-93cEm5xYaQu",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            fill="currentColor"
            d="M16.2 2h-2.4v13.2a2.8 2.8 0 1 1-2.1-2.7V10a5.2 5.2 0 1 0 6.1 5.1V9.4c1.2 1 2.7 1.6 4.3 1.6V8.6c-2 0-3.8-1.2-4.5-3.1-.2-.5-.3-1.1-.3-1.7Z"
          />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/183WxBvKuH/",
      icon: (
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <path
            fill="currentColor"
            d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.6c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.4-.1-2.7-.1-2.7 0-4.6 1.6-4.6 4.6v1.9H7v3.2h2.8V22h3.7Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 34, fontWeight: 800 }}>Contact</h1>

      <div style={{ marginTop: 14, lineHeight: 1.9 }}>
        <p>
          <strong>Tel:</strong> 011 765 0182
        </p>
        <p>
          <strong>Cell / WhatsApp:</strong>{" "}
          <a href="tel:0659668036" style={{ color: "var(--brand)", fontWeight: 800, textDecoration: "none" }}>
            065 966 8036
          </a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@garminconstruction.co.za" style={{ color: "var(--brand)", fontWeight: 800, textDecoration: "none" }}>
            info@garminconstruction.co.za
          </a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:lunga@garminconstruction.co.za" style={{ color: "var(--brand)", fontWeight: 800, textDecoration: "none" }}>
            lunga@garminconstruction.co.za
          </a>
        </p>

        <p style={{ marginTop: 16 }}>
          <strong>Address 1:</strong> 475 Kopanong street Simunye Township 1779
        </p>
        <p>
          <strong>Address 2:</strong> 77 Red-Ivory Street, Lufhereng Doornkop 1724
        </p>
      </div>

      {/* SOCIAL LINKS */}
      <section style={{ marginTop: 18 }}>
        <h2 style={{ margin: "0 0 10px 0", fontSize: 18, fontWeight: 900 }}>Follow us</h2>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${s.name}`}
              title={s.name}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                borderRadius: 14,
                border: "1px solid var(--line)",
                background: "#fff",
                color: "var(--ink)",
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              <span style={{ color: "var(--brand)", display: "inline-flex" }}>{s.icon}</span>
              <span>{s.name}</span>
            </a>
          ))}
        </div>
      </section>

      <div style={{ marginTop: 18 }}>
        <a href="/request-quote" style={{ fontWeight: 900, color: "var(--brand)", textDecoration: "none" }}>
          Request a Quote →
        </a>
      </div>
    </main>
  );
}
