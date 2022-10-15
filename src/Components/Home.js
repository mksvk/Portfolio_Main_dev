import React,{useState} from 'react'
import Info from './Info'
import Pic from './Pic'
import Menu from './infoComponents/Menu'
import MenuBar from './infoComponents/MenuBar'
const Home = () => {
    const [validator,setValidator] = useState(false)
    const clickHandler = ()=>{
        setValidator(!validator)
        console.log(validator)
    }

  return (
    <div className='grid sm:grid-cols-1 lg:grid-cols-5  md:grid-cols-1    '> 
        <Pic className='bg-black ' />
        <Info />
        
        <MenuBar validator={validator} />
        <Menu func = {clickHandler} />
    </div>
  )
}

export default Home