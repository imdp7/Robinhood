import React from 'react'
import './CompanyDetails.css'
function CompanyDetails({ profile}) {
    
    return (
        <div>
          
           <div className="grid-4 _1-LuWSzn-erBDKvIM2uiMO">
           <div className='details'>
           <h3>Employees</h3>
           <span className='view-details'>{profile.assetProfile?.fullTimeEmployees}</span>
           </div>
           <div className='details'>
           <h3>Headquaters </h3>
           <span>{profile.assetProfile?.state},{profile.assetProfile?.country}</span>
           </div>
           <div className='details'>
           <h3>Marketcap </h3>
           <span>{profile.summaryDetail?.marketCap.fmt}</span>
           </div>
           <div className='details'> 
           <h3>Divident Yeild </h3>
           <span>{profile.summaryDetail?.dividendYield.fmt}</span>
           </div>
           <div className='details'> 
           <h3>Avg Vol </h3>
           <span>{profile.summaryDetail?.averageVolume?.fmt}</span>
           </div>
           <div className='details'> 
           <h3>High Today </h3>
           <span>{profile.summaryDetail?.dayHigh.fmt}</span>
           </div>
           <div className='details'> 
           <h3>Low Today </h3>
           <span>{profile.summaryDetail?.dayLow.fmt}</span>
           </div>
           <div className='details'> 
           <h3>Open Price </h3><span>{profile.summaryDetail?.regularMarketOpen.fmt}</span>
           </div>
           <div className='details'>  
           <h3>Volume </h3><span>{profile.summaryDetail?.volume.fmt}</span>
           </div>
           <div className='details'> 
           <h3>52 week high</h3> <span>{profile.summaryDetail?.fiftyTwoWeekHigh.fmt}</span>
           </div>
           <div className='details'> 
           <h3>52 week low </h3><span>{profile.summaryDetail?.fiftyTwoWeekLow.fmt}</span>
           </div>
           </div>
        </div>
    )
}

export default CompanyDetails
