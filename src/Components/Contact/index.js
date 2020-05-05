import React from 'react'
import './contact.scss'
import linkedinicon from '../../Assets/linkedinport.svg'
import githubicon from '../../Assets/githubport.svg'

const Contact = () => {
  return (
    <div className='contact'>
        <h1>Contact</h1>
        <div className='line'></div>
        <a href='mailto:rileyehatch@gmail.com'><h2>rileyehatch@gmail.com</h2></a>
        <section>
        <a href='https://www.linkedin.com/in/riley-hatch-dev'>
            <img src={linkedinicon} alt='link to linkedin'/>
            <p>linkedin</p>
        </a>
        <a href='https://www.github.com/rileyeh'>
            <img src={githubicon} alt='link to github'/>
            <p>github</p>
        </a>
        </section>
    </div>
  )
}

export default Contact