import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BeautyFood, ReactCarousel } from "../../assets/utils/constants";
import { Box } from "@mui/material";
import { Container } from './style';

const responsive = {
  superLargeDesktop: {
    breakpoint: {   max: 4000, min: 3000 },
    items: 1,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: {  max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  },
}

function Slider() {
  return (
    <Container>
    <Carousel 
    
      Swipable={false}
      draggable={false}
      showdots={true}
      responsive={responsive}
      ssr={true} 
      infinite={true}
      autoPlay={true}
      autoplayspeed={1000}
      keyBoardControl={true}
      Transition="ease-in"
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px">
        {

            ReactCarousel.map((img)=>(
            <Box key={img.id}>
              <img src={img.url} alt=''/>
              

            </Box>
          ))
        }
      
    
    </Carousel>
  </Container>
  )
}

export default Slider