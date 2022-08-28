import React from 'react'
import styled from 'styled-components'
// import s from '../../src/assets/s.svg';
// import house from '../../src/assets/house.svg';
// import spoon from '../../src/assets/spoon.svg';

const Wrapper = styled.section`
  padding: 2rem;
  background: #2B3252;
  color: #EF5455;
  font-size: 1.5rem;
  font-weight: bold;
  width: 10px;
  height: 90vh;
  border-radius: 10px;
  margin: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Diver = styled.div`
  background: #EF5455;
  color: #2B3252 ;
  padding: 1.1rem;
`;

const SideMenu = () => {
  return (
    <div>
      <Wrapper>
        <div><i class="fa-solid fa-house"></i></div>
        <div><i class="fa-solid fa-utensils"></i></div>
        <Diver><i class="fa-solid fa-cart-shopping"></i></Diver>
        <div><i class="fa-solid fa-location-dot"></i></div>
        <div><i class="fas fa-sign-out"></i></div>
      </Wrapper>

    </div>
  )
}

export default SideMenu