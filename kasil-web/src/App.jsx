import React from 'react'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import CurrentProject from './components/CurrentProject'
import UpcomingProjects from './components/UpcomingProjects'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Hero />
      <Expertise />
      <CurrentProject />
      <UpcomingProjects />
      <Footer />
    </div>
  )
}

export default App
