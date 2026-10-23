import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Landing from "./Landing";
import Work from "./Work";
import WhatIDo from "./WhatIDo";
import About from "./About";
import Career from "./Career";
import TechStack from "./TechStack";
import Contact from "./Contact";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import Cursor from "./Cursor";

gsap.registerPlugin(ScrollTrigger);

const MainContainer = () => {
  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Staggered reveals on section headers and cards
    const sectionHeaders = document.querySelectorAll(".section-title");
    sectionHeaders.forEach((header) => {
      gsap.fromTo(
        header,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      <main id="main-content">
        <Landing />
        <Work />
        <WhatIDo />
        <About />
        <Career />
        <TechStack />
        <Contact />
      </main>
    </div>
  );
};

export default MainContainer;
