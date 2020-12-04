import React from 'react'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'

function StockData(props) {
    return (
        <div className="newsfeed">
      <div className="newsfeed__container">
      <div className="newsfeed__chart__section">
          <div className="newsfeed_price_asset">
            <h1 className="price"> {props.name}</h1>
            <div className="price__change">
            <div>
            <span className="price__datas"> {props.price}</span>
            
            </div>
            <div className="price__div">
            <span className="price__date">{props.currency}{props.changeValue}</span>
            <span className="price__date">({props.changePer})</span>
            <sppan className='price__date'>TODAY</sppan>
           </div>
            </div>
          </div>
          <div className="newsfeed__chart">
            <LineGraph className="chart"/>
            <TimeLine />
          </div>
        </div>
        <div className="newsfeed__popularlists__section">
          <div className="newsfeed__popularlists__intro">
            <span className="list__title">About</span>
            </div>
            <div>
            <div className="category__list"></div>
            
                <spam>IPO: {props.ipo}</spam>
                
            </div>
          </div>
        </div>
        </div>
    )
}

export default StockData;