import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm Sandhya Shukla, a creative graphic designer passionate about
          building meaningful visual identities through branding, illustration,
          typography, and impactful digital artwork.
        </p>
        <div className="about-skills">
          <div className="about-skill-group">
            <h4>Design Tools</h4>
            <div className="about-skill-tags">
              <span>Adobe Illustrator</span>
              <span>Photoshop</span>
              <span>Canva</span>
              <span>Figma</span>
              <span>Adobe XD</span>
            </div>
          </div>
          <div className="about-skill-group">
            <h4>Specialities</h4>
            <div className="about-skill-tags">
              <span>Brand Identity</span>
              <span>Logo Design</span>
              <span>Typography</span>
              <span>Illustration</span>
              <span>Social Media Design</span>
              <span>Packaging Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
