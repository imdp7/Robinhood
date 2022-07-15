import React,{useState,useEffect} from 'react'
import axios from "axios";
import {key, host} from "./api";

const BASE_URL = "https://yh-finance.p.rapidapi.com/market/get-watchlist-detail?";
const KEY_URL = `&rapidapi-key=${key}&x-rapidapi-host=${host}`


function WatchListDetail(match) {
    console.log(match)


    const [port,setPort] = useState([]);

    useEffect(async() => {
        try {
            const response = await axios.request(`${BASE_URL}pfId=${match.params.pfId}&userId=${match.params.userId}${KEY_URL}`);
            let data = response.data.finance.result[0]
            setPort(data);
            console.log(port)
        } catch (error) {
            console.error(error);
        }
    },[])

  return (
    <>
        <div className="container text-center">WatchList Detail</div>
        <div>{port?.userId}</div>
        <div>{port?.userIdType}</div>
        {/* <div>{userId.pfName}</div>
        <div>{userId.sortOrder}</div> */}

    </>
  )
}

export default WatchListDetail