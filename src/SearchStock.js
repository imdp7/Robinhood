import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './SearchStock.css'
import {key} from "./api";
import './Header.css'
import {Dropdown} from 'semantic-ui-react'
import Search from './Search'

const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/auto-complete?query=";
const KEY_URL = `&region=US&rapidapi-key=${key}`;
 
function sleep(delay = 0) {
  return new Promise ((resolve) => {
    setTimeout(resolve, delay);
  })
}

function SearchStock(props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState([]);
  const [options,setOptions] = useState([]);
  const loading = open && search.length === 0;

  useEffect(() => {
    // let active = true;
    // if(!loading) {
    //   return undefined;
    // }
    if(search.length > 0) {
        return axios
          .request(`${BASE_URL}${search}${KEY_URL}`)
          .then((res) => {
            let data = res.data.ResultSet.Result;
            let option = data.slice(0,5);
            setOptions(option);

            })
          .catch((error) => {
            console.error("Error", error.message);
          });
        }
        
    },[search]); 

    return (
      <div>
      <div className="header__searchContainer">
        <input placeholder="Search" type="search" onChange={e =>
        setSearch(e.target.value)}
        onPointerCancel={e=> {
          document.querySelectorAll('input');
          setOptions(null);
        }}
         />
      <div className='auto-complete'> 
        {options.map(option => (
          <Search 
            key={option.symbol}
            symbol={option.symbol}
            name={option.name}
          />
        ))}
        </div>
        </div> 
      
     
    </div>
    )
}

export default SearchStock
