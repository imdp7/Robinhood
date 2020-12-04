import React, { useState, useEffect } from "react";
import "./Stats.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddIcon from '@material-ui/icons/Add';
import StatsRow from "./StatsRow";
import { key } from "./api";
import axios from "axios";
import { db } from "./firebase";

const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=";
const KEY_URL = `&region=US&rapidapi-key=${key}`;



const testData = [];
function Stats(props) {
  const [stocksData, setStocksData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const getMyStocks = () => {
  db
    .collection('myStocks')
    .onSnapshot(snapshot => {
      
        let promises = [];
        let tempData = []
        snapshot.docs.map((doc) => {
          
          promises.push(getStocksData(doc.data().ticker)
          .then(res => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data
            })
          })
        )})
        Promise.all(promises).then(()=>{
          setMyStocks(tempData);
        })
    })
  }

  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}${stock}${KEY_URL}`)
      .catch((error) => {
        console.error("Error", error.message);
      }
      
      );
      
  };

  useEffect(() => {
    const stocksList = ["AAPL", "MSFT", "TSLA"];

    getMyStocks();
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock)

        .then((res) => {
          
          testData.push({
            name: stock,
            ...res.data
          });
        })
        )
    });

    Promise.all(promises).then(()=>{
      setStocksData(testData);
    })
  }, []);


  return (
    <div className="stats">
      <div className="stats__container">
        <div className="stats__header">
          <p> Stocks</p>
          <MoreHorizIcon />
        </div>
        <div className="stats__content">
          <div className="stats__rows">
           
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.price.preMarketPrice}
                volume={stock.data.shares}
                price={stock.info.price.regularMarketPrice.fmt}
                changePrice={stock.info.price.regularMarketChange.fmt}
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
                key={stock.ticker}
                name={stock.symbol}
                openPrice={stock.price.preMarketPrice}
                changePrice={stock.price.regularMarketChange.fmt}
                price={stock.price.regularMarketPrice.fmt}
              /> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;