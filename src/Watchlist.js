import React,{useState,useEffect} from 'react'
import axios from "axios";
import {key, host} from "./api";
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';

const BASE_URL = "https://yh-finance.p.rapidapi.com/market/get-popular-watchlists?";
const KEY_URL = `region=US&rapidapi-key=${key}&x-rapidapi-host=${host}`


function Watchlist(props) {
    const [top,setTop] = useState([])

    useEffect(() => {
        if (props) {
            return axios.request(`${BASE_URL}${KEY_URL}`).then(function (response) {
              let data = response.data.finance.result[0].portfolios;
              let top = data.slice(0,15)
              setTop(top);
            }).catch(function (error) {
              console.error(error);
            });
            }
            
    }, [props]);

  return (
      <div>
        {top && (
    <div className="newsfeed_popularlists_badges">
    {top.map((w) => (
      <div className="category__list" key={w?.userId}>
          <Link to={`/top-portfolios/${w?.slug}`} style={{textDecoration:'none',color:'white'}}>
      <Chip 
        className="topic__badge"
        variant="default"
        color='primary'
        clickable
        label={w?.name}
        key={w?.pfId}
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