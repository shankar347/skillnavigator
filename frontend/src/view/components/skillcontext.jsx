import { createContext, useState } from "react";

export const skillcontext=createContext()


import React from 'react'

const Skillcontext = ({children}) => {
  
    const [sidbaractive,setsidebaractive]=useState(false)
    const [navmodel,setnavmodel]=useState(false)
    return (
    <skillcontext.Provider 
    value={{sidbaractive,setsidebaractive,navmodel,setnavmodel}}
    >
   {children}
    </skillcontext.Provider>
  )
}

export default Skillcontext