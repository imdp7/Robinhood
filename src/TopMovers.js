import React,{useState,useEffect} from 'react'
import {movers } from "./api";
import axios from "axios";
import TopCard from './TopCard';
import {key, host} from "./api";

const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?symbol=";
const KEY_URL = `&region=US&rapidapi-key=${key}&x-rapidapi-host=${host}`

function TopMovers(props) {
    const [top,setTop] = useState([])
    const [profile,setProfile] = useState([])

    useEffect(() => {
        if (props) {
            return axios.request(movers).then(function (response) {
              let data = response.data.finance.result[0].quotes;
             // Math.max.apply(Math, data.map(function(o) { return o.y; }))
              let top = data.slice(0,5)
              setTop(top);
            }).catch(function (error) {
              console.error(error);
            });
            }
            
    }, [props]);

    useEffect(() => {
        if (props) {
            return axios
              .request(`${BASE_URL}${props.symbol}${KEY_URL}`)
              .then((res) => {
                let profile = res.data;
                setProfile(profile);
                })
              .catch((error) => {
                console.error("Error", error.message);
              });
            }
        },[props]);

    return (

            <div className='_2S3cggR8KQOcagvLyiigSU'>
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

                    />                  
                ))}
            </div>
    )
}

export default TopMovers
