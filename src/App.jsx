import React from 'react'
import './App.css'
import cardPic from "./images/profile.jpg"
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <main>
        <div>
          <img src={cardPic}/>
        </div>
        <div>
          <About />
        </div>
        <div>
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
