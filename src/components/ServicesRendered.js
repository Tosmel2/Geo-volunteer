import React from 'react'
// import training from '../../src/assets/training.svg';
// import './services.css'
import { useColorModeValue } from '@chakra-ui/react';

const ServicesRendered = ({myImage, text, smallText}) => {
  return (
    <div className="renderSize" bg={useColorModeValue('gray.100', '#2B3252')}>
      <img src={myImage} alt='mine' />
      <h2 style={{fontWeight:'bold', fontSize:'1.2rem'}}>{text}</h2>
      <p>{smallText}
      </p>
    </div>
  )
}

export default ServicesRendered