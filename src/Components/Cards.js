import React from 'react'
import Card from './Card'

const info = [
    {Title:"Web Design",
     Content:"The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js",
    },
    {Title:"Web Design",
     Content:"The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js",
    },
    {Title:"Web Design",
     Content:"The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js",
    },
    {Title:"Web Design",
     Content:"The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js",
    },
    {Title:"Web Design",
     Content:"The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js",
    },
    {Title:"Web Design",
     Content:"The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js",
    }

]

const Cards = () => {
  return (
    <>
    <div className='flex justify-center item-center'>
        <h1 className='mt-20 px-10 py-1 text-2xl text-center font-bold bg-black text-white inline-block ml-1/4  '>My__Skills</h1>
    
    </div>
     <div className='grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 m-10 '>
        {info.map(e=><Card Title={e.Title} Content={e.Content} />)}
    </div></>
  )
}

export default Cards