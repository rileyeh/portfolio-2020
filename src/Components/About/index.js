import React from 'react'
import './about.scss'
import headshot from '../../Assets/squareheadshot.jpg'

const About = () => {
  return (
    <div className='about'>
      <h1>Hello!</h1>
      <div className='line'></div>
      <img src={headshot} alt='head shot' />
      <p>I'm Riley, a full stack web developer who specializes in JavaScript, ReactJS, HTML, CSS, NodeJS, and PostgreSQL. I enjoy teaching, learning, and problem solving. Outside of work, you can find me with my family and friends, outside with my dog, or with a book. I also enjoy reading, playing games, hand lettering, and drawing. I love web development because it combines logic and design.</p>
    </div>
  )
}

export default About