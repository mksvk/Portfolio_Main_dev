
import React ,{useState} from 'react'
import './img.css'
import { HiMenu } from "react-icons/hi";
import {AiFillInstagram } from "react-icons/ai";
import {FaFacebook } from "react-icons/fa";
import {AiFillTwitterCircle } from "react-icons/ai";
import { IconContext } from "react-icons";
const Img = () => {
   const [validator,setValidator] = useState(false)
   const handleClick = ()=>{
      setValidator(!validator)
      console.log(validator)
   }
  return (
    <>
    <section className=" flex flex-wrap justify-center item-center">

<div className=' bg-black  lg:w-2/5 '> 
<img className=' h-screen m-auto   ' alt="" src={process.env.PUBLIC_URL+"dp1.jpg"} ></img>
</div> 



<div className=' bg-text-slate-100  w-3/5 tracking-wide'>


    <div className={` h-screen bg-black text-white relative ${validator?"":"yes"}`}>
        <div className='absolute bottom-1/3  right-1/2'>
          <ul className=' '  >

         <li className='p-4 '>
            <span onClick={handleClick} className='cursor-pointer hover:text-lime-500 text-xl font-bold'>Home</span>
         </li>
         <li className='p-4 cursor-pointer hover:text-lime-500 text-xl font-bold'>
         <span className='cursor-pointer'>About Me</span>
         </li>
         <li className='p-4 cursor-pointer hover:text-lime-500 text-xl font-bold'>
         <span className='cursor-pointer'>Contact </span>
         </li>
         <li className='p-4 cursor-pointer hover:text-lime-500 text-xl font-bold'>
         <span className='cursor-pointer'>My Work</span>
         </li>
       </ul>
        </div>
      
         
    </div>


  <div className={`relative h-screen ${validator?"yes":""}`}>
       
   
       
      <div className='ml-20 pt-10'><span className='font-bold bg-black text-white p-2 pl-5 pr-5 tracking-wide  '>MY__Protfolio</span></div> 
   <div className='flex flex-col p-20 pt-20'>
       <h4 className='text-neutral-500'><span className='text-lime-500 text-3xl font-bold'>Hello</span>, I'm</h4>
       <h2 className='mt-2 font-bold text-3xl text-black tracking-normal'>M K S V Krishna Reddy</h2>
       <h4 className='text-neutral-500 text-lg'>I'm a full stack web devloper</h4>

         <div className='para mt-4 text-neutral-500 text-m'>Looking for a challenging role in a reputable organization to utilize my Technical skills for the growth of the organization as well as to
                   enhance my knowledge about new and emerging trends in IT sector, then images will be bundles & minified.
         </div> 
        <div className='w-40 h-9 bg-lime-500 text-neutral-50 mt-4 flex justify-center item-center cursor-pointer'><span className='m-auto'>About Me</span> </div>
 
   </div> 

         <div className='absolute  flex  lg:bottom-20 left-20  '> 
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

<IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
  <div  >
   <HiMenu onClick={handleClick} className=' fixed bg-black text-red top-9 right-14  w-10 h-8 cursor-pointer' />
  </div>
</IconContext.Provider>
    </section>

    </>
    
   
   
  )
}

export default Img