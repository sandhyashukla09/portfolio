import { useState } from "react";
import { MdArrowOutward, MdChevronRight } from "react-icons/md";
import "./styles/WhatIDo.css";

interface ServiceItem {
  number: string;
  category: string;
  headline: string;
  summary: string;
  deliverables: string[];
  tools: string[];
}

const servicesData: ServiceItem[] = [
  {
    number: "01",
    category: "Brand Identity & Art Direction",
    headline: "Distinctive Visual Identities & Brand Systems",
    summary:
      "Crafting memorable brand identities from core concepts to comprehensive design systems. Built to establish immediate recognition, trust, and distinction across all mediums.",
    deliverables: [
      "Vector Logo Suite (Primary, Secondary, Monogram)",
      "Comprehensive Brand Guidelines",
      "Typography & Color Hierarchy Systems",
      "Stationery & Collateral Design",
      "Iconography & Vector Asset Libraries",
    ],
    tools: ["Adobe Illustrator", "Photoshop", "InDesign", "Vector Suite"],
  },
  {
    number: "02",
    category: "Packaging & Print Production",
    headline: "Product Packaging & Editorial Artwork",
    summary:
      "Tangible design that commands shelf presence. Combining ergonomic label hierarchies, fine material considerations, and precision print-ready vector dielines.",
    deliverables: [
      "Consumer Product Packaging & Boxes",
      "Label Architecture & Die-Cut Specs",
      "Experimental Typographic Posters",
      "Editorial Books & Publications",
      "300 DPI Prepress & CMYK Separation",
    ],
    tools: ["Adobe Illustrator", "Photoshop", "Dieline Prepress", "Print Standards"],
  },
  {
    number: "03",
    category: "Digital Graphics & Campaigns",
    headline: "Campaign Creative & Visual Storytelling",
    summary:
      "High-impact digital artwork engineered for multi-platform campaigns. Ensuring brand coherence across social media, digital advertising, and responsive web touchpoints.",
    deliverables: [
      "Campaign Art Direction & Key Visuals",
      "Social Media Content Systems & Templates",
      "Promotional Banners & Launch Creatives",
      "Visual Storytelling Assets",
      "UI/UX Concept & Design Systems",
    ],
    tools: ["Figma", "Canva Pro", "Photoshop", "Digital Layouts"],
  },
];

const WhatIDo = () => {
  const [activeService, setActiveService] = useState<number>(0);

  return (
    <section className="services-section" id="services" aria-label="Services & Capabilities">
      <div className="section-container">
        <div className="services-header-row">
          <div>
            <div className="section-eyebrow">Capabilities &bull; Studio Offerings</div>
            <h2 className="section-title">
              Disciplined craft for <span>bold</span> brands.
            </h2>
          </div>
          <p className="services-intro-text">
            Every engagement is approached with strategic depth and uncompromising visual standards. From initial concept explorations to final vector delivery.
          </p>
        </div>

        {/* Services Accordion / Grid */}
        <div className="services-dossier-grid">
          {servicesData.map((service, index) => {
            const isOpen = activeService === index;
            return (
              <div
                key={service.number}
                className={`service-card ${isOpen ? "service-card--active" : ""}`}
                onClick={() => setActiveService(index)}
              >
                <div className="service-card-top">
                  <div className="service-num-wrap">
                    <span className="service-num">{service.number}</span>
                    <span className="service-category">{service.category}</span>
                  </div>
                  <button
                    type="button"
                    className="service-expand-btn"
                    aria-label={`Toggle ${service.category}`}
                  >
                    <MdChevronRight className="expand-chevron" />
                  </button>
                </div>

                <h3 className="service-headline">{service.headline}</h3>
                <p className="service-summary">{service.summary}</p>

                {/* Expanded Details */}
                <div className="service-details-panel">
                  <div className="service-deliverables">
                    <h4 className="service-subhead">Core Deliverables</h4>
                    <ul className="service-deliverables-list">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx}>
                          <span className="bullet-dash">&mdash;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-tools-wrap">
                    <h4 className="service-subhead">Tools &amp; Standards</h4>
                    <div className="service-tools-tags">
                      {service.tools.map((tool) => (
                        <span key={tool} className="service-tool-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="service-card-footer">
                  <a href="#contact" className="service-inquire-link">
                    <span>Inquire for {service.category.split(" ")[0]}</span>
                    <MdArrowOutward />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
