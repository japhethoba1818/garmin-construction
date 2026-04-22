import Link from "next/link";

const equipmentCategories = [
  {
    id: "lawn-garden",
    title: "Lawn & Garden Equipment",
    icon: "🌿",
    items: [
      { name: "Petrol Brush Cutter", daily: "R542.00", weekly: "R2 168.00" },
      { name: "Petrol Blower", daily: "R297.60", weekly: "R1 190.40" },
      { name: "Garden Fork", daily: "R68.10", weekly: "R272.40" },
      { name: "Wheelbarrow", daily: "R97.76", weekly: "R391.04" },
      { name: "Garden Spade", daily: "R68.42", weekly: "R273.68" },
      { name: "Shovel Spade", daily: "R69.44", weekly: "R277.76" },
    ],
  },
  {
    id: "compaction",
    title: "Compaction Equipment",
    icon: "⚙️",
    items: [
      { name: "Plate Compactor (90Kg)", daily: "R357.20", weekly: "R1 428.80" },
      { name: "Rammer (64Kg)", daily: "R436.44", weekly: "R1 745.76" },
    ],
  },
  {
    id: "electric-tools",
    title: "Electric Tools",
    icon: "🔌",
    items: [
      { name: "Mitre Saw", daily: "R410.26", weekly: "R1 641.04" },
      { name: "Jig Saw", daily: "R156.88", weekly: "R627.52" },
      { name: "Angle Grinder (115mm)", daily: "R180.40", weekly: "R721.60" },
      { name: "Angle Grinder (230mm)", daily: "R206.45", weekly: "R825.80" },
    ],
  },
  {
    id: "generators-welding",
    title: "Generators & Welding",
    icon: "⚡",
    items: [
      { name: "Generator 8.5 KVA", daily: "R455.00", weekly: "R1 820.00" },
      { name: "Welding Machine", daily: "R315.88", weekly: "R1 263.52" },
    ],
  },
  {
    id: "building-tools",
    title: "Building Tools",
    icon: "🧱",
    items: [
      { name: "Building Profile (3m)", daily: "R60.52", weekly: "R242.08" },
      { name: "Building Profile (2m)", daily: "R34.30", weekly: "R137.20" },
      { name: "Building Trowel", daily: "R48.00", weekly: "R192.00" },
      { name: "Building Square", daily: "R36.00", weekly: "R144.00" },
      { name: "Builder's Line", daily: "R8.00", weekly: "R32.00" },
      { name: "Corner Block", daily: "R9.25", weekly: "R37.00" },
    ],
  },
  {
    id: "measuring",
    title: "Measuring Tools",
    icon: "📏",
    items: [
      { name: "Laser Tape", daily: "R70.38", weekly: "R281.52" },
      { name: "Measuring Wheel", daily: "R30.42", weekly: "R121.68" },
      { name: "Measuring Tape (30m)", daily: "R25.00", weekly: "R100.00" },
      { name: "Measuring Tape (20m)", daily: "R15.00", weekly: "R60.00" },
      { name: "Measuring Tape (10m)", daily: "R10.00", weekly: "R40.00" },
    ],
  },
  {
    id: "elevated-drilling",
    title: "Elevated Platforms & Drilling",
    icon: "🪜",
    items: [
      { name: "Builder's H/Duty Trestles", daily: "R266.34", weekly: "R1 065.36" },
      { name: "Folding Ladders (6 & 8m)", daily: "R251.74", weekly: "R1 006.96" },
      { name: "Auger", daily: "R730.35", weekly: "R2 921.40" },
      { name: "Hammer (6 pounds)", daily: "R65.00", weekly: "R260.00" },
      { name: "Hammer (4 pounds)", daily: "R43.00", weekly: "R172.00" },
      { name: "Claw Nail Hammer", daily: "R15.60", weekly: "R62.40" },
    ],
  },
  {
    id: "concrete",
    title: "Concrete Equipment",
    icon: "🏗️",
    items: [
      { name: "Power Float (incl. blade)", daily: "R773.91", weekly: "R3 095.64" },
      { name: "Brick Cutter (Petrol)", daily: "R420.00", weekly: "R1 680.00" },
    ],
  },
];

const hireConditions = [
  "Pick-up and drop-off seamless models available for all tools & equipment.",
  "Valid ID and a cash deposit or credit facility is required upfront.",
  "A competent person must be appointed for any tools/equipment requiring such appointment.",
  "All hired tools & equipment must be insured by the customer during hire.",
  "Lost, stolen, or damaged items will be at the customer's cost and must be replaced within 5 days.",
  "All tools & equipment must be operated according to manufacturer guides.",
  "Customer is liable for any extra costs should they fail to honour obligations.",
  "Removal of air filters, safety guards, plugs and other parts is strictly prohibited.",
];

export default function EquipmentHirePage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>

      {/* HERO */}
      <div style={{ marginBottom: 28 }}>
        <p style={{
          fontSize: 12,
          fontWeight: 800,
          color: "#0d9488",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          margin: 0,
        }}>
          Tools & Equipment
        </p>
        <h1 style={{ fontSize: 34, fontWeight: 800, margin: "6px 0 0 0" }}>Equipment Hire</h1>
        <p style={{ marginTop: 10, lineHeight: 1.7, opacity: 0.8, maxWidth: 580 }}>
          Seamless model — Performance & Quality Driven — Robust machinery.
          Pick-up and drop-off available. All prices exclude VAT.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
  <a 
    href="tel:0117650182"
    style={{
      backgroundColor: "#0d9488",
      color: "#fff",
      padding: "10px 18px",
      borderRadius: "10px",
      fontWeight: "800",
      textDecoration: "none",
      fontSize: "14px",
      display: "inline-block"
    }}
  >
    Call: 011 765 0182
  </a>

  <a 
    href="https://wa.me/27659668036"
    target="_blank"
    rel="noreferrer"
    style={{
      border: "2px solid #0d9488",
      color: "#0d9488",
      padding: "10px 18px",
      borderRadius: "10px",
      fontWeight: "800",
      textDecoration: "none",
      fontSize: "14px",
      display: "inline-block"
    }}
  >
    WhatsApp Us →
  </a>
</div>
        </div>
      </div>

      {/* EQUIPMENT CATEGORIES */}
      {equipmentCategories.map((category) => (
        <section key={category.id} style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>
            {category.icon} {category.title}
          </h2>
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 14, overflow: "hidden" }}>
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 120px 120px 130px",
                background: "#f0fdfa",
                borderBottom: "1px solid #e5e7eb",
                padding: "10px 16px",
                fontWeight: 800,
                fontSize: 13,
                color: "#374151",
              }}
            >
              <span>Item</span>
              <span style={{ textAlign: "right" }}>Daily (excl. VAT)</span>
              <span style={{ textAlign: "right" }}>Weekly</span>
              <span style={{ textAlign: "right" }}>Action</span>
            </div>

            {/* Rows */}
            {category.items.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 120px 120px 130px",
                  padding: "12px 16px",
                  borderBottom: i < category.items.length - 1 ? "1px solid #f3f4f6" : "none",
                  alignItems: "center",
                  fontSize: 14,
                }}
              >
                <span style={{ fontWeight: 700, color: "#111" }}>{item.name}</span>
                <span style={{ textAlign: "right", color: "#0d9488", fontWeight: 800 }}>{item.daily}</span>
                <span style={{ textAlign: "right", color: "#6b7280" }}>{item.weekly}</span>
                <div style={{ textAlign: "right" }}>
                  <Link
                    href={`/request-quote?item=${encodeURIComponent(item.name)}&type=hire`}
                    style={{
                      background: "#111",
                      color: "#fff",
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontWeight: 800,
                      textDecoration: "none",
                      fontSize: 12,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Request Hire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* HIRE CONDITIONS */}
      <section style={{ marginTop: 8, marginBottom: 32 }}>
        <h2 style={{ fontSize: 18, fontWeight: 900, marginBottom: 12 }}>Hire Conditions</h2>
        <div style={{ border: "1px solid #e5e7eb", borderRadius: 14, padding: 20, background: "#f9fafb" }}>
          <ol style={{ margin: 0, paddingLeft: 20, display: "grid", gap: 10 }}>
            {hireConditions.map((condition, i) => (
              <li key={i} style={{ lineHeight: 1.7, color: "#374151", fontSize: 14 }}>
                {condition}
              </li>
            ))}
          </ol>
          <p style={{ marginTop: 14, fontSize: 12, color: "#9ca3af" }}>
            All prices exclude VAT. Contact us to confirm availability and arrange pickup/delivery.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "#0d9488",
          borderRadius: 16,
          padding: "24px 20px",
          textAlign: "center",
          marginBottom: 32,
        }}
      >
        <h2 style={{ color: "#fff", fontWeight: 900, fontSize: 22, margin: 0 }}>
          Ready to hire equipment?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.85)", marginTop: 8, lineHeight: 1.7 }}>
          Call or WhatsApp us to check availability and book your equipment.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 16 }}>
  <a 
    href="tel:0659668036"
    style={{
      backgroundColor: "#fff",
      color: "#0d9488",
      padding: "11px 20px",
      borderRadius: "10px",
      fontWeight: "900",
      textDecoration: "none",
      fontSize: "14px",
      display: "inline-block"
    }}
  >
    Call: 065 966 8036
  </a>

  <Link 
    href="/request-quote?type=hire"
    style={{
      border: "2px solid #fff",
      color: "#fff",
      padding: "11px 20px",
      borderRadius: "10px",
      fontWeight: "900",
      textDecoration: "none",
      fontSize: "14px",
      display: "inline-block"
    }}
  >
    Request a Quote →
  </Link>
   </div>
  </section>
 </main>
 );
}