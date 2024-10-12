import { createContext, useContext, useState } from 'react'

export const AppContext = createContext(null)

export const ContextApi = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = (open)=>{
        setIsOpen(open)
    }
  return (
   <AppContext.Provider value={{
    isOpen,
    setIsOpen: closeMenu
   }}>
    {children}
   </AppContext.Provider>
  )
}


export const useAppContext = ()=>useContext(AppContext)