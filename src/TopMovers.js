/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react'
import axios from "axios";
import TopCard from './TopCard'

function TopMovers(props) {

    const [gain, setGain] = useState([]);
    const [lose, setLose] = useState([]);
    const [active, setActive] = useState([]);


    const options = {
        method: 'GET',
        url: 'https://yh-finance.p.rapidapi.com/market/v2/get-movers',
        params: {region: `${props.region}`, lang: 'en-US', count: `${props.limit}`, start: '0'},
        headers: {
          'X-RapidAPI-Key': '53858f6f17msh56f101adaa014e6p175338jsn02a3e984b0ee',
          'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
        }
      };



    useEffect(async() => {
        await axios.request(options)
        .then(function(response) {
            const info = response.data.finance.result;
            setGain(info[0])
            setLose(info[1])
            setActive(info[2])
        })
        .catch(function(error){
            console.log(error)
        })
    },[])

  return (<>
     <div className="flex flex-row text-xl text-gray-600 baseline items-center rounded p-2 m-2 space-x-4 mx-auto">
        <img src={`${gain.iconUrl}`} alt="gain-icon" className="h-8 w-8 " />
        <span className="underline">
            {gain.title}</span>
        </div>
    <div className="text-lg p-2">
        {gain.description}
    </div>
    <div className='_2S3cggR8KQOcagvLyiigSU flex flex-wrap'>
    {gain?.quotes?.map(item => (
        <TopCard 
        key ={item?.symbol}
        symbol={item?.symbol}
        currency={item?.currency}
        percent={item?.regularMarketChangePercent}
        postPercent = {item?.postMarketChange}
        name={item?.shortName}
        link="stocks"
        />
    ))}
    </div>

    <div className="flex flex-row text-xl text-gray-600 baseline items-center rounded p-2 m-2 space-x-4 mx-auto">
        <img src={`${lose.iconUrl}`}  alt="lose-icon" className="h-8 w-8 " />
        <span className="underline">
            {lose.title}</span>
        </div>
    <div className="text-lg p-2">
        {lose.description}
    </div>
    <div className='_2S3cggR8KQOcagvLyiigSU flex flex-wrap'>
    {lose?.quotes?.map(item => (
        <TopCard 
        key ={item?.symbol}
        symbol={item?.symbol}
        currency={item?.currency}
        percent={item?.regularMarketChangePercent}
        postPercent = {item?.postMarketChange}
        name={item?.shortName}
        link="stocks"
        />
    ))}
    </div>

    <div className="flex flex-row text-xl text-gray-600 baseline items-center rounded p-2 m-2 space-x-4 mx-auto">
        <img src={`${active.iconUrl}`}  alt="active-icon" className="h-8 w-8 " />
        <span className="underline">
            {active.title}</span>
        </div>
    <div className="text-lg p-2">
        {active.description}
    </div>
    <div className='_2S3cggR8KQOcagvLyiigSU flex flex-wrap'>
    {active?.quotes?.map(item => (
        <TopCard 
        key ={item?.symbol}
        symbol={item?.symbol}
        currency={item?.currency}
        percent={item?.regularMarketChangePercent}
        postPercent = {item?.postMarketChange}
        name={item?.shortName}
        link="stocks"
        />
    ))}
    </div>
    </>
  )
}

export default TopMovers