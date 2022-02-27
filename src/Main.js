import React , {useEffect} from "react"; 
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import Newsfeed from './Newsfeed.js';
import Stats from './Stats.js';

function Main() {

  useEffect(() => {
    document.title = `Portfolio | Robinhood`;
  },[]);

  return (
    
    <Container  >
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


