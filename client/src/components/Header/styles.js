import { fontWeight, height } from "@mui/system";
import { Box, styled } from "@mui/material";



export const Container =styled(Box)(({theme})=>
({
    height:'126px',
    width:'100%',
    background:'white',
    marginTop:'4rem',
    
    boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    "p":{
        fontSize:'14px',
        fontWeight:'bold',
        textAlign:'center'
    }
}))
export const Image = styled(Box)(({theme})=>
    ({
        height:'80px',
        width:'80px',
        overflow:'hidden',
        padding:'11px 8px',
        borderRadius:"50%",
        "& > img": {
            ObjectFit:'cover',
            width:'100%',
            height:'100%',
        }
    }))

    export const ItemContainer = styled(Box)(({theme})=>({
        maxWidth:'1280px',
        maxHeight:'100px',
        display:'flex',
        margin:"0 auto",
        justifyContent:"space-between",
        alignItems: "center",
        "& > div": {
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            cursor:'pointer',
            "& :hover":{
                color: "#2974f1",
            }
        },
    }))