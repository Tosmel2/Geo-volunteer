import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import TeamMembers from '../components/TeamMembers'
import AboutUs from '../components/AboutUs'

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero title={'ABOUT US'} middle={'ABOUT'} />
      <AboutUs />
      <TeamMembers />
      <Footer />
    </div>
  )
}

export default About