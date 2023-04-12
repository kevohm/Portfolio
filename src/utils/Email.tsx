import { GoLocation } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi"
import {HiOutlineMail} from "react-icons/hi"
import {service} from "./Service"
export const emailDetail: service = [
  {
    title: "Address",
    text: "403 - 20300 Nairobi, Kenya",
    icon: <GoLocation />,
  },
  {
    title: "Phone",
    text: "+254757532111",
    icon: <BiPhoneCall />,
  },
  {
    title: "Email",
    text: "kevinkbet@gmail.com",
    icon: <HiOutlineMail />,
  },
];