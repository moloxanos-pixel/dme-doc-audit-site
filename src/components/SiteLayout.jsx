import { Link, NavLink } from 'react-router-dom';

const links = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/about', 'About'],
  ['/request-review', 'Request Review'],
];

export default function SiteLayout({ children }) {
  return (
    <div className="site-shell">
      <div className="global-grid" />
      <div className="global-glow global-glow--one" />
      <div className="global-glow global-glow--two" />
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="brand-mark">
            <div className="brand-mark__logo">D</div>
            <div className="brand-mark__copy">
              <strong>DME Records Reviews</strong>
              <span>Documentation review services</span>
            </div>
          </Link>
          <nav className="site-nav">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} className={({ isActive }) => `site-nav__link${isActive ? ' is-active' : ''}`}>
                {label}
              </NavLink>
            ))}
            <Link to="/request-review" className="button site-nav__cta">Secure Upload Request</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="container site-footer__inner">
          <div>
            <strong>DME Records Reviews</strong>
            <p>Professional DME documentation review focused on record readiness, operational clarity, and secure handling.</p>
          </div>
          <div className="site-footer__links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
