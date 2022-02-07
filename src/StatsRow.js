import React from "react";
import Stock from "./stock.svg";
import { db } from "./firebase";
import {Link} from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton';
import Graph from './Graph'
import LineGraph from './LineGraph'

function StatsRow(props) {

  return (
    <div>
      <Link to={`/stocks/${props?.name}`} className='nostyle'>
      { props ? 
      <div className="flex flex-row justify-between m-2 p-2 items-center min-h-min h-16 w-auto hover:bg-gray-200"> 
        <div className="flex flex-col">
          <h1 className="font-bold text-base">{props?.name}</h1> 
          <span className="text-sm w-max">{props?.shares && props?.shares +" " +"shares"}</span>
          {/* <p>{props?.buyPrice}</p> */}
        </div> 
        
        <div className="m-1 p-4">
          <img src="https://www.freeiconspng.com/uploads/blue-line-png-1.png" alt={props?.title} height={16} />
          {/* <LineGraph/> */}
        </div>
        <div className="row__numbers">
          <p className="row__price">{props?.currency}{props?.prePrice || props?.regularPrice || props?.postPrice }</p>
          <p className="row__percentage"> { props?.preChange || props?.regularChange  || props?.postChange}</p>
        </div>
        {/* <div className="row">
        <h2>{props.company}</h2>
        </div> */}
      </div>
      : 
      <Skeleton animation="wave" variant="text" /> }
      </Link>
    </div>
  );
}



export default StatsRow;
