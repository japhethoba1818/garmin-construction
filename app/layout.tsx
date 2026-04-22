import type { Metadata } from "next";
import Image from "next/image";
// @ts-ignore
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
    gap: "10px",
    textDecoration: "none",
    color: "#111111"
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
              <a href="/equipment-hire" style={{ textDecoration: "none", color: "#0d9488", fontWeight: 700 }}>
                Equipment Hire
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
{children}
      <footer style={{ borderTop: "1px solid #eee", padding: "40px 20px", marginTop: "auto" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#666", fontSize: "14px" }}>
            © {new Date().getFullYear()} Garmin Construction. All rights reserved.
          </p>
        </div>
      </footer>
    </body>
  </html>
 );
}