import "./tailwindNavbar.css"

const Tailwindnav = ()=>{
return <>
<div className=" Navbarcontainer flex flex-wrap justify-around text-lg py-4 text-white items-center " >
   
   <div className="text-lg"><h1 className='text-4xl'>M K S V K</h1></div>
   <div className="border-b-2">
    <ul className="flex space-x-10 py-2 px-3" >
        <li className="cursor-pointer hover:border-2 courser-pointer p-2 rounded-full border-black border-dotted	">
            Home
        </li>
        <li className="cursor-pointer hover:border-2 courser-pointer p-2 rounded-full border-stone-300	">
            About
        </li>
        <li className="cursor-pointer hover:border-2 courser-pointer p-2 rounded-full border-stone-300	">
            Contact
        </li>
    </ul>
   </div>

</div>
</>
}

export default Tailwindnav