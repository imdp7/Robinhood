import React, { useState, useEffect,useContext } from "react";
import "./Stats.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddIcon from '@material-ui/icons/Add';
import StatsRow from "./StatsRow";
import { key,host } from "./api";
import axios from "axios";
import { db } from "./firebase";
import {UserContext} from './Providers/UserContext'


const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=";
const KEY_URL = `&region=US&rapidapi-key=${key}&x-rapidapi-host=${host}`;

const testData = [];
function Stats() {

  const  user = useContext(UserContext);

  const [stocksData, setStocksData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const getMyStocks = () => {
   db
    // .collection('myStocks')
    .collection('users/V15HmhTXvZMSRGwWsrPWGsBv8zs1/stocks')
    .onSnapshot(snapshot => {
        let promises = [];
        let tempData = []
        snapshot.docs.map((doc) => {
          promises.push(getStocksData(doc.data().ticker)
          .then(res => {
            
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res?.data.price
            }
            )
          })
          
        )})
        Promise.all(promises).then(()=>{
          setMyStocks(tempData);
        });
    })
  }

  const getStocksData = (stock) => {
    return axios
      .request(`${BASE_URL}${stock}${KEY_URL}`)
      .catch((error) => {
        console.error("Error", error.message);
      });
  };

  useEffect(() => {
    const stocksList = ['AAPL' ];

    getMyStocks();
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock)
        .then((res) => {
          testData.push({
            name: stock,
            info: res?.data.price
          });
        })
        )
    });
    Promise.all(promises).then(()=>{
      setStocksData(testData);
    })
  }, [testData]);

  return (
    
    
      <div className="stats__container">
        <div className="stats__header">
        
          <p> Stocks</p>
          <MoreHorizIcon />
        </div>
        <div className="stats__content">
          
          <div className="stats__rows">
          
            { myStocks.map((stock) => (
              <StatsRow
                key={stock.data?.ticker}
                name={stock.data?.ticker}
                shares={stock.data?.shares}
                currency={stock.info?.currencySymbol}
                regularPrice={stock.info?.regularMarketPrice?.fmt }
                prePrice={stock.info?.preMarketPrice?.fmt }
                postPrice={stock.info?.postMarketPrice?.fmt }
                regularChange={stock.info?.regularMarketChangePercent?.fmt }
                preChange={stock.info?.preMarketChangePercent?.fmt }
                postChange={stock.info?.postMarketChangePercent?.fmt }
                buyPrice={stock.data?.buyPrice}
              />
            ))}
          
          </div>
        </div>
         
        <div className="stats__header stats-lists">
          <p>Lists</p>
          <AddIcon/>
        </div>
        <div className="stats__content">
          <div className="stats__rows">
            {stocksData.map((stock) => (
              <StatsRow
                key={stock?.name}
                name={stock?.name}
                regularPrice={stock.info?.regularMarketPrice?.fmt }
                prePrice={stock.info?.preMarketPrice?.fmt }
                postPrice={stock.info?.postMarketPrice?.fmt }
                regularChange={stock.info?.regularMarketChangePercent?.fmt }
                preChange={stock.info?.preMarketChangePercent?.fmt }
                postChange={stock.info?.postMarketChangePercent?.fmt }
                currency={stock.info?.currencySymbol}
              /> 
            ))}
          </div>
        </div>
        </div>
        
      
        
  );
}

export default Stats;