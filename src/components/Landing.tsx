import "./styles/Landing.css";

const Landing = () => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        {/* Background glow orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-dot" />
            Available for freelance projects
          </div>

          <h2 className="hero-greeting">Hello! I'm</h2>

          <h1 className="hero-name">
            SANDHYA<br />
            <span>SHUKLA</span>
          </h1>

          <h2 className="hero-title">
            Graphic Designer &amp; Visual Storyteller
          </h2>

          <p className="hero-subtitle">
            Creating bold visual identities, impactful designs,<br className="hero-br" />
            and memorable brand experiences.
          </p>

          <div className="hero-actions">
            <a href="#work" className="hero-cta-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a href="#contact" className="hero-cta-secondary">
              Get in Touch
            </a>
          </div>

          <div className="hero-tags">
            <span>Brand Identity</span>
            <span>Logo Design</span>
            <span>Illustration</span>
            <span>Typography</span>
            <span>Social Media</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
