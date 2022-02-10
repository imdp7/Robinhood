import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
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
    
    <div>
          <Route path="/" component={SignIn} exact="true" />
          <Route path="/account/register" component={SignUp}/>
          </div>
    )
}

export default Login
