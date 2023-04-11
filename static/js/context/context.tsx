import React, { useContext } from 'react'

type DarkMode = {
  mode: Boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
};
const AppContext = React.createContext<DarkMode>({ mode: false, setMode: () => {} });
interface props{
 children: React.ReactElement
}

const AppProvider = ({ children }: props) => {
  let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [mode, setMode] = React.useState(prefersDark);
    return <AppContext.Provider value={{ mode, setMode}} >
        { children }
        </AppContext.Provider>
};
const useGlobally = () => {
    return useContext(AppContext);
}
export { useGlobally, AppProvider };