import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SideMenu from '../components/SideMenu'

const Menu = () => {
  return (
    <div>
      <Navbar />
      <Hero title={'MENU LIST'} middle={'MENU'} />
      <SideMenu />
      <Footer />
    </div>
  )
}

export default Menu