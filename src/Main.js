import React from "react";
import Grid from '@material-ui/core/Grid'; 
import Newsfeed from './Newsfeed.js';
import Stats from './Stats.js';

function Main() {
  return (
    
    <Grid
      container
      direction="row"
      
      zeroMinWidth
    >
        <Grid item spacing={4} xs={10}>
          <div>
            <Newsfeed />
          </div>
        </Grid>
        <Grid item xs={2}>
          <div>
            <Stats />
          </div>
        </Grid>
      
    </Grid>
  );
  }

export default Main;
