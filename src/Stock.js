import React,{ useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'; 
import axios from "axios";
import StockData from './StockData'
import Trade from './Trade'
import {key} from "./api";

const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=";
const KEY_URL = `&region=US&rapidapi-key=${key}`

const GRAPH_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts?symbol=';
const GRAPH_PARAMS = `&interval=5m&range=1d&region=US&rapidapi-key=${key}`;
function Stock({match}) {
    const [profile,setProfile] = useState([]);
    const [graph,setGraph] = useState([]);
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
        
        useEffect(() => {
          if (match) {
              return axios
                .request(`${GRAPH_URL}${match.params.name}${GRAPH_PARAMS}`)
                .then((res) => {
                  let graph = res.data;
                  setGraph(graph);
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
           <StockData profile={profile} graph={graph}/>
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
