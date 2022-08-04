import React from 'react'
import './Experience.css'
import {AiFillCheckCircle } from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Skills</h2>
      <div className="container skills_container">
        <div className="tech_skills">
          <h3>Tech Skills</h3>
          <div className="skill_content">
            <article className='skill_details'>
                <h4>C++   <AiFillCheckCircle className='skill_details-icon'/> </h4>
                <small className='text-light'>Intermediate</small>
            </article>
            <article className='skill_details'>
                
                <h4>DATA STRUCTURES AND ALGORITHMS <AiFillCheckCircle className='skill_details-icon'/></h4>
                <small className='text-light'>Intermediate</small>
            </article>
            <article className='skill_details'>
                <h4>HTML <AiFillCheckCircle className='skill_details-icon'/></h4>
                <small className='text-light'>Intermediate</small>
            </article>
            <article className='skill_details'>
                <h4>CSS <AiFillCheckCircle className='skill_details-icon'/></h4>
                <small className='text-light'>Intermediate</small>
            </article>
            <article className='skill_details'>
                <h4>JAVASCRIPT <AiFillCheckCircle className='skill_details-icon'/></h4>
                <small className='text-light'>Intermediate</small>
            </article>
            <article className='skill_details'>
                <h4>REACTJS <AiFillCheckCircle className='skill_details-icon'/></h4>
                <small className='text-light'>Intermediate</small>
            </article>
            <article className='skill_details'>
                <h4>NODEJS <AiFillCheckCircle className='skill_details-icon'/></h4>
                <small className='text-light'>Beginner</small>
            </article>
            <article className='skill_details'>
                <h4>BOOTSTRAP <AiFillCheckCircle className='skill_details-icon'/></h4>
                <small className='text-light'>Beginner</small>
            </article>
            <article className='skill_details'>
                <h4>MONGO DB <AiFillCheckCircle className='skill_details-icon'/></h4>
                <small className='text-light'>Beginner</small>
            </article>
            <article className='skill_details'>
                <h4>GIT & GITHUB <AiFillCheckCircle className='skill_details-icon'/></h4>
                <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>
      {/* End of tech skills  */}

        <div className="soft_skills">
        <h3>Soft Skills</h3>
        <article className='skill_details'>
                <h4>Active Listening Skills <AiFillCheckCircle className='skill_details-icon'/></h4>
                <small className='text-light'>Intermediate</small>
            </article>
            <article className='skill_details'>
                <h4>Time ManageMent Skills <AiFillCheckCircle className='skill_details-icon'/></h4>
                <small className='text-light'>Basic</small>
            </article>
            <article className='skill_details'>
                <h4>Communication Skills <AiFillCheckCircle className='skill_details-icon'/></h4>
                <small className='text-light'>Basic</small>
            </article>
            <article className='skill_details'>
                <h4>Problem Solving <AiFillCheckCircle className='skill_details-icon'/></h4>
                <small className='text-light'>Intermediate</small>
            </article>
            <article className='skill_details'>
                <h4>Puzzle Solving <AiFillCheckCircle className='skill_details-icon'/></h4>
                <small className='text-light'>Basic</small>
            </article>
        </div>
      </div>
    </section>
  )
}

export default Experience