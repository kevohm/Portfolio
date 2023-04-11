import { TbWorld } from "react-icons/tb";
import { BiCrown } from "react-icons/bi"
import {ImStack} from "react-icons/im"
export type service = {
  title: string;
  text: string;
  icon: React.ReactElement;
}[];
export const services: service = [
  {
    title: "UI/UX Design",
    text: "Turn what you have in mind of a digital product into reality. For any platform you consider.",
    icon: <BiCrown/>,
  },
  {
    title: "Application Development",
    text: "Standard designing, building, and implementing your applications with documentation.",
    icon: <ImStack />,
  },
  {
    title: "Web Development",
    text: "Create and maintain your websites and also take care of its performance and traffic capacity",
    icon: <TbWorld />,
  },
];