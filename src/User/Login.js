import React,{useEffect} from 'react'
import SignIn from './SignIn'
import SplitPane from 'react-split-pane';

import'./Login.css'

function Login() {

  useEffect(() => {
    document.title = ` Sign In | Robinhood`;
  },[],6000);

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
    <SplitPane split="vertical" className="p-2 overflow-y-hidden">
          <div className="ml-4 w-full flex-0">
          <img className='h-full w-full' src='https://cdn.robinhood.com/assets/generated_assets/1e23d6b90f0d905b425ea289de345ab1.jpg' />
          </div>
          <div className='flex-1 justify-start w-full mt-16'>
            <SignIn/>
          </div>
        </SplitPane>
    )
}

export default Login
