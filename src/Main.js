import React from "react"; 
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import Newsfeed from './Newsfeed.js';
import Stats from './Stats.js';

function Main() {
  return (
    
    <Container maxWidth='lg' >
      <Box display="flex" width="100%">
        <Box width="70%" >     
          <Newsfeed/>
          </Box>
        <Box  width="30%">
          <Stats/>
        </Box>
      </Box>
    </Container>
  );
  }

export default Main;
