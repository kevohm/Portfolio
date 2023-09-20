import React from 'react'
import {Main} from "../../css/components/services/ServicesSection"
import CommonHeader from "./CommonHeader"
import {services} from "../../utils/Service"
import Service from "./Service"
const ServicesSection = () => {
  return (
      <Main id="services">
          <CommonHeader title="Services" />
          <div className='services'>
              {services.map(
                (item, index) => <Service key={ index} {...item}/>
                  )}
          </div>
    </Main>
  )
}

export default ServicesSection