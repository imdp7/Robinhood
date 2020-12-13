import React,{useState,useEffect} from 'react'
import {movers } from "./api";
import axios from "axios";
import TopCard from './TopCard';
function TopMovers(props) {
    const [top,setTop] = useState([])

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
    return (

            <div className='_2S3cggR8KQOcagvLyiigSU'>
                {top.map(mover => (
                    <TopCard
                        symbol={mover?.symbol}
                        price={mover?.regularMarketPrice}
                        percent={mover?.regularMarketChangePercent}
                        name={mover?.shortName}
                    />                  
                ))}
            </div>
    )
}

export default TopMovers
