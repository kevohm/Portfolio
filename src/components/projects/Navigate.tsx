import React from 'react'
import { Main } from "../../css/components/Projects/Navigate"
import { projects } from '../../utils/Projects'
interface props {
  current:string;
  handleChange:(item:string)=>void;
}
const Navigate:React.FC<props> = ({ current, handleChange }) => {
  const set = new Set([
    "All",
    ...projects.map((item) => {
      return item.category;
    }),
  ]);
  const data = Array.from(set);
  return (
    <Main>
      {data.map((item, index) => (
        <button
          className={`${current === item && "active-btn"}`}
          onClick={() => handleChange(item)}
          key={index}
        >
          {item}
        </button>
      ))}
    </Main>
  );
};

export default Navigate