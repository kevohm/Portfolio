import React from "react";
import { links } from "../../utils/Menu";
const ListLinks = () => {
  return (
    <ul>
      {links.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
};

export default ListLinks;
