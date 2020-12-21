import React from "react"; 
import Box from '@material-ui/core/Box';
import Newsfeed from './Newsfeed.js';
import Stats from './Stats.js';

function Main() {
  return (
    
    <div style={{ width: '85%'}}>
      <Box display="flex" p={1}>
        <Box p={1} width="100%" style={{marginLeft:'-100px' }}>
          <Newsfeed/>
        </Box>
        <Box p={1} flexShrink={1}>
          <Stats/>
        </Box>
      </Box>
    </div>
  );
  }

export default Main;
