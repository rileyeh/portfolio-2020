import React from 'react'
import './skills.scss'
import css from '../../Assets/css-3.png'
import html from '../../Assets/html5.png'
import express from '../../Assets/express.png'
import java from '../../Assets/javascript.png'
import node from '../../Assets/node.png'
import postgres from '../../Assets/PostgreSQL.png'
import reacticon from '../../Assets/React-icon.png'
import redux from '../../Assets/redux.png'

const Skills = () => {
  return (
        <div className='skills'>
          <h1>Skills</h1>
          <div className='line'></div>
          <section>
            <div>
                <img src={java} alt=''/>
                <p>javascript</p>
            </div>
            <div>
                <img src={css} alt=''/>
                <p>css3</p>
            </div>
            <div>
                <img src={html} alt=''/>
                <p>html5</p>
            </div>
            <div>
                <img src={reacticon} alt=''/>
                <p>react</p>
            </div>
            <div>
                <img src={node} alt=''/>
                <p>nodejs</p>
            </div>
            <div>
                <img src={redux} alt=''/>
                <p>redux</p>
            </div>
            <div>
                <img src={express} alt=''/>
                <p>express</p>
            </div>
            <div>
                <img src={postgres} alt=''/>
                <p>postgresql</p>
            </div>
          </section>
        </div>
    )
}

export default Skills
