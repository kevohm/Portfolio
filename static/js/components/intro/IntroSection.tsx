import React, {useState,useRef} from 'react'
import MainHeader from './MainHeader'
import MainIntro from './MainIntro'
import Main from "../../css/components/intro/IntroSection"
import cv from "../../assets/img/cv.pdf"
import { FaTimes } from "react-icons/fa";
interface props {
  handleClick: (e: React.FormEvent) => void
};
const IntroSection: React.FC<props> = ({ handleClick }) => {
  const [view, setView] = useState<Boolean>(true)
  const handleView = () => {
    setView(!view)
  }
  return (
    <Main>
      {view && (
        <div className="pdf-viewer">
          <div className="icon">
            <FaTimes onClick={handleView} />
          </div>
          <iframe src={cv} width="100%" title="pdf-viewer"></iframe>
        </div>
      )}
      <MainHeader handleChange={handleClick} />
      <MainIntro handleView={handleView} />
    </Main>
  );
};
export default IntroSection
