import React from 'react'
import {BiAward } from 'react-icons/bi'
import {FcReading} from 'react-icons/fc'
import {FaLanguage,FaCode} from 'react-icons/fa'
import {GiSkills } from 'react-icons/gi'
import {CgGym } from 'react-icons/cg'
import {MdSportsVolleyball} from 'react-icons/md'
import ME from '../../assests/me.jpg'
import '../about/About.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Do Know More</h5>
      <h2>About Me</h2>
      <div className="container about_container">

        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="this is me" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

            <article className="about_card">
              <h4>Education <BiAward className='about_icon'/></h4>
              <div className="about_card-details">
                  <div className="institutions">
                      <h5>BTech,IT from Maharaja Surajmal Institute of Technology</h5>
                      <h5>12th from Evergreen Public School</h5>
                      <h5>10th from NS Public School</h5>
                  </div>
                  <div className="duration">
                      <h5>2020-present</h5>
                      <h5>2020, 95%</h5>
                      <h5>2018, 92%</h5>
                  </div>
              </div>
            </article>

            <article className="about_card">
              <h4>Hobbies & Interests <GiSkills/></h4>
                  <div className="hobbies">
                      <h2><FaCode/></h2>
                      <h2><FaLanguage/></h2>
                      <h2><FcReading/></h2>
                      <h2><MdSportsVolleyball/></h2>
                      <h2><CgGym/></h2>
                  </div>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque earum nisi eaque nobis. Tenetur, doloribus! Sequi excepturi dolorum voluptatem ullam hic asperiores eum. Aliquid dignissimos inventore id laborum illum veniam.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About