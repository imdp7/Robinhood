import React from 'react'
import './CompanyDetails.css'
import DataNotAvailable from './DataNotAvailable'
function Earning({profile}) {

  
    return (
        <div>
         <div className="newsfeed__popularlists__section"> 
        
        <span className="list__title">
            Earnings
        </span>
        </div>
            <div className="grid-4 _1-LuWSzn-erBDKvIM2uiMO">
          <div className='details'>
          <h3> Earnings Average</h3>
          <div className='view-details'>
            <span>{profile.calendarEvents?.earnings.earningsAverage.fmt && profile.calendarEvents?.earnings.earningsAverage.fmt.length > 0 ? profile.calendarEvents?.earnings.earningsAverage.fmt : '-'}</span>
          </div>
          </div>
            <div className='details'>
            <h3> Earning Date</h3>
            <div className='view-details'>
          <span>{profile.calendarEvents?.earnings.earningsDate[0] && profile.calendarEvents?.earnings.earningsDate[0].fmt.length > 0 ? profile.calendarEvents?.earnings.earningsDate[0].fmt : '-'}</span>
            </div>
          </div>
            <div className='details'>
            <h3> Earning High</h3>
            <div className='view-details'>
          <span>{profile.calendarEvents?.earnings.earningsHigh.fmt && profile.calendarEvents?.earnings.earningsHigh.fmt.length > 0 ? profile.calendarEvents?.earnings.earningsHigh.fmt : '-'}</span>
            </div>
            </div>
            <div className='details'>
            <h3> Earning Low</h3>
            <div className='view-details'>
          <span>{profile.calendarEvents?.earnings.earningsLow.fmt ? profile.calendarEvents?.earnings.earningsLow.fmt : '-'}</span>  
            </div>
          </div>
            <div className='details'>
            <h3>Revenue Average</h3>
            <div className='view-details'>
          <span>{profile.calendarEvents?.earnings.revenueAverage.fmt && profile.calendarEvents?.earnings.revenueAverage.fmt.length > 0 ? profile.calendarEvents?.earnings.revenueAverage.fmt : '-'}</span>
            </div>
            </div>         
            <div className='details'>
            <h3> Revenue High</h3>
            <div className='view-details'>
           <span>{profile.calendarEvents?.earnings.revenueHigh.fmt && profile.calendarEvents?.earnings.revenueHigh.fmt.length > 0 ? profile.calendarEvents?.earnings.revenueHigh.fmt : '-'}</span>
            </div>         
          </div>          
            <div className='details'>
            <h3> Revenue Low</h3>
            <div className='view-details'>
          <span>{profile.calendarEvents?.earnings.revenueLow.fmt && profile.calendarEvents?.earnings.revenueLow.fmt.length > 0 ? profile.calendarEvents?.earnings.revenueLow.fmt : '-'}</span>
            </div>
          </div>
        </div> 
        </div>

    )
}

export default Earning
