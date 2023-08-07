
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import { BestOfElectronics } from '../../assets/utils/constants';
import {Main,BoxContainer, SideProduct, Middle,CardBox } from "./style";
import image32 from "../../assets/images/plane.jpeg";



const responsive= {
  desktop: {
      breakpoint: {  max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 6,
      slidesToSlide: 1,
    },
}
function CardCarouselreact() {
    
    const navigate=useNavigate()
  return (
    <Main>

    <BoxContainer>
      <SideProduct>
      <img src={image32} alt="" />
      </SideProduct>
      
      
       
         <Middle>
          <Carousel
          className="carousel1"
       swipeable={false}
       draggable={false}
       responsive={responsive}
       ssr={true} // means to render carousel on server-side.
       infinite={true}
       autoPlaySpeed={1000}
       keyBoardControl={true}
       Transition="ease-in"
       transitionDuration={500}
       removeArrowOnDeviceType={["tablet", "mobile"]}>
       {
        BestOfElectronics.map((item)=>{
                 return(
              <CardBox  onClick={()=>navigate(`/${item.id}`)}
               key={item.id}>
              <img className="product--image" src={item.url} alt="Product" />
              <Typography>{item.name}</Typography>
              <Typography>{item.price}</Typography>
              <Typography>{item.brand}</Typography>
              
            </CardBox>
            )
        })
      }
      
       </Carousel>
       </Middle> 
      
      <SideProduct>
       <img src={image32} alt="" />
      </SideProduct>
    </BoxContainer>
   </Main>
  )
}

export default CardCarouselreact