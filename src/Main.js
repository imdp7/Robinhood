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
        <Grid item xs={10}>
          <div>
            <Newsfeed />
          </div>
        </Grid>
        <Grid item >
          <div>
            <Stats />
          </div>
        </Grid>
      
    </Grid>
  );
  }

export default Main;
