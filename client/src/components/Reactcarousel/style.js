import { Box, styled } from "@mui/material"; 

export const Container = styled(Box) (({theme}) => ({
width:"100%",
"& > div":{
    width:"100%",
    
},
"& img": {
    width:"100%",
    height:"250px",
    objectFit: "cover"

},
[theme.breakpoints.down("md")]:{
   
}

}))
export const CardCarousel = styled(Box)(({theme})=>({
  
    width:"33%",
    "& img":{
        width:"100%",
        height:"100%",
        ObjectFit:"Cover"
    }
}))
export const EndofSeasonSale =styled(Box)(({theme})=>({
    width:"33%",
    "& img":{
        width:"100%",
        height:"100%",
        ObjectFit:"Cover"
    }


}))
export const Foods =styled(Box)(({theme})=>({
    width:"33%",
    "& img":{
        width:"100%",
        height:"100%",
        ObjectFit:"Cover"
    }

}))


export const Main= styled(Box)(({theme})=>({

    maxWidth:'100%',
    height:'300px',
    overflow:'none',
    boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 3px 0px 0px 3px",


}))
export const BoxContainer = styled(Box)(({theme})=>({
 display:'flex',
 alignItems:"center",
  height:'100%',
  maxWidth:'100%',


}))
export const SideProduct = styled(Box)(({theme})=>({
    height:'100%',
    width:'100%',
    "& >img":{
         
       
        width:'100%',
    }
}))
    
export const CardBox = styled(Box)(({theme})=>({    
    padding:'15px 8px',
    width:'10rem',
    cursor:'pointer',
    alignItems:'center',
    textAlign:'center',
    
    
    
    '& >img':{
        
        maxWidth:'100%',
        objectFit:'cover',
        
        
    }
}))
export const Middle = styled(Box)(({theme})=>({
    width:'100px',
    height:"60px",
    '& div':{
        width:"100%",
        // height:"100%,"
    },
    
    height:'100%',
     width:'70%',

      
    }))
