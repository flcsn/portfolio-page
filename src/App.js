import React from 'react'

import Intro from './components/Intro'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='flex flex-col'>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App