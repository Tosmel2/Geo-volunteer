import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Cart = () => {
  return (
    <div>
      <Navbar />
      <Hero title={'CART'} middle={'CART'} />
      {/* <Carousel /> */}
      <Footer />
    </div>
  )
}

export default Cart
