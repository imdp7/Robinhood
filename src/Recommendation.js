import React from 'react'
import TopCard from './TopCard'
function Recommendation({recommend}) {

    return (
        
        
            <div className="grid-4 _1-LuWSzn-erBDKvIM2uiMO">
           <div className='_2S3cggR8KQOcagvLyiigSU'>
           {recommend.map(data => (
                     <TopCard 
                        symbol={data?.symbol}
                        price={data?.regularMarketPrice}
                        percent={data?.regularMarketChangePercent}
                        name={data?.shortName}
                     />
           ))}
           </div>
           </div>

    )
}

export default Recommendation
