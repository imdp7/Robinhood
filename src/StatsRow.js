import React from "react";
import StockChart from "./stock.svg";
import { db } from "./firebase";
import {Link} from 'react-router-dom'
import Skeleton from '@material-ui/lab/Skeleton';
import Graph from './Graph'
function StatsRow(props) {

  return (
    <div>
      <Link to={`/stocks/${props?.name}`} className='nostyle'>
      { props ? 
      <div className="row"> 
        <div className="row__intro">
          <h1>{props?.name}</h1>
            
          <p>{props?.shares && props?.shares + " shares"}</p>
          {/* <p>{props?.buyPrice}</p> */}
        </div> 
        
        <div className="row__chart">
          <img src={StockChart} alt={props?.title} height={16} />
        </div>
        <div className="row__numbers">
          <p className="row__price">{props?.currency}{props?.prePrice }</p>
          <p className="row__percentage"> { props?.preChange || props?.regularChange  || props?.postChange}%</p>
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
