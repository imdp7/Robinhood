import React,{ useState, useEffect} from 'react'
import axios from "axios";
import {key} from "./api";


const KEY_URL = `&token=${key}`;

function Stock(props) {
    const [profile,setProfile] = useState([]);

    useEffect(() => {
        if (props) {
            return axios
              .get(`https://finnhub.io/api/v1/stock/profile2?symbol=AAPL${KEY_URL}`)
              .then((res) => {
                let profile = res.data;
                setProfile(profile);
                  console.log(profile);
                })
              .catch((error) => {
                console.error("Error", error.message);
              });
            }
        },[]);

    return (
        <div>
            <h1>{props.match.params.name}</h1>
    <h2>{profile.exchange}</h2>
    <span>{profile.currency}</span>
        </div>
    )
}

export default Stock
