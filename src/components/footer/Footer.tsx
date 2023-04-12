import React from 'react'

import {footer} from "../../utils/Footer"
import {Main} from "../../css/components/footer/Footer"
const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <Main>
        <div className="icons">
                  {footer.map(
                  (item, index) => {
                      const {icon,link} = item
                      return <a key={index}  href={link} target="_blank" rel='noreferrer'>
                          {icon}
                      </a>
                    }
                  )
                  }
      </div>
      <p>&copy; {year} - Tyrant-X</p>
    </Main>
  );
}

export default Footer