import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import'./Login.css'
import { Route } from 'react-router-dom';
import PasswordReset from './PasswordReset';
import index from '../Common';
import Home from '../Home';
import Stock from '../Stock';

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

          <Route path="/" component={index}  exact={true}/>
          <Route path="/login" component={SignIn}  exact={true}/>
          <Route path="/register" component={SignUp} exact={true}/>
          <Route path="/resetPassword" component={PasswordReset} exact={true}/>
          <Route path="/us/en/" component={Home} exact={true}/>
          <Route path="/stock/:id" component={Stock} exact={true}/>
          </div>
    )
}

export default Login
