import React,{ useState, useEffect} from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import Progress from './Progress'
import axios from "axios";
import StockData from './StockData'
import Trade from './Trade'
import {key, host} from "./api";
import { db } from './firebase';

const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?symbol=";
const NEWS_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?category=';
const FUTURE__URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-upgrades-downgrades?symbol='
const RECOMMENDATION__URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-recommendations?symbol='
const FINANCIALS_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-balance-sheet?symbol='

const KEY_URL = `&region=US&rapidapi-key=${key}&x-rapidapi-host=${host}`

 const GRAPH_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&outputsize=compact&symbol=';
 const GRAPH_PARAMS = `&apikey=YDER30K38MP32WSW`;

function Stock({match},props) {
    const [profile,setProfile] = useState([]);
    const [graph,setGraph] = useState([]);
    const [news,setNews] = useState([]);
    const [future,setFuture] = useState([]);
    const [recommend,setRecommend] = useState([]);
    const [financial,setFinancial] = useState([]);
    const [pageViews,setPageViews] = useState([]);

       useEffect(() => {
        document.title = `${profile.quoteType?.symbol} - ${profile.price?.currencySymbol}${profile.price?.preMarketPrice?.fmt || profile.price?.postMarketPrice?.fmt  || profile.price?.regularMarketPrice?.fmt} | Robinhood`;
      },[profile.quoteType?.symbol,profile.price?.currencySymbol,profile.price?.preMarketPrice?.fmt,profile.price?.regularMarketPrice?.fmt,profile.price?.postMarketPrice?.fmt],6000);


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
        },[match],6000);
       
        useEffect(() => {
          if (match) {
              return axios
                .request(`${FINANCIALS_URL}${match.params.name}${KEY_URL}`)
                .then((res) => {
                  let financial = res.data;
                  setFinancial(financial);
                  })
                .catch((error) => {
                  console.error("Error", error.message);
                });
              }
          },[match],6000);

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

              useEffect(() => {
                if (match) {
                    return axios
                      .request(`${BASE_URL}${match.params.name}${KEY_URL}`)
                      .then((res) => {
                        let pageViews = res.data.pageViews;
                        setPageViews(pageViews);
  
                        })
                      .catch((error) => {
                        console.error("Error", error.message);
                      });
                    }
                },[match]);
              
    return (
      <Container maxWidth='lg'>
      {
        profile.quoteType?.symbol ?
      
      <Box display="flex" width="100%">
        <Box width="70%" >         
        {
           <StockData profile={profile} graph={graph} financial={financial} news={news} future={future} recommend={recommend} pageViews = {pageViews} match={match}/>
          }
        </Box>
        <Box  width="25%">
        <div className="stat__container">
          {<Trade profile={profile}/>}
          </div>
        </Box>
      </Box>
       :
          <Progress/>
      }
      </Container>

    )
}

export default Stock
