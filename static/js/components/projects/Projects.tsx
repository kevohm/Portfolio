import React from 'react'
import {FiLink2} from "react-icons/fi"
import { Main } from "../../css/components/Projects/Projects"
import { project } from '../../utils/Projects';


const Projects: React.FC<project> = ({ name, link, image, category }) => {
  return (
    <Main>
      <img src={image} alt="project" />
      <p>{name}</p>
      <div className="title">
        <button>{category}</button>
        <a href={link} target="_blank" rel="noreferrer">
          <FiLink2 className="icon" />
        </a>
      </div>
    </Main>
  );
};

export default Projects