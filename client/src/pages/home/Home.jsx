import React from 'react'
import {Box} from '@mui/material'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/footer'
import Discount from '../../components/Discount/discount'
import Slider from '../../components/Reactcarousel/Slider'
import LoginDialogue from '../../components/Login/LoginDialogue'
import EndofSeason from '../../components/Reactcarousel/EndofSeason'
import CardCarouselreact from '../../components/Reactcarousel/CardCarouselreact'

import { useState } from 'react'


function Home() {
  
  const[open, setOpen] =useState(false); 
    const openDbox = ()=> {
        setOpen(true);
    }
    const closeDbox= ()=> {
      setOpen(false)
    }
  return (
    <>
    <Navbar openDbox={openDbox}/>
    <Box style={{width:'1280px',margin:'0 auto',overflow:'hidden'}}>
    <Header/>
    <LoginDialogue open={open} closeDbox={closeDbox}/>
    <Slider/>
    <CardCarouselreact/>
    <EndofSeason/>
    
    <Footer/>
    </Box>
    
    
    
    </>
  )
}

export default Home