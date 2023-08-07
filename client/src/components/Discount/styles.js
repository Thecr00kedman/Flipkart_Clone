import { Box, styled } from "@mui/material";
export const Container = styled(Box)((theme)=> ({
    width:"100%",
    height:"110px",
    padding:"2px",
    background:"white",
    "& > img":{
        height:"100%",
        width:"100%",
    
    }
}))