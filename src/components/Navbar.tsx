import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SANDHYA
        </a>
        <a
          href="mailto:shuklasandhya09@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          shuklasandhya09@gmail.com
        </a>
        <ul>
          <li>
            <a href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
