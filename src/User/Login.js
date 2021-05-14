import React from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import SignIn from './SignIn'
import'./Login.css'

function Login() {
    return (
        <div>
            <Container maxWidth='lg' >
      <Box display="flex" width="100%">
        <Box width="120%" >     
         <img className='css-1ox8jnp' src='https://cdn.robinhood.com/assets/generated_assets/1e23d6b90f0d905b425ea289de345ab1.jpg' />
          </Box>
        <Box  width="100%">
          <SignIn/>
        </Box>
      </Box>
    </Container> 
        </div>
   
    )
}

export default Login
