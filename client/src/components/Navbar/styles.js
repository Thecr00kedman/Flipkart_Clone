import { AppBar, Box, styled, Toolbar } from '@mui/material'

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    width: "90%",
    maxWidth: "1400px",
    margin: "0 auto"
}));



export const LogoContainer = styled(Box) (({theme}) => ({
    display:'flex',
    justifyContent:"space-between",
    flexDirection:"row",
    "& > img ": {
        width:"80px",

    },

}));

export const InputContainer = styled(Box)(({ theme }) => ({
    flex:2,
    background: "white",
    display:"flex",
    width :"25rem",
    overflow: "Hidden",
    height : "35px",
    alignItems:"center",
    margin: "0 15px",
    borderRadius: "3px",
    "& > input": {
        height: "100%",
        flex: 2,
        padding: "0 1rem",
        border: "none",
        outline: "none",
    },
    "& > svg": {
        color: "#2974f1",
        marginRight: "1rem",
        cursor: "pointer",
    }

}));
 export const ButtonContainer = styled(Box)(({ theme }) => ({
    position:"relative",
    "& > Button": {
        color: "#2974f1",
        background: "white",
        padding: "5px 40px",
        borderRadius: "2px",
        margin: "0 15px",
        "hover":{
            background:"white",
        }

    }

 }));
 export const OtherLinkContainer = styled(Box)(({theme}) => ({
    display:"flex",
    
    
    "& > div": {
        cursor:"pointor",
        fontSize: "0.8rem",
        margin:"0px 15px",
        display:"flex",
        alignItems:"center"
    }

 }))
