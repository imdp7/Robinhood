import React from 'react'
import './CompanyDetails.css'
function Earning({profile}) {

    return (
        <div>
        <span className="list__title">
            Earnings
        </span>
            <div className="grid-4 _1-LuWSzn-erBDKvIM2uiMO">
          <div className='details'>
          <h3> Earnings Average</h3>
            <span className='view-details'>{profile.calendarEvents?.earnings.earningsAverage.fmt}</span>
          </div>
            <div className='details'>
            <h3> Earning Date</h3>  
          <span className='view-details'>{profile.calendarEvents?.earnings.earningsDate[0].fmt}</span>
          </div>
            <div className='details'>
            <h3> Earning High</h3>
          <span className='view-details'>{profile.calendarEvents?.earnings.earningsHigh.fmt}</span>
            </div>
            <div className='details'>
            <h3> Earning Low</h3>
          <span className='view-details'>{profile.calendarEvents?.earnings.earningsLow.fmt}</span>  
          </div>
            <div className='details'>
            <h3>Revenue Average</h3>
          <span className='view-details'>{profile.calendarEvents?.earnings.revenueAverage.fmt}</span>
            </div>          
            <div className='details'>
            <h3> Revenue High</h3>            
          <span className='view-details'>{profile.calendarEvents?.earnings.revenueHigh.fmt}</span>
          </div>          
            <div className='details'>
            <h3> Revenue Low</h3>            
          <span className='view-details'>{profile.calendarEvents?.earnings.revenueLow.fmt}</span>
          </div>
        </div> 
        </div> 
    )
}

export default Earning
