import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garmin Construction",
  description: "Garmin Construction - Tangible Difference. Building and civil works.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ borderBottom: "1px solid #eee", backgroundColor: "#ffffff" }}>
          <nav
            style={{
              maxWidth: 980,
              margin: "0 auto",
              padding: "14px 24px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 14,
            }}
          >
            <a
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
                color: "#111111",
              }}
            >
              <Image
                src="/images/logo.jpeg"
                alt="Garmin Construction logo"
                width={34}
                height={34}
                priority
              />
              <span style={{ fontWeight: 900 }}>Garmin Construction</span>
            </a>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/services" style={{ textDecoration: "none", color: "#111111", fontWeight: 700 }}>
                Services
              </a>
              <a href="/projects" style={{ textDecoration: "none", color: "#111111", fontWeight: 700 }}>
                Projects
              </a>
              <a href="/about" style={{ textDecoration: "none", color: "#111111", fontWeight: 700 }}>
                About
              </a>
              <a href="/request-quote" style={{ textDecoration: "none", color: "#111111", fontWeight: 700 }}>
                Request a Quote
              </a>
              <a href="/contact" style={{ textDecoration: "none", color: "#111111", fontWeight: 700 }}>
                Contact
              </a>
            </div>
          </nav>
        </header>

        <main style={{ minHeight: "calc(100vh - 70px)" }}>{children}</main>

        <a
          href="https://wa.me/27659668036?text=Hi%20Garmin%20Construction%2C%20I%20would%20like%20a%20quote."
          target="_blank"
          rel="noreferrer"
          style={{
            position: "fixed",
            right: 18,
            bottom: 18,
            backgroundColor: "#111111",
            color: "#ffffff",
            padding: "12px 14px",
            borderRadius: 999,
            fontWeight: 800,
            textDecoration: "none",
            boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            zIndex: 9999,
          }}
        >
          WhatsApp Us
        </a>
      </body>
    </html>
  );
}