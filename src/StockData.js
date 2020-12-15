import React from 'react'
import TimeLine from './TimeLine'
import CompanyDetails from './CompanyDetails'
import Earning from './Earning';
import Graph from './Graph';
import SingleArticle from './SingleArticle';
import Rating from './Rating'
import FutureHistory from './FutureHistory';
import Recommendation from './Recommendation';

export function truncate(str,n){
  return str?.length > n ? str.substr(0, n-1) + "...": str;
}
function StockData({profile,graph,news,future,recommend,match}) {

    return (
      <div className="newsfeed">
      <div className="newsfeed__container">
      <div className="newsfeed__chart__section">

      <div className="newsfeed_price_asset">
        <h1 className="price"> {profile.quoteType?.longName || profile.quoteType?.symbol}</h1>
        <div className="price__change">
        <div className="price">
        <span>{profile.price?.currencySymbol}{profile.price?.regularMarketPrice.fmt}</span>
        </div>

        {profile.price?.regularMarketChange ? 
        <div className="price__div">
        <span className="price__datas">{profile.price?.regularMarketChange.fmt}</span>
        <span className="price__datas">({profile.price?.regularMarketChangePercent.fmt})</span>
        <span className='price__date'>Today</span>
       </div> 
       :
       null }
       <div className="price__div">
        {profile.price?.postMarketChange ?         
        <span className="price__datas"> {profile.price?.postMarketChange.fmt} </span>
       :
       null}
       {profile.price?.postMarketChangePercent ? 
       
        <span className="price__datas"> ({profile.price?.postMarketChangePercent.fmt})<span className='price__date'>After Hours</span></span>
        
        :
        null }
       </div>
       
        </div>
      </div>

      
      <div className="newsfeed__chart">
        <Graph className="chart" />
        <TimeLine />
      </div>
     
      
    </div>
          {profile?.summaryProfile ? 
            <div className="newsfeed__popularlists__section">
        <div className="newsfeed__popularlists__intro">
        <span className="list__title">About</span>
        <p>Show More</p>
        </div>
              <div>
            <span className='newsfeed__article__content'>{profile.summaryProfile?.longBusinessSummary}</span>
            <CompanyDetails profile={profile}/> 
            </div>
      </div>
        :
          null
          }

    {
      news.length > 0  ? 
    
          <div>
      <div className="newsfeed__popularlists__section">
        <span className="list__title">News</span>
        </div> 
      {news.map(news => (

            <SingleArticle 
                  key={news?.reference_id}
                  image={news.main_image?.original_url}
                  link={news?.link}
                  publisher={news?.publisher}
                  time={news?.published_at}
                  title={news?.title}
                  summary={news?.summary}
                  source={news?.source}
            />
      ))}
      </div>

        : null}

        { profile.earnings ? <Earning profile={profile}/> : null }
        
        { profile.pageViews ? <Rating profile={profile}/> : null }
  
        { future.length > 0 ? <FutureHistory future={future}/> : null }
        
       { recommend.length > 0 ? <Recommendation key={match} recommend={recommend} match={match}/> : null }
 
    </div>
    </div>

    )
}

export default StockData;