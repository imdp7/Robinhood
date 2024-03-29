/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useState, useEffect} from 'react'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import Progress from './Progress'
import axios from "axios";
import StockData from './StockData'
import ESGRating from './ESGRating'
import RecommendationTrend from './RecommendationTrend'
import AnalystPrice from './AnalystPrice';
import Financials from './Financials';
import RecommendationRating from './RecommendationRating';
import Trade from './Trade'
import {key, host} from "./api";
import {db} from './firebase'


const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol=";
const NEWS_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news?category=';
const FUTURE__URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-upgrades-downgrades?symbol='
const RECOMMENDATION__URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-recommendations?symbol='
const FINANCIALS_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-balance-sheet?symbol='
const FIN_URL = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol='
const GET_QUOTE = 'hhttps://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?symbols='
const CHAT = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/conversations/list?userActivity=true&sortBy=createdAt&symbol='
const KEY_URL = `&region=US&rapidapi-key=${key}&x-rapidapi-host=${host}`

 const GRAPH_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=';
 const GRAPH_PARAMS = `&apikey=YDER30K38MP32WSW`;

function Stock({match}) {
    const [profile,setProfile] = useState([]);
    const [graph,setGraph] = useState([]);
    const [news,setNews] = useState([]);
    const [future,setFuture] = useState([]);
    const [recommend,setRecommend] = useState([]);
    const [financial,setFinancial] = useState([]);
    const [pageViews,setPageViews] = useState([]);
    const[ear,setEar] = useState([]);
    const [fin,setFin] = useState([]);
    const [quote,setQuote] = useState([]);
    const [chat,setChat] = useState([]);
    const [info,setInfo] = useState([]);

       useEffect(() => {
        document.title = `${profile.quoteType?.symbol} - ${profile.price?.currencySymbol}${profile.price?.preMarketPrice?.fmt || profile.price?.postMarketPrice?.fmt  || profile.price?.regularMarketPrice?.fmt} | Robinhood`;
      },[profile.quoteType?.symbol,profile.price?.currencySymbol,profile.price?.preMarketPrice?.fmt,profile.price?.regularMarketPrice?.fmt,profile.price?.postMarketPrice?.fmt] );


    useEffect(async () => {
        if (match) {
            try {
            const res = await axios
              .request(`${BASE_URL}${match.params.name}${KEY_URL}`);
            let profile = res.data;
            setProfile(profile);
          } catch (error) {
            console.error(error);
          }
            }
        },[match]);

    useEffect(async () => {
        if (match) {
            try {
            const res = await axios
              .request(`${GET_QUOTE}${match.params.name}${KEY_URL}`);
            let quote = res.data.quoteResponse.result[0].messageBoardId;
            setQuote(quote);
          } catch (error) {
            console.error(error);
          }
        }
    },[match] );
        
    useEffect(async () => {
        if (match) {
            try {
            const res = await axios
              .request(`${CHAT}${match.params.name}&messageBoardId=${quote}${KEY_URL}`);
            let chat = res.data;
            setChat(chat);
          } catch (error) {
            console.error(error);
          }
        }
    },[match] );
       
        useEffect(async () => {
          if (match) {
              try {
              const res = await axios
                .request(`${FINANCIALS_URL}${match.params.name}${KEY_URL}`);
              let financial = res.data;
              setFinancial(financial);
            } catch (error) {
              console.error(error);
            }
          }
      },[match] );

        useEffect(async () => {
          if (match) {
              try {
              const res = await axios
                .request(`${GRAPH_URL}${match.params.name}${GRAPH_PARAMS}`);
              let graph = res.data;
              setGraph(graph);
            } catch (error) {
              console.error(error);
            }
          }
      },[match] );
          
        useEffect(async () => {
          if (match) {
              try {
              const res = await axios
                .request(`${NEWS_URL}${match.params.name}${KEY_URL}`);
              let data = res.data.items.result;
              let topnews = data.slice(0, 3);
              setNews(topnews);
            } catch (error) {
              console.error(error);
            }
          }
      },[match] );

          useEffect(async () => {
            if (match) {
                try {
                const res = await axios
                  .request(`${FUTURE__URL}${match.params.name}${KEY_URL}`);
                let data = res.data.upgradeDowngradeHistory.history;
                let future = data.slice(0, 8);
                setFuture(future);
              } catch (error) {
                console.error(error);
              }
            }
        },[match] );
            
            useEffect(async () => {
              if (match) {
                  try {
                  const res = await axios
                    .request(`${RECOMMENDATION__URL}${match.params.name}${KEY_URL}`);
                  let data = res.data.finance.result[0]?.quotes;
                  let recommend = data.slice(0, 5);
                  setRecommend(recommend);
                } catch (error) {
                  console.error(error);
                }
              }
          },[match] );

              useEffect(async () => {
                if (match) {
                    try {
                    const res = await axios
                      .request(`${BASE_URL}${match.params.name}${KEY_URL}`);
                    let pageViews = res.data.pageViews;
                    setPageViews(pageViews);
                  } catch (error) {
                    console.error(error);
                  }
                }
            },[match] );

                useEffect(async () => {
                  if (match) {
                 try {
                      const res = await axios
                        .request(`https://www.alphavantage.co/query?function=EARNINGS${GRAPH_PARAMS}&symbol=${match.params.name}`);
                      let e = res.data?.quarterlyEarnings;
                      let ear = e.slice(0, 4);
                      setEar(ear);
                    } catch (error) {
                      console.error(error);
                    }
                  }
              },[match] );

              useEffect(async () => {
                if (match) {
                try {
                    const res = await axios
                      .request(`${FIN_URL}${match.params.name}${KEY_URL}`);
                    let fin = res.data?.earnings.financialsChart;
                    setFin(fin);
                  } catch (error) {
                    console.error(error);
                  }
                }
            },[match] );

            useEffect(() => {
              if (match) {
              //db.collection('users').doc('V15HmhTXvZMSRGwWsrPWGsBv8zs1').collection('stocks')
              db
              // .collection('myStocks')
              .collection('users/V15HmhTXvZMSRGwWsrPWGsBv8zs1/stocks')
              .onSnapshot(snapshot => {
              snapshot.docs.map(function(doc) {
                if(doc.data().ticker === match.params.name) {
                  let info = doc.data();
                  setInfo(info);
               }
        },{})
      })
    }
              },[match])
              
    return (
      <Container maxWidth='xl' className='m-3'>
      {
        profile.quoteType?.symbol ?
      
      <Box width="100%" className='flex flex-row m-2'>
        <Box width="70%">         
        {
           <StockData key={profile.quoteType?.symbol} profile={profile} graph={graph} financial={financial} news={news} future={future} recommend={recommend} pageViews = {pageViews} ear={ear} match={match} chat={chat} info={info}/>
          }
        </Box>
        <Box maxWidth="full" flexDirection='column' className=' flex flex-col m-2'>

          <div className="grid-2">
          {<Trade key={profile.quoteType?.symbol} profile={profile}/>}
          </div>

          <div className="grid-1" style={{ padding:"60px 10px 0px 30px"}}>
          {<ESGRating key={profile.quoteType?.symbol} profile={profile}/>}
          </div>

          <div className="grid-1 w-fit" style={{ padding:"20px 20px 0px 20px"}}>
          {<RecommendationTrend key={profile.quoteType?.symbol} profile={profile}/>}
          </div>

          <div className="grid-2" style={{ padding:"20px 10px 0px 20px"}}>
          {<RecommendationRating key={profile.quoteType?.symbol} profile={profile}/>}
          </div>

          <div className="grid-2" style={{ padding:"20px 10px 0px 20px"}}>
          {<AnalystPrice key={profile.quoteType?.symbol} profile={profile}/>}
          </div>

          <div className="grid-2" style={{ padding:"20px 10px 0px 20px"}}>
          {<Financials key={profile.quoteType?.symbol} fin={fin} />}
          </div>
        </Box>
      </Box>
      : <Progress/> }
      </Container>

    )
}

export default Stock
