import React from "react";
import StockChart from "./stock.svg";
import { db } from "./firebase";
import {Link} from 'react-router-dom'

function StatsRow(props) {
  //   console.log(props, "what is in props here?");
  // (currentPrice - openPrice)/openPrice
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;
  
  // const buyStock = (event) => {
  //   db.collection("myStocks")
  //     .where("ticker", "==", props.name)
  //     .get()
  //     .then((querySnapShot) => {
  //       if (!querySnapShot.empty) {
  //         querySnapShot.forEach(function (doc) {
  //           // update the query
  //           db.collection("myStocks")
  //             .doc(doc.id)
  //             .update({
  //               shares: (doc.data().shares += 1),
  //             });
  //         });
  //       } else {
  //         // update the query
  //         db.collection("myStocks").add({
  //           ticker: props.name,
  //           shares: 1,
  //         });
  //       }
  //       // doc.data()
  //     });
  //  };

  return (
    <div>
      <Link to={`/stocks/${props.name}`} className='nostyle'>
    
      <div className="row" > 
        <div className="row__intro">
       
          <h1>{props?.name}</h1>
         
          <p>{props.volume && props.volume + " shares"}</p>
        </div>
        
        <div className="row__chart">
          <img src={StockChart} alt={props.title} height={16} />
        </div>
        <div className="row__numbers">
          <p className="row__price">{props.price}</p>
          <p className="row__percentage"> {props.changePrice}%</p>
        </div>
      </div>
      </Link>
    </div>
  );
}



export default StatsRow;
