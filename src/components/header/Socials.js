import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'
const Socials = () => {
  return (
    <div className='socials'>
        <a href="/" target="_blank" rel="noreferrer" ><BsLinkedin/></a>
        <a href="/" target="_blank" rel="noreferrer" ><BsGithub/></a>
        <a href="/" target="_blank" rel="noreferrer" ><BsInstagram/></a>
    </div>
  )
}

export default Socials