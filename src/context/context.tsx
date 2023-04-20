import React, { useContext } from 'react'

type DarkMode = {
  mode: Boolean;
  changeMode: (val:Boolean)=>void;
};
const AppContext = React.createContext<DarkMode>({ mode: false, changeMode: () => {} });
interface props{
 children: React.ReactElement
}

const AppProvider = ({ children }: props) => {
  let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [mode, setMode] = React.useState<Boolean>(()=>{
      const data = localStorage.getItem("darkmode")? localStorage.getItem("darkmode") === "true" :prefersDark
      return data
    });
    const changeMode = (val:Boolean)=>{
      setMode(val)
      localStorage.setItem("darkmode",String(val))
    }
    return <AppContext.Provider value={{ mode, changeMode}} >
        { children }
        </AppContext.Provider>
};
const useGlobally = () => {
    return useContext(AppContext);
}
export { useGlobally, AppProvider };