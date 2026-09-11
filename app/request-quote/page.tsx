"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";

const WHATSAPP_NUMBER = "27693116655"; // +27 69 311 6655 (no +, no spaces)

export default function RequestQuotePage() {
  const [services, setServices] = useState<string[]>([]);
  const [size, setSize] = useState("");
  const [workType, setWorkType] = useState("Labour Only");
  const [hireTiming, setHireTiming] = useState("Ready to hire now");
  const [planStatus, setPlanStatus] = useState("Plan approved");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredContact, setPreferredContact] = useState("WhatsApp");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    "Building",
    "Plastering",
    "Ceiling",
    "Garage conversion",
    "Boundary wall",
    "Foundation",
    "2 storeys",
    "Residential flats",
    "Commercial",
    "Painting",
    "Paving",
    "Civil works",
    "Other",
  ];

  function toggleService(s: string) {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !location.trim() || !size.trim() || services.length === 0) {
      alert("Please fill in Name, Phone, Location, Size, and select at least 1 service.");
      return;
    }

    const message =
      `Hi Garmin Construction, I'd like a quote.\n\n` +
      `Service(s): ${services.join(", ")}\n` +
      `Size: ${size}\n` +
      `Work: ${workType}\n` +
      `Hiring: ${hireTiming}\n` +
      `Plan: ${planStatus}\n` +
      `Location: ${location}\n` +
      `Name: ${name}\n` +
      `Contact: ${phone}\n` +
      `Preferred: ${preferredContact}\n` +
      (email.trim() ? `Email: ${email}\n` : "") +
      (notes.trim() ? `Notes: ${notes}\n` : "");

    setIsSubmitting(true);

    // Phase 3: this already saves-then-opens-WhatsApp (from Phase 2's await).
    // This step just makes that visible to the customer via a disabled
    // "Submitting..." button. Failure handling/warning is Phase 4.
    if (supabase) {
      const { error } = await supabase.from("leads").insert({
        name,
        phone,
        location,
        services,
        size,
        work_type: workType,
        hire_timing: hireTiming,
        plan_status: planStatus,
        preferred_contact: preferredContact,
        email: email.trim() || null,
        notes: notes.trim() || null,
        whatsapp_message: message,
        status: "NEW",
      });
      if (error) {
        console.error("Failed to save lead to Supabase:", error);
      }
    } else {
      console.warn("Supabase client not configured — skipping lead save.");
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 20 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>Request a Quote</h1>
      <p style={{ marginTop: 8, opacity: 0.8 }}>
        Fill in the details below. When you submit, WhatsApp will open with your request.
      </p>

      <form onSubmit={handleSubmit} style={{ marginTop: 16, display: "grid", gap: 14 }}>
        <div>
          <label style={{ fontWeight: 600 }}>Types of service you require *</label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 8 }}>
            {serviceOptions.map((s) => (
              <button
                type="button"
                key={s}
                onClick={() => toggleService(s)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 999,
                  border: "1px solid #ccc",
                  background: services.includes(s) ? "#111" : "#fff",
                  color: services.includes(s) ? "#fff" : "#111",
                  cursor: "pointer",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label style={{ fontWeight: 600 }}>How many square metre/metre? *</label>
          <input
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="e.g. 100 m² or 10 m"
            style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 10, marginTop: 6 }}
          />
        </div>

        <div>
          <label style={{ fontWeight: 600 }}>Fit & supply or labour only?</label>
          <select
            value={workType}
            onChange={(e) => setWorkType(e.target.value)}
            style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 10, marginTop: 6 }}
          >
            <option>Fit & Supply</option>
            <option>Labour Only</option>
          </select>
        </div>

        <div>
          <label style={{ fontWeight: 600 }}>Are you ready to hire now?</label>
          <select
            value={hireTiming}
            onChange={(e) => setHireTiming(e.target.value)}
            style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 10, marginTop: 6 }}
          >
            <option>Ready to hire now</option>
            <option>Within a week</option>
            <option>Just exploring</option>
          </select>
        </div>

        <div>
          <label style={{ fontWeight: 600 }}>Plan drawn and approval obtained?</label>
          <select
            value={planStatus}
            onChange={(e) => setPlanStatus(e.target.value)}
            style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 10, marginTop: 6 }}
          >
            <option>Plan approved</option>
            <option>Plan in progress</option>
            <option>No plan yet</option>
          </select>
        </div>

        <hr />

        <div>
          <label style={{ fontWeight: 600 }}>Your name *</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 10, marginTop: 6 }}
          />
        </div>

        <div>
          <label style={{ fontWeight: 600 }}>Phone number *</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. 0781234567"
            style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 10, marginTop: 6 }}
          />
        </div>

        <div>
          <label style={{ fontWeight: 600 }}>Preferred contact method</label>
          <select
            value={preferredContact}
            onChange={(e) => setPreferredContact(e.target.value)}
            style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 10, marginTop: 6 }}
          >
            <option>WhatsApp</option>
            <option>Calls</option>
            <option>Email</option>
          </select>
        </div>

        <div>
          <label style={{ fontWeight: 600 }}>Email (optional)</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@email.com"
            style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 10, marginTop: 6 }}
          />
        </div>

        <div>
          <label style={{ fontWeight: 600 }}>Location *</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Soweto, Johannesburg"
            style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 10, marginTop: 6 }}
          />
        </div>

        <div>
          <label style={{ fontWeight: 600 }}>Message / Notes (optional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Extra details..."
            style={{ width: "100%", padding: 10, border: "1px solid #ccc", borderRadius: 10, marginTop: 6, minHeight: 90 }}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: "12px 14px",
            borderRadius: 12,
            border: "none",
            background: "#111",
            color: "#fff",
            fontWeight: 700,
            cursor: isSubmitting ? "default" : "pointer",
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          {isSubmitting ? "Submitting..." : "Submit & Open WhatsApp"}
        </button>

        <p style={{ fontSize: 13, opacity: 0.7 }}>
          If WhatsApp doesn’t open, make sure you have WhatsApp installed on your phone or use WhatsApp Web.
        </p>
      </form>
    </main>
  );
}
