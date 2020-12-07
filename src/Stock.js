import React,{ useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'; 
import axios from "axios";
import StockData from './StockData'
import Trade from './Trade'
import {key} from "./api";

const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=";
const KEY_URL = `&region=US&rapidapi-key=${key}`



function Stock({match}) {
    const [profile,setProfile] = useState([]);

    useEffect(() => {
        if (match) {
            return axios
              .request(`${BASE_URL}${match.params.name}${KEY_URL}`)
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
      <>
      <Grid
      container
      direction="row">
    

        <Grid item xs={8}>
          <div>
           <StockData profile={profile} />
          

          </div>
        </Grid>
        <Grid item xs={4}>
          <div>
            <Trade profile={profile}/>
          </div>
        </Grid>
      
    </Grid>
    </>
    )
}

export default Stock
