import React from 'react'

const Pic = () => {
  return (
    <div className=' lg:bg-black   bg-black col-span-3 lg:col-span-2 ' ><img className='lg:mx-auto mx-auto h-screen' alt="" src={process.env.PUBLIC_URL+"dp1.jpg"} ></img>
    </div>
  )
}

export default Pic