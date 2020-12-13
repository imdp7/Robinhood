import React from "react";
import Grid from '@material-ui/core/Grid'; 
import Newsfeed from './Newsfeed.js';
import Stats from './Stats.js';

function Main() {
  return (
    
    <Grid
      container
      direction="row"
    >
        <Grid item xs={8}>
          <div>
            <Newsfeed />
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
            <Stats />
          </div>
        </Grid>
      
    
    </Grid>
  );
  }

export default Main;
