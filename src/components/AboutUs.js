import React from 'react'
import homeus from '../../src/assets/homeus.jpg';
// import { Grid, GridItem } from '@chakra-ui/react'

const AboutUs = () => {
  return (
    <div>
      <h1 className='abtheading'>About Us</h1>
      <div className='aboutus'>
        <div className='left-aboutus'>
          <img src={homeus} alt='aboutus' style={{height:'80%', width:'100%', borderRadius:'10%'}}/>
        {/* <Grid
          h='550px'
          w={750}
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
          className='gridy'
          >
          <GridItem rowSpan={2} colSpan={1} bg='tomato' />
          <GridItem colSpan={2} bg='papayawhip' />
          <GridItem colSpan={2} bg='papayawhip' />
          <GridItem colSpan={4} bg='tomato' />
        </Grid> */}
        </div>
        <div className='right-aboutus'>
          <h1><i class="fas fa-utensils" style={{fontSize:'2rem', color:'#EF5455'}}></i> Sushi Food's story</h1>
          <p>CEO, Adewale Tosin, opened the first Sushi Foods Restaurant in Lagos on January 27, 2022. Today, 
            there are 7 branches all over West Africa. Sushi Foods Restaurants are well known with a
            substantial gathering of people including families, kids, seniors, and business experts.
            Our benevolent condition is perfect for praising unique events, facilitating a business lunch,
            or assembling for a flavorful dinner with loved ones. Open day by day for lunch and dinner,
            Sushi Foods offers a choice of naturally arranged things utilizing just the best fixings accessible.
          </p>
          <p>Our top picks incorporate crisp fish, rotisserie chicken, infant back pork ribs. New prepared pot pie,
            strength plates of mixed greens, wood-let go pizzas, pasta, sandwiches, burgers, and more. Sushi Food's 
            heated merchandise and treats including our Six-Layer Chocolate Motherlode Cake, Scratch Carrot Cake, and
            delectably rich cream cheddar pies are prevalent top choices with our visitors.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs