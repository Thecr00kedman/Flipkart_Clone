import { Container, Image, ItemContainer } from "./styles"
import {headerData} from '../../../src/assets/utils/constants'
import { Box, Typography } from "@mui/material"


function Header() {
  return (
    <Container>
        <ItemContainer>
            {
                headerData.map((item, index)=>
                <Box key={index}>
                    <Image>
                        <img src={item.url} alt="" />
                    </Image>
                    <Typography>
                        {item.text}
                    </Typography>
                </Box>)
            }
        </ItemContainer>
    </Container>
  )
}

export default Header