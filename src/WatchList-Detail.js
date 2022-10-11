/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import axios from "axios";
import {key, host} from "./api";
import {Link} from 'react-router-dom'
import Progress from './Progress';
import Watchlist from './Watchlist';

const BASE_URL = "https://yh-finance.p.rapidapi.com/market/get-watchlist-detail?";
const KEY_URL = `&rapidapi-key=${key}&x-rapidapi-host=${host}`


function WatchListDetail({match}) {
    const [port,setPort] = useState([]);
    const [meta,setMeta] = useState([]);

    useEffect(async() => {
        try {
            const response = await axios.request(`${BASE_URL}pfId=${match.params?.pfId}&userId=${match.params?.userId}${KEY_URL}`);
            let data = response.data?.finance?.result[0]?.quotes
            let data1 = response.data?.finance?.result[0]?.portfolios
            setPort(data);
            setMeta(data1);
        } catch (error) {
            console.error(error);
        }
    },[match.params?.pfId,match.params?.userId])

    function kFormatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }


    
  return (
    <>
    {port && meta ?
    <div className=''>
        {meta[0]?.pfName && (<div className="container underline text-center font-bold text-4xl mt-4 mb-4 p-2">WatchList Detail - {meta[0]?.pfName}</div>)}
        <div>
       { meta.map(m =>(
        <div className='flex flex-row justify-center items-center max-w-7xl mx-auto flex-wrap'>
            <div className="flex flex-col p-2 text-center justify-center items-center" >
            <img src={`${m?.portfolioMeta?.backgroundImages?.hero?.url}`} className="h-64 w-64 rounded-2xl" alt="hero"/>
            <p className='text-xl'>{kFormatter(`${m?.portfolioMeta.followerCount}`)} followers</p>
            <p className='text-lg'>{Object.keys(port).length} symbols Watchlist by Yahoo Finance.</p>
          {/* <p>{m?.backgroundImages?.hero?.url}</p> */}
          </div>
        <div className='flex flex-row justify-start items-center max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-sm p-3 flex-wrap'>
            <p className='text-white text-xl' dangerouslySetInnerHTML={{__html:m?.portfolioMeta?.portfolioDescription}} />
        </div>
        </div>
       ))}
        </div>
        <br/>
        <div className="flex flex-row text-xl justify-center max-w-7xl text-gray-400 baseline items-center rounded p-2 m-2 space-x-4 mx-auto">
        <div className='_2S3cggR8KQOcagvLyiigSU flex flex-wrap'>
        {Object.keys(port).map((keyName,i) => (
             <div key={i}>
             <Link to={`/stocks/${keyName}`} style={{textDecoration:'none',color:'white'}}>
            {/* <p>key: {keyName}</p>
            <p>name: {[port[keyName]?.longName]}</p>
            <p>exchange: {[port[keyName]?.fullExchangeName]}</p> */}
            {/* <span>[{port[keyName]}] {keyName.averageDailyVolume3Month}</span> */}
            <div className='flex flex-col h-full'>
               
            <div className="flex flex-col justify-between h-full w-full flex-wrap border  rounded-xl p-4 shadow-xl">
                <div>
                    <div className='flex flex-row flex-wrap mb-2 w-full'>
                        <span className='newsfeed__topmovers__card__numbers md:text-lg text-xl'>{[port[keyName]?.longName] || keyName}</span>
                    </div>
                    <div className='css-1itv5e3 pt-2'>
                    <span>${[port[keyName]?.regularMarketPrice] || [port[keyName]?.preMarketPrice] || [port[keyName]?.postMarketPrice] }</span>
                    </div>
                    {[port[keyName]?.regularMarketChangePercent] &&(
                    <div>
                            <span className='css-14x19dj'>
                            
                                {(Math.round([port[keyName]?.regularMarketChangePercent] * 100) / 100).toFixed(2)} %

                            </span>
                    </div>
                    
                    )}
                </div>
                <div className='text-black font-serif  pt-2'>
                    <span>
                        {[port[keyName]?.exchange]}
                    </span>
                </div>
            </div>
            </div>
            </Link>
            </div>
        ))}
        </div>
        </div>
        </div>
        : <Progress/>} 
    </>
  )
}

export default WatchListDetail