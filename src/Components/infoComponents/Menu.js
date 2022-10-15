import React from 'react'

import { HiMenu } from "react-icons/hi";
import { IconContext } from "react-icons";

const Menu = ({func}) => {
  return (
    <div>
        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
  <div  >
   <HiMenu onClick={func} className=' fixed bg-black text-red top-9 right-14  w-10 h-8 cursor-pointer' />
  </div>
</IconContext.Provider>
    </div>
  )
}

export default Menu