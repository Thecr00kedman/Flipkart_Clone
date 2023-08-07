/* eslint-disable no-unused-vars */
import { Box, styled } from "@mui/material";


export const Container = styled(Box)(({theme})=>({
    background: "#172337",
}))

export const Left = styled(Box)(({ theme }) => ({
    padding: "2rem 1rem 2rem 5.5rem",
    display: "flex",
    "& > div": {
        flex:1,
        fontSize: "12px",
        display: "flex",
        flexDirection: "column",
        "& > p": {
            color: "#878787",
            textTransform: "uppercase",
            marginBottom: "1rem",
            fontSize: "12px",
        },
        "& > a": {
            textDecoration: "none",
            color: "white",
            margin: "4px 0",
            ":hover": {
                textDecoration: "underline"
            }
        }
    }
}))


export const Right = styled(Box)(({ theme }) => ({
    padding: "2rem 1rem 2rem 4rem",
    display: "flex",
    "&> div":{
        width:"50%",
        fontSize: "12px",
        color:"white",
        padding:"0 1.5rem",
        "& > p": {
            color: "#878787",
            textTransform: "uppercase",
            marginBottom: "1rem",
            fontSize: "12px",
        },
        "& span":{
            color:"#2874f0"
        }
    },
}))

export const Bottom = styled(Box)(({theme})=>({
    padding:"25px 0",
    "& > div":{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-evenly",
        flexWrap:"wrap",
        "& > span":{
            display:"flex",
            alignItems:"center",
            margin:"10px",
            "& > p":{
                fontSize:"14px",
                color:"white",
                marginLeft:"8px"
            }
        }
    }
}))