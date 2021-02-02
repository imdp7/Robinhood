import React,{ useState, useEffect} from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import axios from "axios";
import StockData from './StockData'
import Trade from './Trade'
import {key, host} from "./api";
import Newsfeed from './Newsfeed'
import { db } from './firebase';

const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?symbol=";
const NEWS_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?category=';
const FUTURE__URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-upgrades-downgrades?symbol='
const RECOMMENDATION__URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-recommendations?symbol='

const KEY_URL = `&region=US&rapidapi-key=${key}&x-rapidapi-host=${host}`

// const GRAPH_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts?symbol=';
// const GRAPH_PARAMS = `&interval=5m&range=1d&region=US&rapidapi-key=${key}&x-rapidapi-host=${host}`;

function Stock({match},props) {
    const [profile,setProfile] = useState([]);
    const [graph,setGraph] = useState([]);
    const [news,setNews] = useState([]);
    const [future,setFuture] = useState([]);
    const [recommend,setRecommend] = useState([]);
    const [buyPrice,setBuyPrice] = useState([]);

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
              // useEffect(() => {
                
              //     db.collection('myStocks')
              //       .where("ticker", "==", props.name)
              //       .get()
              //       .then((querySnapShot) => {
  
              //           querySnapShot.forEach(function (doc) {
              //             // update the query
              //             db.collection("mySocks")
              //             .doc(doc.id)
              //             .update({
              //               shares: (doc.data().shares += 1),
              //             });
              //             db.collection('myStocks')
              //             .doc(doc.id)
              //             .get({
              //               buyPrice: (doc.data())
              //             })
              //           });
                        
              //           // update the query
              //           db.collection("myStocks").add({
              //             ticker: props.name,
              //             shares: 1,
              //           });
              //         console.log(buyPrice)
              //         // doc.data()
              //       });
              // })
              
    return (

      <Container maxWidth='lg'>
      <Box display="flex" width="100%">
        <Box width="70%" >         
        {
           <StockData {...buyPrice} profile={profile} graph={graph} news={news} future={future} recommend={recommend} match={match}/>
          }
        </Box>
        <Box  width="25%">
        <div className="stat__container">
          {<Trade profile={profile}/>}
          </div>
        </Box>
      </Box>
    </Container>


    )
}

export default Stock
