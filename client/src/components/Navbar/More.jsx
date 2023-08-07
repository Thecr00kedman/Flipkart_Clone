import { useState } from "react";
import React from 'react'
import {Box} from '@mui/material'
import {Menu, MenuItem} from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import MovingIcon from '@mui/icons-material/Moving';
import DownloadIcon from '@mui/icons-material/Download';
function More({hideDropdown, open}) {
   
const Moreopen =Boolean(open)
  return (
    <Menu open={Moreopen} onClose={hideDropdown} anchorEl={open}>
        
        <MenuItem><NotificationsIcon style={{color:"#1976d2"}}/>&nbsp; Notification Preferences</MenuItem>
        <MenuItem><HelpCenterIcon style={{color:"#1976d2"}}/>&nbsp; 24x7 Customer Care</MenuItem>
        <MenuItem><MovingIcon style={{color:"#1976d2"}}/>&nbsp; Advertise</MenuItem>
        <MenuItem><DownloadIcon style={{color:"#1976d2"}}/>&nbsp; Download App</MenuItem>
    </Menu>
    
  )
}

export default More;