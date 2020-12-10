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
function Stats() {
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
              price: res.data
            })
          })
        )})
        Promise.all(promises).then((values)=>{
          setMyStocks(tempData);
        },reason => {
          console.log(reason)
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
    const stocksList = ["AAPL", "MSFT", "TSLA","AMZN","FB"];

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
                key={stock.data?.ticker}
                name={stock.data?.ticker}
                shares={stock.data?.shares}
                openPrice={stock.price?.preMarketPrice}
                price={stock.price?.regularMarketPrice.fmt}
                changePrice={stock.price?.regularMarketChange.fmt}
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
                name={stock?.symbol}
                openPrice={stock.price?.preMarketPrice}
                changePrice={stock.price?.regularMarketChange.fmt}
                price={stock.price?.regularMarketPrice.fmt}
                company={stock.price?.longName}
              /> 
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;