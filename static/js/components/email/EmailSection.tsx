import React from 'react'
import EmailForm from './EmailForm'
import {Main} from "../../css/components/email/EmailSection"
import EmailDetails from './EmailDetails'
import CommonHeader from "../services/CommonHeader"
const EmailSection = () => {
  return (
    <Main>
      <CommonHeader title="Get in touch" />
      <div className='details'>
        <EmailForm />
        <EmailDetails />
      </div>
    </Main>
  );
}

export default EmailSection