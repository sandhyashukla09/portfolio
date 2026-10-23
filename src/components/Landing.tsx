import { useState } from "react";
import { MdArrowDownward, MdArrowOutward } from "react-icons/md";
import { FiCheckCircle } from "react-icons/fi";
import "./styles/Landing.css";

const featuredHighlights = [
  {
    id: "identity",
    title: "Brand Identity Design",
    category: "Visual Identity System",
    image: "/images/project1.png",
    highlight: "Logo Suite • Guidelines • Vector Assets",
  },
  {
    id: "typography",
    title: "Typographic Poster Series",
    category: "Experimental Editorial",
    image: "/images/project3.png",
    highlight: "Custom Letterforms • Print Ready A2/A3",
  },
  {
    id: "packaging",
    title: "Product Packaging Design",
    category: "Consumer Packaging",
    image: "/images/project4.png",
    highlight: "Dieline Precision • Label Architecture",
  },
];

const Landing = () => {
  const [activeHighlight, setActiveHighlight] = useState(0);

  return (
    <section className="hero-section" id="hero" aria-label="Introduction">
      {/* Subtle graphic background grid */}
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="hero-container section-container">
        <div className="hero-layout">
          {/* Left Column: Typographic & Editorial Core */}
          <div className="hero-content">
            <div className="hero-eyebrow-pill">
              <span className="hero-dot" />
              <span className="hero-eyebrow-text">
                Available for Commissions &bull; Worldwide
              </span>
            </div>

            <h1 className="hero-headline">
              <span className="hero-firstname">SANDHYA</span>
              <span className="hero-lastname">SHUKLA</span>
            </h1>

            <div className="hero-title-lockup">
              <h2 className="hero-role">Graphic Designer &amp; Visual Storyteller</h2>
              <p className="hero-statement">
                Crafting thoughtful visual identities, expressive typography, and packaging systems that command attention and elevate brand presence.
              </p>
            </div>

            {/* Call to Actions */}
            <div className="hero-actions">
              <a href="#work" className="hero-btn-primary">
                <span>Explore Selected Work</span>
                <MdArrowDownward className="hero-btn-icon" />
              </a>
              <a href="#contact" className="hero-btn-secondary">
                <span>Let's Collaborate</span>
                <MdArrowOutward className="hero-btn-icon" />
              </a>
            </div>

            {/* Core Competencies */}
            <div className="hero-disciplines">
              <span className="hero-disciplines-label">Core Focus:</span>
              <div className="hero-disciplines-list">
                <span className="discipline-tag">Brand Identity</span>
                <span className="discipline-tag">Logo Systems</span>
                <span className="discipline-tag">Typography</span>
                <span className="discipline-tag">Packaging</span>
                <span className="discipline-tag">Social Campaigns</span>
              </div>
            </div>
          </div>

          {/* Right Column: Featured Real Artwork Showcase */}
          <div className="hero-preview-column">
            <div className="hero-showcase-card">
              <div className="showcase-card-header">
                <div className="showcase-indicator">
                  <span className="showcase-badge">Featured Showcase</span>
                  <span className="showcase-counter">0{activeHighlight + 1} / 0{featuredHighlights.length}</span>
                </div>
                <div className="showcase-pills">
                  {featuredHighlights.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`showcase-pill-btn ${idx === activeHighlight ? "active" : ""}`}
                      onClick={() => setActiveHighlight(idx)}
                      aria-label={`View ${item.title}`}
                    >
                      {item.id}
                    </button>
                  ))}
                </div>
              </div>

              {/* Artwork Frame */}
              <div className="showcase-media-frame">
                <img
                  src={featuredHighlights[activeHighlight].image}
                  alt={featuredHighlights[activeHighlight].title}
                  className="showcase-image"
                  loading="eager"
                />
                <div className="showcase-media-overlay">
                  <span className="showcase-media-cat">
                    {featuredHighlights[activeHighlight].category}
                  </span>
                  <h3 className="showcase-media-title">
                    {featuredHighlights[activeHighlight].title}
                  </h3>
                </div>
              </div>

              {/* Showcase Card Footer */}
              <div className="showcase-card-footer">
                <div className="showcase-feature-info">
                  <FiCheckCircle className="showcase-check-icon" />
                  <span className="showcase-feature-text">
                    {featuredHighlights[activeHighlight].highlight}
                  </span>
                </div>
                <a href="#work" className="showcase-view-link">
                  <span>View in archive</span>
                  <MdArrowOutward />
                </a>
              </div>
            </div>

            {/* Micro studio credentials badge */}
            <div className="hero-credentials">
              <div className="credential-item">
                <span className="credential-num">100%</span>
                <span className="credential-label">Vector Quality &amp; Precision</span>
              </div>
              <div className="credential-separator" />
              <div className="credential-item">
                <span className="credential-num">300 DPI</span>
                <span className="credential-label">Print Production Rigor</span>
              </div>
              <div className="credential-separator" />
              <div className="credential-item">
                <span className="credential-num">Global</span>
                <span className="credential-label">Remote Client Partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
