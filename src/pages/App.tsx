import React, { useState } from "react";
import Main from "../css/app";
import IntroSection from "../components/intro/IntroSection";
import { FaTimes } from "react-icons/fa";
import ListLinks from "../components/intro/ListLinks";
import DarkMode from "../components/intro/DarkMode";
import ServicesSection from "../components/services/ServicesSection";
import ProjectsSection from "../components/projects/ProjectsSection";
import EducationSection from "../components/education/EducationSection"
import EmailSection from "../components/email/EmailSection";
import Footer from "../components/footer/Footer"
import { useGlobally } from "../context/context";

const App: React.FC = () => {
  const [popup, setPopup] = useState<Boolean>(false);
  const { mode} = useGlobally();
  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    return setPopup(!popup);
  };
  
  return (
    <Main className={`${popup ? "active-popup" : ""} ${mode ? "dark" : ""}`}>
      <div className={`small-popup ${mode && "small-popup-active"}`}>
        <div className="iconHolder">
          <DarkMode />
          <FaTimes className="times-icon" onClick={(e) => handleClick(e)} />
        </div>
        <ListLinks />
      </div>
       
      <IntroSection handleClick={handleClick} />
      <ServicesSection />
      <ProjectsSection />
      <EducationSection />
      <EmailSection />
      <Footer />
    </Main>
  );
};

export default App;
