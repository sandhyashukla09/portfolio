import { MdOutlineWorkOutline, MdOutlineVerified } from "react-icons/md";
import "./styles/Career.css";

interface CareerItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  highlights: string[];
}

const careerMilestones: CareerItem[] = [
  {
    period: "2024 — PRESENT",
    role: "Independent Creative Designer & Visual Storyteller",
    organization: "Studio Practice & Select Commissions",
    location: "Global Remote",
    summary:
      "Directing complete brand identity suites, packaging architectures, and experimental typographic campaigns for independent businesses, founders, and creative agencies.",
    highlights: [
      "Vector brand identities, design systems, and guidelines",
      "Consumer packaging, custom label systems, and print prepress",
      "Multi-channel visual storytelling and promotional campaigns",
    ],
  },
  {
    period: "2022 — 2024",
    role: "Visual Designer & Brand Consultant",
    organization: "Creative Partnerships & Consulting",
    location: "Remote / Hybrid",
    summary:
      "Partnered with growing brands to structure clear visual hierarchies, intuitive digital assets, and high-impact marketing collateral.",
    highlights: [
      "Comprehensive logo suites & typography hierarchy rules",
      "Social media design templates with cross-platform coherence",
      "High-converting visual assets for digital launches",
    ],
  },
  {
    period: "2021 — 2022",
    role: "Graphic Design & Production Specialist",
    organization: "Digital Agency & Freelance",
    location: "India",
    summary:
      "Spearheaded creative production for digital marketing creatives, vector illustrations, promotional banners, and print-ready collateral.",
    highlights: [
      "Vector artwork, icon suites, and social media creative systems",
      "Print prepress layouts and poster compositions",
      "Rapid turnaround visual designs with strict brand fidelity",
    ],
  },
];

const Career = () => {
  return (
    <section className="career-section" id="experience" aria-label="Experience & Career Journey">
      <div className="section-container">
        {/* Section Header */}
        <div className="career-header-center">
          <div className="section-eyebrow">Trajectory &bull; Experience</div>
          <h2 className="section-title">
            The path of <span>craft</span> and dedication.
          </h2>
          <p className="career-intro-desc">
            A chronological timeline of creative growth, client collaborations, and expanding design capabilities.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="career-timeline-wrapper">
          <div className="career-timeline-stem" aria-hidden="true" />

          <div className="career-milestones-list">
            {careerMilestones.map((item, index) => (
              <div key={item.period} className="career-milestone-card">
                {/* Timeline Dot with Pulse */}
                <div className="milestone-marker">
                  <div className="marker-dot">
                    <MdOutlineWorkOutline />
                  </div>
                </div>

                <div className="milestone-content-box">
                  <div className="milestone-top-row">
                    <span className="milestone-period">{item.period}</span>
                    <span className="milestone-loc">{item.location}</span>
                  </div>

                  <h3 className="milestone-role">{item.role}</h3>
                  <h4 className="milestone-org">{item.organization}</h4>

                  <p className="milestone-summary">{item.summary}</p>

                  <div className="milestone-highlights-wrap">
                    <span className="highlights-title">Core Contributions:</span>
                    <ul className="milestone-highlights">
                      {item.highlights.map((highlight, hIdx) => (
                        <li key={hIdx}>
                          <MdOutlineVerified className="highlight-bullet" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
