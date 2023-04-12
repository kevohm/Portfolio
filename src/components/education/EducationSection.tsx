import React from 'react'
import  CustomHeader from "../services/CommonHeader"
import { Main } from "../../css/components/education/EducationSection"
import EducationDetail from './EducationDetail'
import EducationStats from './EducationStats'
const EducationSection = () => {
  
  return (
    <Main>
      <CustomHeader title="Education Progress" />
      <div className="details">
        <EducationDetail />
        <EducationStats/>
      </div>
    </Main>
  );
}

export default EducationSection