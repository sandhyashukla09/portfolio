import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { DiIllustrator, DiPhotoshop } from "react-icons/di";
import { SiFigma, SiCanva } from "react-icons/si";
import "./styles/About.css";

const About = () => {
  const tools = [
    { name: "Adobe Illustrator", icon: <DiIllustrator />, role: "Vector & Logo Systems" },
    { name: "Adobe Photoshop", icon: <DiPhotoshop />, role: "Digital Imagery & Prepress" },
    { name: "Figma", icon: <SiFigma />, role: "UI Design & Design Systems" },
    { name: "Canva Pro", icon: <SiCanva />, role: "Fast-Turnaround Campaign Creatives" },
  ];

  const pillars = [
    {
      number: "01",
      title: "Conceptual Clarity",
      desc: "Every visual system begins with deep research. No random decoration — every font choice, color pairing, and mark exists to communicate brand value.",
    },
    {
      number: "02",
      title: "Typographic Rigor",
      desc: "Typography is the voice of design. I balance experimental expressive display type with hyper-functional text hierarchies across both print and digital touchpoints.",
    },
    {
      number: "03",
      title: "Production Precision",
      desc: "Flawless technical execution from clean bezier curves and responsive screen layouts to 300 DPI print-ready dielines and comprehensive brand guidelines.",
    },
  ];

  return (
    <section className="about-section" id="about" aria-label="About the Designer">
      <div className="section-container">
        <div className="about-layout">
          {/* Left Column: Portrait & Studio Bio Card */}
          <div className="about-profile-card">
            <div className="profile-image-wrapper">
              <img
                src="/images/female_avatar.png"
                alt="Sandhya Shukla Graphic Designer Portrait"
                className="profile-image"
                loading="lazy"
              />
              <div className="profile-overlay-badge">
                <span className="profile-status-dot"></span>
                <span>Sandhya Shukla &bull; Creative Designer</span>
              </div>
            </div>

            <div className="profile-meta">
              <div className="profile-meta-row">
                <span className="profile-meta-label">Location</span>
                <span className="profile-meta-value">India &bull; Global Remote</span>
              </div>
              <div className="profile-meta-row">
                <span className="profile-meta-label">Specialization</span>
                <span className="profile-meta-value">Brand Identity &amp; Packaging</span>
              </div>
              <div className="profile-meta-row">
                <span className="profile-meta-label">Inquiries</span>
                <a href="mailto:shuklasandhya09@gmail.com" className="profile-meta-link">
                  <span>shuklasandhya09@gmail.com</span>
                  <FiArrowUpRight />
                </a>
              </div>
            </div>

            {/* Core Tools Quick Bar */}
            <div className="profile-tools-section">
              <span className="profile-tools-title">Primary Toolset</span>
              <div className="profile-tools-grid">
                {tools.map((tool) => (
                  <div key={tool.name} className="profile-tool-chip" title={tool.role}>
                    <span className="profile-tool-icon">{tool.icon}</span>
                    <span className="profile-tool-name">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Bio & Pillars */}
          <div className="about-content">
            <div className="section-eyebrow">About &bull; Philosophy</div>
            <h2 className="section-title">
              Visual architecture built for <span>impact</span> and longevity.
            </h2>

            <div className="about-editorial-text">
              <p className="about-lead">
                I am Sandhya Shukla, an independent graphic designer and visual storyteller. I collaborate with ambitious founders, studios, and businesses to build cohesive brand worlds that resonate deeply with audiences.
              </p>
              <p>
                My work spans brand identity design, logo marks, typographic poster artwork, product packaging, and multi-channel campaign collateral. I bridge strategy with creative intuition — crafting visual systems that are as commercially effective as they are aesthetically arresting.
              </p>
            </div>

            {/* Design Pillars */}
            <div className="about-pillars">
              {pillars.map((pillar) => (
                <div key={pillar.number} className="pillar-item">
                  <div className="pillar-header">
                    <span className="pillar-num">{pillar.number}</span>
                    <h3 className="pillar-title">{pillar.title}</h3>
                  </div>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Creative Deliverables Checklist */}
            <div className="about-deliverables-box">
              <h4 className="deliverables-box-title">What you receive when collaborating:</h4>
              <ul className="deliverables-checklist">
                <li><FiCheck className="check-icon" /> Complete vector master suite (.AI, .EPS, .SVG, .PDF)</li>
                <li><FiCheck className="check-icon" /> Exhaustive Brand Guidelines (Color, Typography, Safe Space)</li>
                <li><FiCheck className="check-icon" /> Print-ready 300 DPI dielines &amp; CMYK press files</li>
                <li><FiCheck className="check-icon" /> Scalable digital marketing &amp; social media templates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
