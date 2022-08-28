import React from 'react'
import styled from 'styled-components'


const CartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
  background: #EF5455;
  padding: 1rem;
  width: 100%;
  .leftcart{
    width: 60%;
    background: #2B3252;
    height: 100%;
  }
  .rightcart{
    width: 35%;
    background: #ffffff;
    height: 100%;
  }
`;

const CartBox = () => {
  return (
    <div style={{border:'2px solid blue', width:'100%'}}>
      <h1 style={{fontSize:'1.8rem', paddingLeft:'2rem'}}>CART</h1>
      <CartWrapper className='CartWrapper'>
        <div className='leftcart'></div>
        <div className='rightcart'></div>
      </CartWrapper>
    </div>
  )
}

export default CartBox