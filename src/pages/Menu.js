import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Menu = () => {
  return (
    <div>
      <Navbar />
      <Hero title={'MENU LIST'} middle={'MENU'} />
      <Footer />
    </div>
  )
}

export default Menu