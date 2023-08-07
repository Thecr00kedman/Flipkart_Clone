import {styled,Box} from "@mui/material"
export const Left = styled(Box)(({theme})=>({
    background:'#2874f0',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    color:'white',
    alignItems:'center',
    padding:'56px 35px 16px',
    '&>img':{
        width:'200px',
        height:'auto',
    }
    
}))
export const Right = styled(Box)(({theme})=>({
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
   
    alignItems:'center',
    padding:'56px 35px 16px',
    '&<div':{
     padding:'5px',
  },
  "& > div >":{
   gap:'10px'
  },

    "& div > input":{
        width:'100%',
        height:"40px",
        borderTop:'none',
        borderLeft:'none',
        
        borderRight:'none',
        borderBottom:'1px solid #e0e0e0',
        outline:'none',
    },
    "& div > button":{
        cursor:'pointer',
            width:'100%',
            height:'45px',
            background:'#fb641b',
            color:'white',
            border:'none',
            borderRadius:'3px'

    },
    
    
}))
export const PopupBox = styled(Box)(({theme})=>({

    display:"grid",
    gridTemplateColumns:'1fr 2fr',
    height:'500px',
    width:'100%',
    overflow:'hidden'
   

}))
