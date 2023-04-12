import React from 'react'
import { Body } from "../../css/components/intro/MainIntro"
import image from "../../assets/svg/intro-svg.svg"
interface props {
  handleView:()=>void
}
const MainIntro:React.FC<props> = ({ handleView}) => {
  return (
    <Body>
      <div className="body-div">
        <div className="info">
          <p className="info-title">
            kevin<span>kibet</span>
          </p>
          <p className="details">
            Creative full stack developer. Proficient in JavaScript, and React.
            Passionate about frontend development and backend development.
            Transforms ideas into real-life projects that are profitable and
            inspirational.
          </p>
          <button onClick={handleView}>View Resume</button>
        </div>
        <div className="image">
          <img src={image} alt="work" />
        </div>
      </div>
    </Body>
  );
};

export default MainIntro