import React from 'react'
import CV from '../../assests/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} target="_blank" rel="noreferrer" className='btn'>View CV</a>
        <a href="/contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA