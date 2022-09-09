import React,{useState,useEffect} from 'react'
import axios from "axios";
import {key, host} from "./api";
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';

const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-popular-watchlists?";
const KEY_URL = `region=US&rapidapi-key=${key}&x-rapidapi-host=${host}`


function Watchlist(props) {
    const [top,setTop] = useState([])

    useEffect(() => {
              async function data() {
            let response = await axios.request(`${BASE_URL}${KEY_URL}`);
            let data = response.data.finance.result[0].portfolios;
            let top = data.slice(0, `${props.limit}`);
            setTop(top);
              }
              data();
    }, [props.limit]);

    // useEffect(() => {
    //   async function fetchData() {
    //     // You can await here
    //     const response = await MyAPI.getData(someId);
    //     // ...
    //   }
    //   fetchData();
    // }, [someId]); 

  return (
      <div>
        {top && (
    <div className="newsfeed_popularlists_badges">
    {top.map((w) => (
      <div className="category__list" key={w?.userId}>
          <Link to={`/top-portfolios/${w?.pfId}/${w.userId}`}
                style={{textDecoration:'none',color:'white'}}>
      <Chip 
        className="topic__badge"
        variant="default"
        color='primary'
        clickable
        label={w?.name}
        key={w?.id}
      />
      </Link>
      </div>
    ))}
    </div>
    )}
    </div>
  )
}

export default Watchlist