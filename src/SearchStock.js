import React,{useState,useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import './SearchStock.css'
import {key} from "./api";


const BASE_URL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=";
const KEY_URL = `&region=US&rapidapi-key=${key}`;
 
function SearchStock(props) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;
  
  useEffect(() => {
      let active = true;
      if (!loading) {
        return undefined;
      }
      (async () => {
        const response = await fetch(
         // `${BASE_URL}FB${KEY_URL}`
          'https://reqres.in/api/users/'
          );
        const result = await response.json();
        console.log(result.data)
  
        if (active) {
          setOptions(result.data.map(({name}) => ({first_name : name })));
        }
      })();
    }, [loading]);

  useEffect(() => {
    if (!open) {
        setOptions([]);
      }
    }, [open]);
  


    return (
        <div>
           <Autocomplete options={options} />
        </div>
    )
}

export default SearchStock
