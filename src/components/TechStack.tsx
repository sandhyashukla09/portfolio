import "./styles/TechStack.css";

const techItems = [
  { name: "React", color: "#61dafb" },
  { name: "Tailwind", color: "#38bdf8" },
  { name: "JavaScript", color: "#f7df1e" },
  { name: "Figma", color: "#f24e1e" },
  { name: "Firebase", color: "#ffca28" },
  { name: "WordPress", color: "#21759b" },
  { name: "Flutter", color: "#02569b" },
  { name: "Photoshop", color: "#31a8ff" },
  { name: "HTML5", color: "#e34f26" },
  { name: "CSS3", color: "#1572b6" },
  { name: "Illustrator", color: "#ff9a00" },
  { name: "Canva", color: "#00c4cc" },
];

const TechStack = () => {
  return (
    <div className="techstack">
      <h2>My Techstack</h2>
      <div className="tech-grid">
        {techItems.map((item) => (
          <div
            key={item.name}
            className="tech-pill"
            style={{ borderColor: item.color, color: item.color }}
          >
            <span className="tech-dot" style={{ background: item.color }} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
