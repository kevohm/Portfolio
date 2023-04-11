import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
export interface links {
    link: string,
    icon: React.ReactElement
}
export const footer: links[] = [
  {
    link: "https://github.com/kevohm",
    icon: <FiGithub />,
  },
  {
    link: "https://twitter.com/iamTYRANTX",
    icon: <FiTwitter />,
  },
  {
    link: "https://www.linkedin.com/in/kevin-kipkemboi-7294181ba",
    icon: <FiLinkedin />,
  },
];
