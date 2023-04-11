import alx from "../assets/img/alx-portfolio.jpg";
import blog from "../assets/img/blog-app.jpg";
import hospital from "../assets/img/hospital-management.jpg";
import tea from "../assets/img/tea-management.jpg";
import list from "../assets/img/list-mern.jpg"

export interface project{
    name: string;
    link: string;
    image: string;
    category: string
};
export const projects: project[] = [
  {
    name: "Alx Portfolio",
    link: "https://alx-portfolio.netlify.app",
    image: alx,
    category: "MERN",
  },
  {
    name: "Blog App",
    link: "https://tyrantx-blog-app.netlify.app",
    image: blog,
    category: "MERN",
  },
  {
    name: "Hospital Management System",
    link: "https://tyrantx-hospital-management.netlify.app",
    image: hospital,
    category: "Html.css.javascript",
  },
  {
    name: "Tea Management System",
    link: "https://tyrantx-tea-management.netlify.app",
    image: tea,
    category: "Html.css.javascript",
  }, {
    name: "list sort",
    link: "https://tyrantx-search-app.netlify.app/",
    image: list,
    category:"MERN"
  }
];