import React, { useState } from 'react'
import { AppBar, Box, Button } from '@mui/material'
import logo from "../../assets/images/logo.jpg"
import Search from './search'
import More from './More'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { ButtonContainer, LogoContainer, StyledToolbar, OtherLinkContainer } from './styles'
// import LoginMenu from './LoginMenu'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar({openDbox}) {
    const[handleOpen,sethandleOpen] = useState(null);
    const showDropdown=(e)=>{
        sethandleOpen(e.currentTarget);
    }
    const hideDropdown = ()=> {
        sethandleOpen(null);
    }
    
  return (
    <>
    <AppBar>
        <StyledToolbar>
            <LogoContainer>
                <img src={logo} alt="logo" />
                <Search/>
            </LogoContainer>
            <ButtonContainer>
                <Button onClick={openDbox}>Login</Button> 
                
            </ButtonContainer>
            
            
            <OtherLinkContainer>
                <Box>Become a Seller</Box>
                <Box onClick={showDropdown}>More{handleOpen?<KeyboardArrowUpIcon/>:<ExpandMoreIcon/>}</Box>
                <More hideDropdown={hideDropdown} open={handleOpen}/>
                <Box>Cart<ShoppingCartIcon/></Box>
            </OtherLinkContainer>
        </StyledToolbar>
    </AppBar>
     </>
  )
}

export default Navbar