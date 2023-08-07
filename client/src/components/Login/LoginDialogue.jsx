import React, {useState} from 'react'
import { Link,Dialog,Typography, Box, Grid } from '@mui/material'
import logo23 from '../../assets/images/logo23.png'
import { PopupBox,Left,Right } from './style'



const LoginDialogue = ({open, closeDbox})=> {
    const [login,setLogin] = useState({
        email: "",
        password:""
    });
    const [signup,setSignup] = useState({
        phone:"",
        name:"",
        emailid:""
    
    });
    const[toggle,setToggle] = useState(false)
    const handleLogin = (e)=>{
        e.preventDefault();
        console.log(login)

    }
    const handleSignup =(e)=>{
        e.preventDefault();
        console.log(signup)

    }
    return (
        <Dialog open ={open} onClose={closeDbox} >
   
        

         <PopupBox>
                
                 
                  {
                    !toggle ?(
                    <>
                    <Left>
                   
                 
                   <div>
                   <h2>Login</h2><br />
                   <p>Get access to your Orders, Wishlist and Recommendations</p>
                   </div>
                   
                  
                  
                   <img src={logo23} alt="" />
                  
                  </Left>
                  <Right>
                   <div style={{display:'flex',justifyContent:'space-evenly', flexDirection:'column' }}>
                   <input type="text" placeholder='Enter Email/ Mobile Number' />
                   <Typography fontSize={'12px'}>By continuing, you agree to Flipkart <Link>Terms of Use</Link> and <Link>Privacy Policy.</Link></Typography>
                   <button style={{padding:'8px'}}>Request Otp</button>
                   </div>
                   <Link style={{textDecoration:"none",cursor:'pointer'}} fontSize={'12px'}onClick={() => setToggle(true)}>New to Flipkart? Create an account</Link>
                  </Right></>)
                  
                  :(
                  <>
                  <Left>
                   <div>
                   <h2>Looks like you're new here!</h2><br />
                   <p>Sign up with your mobile number or email Id to get started</p>
                   </div>
                   <img src={logo23} alt="" />
                     </Left>
                     <Right>
                   <div>
                    <div style={{padding:'8px'}} >
                   <input type="text" placeholder='Enter Email/ Mobile Number' />
                   <input type="password" placeholder='Enter your password' />
                   </div>
                   
                   <div style={{padding:'8px'}}><button>Signup</button></div>
                   <div style={{padding:'8px'}}><button onClick={() => setToggle(false)}>Existing User? Login</button></div>
                   </div>
                   
                  </Right>
                  </>)
                  }
                
        </PopupBox> 
        </ Dialog>
    )
}

export default LoginDialogue