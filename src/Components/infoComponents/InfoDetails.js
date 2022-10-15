import React from 'react'
import {AiFillInstagram } from "react-icons/ai";
import {FaFacebook } from "react-icons/fa";
import {AiFillTwitterCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

const InfoDetails = () => {
  return (
<div className='flex flex-col p-20 pt-20 lg:text-left md:text-center'>


    <h4 className='text-neutral-500'><span className='text-lime-500 text-3xl font-bold'>Hello</span>, I'm</h4>
    <h2 className='mt-2 font-bold text-3xl text-black tracking-normal'>M K S V Krishna Reddy</h2>
    <h4 className='text-neutral-500 text-lg'>I'm a full stack web devloper</h4>

      <div className='para mt-4 text-neutral-500 text-m'>Looking for a challenging role in a reputable organization to utilize my Technical skills for the growth of the organization as well as to
                enhance my knowledge about new and emerging trends in IT sector, then images will be bundles & minified.
      </div> 
      
      <div className='w-40 h-9 bg-lime-500 text-neutral-50 mt-4 flex justify-center item-center cursor-pointer'>
         <span className='m-auto'>About Me</span>
      </div>

      <div>
        
      <div className=' flex  mt-20  '> 
         <IconContext.Provider value={{ color: "black", className: " global-class-name" }}>
                               <div  >
                                    <FaFacebook className=' h-5 w-5 m-3 cursor-pointer' />
                               </div>
         </IconContext.Provider>
         <IconContext.Provider value={{ color: "black", className: "global-class-name" }}>
                               <div  >
                                 
                                    <AiFillInstagram className='h-5 w-5 m-3 cursor-pointer' />
                               </div>
         </IconContext.Provider>
         <IconContext.Provider value={{ color: "black", className: "global-class-name" }}>
                               <div  >
                                    <AiFillTwitterCircle className='h-5 w-5 m-3 cursor-pointer' />
                               </div>
         </IconContext.Provider>
         
         
          </div>
      </div>


</div>
  )
}

export default InfoDetails