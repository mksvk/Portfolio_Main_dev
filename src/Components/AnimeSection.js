import React from 'react'
import Anime from './Anime';
import ContentAnimeSection from './infoComponents/ContentAnimeSection';
const AnimeSection = () => {
  return (

    <div className='grid md:grid-cols-1 h- lg:grid-cols-3  lg:h-screen bg-neutral-100'>
        <ContentAnimeSection/> 
        <Anime/>
       
        
    </div>
  )
}

export default AnimeSection