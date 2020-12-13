import React,{ useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'; 
import axios from "axios";
import StockData from './StockData'
import Trade from './Trade'
import {key, host} from "./api";

const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=";
const NEWS_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?category=';
const FUTURE__URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-upgrades-downgrades?symbol='
const RECOMMENDATION__URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-recommendations?symbol='

const KEY_URL = `&region=US&rapidapi-key=${key}&x-rapidapi-host=${host}`

// const GRAPH_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts?symbol=';
// const GRAPH_PARAMS = `&interval=5m&range=1d&region=US&rapidapi-key=${key}&x-rapidapi-host=${host}`;

function Stock({match}) {
    const [profile,setProfile] = useState([]);
    const [graph,setGraph] = useState([]);
    const [news,setNews] = useState([]);
    const [future,setFuture] = useState([]);
    const [recommend,setRecommend] = useState([]);

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
        },[match]);
          
        useEffect(() => {
          if (match) {
              return axios
                .request(`${NEWS_URL}${match.params.name}${KEY_URL}`)
                .then((res) => {
                  let data = res.data.items.result;
                  let topnews = data.slice(0,3);
                  setNews(topnews);
                  })
                .catch((error) => {
                  console.error("Error", error.message);
                });
              }
          },[match]); 

          useEffect(() => {
            if (match) {
                return axios
                  .request(`${FUTURE__URL}${match.params.name}${KEY_URL}`)
                  .then((res) => {
                    let data = res.data.upgradeDowngradeHistory.history;
                    let future = data.slice(0,8);
                    setFuture(future);
                    })
                  .catch((error) => {
                    console.error("Error", error.message);
                  });
                }
            },[match]); 
            
            useEffect(() => {
              if (match) {
                  return axios
                    .request(`${RECOMMENDATION__URL}${match.params.name}${KEY_URL}`)
                    .then((res) => {
                      let data = res.data.finance.result[0].quotes;
                      let recommend = data.slice(0,5);
                      setRecommend(recommend);

                      })
                    .catch((error) => {
                      console.error("Error", error.message);
                    });
                  }
              },[match]); 
    return (

      <Grid
      container
      direction="row">

        <Grid item xs={9}>
          <div>
           <StockData profile={profile} graph={graph} news={news} future={future} recommend={recommend} match={match}/>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
            {<Trade profile={profile}/> ? <Trade profile={profile}/> : 'Data not available'}
          </div>
        </Grid>
      
    </Grid>

    )
}

export default Stock
