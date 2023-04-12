import React, { ReactNode } from 'react'
import { Main } from "../../css/components/services/Services"


interface props{
    title: string,
    text: string,
    icon: ReactNode
}
const Service:React.FC<props> = ({title,text,icon}) => {
  return (
    <Main>
      <div className="icon">{icon}</div>
      <div className="details">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </Main>
  );
}

export default Service