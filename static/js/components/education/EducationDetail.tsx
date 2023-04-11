import React from 'react'

import { Main } from "../../css/components/education/EducationDetail"
import { data} from "../../utils/Edu"
const EducationDetail = () => {
  return (
    <Main>
      {data.map((i, index) =>{
        const {school, track, start, end} = i
        return <div className='achievement' key={index}>
        <div>
          <p>{school}</p>
          <p>{track}</p>
        </div>
        <p>{start} - {end}</p>
      </div>
      }
      )
      }
    </Main>
  );
}

export default EducationDetail