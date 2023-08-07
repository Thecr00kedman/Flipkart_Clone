import { Box, Divider, Grid, Typography } from '@mui/material'
import { Bottom, Container, Left, Right } from './styles'
import { aboutLinks, bottom, consumerPolicy, helpLinks, socialLinks } from '../../assets/utils/constants'
import { Link } from 'react-router-dom'

function footer() {
  return (
   
    <Container>
        <Grid container>
              <Grid item xs={12} lg={7} md={12} sm={12}>
                <Left>
                    <Box>
                        <Typography>
                        ABOUT
                        </Typography>
                        {
                                aboutLinks.map((link) => (
                                    <Link key={link.id} >
                                        {link.name}
                                    </Link>
                                ))
                            }

                    </Box>
                    <Box>
                        <Typography>
                        HELP
                        </Typography>
                        {
                            helpLinks.map((link)=>(
                                
                                <Link key={link.id}>
                                    {link.name}
                                
                                </Link>
                            ))
                        }
                    </Box>
                    <Box>
                        <Typography>
                        Consumer Policy
                        </Typography>
                        {
                            consumerPolicy.map((link)=>(
                                <Link key={link.id}>
                                    {link.name}
                                
                                </Link>
                            ))
                        }
                    </Box>
                    <Box>
                        <Typography>
                        Social
                        </Typography>
                        {
                            socialLinks.map((link)=>(
                                <Link key={link.id}>
                                    {link.name}
                                
                                </Link>
                            ))
                        }
                    </Box>
                </Left>
            
              </Grid>
              <Grid item lg={5} md={12} sm={12} xs={12} >
                    <Right>
                         <Box sx={{ borderLeft: { lg: "1px solid #878787", md:"1px solid #878787" } }} >
                            <Typography>Mail Us:</Typography>
                            <Box>
                                Flipkart Internet Private Limited,
                                Buildings Alyssa, Begonia &
                                Clove Embassy Tech Village,
                                Outer Ring Road, Devarabeesanahalli Village,
                                Bengaluru, 560103,
                                Karnataka, India
                            </Box>
                         </Box>
                         <Box>
                            <Typography>Registered Office Address</Typography>
                            <Box>
                                Flipkart Internet Private Limited,
                                Buildings Alyssa, Begonia &
                                Clove Embassy Tech Village,
                                Outer Ring Road, Devarabeesanahalli Village,
                                Bengaluru, 560103,
                                Karnataka, India
                                CIN : U51109KA2012PTC066107
                                Telephone: <span>044-45614700</span>
                            </Box>
                        </Box>
                    </Right>
                </Grid>
        </Grid>
        <Divider sx={{ border: "1px solid #454d5e" }} />
   
        <Bottom>
                <Box>
                    {
                        bottom.map((data) => (
                            <span key={data.id} >
                                <img src={data.src} alt="" />
                                <Typography>{data.text}</Typography>
                            </span>
                        ))
                    }
                </Box>
            </Bottom>

    </Container>
  )
}

export default footer