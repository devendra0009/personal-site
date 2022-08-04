import React, { useState } from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {IoIosContacts} from 'react-icons/io'


const Navbar = () => {
  const [activeNav,setActiveNav]=useState('#header')
  return (
    <nav>
    <a href="#header" onClick={()=>{setActiveNav('#header')}} className={activeNav==='#header'?'active':''}><AiOutlineHome/></a>
    <a href="#about" onClick={()=>{setActiveNav('#about')}} className={activeNav==='#about'?'active':''}><AiOutlineUser/></a>
    <a href="#experience"  onClick={()=>{setActiveNav('#experience')}} className={activeNav==='#experience'?'active':''}><BiBook/></a>
    <a href="#projects"  onClick={()=>{setActiveNav('#projects')}} className={activeNav==='#projects'?'active':''}><RiServiceLine/></a>
    <a href="#contact"  onClick={()=>{setActiveNav('#contact')}} className={activeNav==='#contact'?'active':''}><IoIosContacts/></a>
    </nav>
  )
}

export default Navbar