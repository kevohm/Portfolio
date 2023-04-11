import React, { useState} from 'react'
import { Main } from "../../css/components/Projects/ProjectsSection"
import CommonHeader from '../services/CommonHeader'
import Navigate from './Navigate'
import Projects from './Projects'
import { projects } from '../../utils/Projects'
const ProjectsSection = () => { 
  const [current, setCurrent] = useState("All");
  const handleChange = (item: string) => {
    setCurrent(item);
  };
  const data = projects.filter(
    (item) => {
      if (current === "All") {
        return true
      } else {
        return (item.category === current)
      }
    }
  )

  return (
    <Main>
      <CommonHeader title="Projects" />
      <div className="projects">
        <Navigate current={current} handleChange={handleChange} />
        <div className="projects-details">
          {data.map((item,index) => (
            <Projects key={index} {...item}/>
          ))}
        </div>
      </div>
    </Main>
  );
}

export default ProjectsSection