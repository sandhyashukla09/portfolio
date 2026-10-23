import { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";
import "./styles/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Selected Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="site-header-inner section-container">
        {/* Brand identity */}
        <a href="#" className="brand-logo" aria-label="Sandhya Shukla Portfolio Home">
          <span className="brand-name">SANDHYA SHUKLA</span>
          <span className="brand-discipline">Graphic Design Studio</span>
        </a>

        {/* Live status badge */}
        <div className="header-status" title="Currently open for freelance commissions and agency partnerships">
          <span className="status-indicator"></span>
          <span className="status-text">Available for Projects</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.label} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Header Action */}
        <div className="header-actions">
          <a
            href="mailto:shuklasandhya09@gmail.com"
            className="header-cta"
            aria-label="Direct Email Link"
          >
            <span>Let's Talk</span>
            <MdArrowOutward className="cta-icon" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt4 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? "mobile-drawer--open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-top">
            <span className="mobile-drawer-eyebrow">Navigation</span>
            <div className="mobile-status">
              <span className="status-indicator"></span>
              <span>Available for Projects</span>
            </div>
          </div>

          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navLinks.map((link, idx) => (
                <li key={link.label} className="mobile-nav-item">
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="mobile-nav-number">0{idx + 1}</span>
                    <span className="mobile-nav-text">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <p className="mobile-contact-label">Direct Inquiries</p>
            <a
              href="mailto:shuklasandhya09@gmail.com"
              className="mobile-contact-email"
              onClick={() => setMobileMenuOpen(false)}
            >
              shuklasandhya09@gmail.com
            </a>
            <div className="mobile-phone-link">
              <a href="tel:+919826385094">+91 98263 85094</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
