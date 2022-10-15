import React from 'react'
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const ContentAnimeSection = () => {
  return (
    <div className='lg:col-span-2   '>
        <div className=' flex flex-col h-screen w-3/5 text-center rounded bg-white '>
       
        <div className=' lg:pt-20 md:pt-15 pt-10'><span className='font-bold bg-black text-white p-2 pl-5 pr-5 tracking-wide  '>About__Me...</span></div> 
  

        <div>
            <h1 className='text-bolder pt-10 lg:text-3xl tracking-wider text-neutral-500 leading-loose'><span className='text-lime-500 text-bold text-5xl'>Dev</span><span className='text-black'>eloping </span>, is what i do<span className='text-neutral-500'>...</span> </h1>
        
        </div>  
        <div className='lg:pl-56  md:pl-44 lg:pt-10 pl-28  pt-3'>
        <IconContext.Provider value={{ color: "green", className: "global-class-name" }}>
            <div className=''  >
                     <BsFillFileEarmarkCodeFill size={50}  className=' ' />
            </div>
        </IconContext.Provider>
       </div>
        <div>
         <p className='lg:text-xl md:text-sm text-xs lg:tracking-wide text-black px-10 lg:py-10 md:py-8 py-5'>Note that the development build is not optimized.
To create a production build You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example</p>
      
        </div>
       
           </div>
 
        </div>  
  )
}

export default ContentAnimeSection