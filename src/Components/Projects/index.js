import React, { useState } from 'react'
import './projects.scss'
import Photos from '../Photos'

const Projects = () => {
  const [photos, setPhotos] = useState('')

  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='line'></div>
      <div>
          <h2>Lister</h2>
          <h4>React | HTML5 | Sass | Context | Hooks | NodeJS | Express | Massive | PostgreSQL</h4>
          <p>+ Coded a list making app to practice hooks and React context</p>
          <p>+ Worked with DigitalOcean and Nginx to host (and figured out my fair share of problems)</p>
          <section>
            <a href='https://github.com/rileyeh/lister'><button>Github Repository</button></a>
            <a href='https://lister.rileyhatch.com'> <button>Live Site</button></a>
            <span onClick={() => setPhotos('list')}><button>Photos</button></span>
          </section>
          {photos === 'list' ?  <Photos setPhotos={setPhotos} id='list'/> : null}
          <div className='little-line'></div>
          <h2>BTLSRV</h2>
          <h4>React | HTML5 | CSS3 | NodeJS | Express | Massive PostgreSQL | Socket.io | Sass</h4>
          <p>+ Designed and styled the majority of the app</p>
          <p>+ Implemented HTML drag and drop for users to place pieces on a game board and wrote functions to handle illegal placements</p>
          <p>+ Handled data manipulation for storage and retrieval from the database</p>
          <section>
            <a href='https://github.com/btlsrv/btlsrv'><button>Github Repository</button></a>
            <a href='https://btlsrv.rileyhatch.com'> <button>Live Site</button></a>
            <span onClick={() => setPhotos('btl')}><button>Photos</button></span>
          </section>
          {photos === 'btl' ?  <Photos setPhotos={setPhotos} id='btl'/> : null}
          <div className='little-line'></div>
          <h2>Shut Eye</h2>
          <h4>React | HTML5 | CSS3 | Moment.js </h4>
          <p>+ First app I made by myself, when I was first learning React</p>
          <p>+ Implemented a date picker and used Moment.js to handle dates</p>
          <p>+ This is a database-less project</p>
          <section>
            <a href='https://github.com/rileyeh/shut-eye'><button>Github Repository</button></a>
            <a href='https://shuteye.rileyhatch.com'> <button>Live Site</button></a>
            <span onClick={() => setPhotos('shut')}><button>Photos</button></span>
          </section>
          {photos === 'shut' ?  <Photos setPhotos={setPhotos} id='shut'/> : null}
          <div className='little-line'></div>
          <h2>Caltrend</h2>
          <h3><span role='img' aria-label='construction barrier'>🚧</span> currently under construction <span role='img' aria-label='construction barrier'>🚧</span> </h3>
          <h4>React | HTML5 | CSS3 | NodeJS | Express | Massive PostgreSQL | Redux | ChartJS | Styled-Components</h4>
          <p>+ Designed, created, and hosted a fully functional, mobile responsive web app that tracks nutrition and weight</p>
          <p>+ Implemented a searchable USDA nutrition database and wrote a function to handle conversions</p>
          <p>+ Taught myself Chart.js and Styled-Components and integrated them into the project</p>
          <p>+ Won best overall app</p>
          <section>
            <a href='https://github.com/rileyeh/caltrend'><button>Github Repository</button></a>
            <a href='https://caltrend.rileyhatch.com'> <button>Live Site</button></a>
            <span onClick={() => setPhotos('cal')}><button>Photos</button></span>
          </section>
          {photos === 'cal' ?  <Photos setPhotos={setPhotos} id='cal'/> : null}
        </div>
    </div>
  )
}

export default Projects