import React,{ useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'; 
import axios from "axios";
import StockData from './StockData'
import Stats from './Stats'
import {key} from "./api";


const KEY_URL = `&token=${key}`;

function Stock({match}) {
    const [profile,setProfile] = useState([]);

    useEffect((k) => {
        if (match) {
            return axios
              .get(`https://finnhub.io/api/v1/stock/profile2?symbol=${match.params.name}${KEY_URL}`)
              .then((res) => {
                let profile = res.data;
                setProfile(profile);
                })
              .catch((error) => {
                console.error("Error", error.message);
              });
            }
        },[]);

    return (
      <Grid
      container
      direction="row"
      zeroMinWidth
    >
        <Grid item xs={8}>
          <div>
            <StockData profile={profile} 
            key={profile.name} 
            name={profile.name}
            ticker={profile.ticker}  
            />
          </div>
        </Grid>
        <Grid item xs={4} spacing={12}>
          <div>
            <Stats/>
          </div>
        </Grid>
      
    </Grid>
    )
}

export default Stock
