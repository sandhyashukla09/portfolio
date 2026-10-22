import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creative Designer & Consultant</h4>
                <h5>Freelance & Client Partnerships</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Collaborating with diverse startups, local businesses, and personal brands to engineer high-converting web identities, UI/UX systems, and strategic marketing campaigns focused on branding and audience engagement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web & UI/UX Design Specialist</h4>
                <h5>Digital Solutions & Creative Consulting</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Specialized in crafting intuitive wireframes, responsive web designs, and comprehensive design systems. Focused on optimizing brand aesthetic appeal, interface usability, and business conversion rates.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketer & Graphic Designer</h4>
                <h5>Brand Optimization & Social Strategy</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Managed end-to-end social media growth, lead-generation campaigns, and graphic design assets. Engineered viral content strategies and branding campaigns to maximize online reach and visibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
