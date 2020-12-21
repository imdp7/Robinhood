import React from 'react'
import './CompanyDetails.css'
function CompanyDetails({ profile}) {

    return (
        <div className="collapse" id="collapseExample" aria-expanded="false">
           <div className="grid-4 _1-LuWSzn-erBDKvIM2uiMO">
           <div className='details'>
           <h3>Employees</h3>
           <div className='view-details'>
           <span>{ profile.summaryProfile?.fullTimeEmployees ? profile.summaryProfile?.fullTimeEmployees : '-'}</span>
           </div>
           </div>
           <div className='details'>
           <h3>Headquaters </h3>
           <div className='view-details'>
           {profile.summaryProfile?.state || profile.summaryProfile?.city || profile.summaryProfile?.city ?
           <span>  {profile.summaryProfile?.state || profile.summaryProfile?.city ?profile.summaryProfile?.state || profile.summaryProfile?.city :'-'} , {profile.summaryProfile?.country ? profile.summaryProfile?.country : '-'}</span>
           : '-'}
           </div>
           </div>
           <div className='details'>
           <h3>Marketcap </h3>
           <div className='view-details'>
           <span>{profile.summaryDetail?.marketCap.fmt && profile.summaryDetail?.marketCap.fmt.length > 0 ? profile.summaryDetail?.marketCap.fmt : '-'}</span>
           </div>
           </div>
           <div className='details'> 
           <h3>Divident Yeild </h3>
           <div className='view-details'>
           <span>{profile.summaryDetail?.dividendYield.fmt && profile.summaryDetail?.dividendYield.fmt.length > 0 ? profile.summaryDetail?.dividendYield.fmt : '-'}</span>
           </div>
           </div>
           <div className='details'> 
           <h3>Avg Vol </h3>
           <div className='view-details'>   
           <span>{profile.summaryDetail?.averageVolume? profile.summaryDetail?.averageVolume?.fmt : '-'}</span>
           </div>
           </div>
           <div className='details'> 
           <h3>High Today </h3>
           <div className='view-details'>
           <span>{profile.price?.currencySymbol ? profile.price?.currencySymbol:'null'}{profile.summaryDetail?.regularMarketDayHigh ? profile.summaryDetail?.regularMarketDayHigh.fmt : '-'}</span>
           </div>
           </div>
           <div className='details'> 
           <h3>Low Today </h3>
           <div className='view-details'>
           <span>{profile.price?.currencySymbol ? profile.price?.currencySymbol:'null'}{profile.summaryDetail?.regularMarketDayLow ? profile.summaryDetail?.regularMarketDayLow.fmt : '-'}</span>
           </div>
           </div>
           <div className='details'> 
           <h3>Open Price </h3>
           <div className='view-details'>
           <span>{profile.price?.currencySymbol ? profile.price?.currencySymbol:'null'}{profile.summaryDetail?.regularMarketOpen ? profile.summaryDetail?.regularMarketOpen.fmt : '-'}</span>
           </div>
           </div>
           <div className='details'>  
           <h3>Volume </h3>
           <div className='view-details'>
           <span>{profile.summaryDetail?.regularMarketVolume ? profile.summaryDetail?.regularMarketVolume.fmt :'-'}</span>
           </div>
           </div>
           <div className='details'>  
           <h3>Payout Ratio </h3>
           <div className='view-details'>
           <span>{profile.summaryDetail?.payoutRatio ? profile.summaryDetail?.payoutRatio.fmt :'-'}</span>
           </div>
           </div>
           <div className='details'> 
           <h3>52 week high</h3>
           <div className='view-details'>
           <span>{profile.price?.currencySymbol ? profile.price?.currencySymbol:'null'}{profile.summaryDetail?.fiftyTwoWeekHigh ? profile.summaryDetail?.fiftyTwoWeekHigh.fmt : '-'}</span>
           </div>
           </div>
           <div className='details'> 
           <h3>52 Day Avg </h3>
           <div className='view-details'>
           <span>{profile.price?.currencySymbol ? profile.price?.currencySymbol:'null'}{profile.summaryDetail?.fiftyDayAverage ? profile.summaryDetail?.fiftyDayAverage.fmt : '-'}</span>
           </div>
           </div>
           <div className='details'> 
           <h3>52 week low </h3>
           <div className='view-details'>
            {
                profile.summaryDetail?.fiftyTwoWeekLow ?
           <span>{profile.price?.currencySymbol ? profile.price?.currencySymbol:'null'}{profile.summaryDetail?.fiftyTwoWeekLow ? profile.summaryDetail?.fiftyTwoWeekLow.fmt : '-'}</span>
            : '-'
            }
           </div>
           </div>
           <div className='details'> 
           <h3>1yr Est Target </h3>
           <div className='view-details'>
           {profile.financialData?.targetMeanPrice  ?
           <span>{profile.price?.currencySymbol ? profile.price?.currencySymbol:'null'}{profile.financialData?.targetMeanPrice ? profile.financialData?.targetMeanPrice.fmt : '-'}</span>
           : '-'
           }
           </div>
           </div>
           </div>
        </div>

    )
}

export default CompanyDetails
