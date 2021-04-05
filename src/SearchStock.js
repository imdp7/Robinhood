import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './SearchStock.css'
import {key} from "./api";
import './Header.css'
import Search from './Search'

const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/auto-complete?query=";
const KEY_URL = `&region=US&rapidapi-key=${key}`;
 
function sleep(delay = 0) {
  return new Promise ((resolve) => {
    setTimeout(resolve, delay);
  })
}

function SearchStock() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState([]);
  const [options,setOptions] = useState([]);
  const loading = open && search.length === 0;

  useEffect(() => {
    async function fetchSwapi() {
      if(search){
        const res = await fetch(`${BASE_URL}${search}${KEY_URL}`)
        const dat = await res.json();
        let option = dat.ResultSet.Result;
        // let option = data.slice(0||5);
        setOptions(option);
    }}
    fetchSwapi()

    
    },[search]); 

    return (
      <div>
      <div className="header__searchContainer">
        <input placeholder="Search" type="search" onChange={e =>
        setSearch(e.target.value)}
        onPointerCancel={e=> {
          document.querySelectorAll('input');
          setOptions(null);
          setSearch(null);
        }}
         />
       {
         search.length > 0 ?
         
      <div className='auto-complete'> 
        {options.map(option => (
          <Search 
            key={option.symbol}
            symbol={option.symbol}
            name={option.name}
          />
        ))}
        </div>
        : null }
        </div> 
      
     
    </div>
    )
}

export default SearchStock
