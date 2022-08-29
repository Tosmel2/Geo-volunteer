import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero title={'ABOUT US'} middle={'ABOUT'} />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default About