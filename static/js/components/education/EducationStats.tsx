import React from 'react'
import {Main} from "../../css/components/education/EducationStats"
import {stats} from "../../utils/Stats"
const EducationStats = () => {
  return (
    <Main>
      <p>
        For 5+ years, I have been continuously learning in the field of
        front-end and experimenting with new technologies and frameworks, and
        here you can see a summary of my skills.
      </p>
          {stats.map((item, index) => {
              const {value,name} = item
            return <div key={index}>
              <label htmlFor={name}>{name}</label>
              <progress max={100} value={value}></progress>
          </div>
          })}
    </Main>
  );
}

export default EducationStats