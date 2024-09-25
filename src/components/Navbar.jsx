import React from 'react'
import { IoMdMenu } from "react-icons/io";
import {motion} from "framer-motion";

const NavbarMenu = [
    {
    id: 1,
    title:"Home",
    path:"/home" 
    },
    {
    id: 2,
    title:"Services",
    path:"/services" 
    },
    {
    id: 3,
    title:"About Us",
    path:"/aboutus" 
    },
    {
    id: 4,
    title:"Our Team",
    path:"/ourteam" 
    },
    {
    id: 5,
    title:"Contact Us",
    path:"/contactus" 
    },
];
const Navbar = () => {

  return (
    <nav className='relative z-20'>
     <motion.div
      initial={{y:-40, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{duration:0.8, ease:"easeInOut"}}
      className="container py-10 flex justify-between items-center">
        {/* Logo Section */}
        <div>
            <h1 className='font-bold text-2xl text-primary hover:text-secondary cursor-pointer '>
            The Coding Journey
            </h1>
        </div>
        {/* menu section */}
        <div className='hidden lg:block '>
            <ul className='flex items-center gap-3'>
            {NavbarMenu.map((menu)=>(
                <li key={menu.id}>
                    <a href={menu.path} className= " inline-block py-2 px-3 relative group hover:text-secondary">
                        <div className='w-2 h-2 bg-secondary absolute mt-2 left-1/2 translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden rounded-full'>
                            
                        </div>
                        {menu.title}
                        </a>
                </li>
            ))}
            <button className='primary-btn'>Sign In</button>
            </ul>
        </div>
        {/* Mobile Hamburger menu section */}
        <div className='lg:hidden'>
        <IoMdMenu className='text-4xl' />
        </div>
     </motion.div>
    </nav>
  )
}

export default Navbar

