import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SideMenu from '../components/SideMenu'
import CartBox from '../components/CartBox'
import styled from 'styled-components'


const DivBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Cart = () => {
  return (
    <div>
      <Navbar />
      <Hero title={'CART'} middle={'CART'} />
      <DivBox>
        <SideMenu />
        <CartBox />
      </DivBox>
      <Footer />
    </div>
  )
}

export default Cart
