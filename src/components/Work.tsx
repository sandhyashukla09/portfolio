import "./styles/Work.css";
import WorkImage from "./WorkImage";

/*
 * Project images that actually exist in /public/images/:
 *   project1.png  project2.png  project3.png
 *   project4.png  project5.png  project6.png
 *
 * Graphic design projects are listed FIRST as requested.
 * Descriptions are honest — no invented clients or results.
 */
const projects = [
  // ── Graphic Design Projects (priority) ───────────────────────────────
  {
    category: "Logo Design & Brand Identity",
    name: "Brand Identity Design",
    description:
      "A complete brand identity suite including logo mark, colour palette, and typography guidelines crafted to communicate a clear visual personality.",
    tools: "Adobe Illustrator, Photoshop",
    image: "/images/project1.png",
  },
  {
    category: "Social Media & Advertising",
    name: "Social Media Design Campaign",
    description:
      "Designed a cohesive set of social media posts and advertising banners for a product launch, optimised for Instagram and Facebook formats.",
    tools: "Canva, Adobe Photoshop",
    image: "/images/project2.png",
  },
  {
    category: "Typography & Creative Artwork",
    name: "Typographic Poster Series",
    description:
      "Experimental typography and layout design exploring bold compositions and creative use of negative space for poster artwork.",
    tools: "Adobe Illustrator",
    image: "/images/project3.png",
  },
  {
    category: "Product & Packaging Design",
    name: "Product Packaging Design",
    description:
      "Package design concept including label layout, colour scheme, and print-ready artwork for a consumer product.",
    tools: "Adobe Illustrator, Photoshop",
    image: "/images/project4.png",
  },
  // ── Other Design & Development Projects ──────────────────────────────
  {
    category: "UI/UX & Web Design",
    name: "Creative Event Studio Website",
    description:
      "UI design and front-end development for an event studio, focusing on visual storytelling, intuitive layout, and responsive mobile experience.",
    tools: "Figma, Webflow, JavaScript, Tailwind CSS",
    image: "/images/project5.png",
  },
  {
    category: "Digital Marketing & Content",
    name: "Brand Growth Strategy",
    description:
      "End-to-end content strategy and social media branding for a personal brand, covering reels scripting, visual identity, and audience engagement.",
    tools: "Canva, Content Strategy, Reels Script Writing",
    image: "/images/project6.png",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-card" key={index}>
              <div className="work-card-image">
                <WorkImage image={project.image} alt={project.name} />
              </div>
              <div className="work-card-body">
                <span className="work-card-category">{project.category}</span>
                <div className="work-card-title-row">
                  <h3 className="work-card-num">0{index + 1}</h3>
                  <h4 className="work-card-name">{project.name}</h4>
                </div>
                <p className="work-card-desc">{project.description}</p>
                <p className="work-card-tools">
                  <strong>Tools:</strong> {project.tools}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
