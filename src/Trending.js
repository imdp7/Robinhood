import React,{useState,useEffect} from 'react'
import {movers } from "./api";
import axios from "axios";
import TopCard from './TopCard';

function Trending(props) {
    const [top,setTop] = useState([])
    const [profile,setProfile] = useState([])

    useEffect(async () => {

            try {
            const response = await axios.request(movers);
            let data = response.data.finance.result[0].quotes;
            let top = data.slice(0, `${props.limit}`);
            setTop(top);
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

export default Trending