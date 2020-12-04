import React,{ useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'; 
import axios from "axios";
import StockData from './StockData'
import Trade from './Trade'
import {key} from "./api";

const KEY_URL = `&rapidapi-key=${key}`;

function Stock({match}) {
    const [profile,setProfile] = useState([]);

    useEffect(() => {
        if (match) {
            return axios
              .get(`https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=${match.params.name}&region=US${KEY_URL}`)
              .then((res) => {
                let profile = res.data;
                console.log(profile)
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
            key={profile.price.ticker} 
            name={profile.price.longName}
            ticker={profile.price.symbol}
            currency={profile.price.currencySymbol}
            price={profile.price.regularMarketPrice.fmt}
            changeValue={profile.price.regularMarketChange.fmt}
            changePer={profile.price.regularMarketChangePercent.fmt}  
           
            />
          </div>
        </Grid>
        <Grid item xs={4} spacing={12}>
          <div>
            <Trade/>
          </div>
        </Grid>
      
    </Grid>
    
    )
}

export default Stock
