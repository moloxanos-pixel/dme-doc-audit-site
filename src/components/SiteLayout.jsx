import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Request Review", to: "/request-review" },
];

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "site-nav__link is-active" : "site-nav__link"
      }
    >
      {label}
    </NavLink>
  );
}

export default function SiteLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="site-shell">
      <div className="global-glow global-glow--one" />
      <div className="global-glow global-glow--two" />
      <div className="global-grid" />

      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="brand-mark" aria-label="Go to home page">
            <span className="brand-mark__logo">D</span>
            <span className="brand-mark__copy">
              <strong>DME Records Reviews</strong>
              <span>DME documentation audit services</span>
            </span>
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={isMenuOpen ? "site-nav is-open" : "site-nav"}>
            {navItems.map((item) => (
              <NavItem key={item.to} {...item} />
            ))}
            <Link to="/request-review" className="button button--accent site-nav__cta">
              Start secure request
            </Link>
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container">
          <div className="site-footer__panel">
            <div className="site-footer__brand">
              <strong>DME Records Reviews</strong>
              <p>
                Independent DME documentation reviews focused on compliance quality,
                accurate findings, and dependable handoffs for submission teams.
              </p>
              <div className="site-footer__meta">
                <span>Built for compliance-focused operations</span>
                <span>Multi-page React + Vite project</span>
              </div>
            </div>

            <div className="site-footer__links">
              <Link to="/services">Services</Link>
              <Link to="/about">About</Link>
              <Link to="/request-review">Request Review</Link>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-use">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
