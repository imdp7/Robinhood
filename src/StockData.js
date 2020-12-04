import React from 'react'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'

function StockData(profile) {
    return (
        <div className="newsfeed">
      <div className="newsfeed__container">
      <div className="newsfeed__chart__section">
          <div className="newsfeed_price_asset">
            <h1 className="price"> {profile.name}</h1>
            <div className="price__change">
            <div>
            <span className="price__datas"> {profile.ticker}</span>
            <span className="price__datas">{profile.exchange}</span>
            </div>
            {/* <div className="price__div">
            <span className="price__datas"> $4022.90 (+5.12%)</span>
            <span className="price__date">After hours</span>
           </div> */}
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
            <div className="topic__badge">
                <p>{profile.profile.finnhubIndustry}</p>
                <spam>IPO: {profile.profile.ipo}</spam>
                </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default StockData;