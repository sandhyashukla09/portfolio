import { useState, useEffect } from "react";
import { MdArrowOutward, MdClose, MdCheckCircle } from "react-icons/md";
import { FiEye } from "react-icons/fi";
import "./styles/Work.css";

export interface ProjectData {
  id: string;
  num: string;
  title: string;
  category: string;
  filterKey: string;
  year: string;
  shortDesc: string;
  concept: string;
  deliverables: string[];
  tools: string;
  format: string;
  image: string;
}

const projectsArchive: ProjectData[] = [
  {
    id: "brand-identity-suite",
    num: "01",
    title: "Comprehensive Brand Identity System",
    category: "Brand Identity & Art Direction",
    filterKey: "branding",
    year: "2024",
    shortDesc:
      "A complete brand identity system including primary & secondary logo marks, responsive wordmarks, and precise typography guidelines crafted for visual longevity.",
    concept:
      "Engineered to communicate credibility and high-end visual authority. The mark balances geometric clarity with organic warmth, accompanied by exhaustive vector usage guidelines.",
    deliverables: [
      "Vector Logo Suite (AI, EPS, SVG, PNG)",
      "Primary & Secondary Wordmarks",
      "Typography & Hierarchy System",
      "Comprehensive Brand Guidelines Book",
      "Corporate Stationery & Color Palette",
    ],
    tools: "Adobe Illustrator, Adobe Photoshop",
    format: "Vector Identity Suite & Guidelines",
    image: "/images/project1.png",
  },
  {
    id: "social-media-campaign",
    num: "02",
    title: "Multi-Platform Campaign Design System",
    category: "Social Media & Advertising",
    filterKey: "social",
    year: "2024",
    shortDesc:
      "High-converting promotional creatives, carousel systems, and story layouts designed for unified multi-channel product launch storytelling.",
    concept:
      "Designed with high-contrast color framing and strategic hierarchy to stop scrolling in social feeds, maintaining rigorous typographic alignment across 9:16 and 1:1 aspect ratios.",
    deliverables: [
      "Feed & Story Ad Creatives",
      "Multi-Slide Carousel Templates",
      "Promotional Banner Suite",
      "Engaging Motion-Ready Assets",
    ],
    tools: "Canva Pro, Adobe Photoshop",
    format: "Social Advertising Suite",
    image: "/images/project2.png",
  },
  {
    id: "typographic-poster-series",
    num: "03",
    title: "Experimental Typographic Poster Series",
    category: "Typography & Creative Artwork",
    filterKey: "typography",
    year: "2024",
    shortDesc:
      "Large-format typographic explorations studying Swiss grid discipline, expressive ligature tension, and bold asymmetrical negative space.",
    concept:
      "An artistic exploration of letterforms as architectural shapes. Designed strictly in vector for large-scale exhibition print with micro-detail precision.",
    deliverables: [
      "Large-Format Art Posters (A2 & A3)",
      "High-Resolution Vector Artworks",
      "300 DPI CMYK Print Master Files",
      "Exhibition Display Formats",
    ],
    tools: "Adobe Illustrator",
    format: "Print-Ready Vector Series",
    image: "/images/project3.png",
  },
  {
    id: "product-packaging-design",
    num: "04",
    title: "Consumer Product Packaging & Label System",
    category: "Product & Packaging Design",
    filterKey: "packaging",
    year: "2023",
    shortDesc:
      "Retail-ready packaging design combining shelf visibility, ergonomic labeling hierarchy, fine finish specs, and precision vector dielines.",
    concept:
      "Balancing regulatory product details with minimalist, premium aesthetic appeal. Includes dieline engineering and 3D visualization for manufacturing handoff.",
    deliverables: [
      "Custom Packaging Box Layouts",
      "Die-Cut Labels & Dielines",
      "3D Packaging Visualization Mockups",
      "Foil Stamp & Spot UV Finish Specs",
    ],
    tools: "Adobe Illustrator, Photoshop",
    format: "300 DPI Prepress Dieline",
    image: "/images/project4.png",
  },
  {
    id: "creative-studio-web",
    num: "05",
    title: "Creative Event Studio Web Direction",
    category: "UI/UX & Web Design",
    filterKey: "digital",
    year: "2023",
    shortDesc:
      "Visual direction and responsive web interface for a boutique events studio, fusing editorial photography with intuitive navigational rhythm.",
    concept:
      "Structured to feel like an interactive art gallery. Clean typography, generous whitespace, and responsive mobile architecture that elevates studio credibility.",
    deliverables: [
      "UI Design System & Style Guide",
      "Responsive Desktop & Mobile Layouts",
      "Interactive Prototype & Motion Notes",
      "Visual Asset Production",
    ],
    tools: "Figma, Responsive Design, CSS",
    format: "Interactive UI System",
    image: "/images/project5.png",
  },
  {
    id: "brand-growth-strategy",
    num: "06",
    title: "Brand Storytelling & Content Strategy",
    category: "Digital Marketing & Content",
    filterKey: "social",
    year: "2023",
    shortDesc:
      "Visual branding and structured content architecture developed to scale personal brand authority and maximize organic community engagement.",
    concept:
      "Creating an immediately recognizable visual signature across digital media, matching strategic message scripting with cohesive brand aesthetic guidelines.",
    deliverables: [
      "Branded Content Template Suite",
      "Reel & Video Visual Cover Systems",
      "Visual Storytelling Framework",
      "Audience Growth Asset Guide",
    ],
    tools: "Content Strategy, Canva Pro, Photoshop",
    format: "Digital Brand Asset System",
    image: "/images/project6.png",
  },
];

const categories = [
  { key: "all", label: "All Selected Work" },
  { key: "branding", label: "Brand Identity" },
  { key: "packaging", label: "Packaging" },
  { key: "typography", label: "Typography & Posters" },
  { key: "social", label: "Social & Campaigns" },
  { key: "digital", label: "UI & Web" },
];

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projectsArchive
      : projectsArchive.filter((p) => p.filterKey === activeCategory);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className="work-section" id="work" aria-label="Portfolio Projects">
      <div className="section-container">
        {/* Section Header */}
        <div className="work-header">
          <div className="work-header-main">
            <div className="section-eyebrow">Archive &bull; Selected Works (2021—2026)</div>
            <h2 className="section-title">
              Crafted with intention, <span>curated</span> for impact.
            </h2>
          </div>
          <p className="work-header-desc">
            A selective body of graphic design, brand identity systems, product packaging, and typography projects executed for clients and experimental study.
          </p>
        </div>

        {/* Category Filters */}
        <div className="work-filters-bar" role="tablist" aria-label="Project categories">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.key}
              className={`work-filter-btn ${activeCategory === cat.key ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              <span>{cat.label}</span>
              <span className="filter-count">
                {cat.key === "all"
                  ? projectsArchive.length
                  : projectsArchive.filter((p) => p.filterKey === cat.key).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="work-grid">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`work-card ${idx === 0 && activeCategory === "all" ? "work-card--featured" : ""}`}
            >
              {/* Media Frame */}
              <div
                className="work-media-wrapper"
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
                aria-label={`Open case study preview for ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="work-img"
                  loading="lazy"
                />
                <div className="work-media-overlay">
                  <span className="work-preview-pill">
                    <FiEye /> View Case Study
                  </span>
                </div>
                <span className="work-corner-num">{project.num}</span>
              </div>

              {/* Card Meta Body */}
              <div className="work-card-body">
                <div className="work-card-meta-top">
                  <span className="work-badge-cat">{project.category}</span>
                  <span className="work-badge-year">{project.year}</span>
                </div>

                <h3
                  className="work-project-title"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>

                <p className="work-project-desc">{project.shortDesc}</p>

                {/* Scope Specs */}
                <div className="work-specs-box">
                  <div className="work-spec-row">
                    <span className="spec-label">Format:</span>
                    <span className="spec-value">{project.format}</span>
                  </div>
                  <div className="work-spec-row">
                    <span className="spec-label">Tools:</span>
                    <span className="spec-value">{project.tools}</span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="work-card-action">
                  <button
                    type="button"
                    className="work-case-study-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>Inspect Case Study</span>
                    <MdArrowOutward className="action-arrow" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ==========================================================================
          MODAL: EXPANDED CASE STUDY PREVIEW
          ========================================================================== */}
      {selectedProject && (
        <div
          className="case-modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div
            className="case-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="case-modal-header">
              <div className="case-modal-header-info">
                <span className="modal-category">{selectedProject.category}</span>
                <span className="modal-num">{selectedProject.num} &bull; {selectedProject.year}</span>
              </div>
              <button
                type="button"
                className="case-modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project preview"
              >
                <MdClose />
              </button>
            </div>

            {/* Modal Scroll Body */}
            <div className="case-modal-body">
              {/* Artwork Exhibition Frame */}
              <div className="case-modal-media">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="case-modal-img"
                />
              </div>

              {/* Case Details */}
              <div className="case-modal-info">
                <h3 id="modal-project-title" className="case-modal-title">
                  {selectedProject.title}
                </h3>

                <div className="case-modal-overview">
                  <h4 className="case-subhead">Design Challenge &amp; Concept</h4>
                  <p className="case-concept-text">{selectedProject.concept}</p>
                </div>

                <div className="case-modal-deliverables">
                  <h4 className="case-subhead">Delivered Assets &amp; Specifications</h4>
                  <ul className="modal-deliverables-list">
                    {selectedProject.deliverables.map((item, i) => (
                      <li key={i}>
                        <MdCheckCircle className="deliverable-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="case-modal-meta-grid">
                  <div className="modal-meta-item">
                    <span className="modal-meta-label">Software &amp; Tools</span>
                    <span className="modal-meta-val">{selectedProject.tools}</span>
                  </div>
                  <div className="modal-meta-item">
                    <span className="modal-meta-label">Production Format</span>
                    <span className="modal-meta-val">{selectedProject.format}</span>
                  </div>
                </div>

                {/* Inquiry CTA */}
                <div className="case-modal-cta-box">
                  <div className="case-cta-text">
                    <strong>Interested in similar work?</strong>
                    <span>Let's collaborate on your brand or packaging.</span>
                  </div>
                  <a
                    href="#contact"
                    className="case-modal-inquire-btn"
                    onClick={() => setSelectedProject(null)}
                  >
                    <span>Inquire for Similar Project</span>
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
