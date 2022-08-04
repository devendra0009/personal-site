import React from 'react'
import './Projects.css'// import Swiper core and required modules
import{ Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import IMG1 from '../../assests/words.jpg'  //here imprt project images
import IMG2 from '../../assests/calc2.jpg'  


const data=[
  {
    id :1,
    image:IMG1,
    title:'Word Twin',
    description:'ReactJs made Word Twin app which fetches the synonym or related word of a inputted word.',
    github:'https://github.com/devendra0009/Word_Twin',  //for github link of project
    demo:'https://devendra0009.github.io/Word_Twin/'  //project link
  },
  {
    id :1,
    image:IMG2,
    title:'Calculator',
    description:'Made purely using ReactJS. With basic calculator functions. like addition ,multiplication. Used "useReduce" hook.',
    github:'https://github.com/devendra0009/Calculator',  //for github link of project
    demo:'https://devendra0009.github.io/Calculator/'  //project link
  },
  // {
  //   id :1,
  //   image:IMG1,
  //   title:'Word Twin',
  //   description:'Hi',
  //   github:'/',  //for github link of project
  //   demo:'/'  //project link
  // },
  // {
  //   id :1,
  //   image:IMG1,
  //   title:'Word Twin',
  //   description:'Hi',
  //   github:'/',  //for github link of project
  //   demo:'/'  //project link
  // },
  // {
  //   id :1,
  //   image:IMG1,
  //   title:'Word Twin',
  //   description:'Hi',
  //   github:'/',  //for github link of project
  //   demo:'/'  //project link
  // },

]

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Personal Projects</h5>
      <h2>Portfolio</h2>

      <Swiper className="container projects_container"
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      slidesPerGroup={1}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      >

       {
        data.map(({id,image,title,description,github,demo},index)=>{
          return(
            <SwiperSlide key={index} className='project_item slide'>
          <div className="project_item-image">
            <img src={image} alt="project_image" />
          </div>
          <h3>{title}</h3>
          <small>{description}</small>
          <div className="project_item-cta">
          <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </SwiperSlide>

          )
        })
       }
        
        </Swiper>
    </section>
  )
}

export default Projects