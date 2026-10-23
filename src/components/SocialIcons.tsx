import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FiFileText, FiX, FiDownload } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <>
      <aside className="floating-utilities" aria-label="Quick Connect Utilities">
        {/* Floating WhatsApp Widget */}
        <div className="floating-whatsapp-wrap">
          <div className="whatsapp-pulse-ring" aria-hidden="true" />
          <a
            href="https://wa.me/919826385094"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp-btn"
            aria-label="Chat directly with Sandhya on WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <div className="whatsapp-tooltip" role="status">
            <span className="tooltip-dot" />
            <span>Chat with Sandhya</span>
          </div>
        </div>

        {/* Floating Resume Quick Button */}
        <button
          type="button"
          className="floating-resume-btn"
          onClick={() => setResumeModalOpen(true)}
          aria-label="View Sandhya Shukla's Resume and Credentials"
        >
          <FiFileText className="resume-icon" />
          <span className="resume-label">RESUME</span>
        </button>
      </aside>

      {/* Resume Quick Drawer / Modal */}
      {resumeModalOpen && (
        <div
          className="resume-modal-backdrop"
          onClick={() => setResumeModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-dialog-title"
        >
          <div className="resume-modal-sheet" onClick={(e) => e.stopPropagation()}>
            <div className="resume-modal-header">
              <div>
                <span className="resume-eyebrow">Creative Credentials</span>
                <h3 id="resume-dialog-title" className="resume-title">
                  Sandhya Shukla &bull; CV Summary
                </h3>
              </div>
              <button
                type="button"
                className="resume-close-btn"
                onClick={() => setResumeModalOpen(false)}
                aria-label="Close resume dialog"
              >
                <FiX />
              </button>
            </div>

            <div className="resume-modal-body">
              <div className="resume-bio-section">
                <h4>Graphic Designer &amp; Visual Storyteller</h4>
                <p>
                  Specialized in brand identity systems, product packaging, editorial typography, and high-converting marketing campaigns.
                </p>
              </div>

              <div className="resume-section-block">
                <h5>Core Software</h5>
                <p>Adobe Illustrator, Adobe Photoshop, Figma, InDesign, Canva Pro, Adobe XD</p>
              </div>

              <div className="resume-section-block">
                <h5>Specializations</h5>
                <p>
                  Brand Architecture &bull; Vector Logo Suites &bull; Product Packaging Dielines &bull; Typography Layouts &bull; Social Campaign Direction &bull; Print Prepress
                </p>
              </div>

              <div className="resume-section-block">
                <h5>Contact &amp; Commission Inquiries</h5>
                <p>
                  Email: <a href="mailto:shuklasandhya09@gmail.com">shuklasandhya09@gmail.com</a>
                  <br />
                  Phone: <a href="tel:+919826385094">+91 98263 85094</a>
                  <br />
                  Location: India &bull; Available for remote client collaborations worldwide
                </p>
              </div>
            </div>

            <div className="resume-modal-footer">
              <a
                href="mailto:shuklasandhya09@gmail.com?subject=Requesting%20Full%20PDF%20Resume%20-%20Sandhya%20Shukla"
                className="resume-download-btn"
              >
                <FiDownload />
                <span>Request Official PDF Resume</span>
                <MdArrowOutward />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialIcons;
