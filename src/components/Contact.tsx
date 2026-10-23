import { useState, FormEvent } from "react";
import {
  MdArrowOutward,
  MdContentCopy,
  MdCheck,
  MdMailOutline,
  MdPhone,
  MdArrowUpward,
} from "react-icons/md";
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaBehance } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Brand Identity Design",
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("shuklasandhya09@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate inquiry dispatch and create mailto fallback
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Sandhya,\n\nMy name is ${formData.name} (${formData.email}).\nI am interested in collaborating on: ${formData.service}.\n\nProject Details:\n${formData.message}\n`
    );
    window.location.href = `mailto:shuklasandhya09@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="contact-section" id="contact" aria-label="Contact and Inquiries">
      <div className="section-container">
        {/* Main Contact Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Inquiries & Socials */}
          <div className="contact-info-col">
            <div className="section-eyebrow">Collaboration &bull; Inquiries</div>
            <h2 className="contact-headline">
              Let's create something <span>iconic</span> together.
            </h2>
            <p className="contact-lead-text">
              Have an upcoming brand launch, packaging redesign, or creative commission? I am currently accepting select new projects for 2026.
            </p>

            {/* Direct Email Card with One-Click Copy */}
            <div className="contact-card email-card">
              <div className="contact-card-icon">
                <MdMailOutline />
              </div>
              <div className="contact-card-content">
                <span className="contact-card-label">Direct Email</span>
                <a href="mailto:shuklasandhya09@gmail.com" className="contact-card-value">
                  shuklasandhya09@gmail.com
                </a>
              </div>
              <button
                type="button"
                className={`copy-email-btn ${copiedEmail ? "copied" : ""}`}
                onClick={handleCopyEmail}
                aria-label="Copy email address to clipboard"
                title="Copy to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <MdCheck /> <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <MdContentCopy /> <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Phone & WhatsApp Bar */}
            <div className="contact-quick-bar">
              <a href="tel:+919826385094" className="quick-contact-pill">
                <MdPhone className="pill-icon" />
                <span>+91 98263 85094</span>
              </a>
              <a
                href="https://wa.me/919826385094"
                target="_blank"
                rel="noopener noreferrer"
                className="quick-contact-pill whatsapp-pill"
              >
                <FaWhatsapp className="pill-icon" />
                <span>Chat on WhatsApp</span>
                <MdArrowOutward />
              </a>
            </div>

            {/* Social Network Channels */}
            <div className="contact-socials-group">
              <span className="socials-group-label">Follow &amp; Network</span>
              <div className="social-links-grid">
                <a
                  href="https://www.behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-tile"
                  aria-label="Sandhya Shukla on Behance"
                >
                  <FaBehance className="social-tile-icon" />
                  <span className="social-tile-name">Behance</span>
                  <MdArrowOutward className="social-tile-arrow" />
                </a>

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-tile"
                  aria-label="Sandhya Shukla on LinkedIn"
                >
                  <FaLinkedinIn className="social-tile-icon" />
                  <span className="social-tile-name">LinkedIn</span>
                  <MdArrowOutward className="social-tile-arrow" />
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-tile"
                  aria-label="Sandhya Shukla on Instagram"
                >
                  <FaInstagram className="social-tile-icon" />
                  <span className="social-tile-name">Instagram</span>
                  <MdArrowOutward className="social-tile-arrow" />
                </a>
              </div>
            </div>

            {/* Timezone & Studio Meta */}
            <div className="studio-availability-badge">
              <span className="studio-clock-dot" />
              <span>India Standard Time (IST) &bull; Working with clients across North America, Europe &amp; Asia</span>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="contact-form-col">
            <div className="inquiry-form-card">
              <h3 className="inquiry-form-title">Send a Project Brief</h3>
              <p className="inquiry-form-subtitle">
                Fill in the details below and I will respond within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="form-success-banner">
                  <div className="success-icon-circle">
                    <MdCheck />
                  </div>
                  <h4>Thank you! Inquiry initiated.</h4>
                  <p>
                    Your email client should have opened with your project brief. If not, feel free to email me directly at{" "}
                    <a href="mailto:shuklasandhya09@gmail.com">shuklasandhya09@gmail.com</a>.
                  </p>
                  <button
                    type="button"
                    className="reset-form-btn"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="inquiry-form" onSubmit={handleSubmit}>
                  <div className="form-field-group">
                    <label htmlFor="inquiry-name" className="form-label">
                      Your Name / Company *
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      placeholder="e.g. Jane Doe &bull; Studio Alpha"
                      className="form-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="inquiry-email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      placeholder="e.g. jane@company.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="inquiry-service" className="form-label">
                      Primary Service Needed *
                    </label>
                    <select
                      id="inquiry-service"
                      className="form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="Brand Identity Design">Brand Identity &amp; Logo System</option>
                      <option value="Product Packaging & Label">Product Packaging &amp; Dielines</option>
                      <option value="Typographic Poster / Print">Typography &amp; Editorial Print</option>
                      <option value="Social Media Campaign Design">Social Media &amp; Campaign Collateral</option>
                      <option value="Web & UI/UX Direction">Web &amp; UI/UX Visual Direction</option>
                      <option value="Other Creative Project">Other Creative Commission</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="inquiry-message" className="form-label">
                      Project Scope &amp; Timeline *
                    </label>
                    <textarea
                      id="inquiry-message"
                      required
                      rows={4}
                      placeholder="Tell me about your brand, goals, target audience, and expected deadlines..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="form-submit-btn">
                    <span>Send Project Inquiry</span>
                    <MdArrowOutward />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Studio Sub-Footer */}
        <div className="contact-bottom-footer">
          <div className="footer-credits">
            <span className="footer-name">SANDHYA SHUKLA</span>
            <span className="footer-dot">&bull;</span>
            <span className="footer-copy">&copy; 2026 Sandhya Shukla. All Rights Reserved.</span>
          </div>

          <div className="footer-actions">
            <span className="footer-tagline">Crafted with Graphic Precision</span>
            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <MdArrowUpward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
