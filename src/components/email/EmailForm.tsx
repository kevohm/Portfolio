import {Main} from "../../css/components/email/EmailForm"
const EmailForm = () => {
  return (
    <Main
      action="https://getform.io/f/38893fec-c536-4a6e-b3bd-14a92bf929fb"
      method="POST"
    >
      <input type="text" placeholder="Name" name="name" />
      <input type="email" placeholder="Email" name="email" />
      <textarea placeholder="Message" name="message" />
      <input type="submit" value="Send Message" />
    </Main>
  );
}

export default EmailForm