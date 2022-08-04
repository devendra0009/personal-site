import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assests/me.jpg'
import Socials from './Socials'

const Header = () => {
  return (
    <header id='header'>
      <div className="container  header_container">
        <h4>Hello I'm</h4>
        <h1>Davendra Bedwal</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA/>
        <Socials/>

        <div className="me">
          <img src={ME} alt="my img" />
        </div>
        <a href="#footer"  className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header