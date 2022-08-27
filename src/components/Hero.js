import React from 'react'
// import homebg from '../../src/assets/homebg.png'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  // BreadcrumbSeparator,
} from '@chakra-ui/react'

const Hero = ({middle='ABOUT', title='ABOUT US'}) => {
  return (
    <div 
    className='hero'
    // style={{ 
    //   backgroundImage: `url(${'homebg'})`,
    //   backgroundRepeat: 'no-repeat',
    //   height:'60vh' 
    // }}
    >
      <h1 style={{fontSize:'1.8rem', fontWeight:'bold', color:'white'}}>{title}</h1>
      <Breadcrumb>
        <BreadcrumbItem style={{fontSize:'1.5rem', fontWeight:'bold', color:'white'}}>
          <BreadcrumbLink href='/' style={{fontSize:'1.5rem', fontWeight:'bold', color:'white'}}>HOME</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem style={{fontSize:'1.5rem', fontWeight:'bold', color:'white'}}>
          <BreadcrumbLink href='#' style={{fontSize:'1.5rem', fontWeight:'bold', color:'#EF5455'}}>{middle}</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#contact' style={{fontSize:'1.5rem', fontWeight:'bold', color:'white'}}>CONTACT</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      {/* <h1>Welcome to <span style={{color:'#ffc107'}}>Foodie</span></h1> */}
    </div>
  )
}

export default Hero