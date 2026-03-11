import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RequestAuditPage from "./pages/RequestAuditPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", color: "#0f172a", fontFamily: "Arial, sans-serif" }}>
      <header style={{ padding: "20px 32px", borderBottom: "1px solid #e5e7eb" }}>
        <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <Link to="/" style={{ textDecoration: "none", color: "#0f172a", fontWeight: 700 }}>Home</Link>
          <Link to="/request-audit" style={{ textDecoration: "none", color: "#0f172a", fontWeight: 700 }}>Request Review</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/request-audit" element={<RequestAuditPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </div>
  );
}
