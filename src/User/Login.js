import React from 'react'
import SignIn from './SignIn'
import SplitPane from 'react-split-pane';
import'./Login.css'
import { Route } from 'react-router-dom';

function Login() {

    return (
    //    <div class="container">
    //        <Container maxWidth='lg' >
    //   <Box display="flex" width="100%">
    //     <Box width="120%" >     
    //      <img className='css-1ox8jnp' src='https://cdn.robinhood.com/assets/generated_assets/1e23d6b90f0d905b425ea289de345ab1.jpg' />
    //       </Box>
    //     <Box  width="100%">
    //       <SignIn/>
    //     </Box>
    //   </Box>
    // </Container>  
    //     </div>
    
    <SplitPane split="vertical" className="">
      <div className='flex flex-wrap bg-white overflow-y-hidden'>
      <div className='w-auto md:w-auto'>
          <img className='object-contain h-auto' alt='login' src='https://cdn.robinhood.com/assets/generated_assets/1e23d6b90f0d905b425ea289de345ab1.jpg' />

      </div>
      <div className="flex flex-row flex-wrap  md:align-center max-w-screen-2xl">
          <Route path="/">
            <SignIn/>
            </Route>
      </div>
      </div>
    </SplitPane>
    )
}

export default Login
