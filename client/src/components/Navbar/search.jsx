import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { InputContainer } from "./styles"

function search() {
  return (
    
<InputContainer>
    <input type="text" placeholder='Search for more products' />
    <SearchIcon/>
</InputContainer>
  )
}

export default search