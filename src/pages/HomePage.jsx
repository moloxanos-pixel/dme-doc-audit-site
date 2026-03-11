import hero from "../assets/hero-team.png";

export default function HomePage() {
  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px 80px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              background: "#dbeafe",
              color: "#1d4ed8",
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            AI-assisted + human-reviewed
          </div>

          <h1 style={{ fontSize: "40px", lineHeight: 1.1, marginTop: "20px", marginBottom: "16px" }}>
            DME documentation review built for speed, clarity, and trust
          </h1>

          <p style={{ marginTop: "20px", color: "#475569", fontSize: "18px", lineHeight: 1.6, maxWidth: "580px" }}>
            Review records before submission, catch documentation issues early,
            and improve DME readiness with a streamlined clinical review workflow.
          </p>

          <div style={{ display: "flex", gap: "12px", marginTop: "28px", flexWrap: "wrap" }}>
            <a
              href="/request-audit"
              style={{
                background: "#2563eb",
                color: "#ffffff",
                padding: "12px 20px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Request Review
            </a>
            <a
              href="mailto:Moloxanos@gmail.com"
              style={{
                border: "1px solid #cbd5e1",
                color: "#0f172a",
                padding: "12px 20px",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Contact Moloxanos
            </a>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src={hero}
            alt="DME review team illustration"
            style={{ maxWidth: "420px", width: "100%", height: "auto", display: "inline-block" }}
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginTop: "60px",
        }}
      >
        <div style={{ background: "#f8fafc", borderRadius: "14px", padding: "24px", textAlign: "center" }}>
          <div style={{ fontSize: "32px", fontWeight: 800 }}>5000+</div>
          <div style={{ marginTop: "6px", color: "#475569" }}>records sent to insurance</div>
        </div>
        <div style={{ background: "#f8fafc", borderRadius: "14px", padding: "24px", textAlign: "center" }}>
          <div style={{ fontSize: "32px", fontWeight: 800 }}>2%</div>
          <div style={{ marginTop: "6px", color: "#475569" }}>medical necessity issues</div>
        </div>
        <div style={{ background: "#f8fafc", borderRadius: "14px", padding: "24px", textAlign: "center" }}>
          <div style={{ fontSize: "32px", fontWeight: 800 }}>8%</div>
          <div style={{ marginTop: "6px", color: "#475569" }}>administrative issues</div>
        </div>
        <div style={{ background: "#f8fafc", borderRadius: "14px", padding: "24px", textAlign: "center" }}>
          <div style={{ fontSize: "32px", fontWeight: 800 }}>$0.85</div>
          <div style={{ marginTop: "6px", color: "#475569" }}>per medical record</div>
        </div>
      </div>
    </main>
  );
}
