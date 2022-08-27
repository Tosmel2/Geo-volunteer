import React from 'react'
// import training from '../../src/assets/training.svg';
// import './services.css'
import { useColorModeValue } from '@chakra-ui/react';

const ServicesRendered = ({myImage, text, smallText}) => {
  return (
    <div className="renderSize" bg={useColorModeValue('gray.100', '#2B3252')}>
      {/* <img src={myImage} alt='mine' /> */}
      <div style={{fontSize:'2rem', color:'#EF5455', marginBottom:'0'}}>{myImage}</div>
      <h2 style={{fontWeight:'bold', fontSize:'1.2rem', color:'#000000'}}>{text}</h2>
      <p style={{color:'#000000'}}>{smallText}</p>
    </div>
  )
}

export default ServicesRendered