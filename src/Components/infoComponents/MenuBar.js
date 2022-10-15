import React from 'react'


const MenuBar = ({validator}) => {
  return (
    <div className={`fixed w-3/5 pt-16 lg:pt-0 h-screen bg-black right-0 ${validator?"":"hidden"}`} >

          <ul className='text-white flex flex-col justify-center justify-items-center lg:p-44 p-5 '  >

         <li className='p-4 md-mx-auto lg:mr-3/5 lg:ml-2/5 '>
            <span className='cursor-pointer hover:text-lime-500 text-xl font-bold'>Home</span>
         </li>
         <li className='p-4 md-mx-auto lg:mr-3/5 lg:ml-2/5 cursor-pointer hover:text-lime-500 text-xl font-bold'>
         <span className='cursor-pointer'>About Me</span>
         </li>
         <li className='p-4 md-mx-auto lg:mr-3/5 lg:ml-2/5  cursor-pointer hover:text-lime-500 text-xl font-bold'>
         <span className='cursor-pointer'>Contact </span>
         </li>
         <li className='p-4 md-mx-auto lg:mr-3/5 lg:ml-2/5  cursor-pointer hover:text-lime-500 text-xl font-bold'>
         <span className='cursor-pointer'>My Work</span>
         </li>
       </ul>
    
    </div>
  )
}

export default MenuBar