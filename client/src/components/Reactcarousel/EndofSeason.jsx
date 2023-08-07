import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { EndSeason } from "../../assets/utils/constants";
import { Box, Typography } from "@mui/material";
import {  useNavigate } from "react-router-dom";
import image32 from "../../assets/images/plane.jpeg";
import {Main,BoxContainer, SideProduct, Middle,CardBox } from "./style";



const responsive= {
    desktop: {
        breakpoint: {  max: 3000, min: 1024 },
        items: 6,
        slidesToSlide: 2,
        
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 2,
        partialVisibilityGutter:30,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        slidesToSlide: 3,
        items: 2,
        partialVisibilityGutter:30,
      },
  }


function EndofSeason() {
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
        EndSeason.map((item)=>{
                 return(
              <CardBox onClick={()=>navigate(`/${item.id}`)}
               key={item.id}>
              <img className='CardContainer' src={item.url} alt="Product" />
              <Typography>{item.name}</Typography>
              <Typography>{item.price}</Typography>
              
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

export default EndofSeason