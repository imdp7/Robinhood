import React from 'react'
import './CompanyDetails.css'
function CompanyDetails({ profile}) {
    
    return (
        <div>
           <div className="grid-4 _1-LuWSzn-erBDKvIM2uiMO">
           <div className='details'>
           <h3>Employees</h3>
           <div className='view-details'>
           <span>{profile.assetProfile?.fullTimeEmployees ? profile.assetProfile?.fullTimeEmployees : '-'}</span>
           </div>
           </div>
           <div className='details'>
           <h3>Headquaters </h3>
           <div className='view-details'>
           <span>{profile.assetProfile?.state ? profile.assetProfile?.state : '-'} , {profile.assetProfile?.country ? profile.assetProfile?.country : '-'}</span>
           </div>
           </div>
           <div className='details'>
           <h3>Marketcap </h3>
           <div className='view-details'>
           <span>{profile.summaryDetail?.marketCap.fmt ? profile.summaryDetail?.marketCap.fmt : '-'}</span>
           </div>
           </div>
           <div className='details'> 
           <h3>Divident Yeild </h3>
           <div className='view-details'>
           <span>{profile.summaryDetail?.dividendYield.fmt ? profile.summaryDetail?.dividendYield.fmt :'-'}</span>
           </div>
           </div>
           <div className='details'> 
           <h3>Avg Vol </h3>
           <div className='view-details'>   
           <span>{profile.summaryDetail?.averageVolume?.fmt ? profile.summaryDetail?.averageVolume?.fmt : '-'}</span>
           </div>
           </div>
           <div className='details'> 
           <h3>High Today </h3>
           <div className='view-details'>
           <span>{profile.summaryDetail?.dayHigh.fmt ? profile.summaryDetail?.dayHigh.fmt : '-'}</span>
           </div>
           </div>
           <div className='details'> 
           <h3>Low Today </h3>
           <div className='view-details'>
           <span>{profile.summaryDetail?.dayLow.fmt ? profile.summaryDetail?.dayLow.fmt : '-'}</span>
           </div>
           </div>
           <div className='details'> 
           <h3>Open Price </h3>
           <div className='view-details'>
           <span>{profile.summaryDetail?.regularMarketOpen.fmt ? profile.summaryDetail?.regularMarketOpen.fmt : '-'}</span>
           </div>
           </div>
           <div className='details'>  
           <h3>Volume </h3>
           <div className='view-details'>
           <span>{profile.summaryDetail?.volume.fmt ? profile.summaryDetail?.volume.fmt :'-'}</span>
           </div>
           </div>
           <div className='details'> 
           <h3>52 week high</h3>
           <div className='view-details'>
           <span>{profile.summaryDetail?.fiftyTwoWeekHigh.fmt ? profile.summaryDetail?.fiftyTwoWeekHigh.fmt : '-'}</span>
           </div>
           </div>
           <div className='details'> 
           <h3>52 week low </h3>
           <div className='view-details'>
           <span>{profile.summaryDetail?.fiftyTwoWeekLow.fmt ? profile.summaryDetail?.fiftyTwoWeekLow.fmt : '-'}</span>
           </div>
           </div>
           </div>
        </div>

    )
}

export default CompanyDetails
