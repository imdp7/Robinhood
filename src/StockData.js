import React from 'react'
import TimeLine from './TimeLine'
import CompanyDetails from './CompanyDetails'
import Earning from './Earning';
import Graph from './Graph';

function truncate(str,n){
  return str?.length > n ? str.substr(0, n-1) + "...": str;
}
function StockData({profile,graph}) {

    return (
      <div className="newsfeed">
      <div className="newsfeed__container">
      <div className="newsfeed__chart__section">
      <div className="newsfeed_price_asset">
        <h1 className="price"> {profile?.symbol}</h1>
        <div className="price__change">
        <div>
        <span className="price">{profile.price?.currencySymbol}{profile.price?.regularMarketPrice.fmt}</span>
        
        </div>
        <div className="price__div">
        <span className="price__date">{profile.price?.regularMarketChange.fmt}</span>
        <span className="price__date">({profile.price?.regularMarketChangePercent.fmt})</span>
        <span className='price__date'>TODAY</span>
       </div>
        </div>
      </div>
      <div className="newsfeed__chart">
        <Graph className="chart" graph={graph}/>
        <TimeLine />
      </div>
    </div>
    <div className="newsfeed__popularlists__section">
      <div className="newsfeed__popularlists__intro">
        <span className="list__title">About</span>
        </div>
        <div>
        <div className="category__list"></div>
        
            <span className='newsfeed__article__content'>{truncate(profile.assetProfile?.longBusinessSummary,780)}</span>
            <CompanyDetails profile={profile}/>
        </div>
      </div>
      <div>
        <div className="category__list"></div>
            <Earning profile={profile}/>
        </div>
      
    
    </div>
    </div>

    )
}

export default StockData;