import React from 'react';
import { useGlobally } from '../../context/context';


const DarkMode: React.FC = () => {
  const {mode, changeMode} = useGlobally()
  const handleDark = (e: React.FormEvent) => {
    e.preventDefault();
    changeMode(!mode);
  };
  return (
    <div className={`dark-mode-toggle ${mode ? "active-dark" : ""}`}>
      <input type="checkbox" name="dark" onClick={handleDark} />
      <label htmlFor="dark"></label>
    </div>
  );
};

export default DarkMode

