import React from 'react'
import { FaReact } from "react-icons/fa";
// import { IconContext } from "react-icons";

const Card = ({Title,Content}) => {
  return (
    <div className=' flex flex-col item-center justify-center bg-neutral-300 text-black p-20 pt-10 pb-10 rounded  m-4 hover:bg-black hover:text-white hover:m-0'>
       
                               <div className=''>
                                    <FaReact onMouseOver={({target})=>target.style.color="white"}
    onMouseOut={({target})=>target.style.color="black"} className='h-14 text-center m-auto w-14 ' />
                               </div>
         
        <h1 className='text-center mt-4 mb-4 text-lg font-bold'>{Title}</h1>
        <span>
{Content}
        </span>
    </div>
  )
}

export default Card