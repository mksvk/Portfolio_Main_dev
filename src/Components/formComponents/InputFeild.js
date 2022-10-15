import React from 'react'

const inputFeild = () => {
  return (
    <div className=' grid grid-cols-3 bg-white h-screen w-full'>

      <div className='flex flex-col justify-items-center pt-10 lg:pt-28'>
        <span className='lg:pl-20 pl-5 py-5 lg:font-bold lg:text-lg'>Name</span>
        <span className='lg:pl-20 pl-5  py-5 lg:font-bold  lg:text-lg'>Email</span>
        <span className='lg:pl-20 pl-5  py-5 lg:font-bold lg:text-lg' >Phone Number</span>
        <span className='lg:pl-20 pl-5  py-5 lg:font-bold lg:text-lg'>Message</span>

      </div>
      <div className='col-span-2 flex flex-col pt-10 lg:pt-28'>
            <input type="text" className='border-2  bg-black text-white rounded py-5 lg:mr-10' placeholder='Enter your Name ' name="fname" />
            <input type="email" className='border-2  bg-black text-white rounded py-5 lg:mr-10' placeholder='Enter your Name ' name="fname" /> 
            <input type="text" className='border-2  bg-black text-white rounded py-5 lg:mr-10' placeholder='Enter your Name ' name="fname" /> 
            <textarea className='border-2 rounded  bg-black text-white lg:py-5 lg:mr-10' placeholder='Enter The message' rows="4" cols="30"/>
      <div className='bg-lime-500  h-7  w-32 mt-14 flex justify-center item-center cursor-pointer rounded'><span className='lg:text-lg text-white m-auto'> Submit</span> </div>
 
      </div>
        
      
    </div>
  )
}

export default inputFeild