import React from 'react';
// import development from '../../src/assets/development.svg'
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
// import ButtonBox from './ButtonBox';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Welcome to Geo Volunteer',
      text:
        "The early days of GIS were very lonely.",
      image:
      'https://media.istockphoto.com/photos/map-of-urban-city-area-with-coloured-geospatial-data-for-gis-usage-picture-id1337105602?k=20&m=1337105602&s=612x612&w=0&h=4AyNJTQjwXZy8fvU3JtDB3krWLEmaaQsxN61Ab-kwbY=',
    },
    {
      title: 'GIS is a form of digital mapping technology.',
      text:
        "GIS is waking up the world to the power of geography, this science of integration, and has the framework for creating a better future.",
      image:
        'https://media.istockphoto.com/photos/russia-3d-render-topographic-map-color-border-picture-id1355609823?k=20&m=1355609823&s=612x612&w=0&h=5-PX5dcUk5HOS_AtHqSG0AACaapK_tOTEWe4Tb18faY=',
    },
    {
      title: "Welcome to Geo Volunteer'",
      text:
        "The drawing of a parallel between cartography and architecture is instructive.",
      image:
        'https://media.istockphoto.com/photos/surveying-picture-id479267933?k=20&m=479267933&s=612x612&w=0&h=4ONjWBoAqi0TYO9WvPwJ0YBauYBM_TWDsegf4BO7quY=',
    },
  ];
  
   return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="30px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="30px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'6xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '4rem' }} fontFamily='nunito' fontWeight={700} color='white'>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}