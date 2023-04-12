import React from 'react'
import { Header } from "../../css/components/intro/MainHeader"
import { FiMenu } from "react-icons/fi"
import DarkMode from './DarkMode'
import ListLinks from './ListLinks'
interface props {
  handleChange: (e: React.FormEvent) => void;
};
const MainHeader: React.FC<props> = ({ handleChange }) => {
  return (
    <Header>
      <p>Kevin</p>
      <ListLinks />
      <div className="menu">
        <FiMenu className="menu-icon" onClick={(e) => handleChange(e)} />
      </div>
      <DarkMode/>
    </Header>
  );
};

export default MainHeader