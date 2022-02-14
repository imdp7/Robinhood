import React from 'react'
import TimeLine from './TimeLine'
import CompanyDetails from './CompanyDetails'
import Earning from './Earning';
import Graph from './Graph';
import SingleArticle from './SingleArticle';
import Rating from './Rating'
import FutureHistory from './FutureHistory';
import Recommendation from './Recommendation';
import Box from '@material-ui/core/Box'
import MyStocks1 from './MyStocks1';
import MyStocks2 from './MyStocks2'
import QueryHistory from './QueryHistory';
import Progress from './Progress'
import Modal from './Modal'
import { Link } from 'react-router-dom';
import Conversation from './Conversation';

export function truncate(str,n){
  return str?.length > n ? str.substr(0, n-1) + "...": str;
}


function StockData({profile,graph,financial,news,future,recommend,match, pageViews,ear,chat,info}) {

  const {
          preMarketPrice = profile.price?.preMarketPrice,
          postMarketPrice = profile.price?.postMarketPrice,
          regularMarketPrice = profile.price?.regularMarketPrice,
          preMarketChange = profile.price?.preMarketChange,
          postMarketChange = profile.price?.postMarketChange,
          regularMarketChange = profile.price?.regularMarketChange,
          regularMarketChangePercent = profile.price?.regularMarketChangePercent,
          postMarketChangePercent = profile.price?.postMarketChangePercent,
          preMarketChangePercent = profile.price?.preMarketChangePercent,
          currencySymbol = profile.price?.currencySymbol,
          longName = profile.quoteType?.longName,
          symbol = profile.quoteType?.symbol,
        } = profile;

        
        const color =  regularMarketChange.fmt || preMarketChange.fmt || postMarketChange.fmt  < 0 ? "#ff3d12" : "#29c446";
        

    return (

      <div className="newsfeed">
      <div className="newsfeed__container">
      <div className="newsfeed__chart__section">

      <div className="newsfeed_price_asset">
        <h1 className="price"> { longName || symbol }</h1>
        <div className="price__change">
        <div className="price">
        <span> {currencySymbol}
        { postMarketPrice?.fmt || regularMarketPrice?.fmt || preMarketPrice?.fmt  ? preMarketPrice?.fmt || postMarketPrice?.fmt  || regularMarketPrice?.fmt  : '-' }
        </span>
        </div>

        { regularMarketChange?.fmt && regularMarketChangePercent?.fmt ? 
        <div className="price__div" style={{color: `${regularMarketChange?.fmt}` < 0 ? "#ff3d12" : "#29c446"}}>
        <span className="price__datas">{ regularMarketChange?.fmt }</span>
        <span className="price__datas">({ regularMarketChangePercent?.fmt })</span>
        <span className='price__date' >Today</span>
       </div> 
       :
       null }

       <div className="price__div" style={{color: `${preMarketChange?.fmt || postMarketChange?.fmt}` < 0 ? "#ff3d12" : "#29c446"}}>

        { preMarketChange?.fmt || postMarketChange?.fmt ?          
        <span className="price__datas"> { preMarketChange?.fmt || postMarketChange?.fmt} </span>
       : 
       null}

       { preMarketChangePercent?.fmt || postMarketChangePercent?.fmt ? 
       
        <span className="price__datas"> ({ preMarketChangePercent?.fmt || postMarketChangePercent?.fmt  })
        <span className='price__date'>After Hours</span></span>
        :
        null }
       </div>
       
        </div>
      </div>
        {
          graph ?
      <div className="newsfeed__chart">
        <Graph className="js-plotly-plot" graph={graph}/>
        <TimeLine />
      </div> 
      : <Progress/>
        }
    </div>
    <Modal financial = {financial} style={{padding:'20px'}}/>

    <div>
    {info?.ticker  ?
        <Box display="inline-flex" style={{paddingTop:'10px'}}>
          <Box border={1} style={{borderColor:'#42494D', width:'25rem',margin:'20px',height:'auto'}}>
            <MyStocks1 info={info} profile={profile}/>
          </Box>
          <Box border={1} style={{borderColor:'#42494D', width:'25rem' ,height:'18rem',margin:'20px'}}>
            <MyStocks2 info={info} profile={profile}/>

          </Box>
        </Box>
         : null}
    </div>
  
          {profile?.summaryProfile ? 
            <div className="newsfeed__popularlists__section">
        <div className="newsfeed__popularlists__intro">
        <span className="list__title">About</span>
        <p>Show More</p>
        </div>
              <div>
              {profile.summaryProfile?.longBusinessSummary ?
            <span className='newsfeed__article__content'>{truncate(profile.summaryProfile?.longBusinessSummary,900)}</span>
            : null}
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

        { profile?.calendarEvents > 0 || profile.calendarEvents?.earnings  ? <Earning ear={ear}/> : null }
        
        { pageViews ? <Rating pageViews={pageViews}/> : null }
  
        { future.length > 0 ? <FutureHistory future={future}/> : null }
         
         <Conversation chat={chat} match={match}/>
         
        {info?.ticker ?
        <div>
      <div className="newsfeed__popularlists__section">
        <span className="list__title">History</span>
      </div> 
      
        <QueryHistory info={info}/>
        
     </div>
    : null }
       { recommend?.length > 0 ? <Recommendation key={match} recommend={recommend} match={match} profile={profile} /> : null }
 
    </div>
    </div>

    )
}

export default StockData;