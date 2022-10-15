import React from 'react'
import Lottie from "lottie-react";
import anime from "./cycle.json";
const Anime = () => {
  return (
  
  <div className='my-auto rounded'>
  <Lottie className="w-96  w-40    " animationData={anime} loop={true} /> 
 </div>
  )
}

export default Anime