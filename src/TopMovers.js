import React,{useState,useEffect} from 'react'
import {movers } from "./api";
import axios from "axios";
import TopCard from './TopCard';
import {key, host} from "./api";

const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?symbol=";
const TRENDING_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers";
const KEY_URL = `&region=US&rapidapi-key=${key}&x-rapidapi-host=${host}`

function TopMovers(props) {
    const [top,setTop] = useState([])
    const [profile,setProfile] = useState([])

    useEffect(async () => {

            try {
            const response = await axios.request(movers);
            let data = response.data.finance.result[0].quotes;
            let top = data.slice(0, 5);
            setTop(top);
            caches.log(top)
          } catch (error) {
            console.error(error);
          }
            
    }, []);

    // useEffect(async () => {
    //         try {
    //         const res = await axios
    //           .request(`${BASE_URL}${props.name}${KEY_URL}`);
    //         let profile = res.data;
    //         setProfile(profile);
    //       } catch (error) {
    //         console.error("Error", error.message);
    //       }
    //     },[]);

    return (

            <div className='_2S3cggR8KQOcagvLyiigSU flex flex-wrap'>
                {top.map(mover => (
                    <TopCard
                        key ={mover?.symbol}
                        symbol={mover?.symbol}
                        currency={mover?.currency}
                        price={mover?.regularMarketPrice}
                        prePrice = {profile.price?.preMarketPrice}
                        postPrice = {profile.price?.postMarketPrice}
                        percent={mover?.regularMarketChangePercent}
                        postPercent = {mover?.postMarketChange}
                        name={mover?.shortName}
                        link="stocks"

                    />                  
                ))}
            </div>
    )
}

export default TopMovers
