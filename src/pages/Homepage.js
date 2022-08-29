import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import Contact from '../components/Contact'
import AboutUs from '../components/AboutUs'

const Homepage = () => {
  return (
    <div className='home'>
      <Navbar />
      <Carousel />
      <Services />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default Homepage