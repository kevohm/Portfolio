import React from 'react'
import {Main} from "../../css/components/services/CommonHeader"
interface props{
    title:string
}
const CommonHeader:React.FC<props> = ({title}) => {
  return (
    <Main>
          {title}
    </Main>
  )
}

export default CommonHeader