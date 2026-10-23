import { useState } from "react";
import {
  SiFigma,
  SiCanva,
  SiHtml5,
  SiTailwindcss,
  SiWebflow,
} from "react-icons/si";
import { DiIllustrator, DiPhotoshop, DiCss3 } from "react-icons/di";
import { TbVectorBezier, TbPalette, TbBox, TbLetterCase, TbLayoutGrid, TbShare } from "react-icons/tb";
import { FiBookOpen, FiLayers } from "react-icons/fi";
import "./styles/TechStack.css";

interface SkillItem {
  name: string;
  category: "tools" | "disciplines" | "web";
  icon: JSX.Element;
  desc: string;
  color: string;
}

const skillsDatabase: SkillItem[] = [
  // ── Core Design Suite ──────────────────────────
  {
    name: "Adobe Illustrator",
    category: "tools",
    icon: <DiIllustrator />,
    desc: "Primary vector engine for logos, icons & typography",
    color: "#ff9a00",
  },
  {
    name: "Adobe Photoshop",
    category: "tools",
    icon: <DiPhotoshop />,
    desc: "Asset retouching, raster manipulation & prepress",
    color: "#31a8ff",
  },
  {
    name: "Figma",
    category: "tools",
    icon: <SiFigma />,
    desc: "UI components, responsive layouts & interactive prototypes",
    color: "#f24e1e",
  },
  {
    name: "Adobe InDesign (Editorial)",
    category: "tools",
    icon: <FiBookOpen />,
    desc: "Multi-page editorial layouts, books & print publications",
    color: "#ff3366",
  },
  {
    name: "Adobe XD",
    category: "tools",
    icon: <FiLayers />,
    desc: "Interface wireframing & presentation flows",
    color: "#ff61f6",
  },
  {
    name: "Canva Pro",
    category: "tools",
    icon: <SiCanva />,
    desc: "Fast-turnaround social media creatives & collateral",
    color: "#00c4cc",
  },

  // ── Graphic Disciplines ─────────────────────────
  {
    name: "Brand Identity Systems",
    category: "disciplines",
    icon: <TbPalette />,
    desc: "Full visual identity, mark architecture & brand manuals",
    color: "#e63917",
  },
  {
    name: "Packaging & Dielines",
    category: "disciplines",
    icon: <TbBox />,
    desc: "Packaging architecture, label dielines & 3D mockups",
    color: "#8b5cf6",
  },
  {
    name: "Typographic Direction",
    category: "disciplines",
    icon: <TbLetterCase />,
    desc: "Font pairing, custom lettering & large-scale posters",
    color: "#0284c7",
  },
  {
    name: "Vector Craftsmanship",
    category: "disciplines",
    icon: <TbVectorBezier />,
    desc: "Precise bezier curves, scalable symbols & icon sets",
    color: "#10b981",
  },
  {
    name: "Social Content Systems",
    category: "disciplines",
    icon: <TbShare />,
    desc: "Campaign templates, story suites & engagement assets",
    color: "#ec4899",
  },
  {
    name: "Editorial Composition",
    category: "disciplines",
    icon: <TbLayoutGrid />,
    desc: "Grid systems, spatial balance & publication design",
    color: "#f59e0b",
  },

  // ── Digital & Web Foundations ──────────────────
  {
    name: "HTML5 Semantic Architecture",
    category: "web",
    icon: <SiHtml5 />,
    desc: "Accessible markup & modern web standards",
    color: "#e34f26",
  },
  {
    name: "CSS3 & Design Tokens",
    category: "web",
    icon: <DiCss3 />,
    desc: "Fluid typography, animations & responsive flex/grid",
    color: "#1572b6",
  },
  {
    name: "Tailwind CSS",
    category: "web",
    icon: <SiTailwindcss />,
    desc: "Utility-first design system implementation",
    color: "#38bdf8",
  },
  {
    name: "Webflow",
    category: "web",
    icon: <SiWebflow />,
    desc: "Visual web development & client CMS setup",
    color: "#146ef5",
  },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState<"all" | "tools" | "disciplines" | "web">("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsDatabase
      : skillsDatabase.filter((s) => s.category === activeTab);

  return (
    <section className="techstack-section" id="capabilities" aria-label="Tools and Disciplines">
      <div className="section-container">
        {/* Header */}
        <div className="techstack-header">
          <div className="section-eyebrow">Proficiencies &bull; Creative Arsenal</div>
          <h2 className="section-title">
            Tools, disciplines &amp; <span>production</span> standards.
          </h2>
          <p className="techstack-subtitle">
            A specialized toolkit honed across years of visual communication, packaging production, and digital brand execution.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="tech-tabs-row" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "all"}
            className={`tech-tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All Competencies ({skillsDatabase.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "tools"}
            className={`tech-tab-btn ${activeTab === "tools" ? "active" : ""}`}
            onClick={() => setActiveTab("tools")}
          >
            Creative Software ({skillsDatabase.filter((s) => s.category === "tools").length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "disciplines"}
            className={`tech-tab-btn ${activeTab === "disciplines" ? "active" : ""}`}
            onClick={() => setActiveTab("disciplines")}
          >
            Design Disciplines ({skillsDatabase.filter((s) => s.category === "disciplines").length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "web"}
            className={`tech-tab-btn ${activeTab === "web" ? "active" : ""}`}
            onClick={() => setActiveTab("web")}
          >
            Web &amp; Digital ({skillsDatabase.filter((s) => s.category === "web").length})
          </button>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-cards-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-card-top">
                <span
                  className="skill-card-icon"
                  style={{ color: skill.color, backgroundColor: `${skill.color}15` }}
                >
                  {skill.icon}
                </span>
                <span className="skill-category-pill">{skill.category}</span>
              </div>
              <h3 className="skill-card-title">{skill.name}</h3>
              <p className="skill-card-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
