import React from 'react'
import { Main } from "../../css/components/email/EmailDetails"
import {emailDetail} from "../../utils/Email"
const EmailDetails = () => {
  return (
    <Main>
      {emailDetail.map(
        (item, index) => {
          const {title,text,icon} = item
          return (
            <div className="detail" key={ index}>
              <div className="icon-holder">
                {icon}
              </div>
              <div className="text">
                <h1>{title}</h1>
                <p>{text}</p>
              </div>
            </div>
          );
        }
      )}
    </Main>
  );
}

export default EmailDetails