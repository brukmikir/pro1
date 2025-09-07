import React, { act } from 'react'
import { useState,useEffect } from 'react'

import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo,menu,close} from '../assets'
import {Link} from 'react-router-dom'



const Navbar = () => {
  const [active,setActive]=useState('')
  const [toggle,setToggle]=useState(true)
  
  return (
    <nav>
      <div className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#181717] text-white`}>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link to='/' className='flex items-center gap-2' onClick={()=>{
            setActive('')
            window.scrollTo(0,0)
          }}>
            <img src={logo} alt='logo' className='w-9 h-9 object-contain'/>
            <p>Bruk | Mikir</p>
          </Link>
          
          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link)=>(
              <li key={link.id} className={`${ active == Link.title ? "text-white" : "text-gray-500"}
                                             hover:text-gray-500 text-[18px] font-medium cursor-pointer text-white `} 
                                             onClick={()=>setActive(link.title)}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ?menu: close } 
                 alt="menu"
                 width={24}
                 height={24} 
                 onClick={()=>(setToggle(!toggle))}/>
          </div>
          <div className={`${toggle ? 'hidden':'flex'} rounded-lg z-10 absolute top-20 bg-[#05021f] right-0 p-6 mx-4 my-2 min-w-[140px]`}>
            <ul className='flex flex-col gap-2 '>
            {navLinks.map((link)=>(
              <li key={link.id} className={`${ active == Link.title ? "text-white" : "text-gray-500"}
                                             hover:text-gray-500 text-[18px] font-medium cursor-pointer text-white `}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar