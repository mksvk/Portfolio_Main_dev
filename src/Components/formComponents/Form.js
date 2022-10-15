import React from 'react'
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import InputFeild from './InputFeild';
const Form = () => {
  return (
    <div className='grid bg-lime-300 h-screen w-full grid-cols-3'>
      <div className='flex flex-col ml-2 lg:ml-14 bg-black px-5 text-sm lg:px-14 py-10 text-white'>

        <div className='lg:py-14 lg:text-2xl text-bold'>Contact Information</div>
        <div className='py-5 lg:text-sm text-xs'>Utilities for controlling Utilities for controlling how for controlling how elements are sized and placed across grid columns

        </div>
        <div className='flex items-center py-2'>  <FiPhoneCall/>     <div className='lg:px-3 lg:text-sm text-xs'>+91 6304414338</div></div>
        <div className='flex items-center py-2'>  <AiOutlineMail/>    <div className='lg:px-1 lg:text-sm text-xs '>mksvkrishnareddy@gmail.com</div></div>
      </div>
      <div className='col-span-2'>

        <div><InputFeild/></div> 
      </div>
    </div>
  )
}

export default Form