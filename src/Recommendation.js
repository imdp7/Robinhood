import React from 'react'
import TopCard from './TopCard'
function Recommendation({recommend,match,profile}) {

    return (
        <div>
        <div className="newsfeed__popularlists__section"> 
        <span className="list__title">
            Recommendation Stocks
        </span>
        <span className='details'>
            This list is based on the portfolios of people on Robinhood who own {match.params.name}.
        <p>
        It’s not an investment recommendation.
        </p>
    </span>
    </div>
        
            <div className="grid-4 _1-LuWSzn-erBDKvIM2uiMO">
           <div className='_2S3cggR8KQOcagvLyiigSU'>
           {recommend.map(data => (
                     <TopCard 
                        symbol={data?.symbol}
                        price={data?.regularMarketPrice}
                        percent={data?.regularMarketChangePercent}
                        name={data?.shortName}
                        currency={data?.currency}
                        key={data?.symbol}
                        link="stocks"
                     />
           ))}
           </div>
           </div>
            </div>
    )
}

export default Recommendation
