import React from 'react'
import './App.scss'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import {Element} from 'react-scroll'

const App = () => {
  return (
    <div className='app'>
      <main>
        <Header />

        <Element name={`about`}>
          <About />
        </Element>

        <Element name={`projects`}>
          <Projects />
        </Element>

        <Element name={`skills`}>
          <Skills />
        </Element>

        <Element name={`contact`}>
          <Contact />
        </Element>
      </main>
      <Footer />
    </div>
  )
}
 
export default App