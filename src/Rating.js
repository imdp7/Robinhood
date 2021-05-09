import React from 'react'
import './Rating.css'

function Rating({pageViews}) {
    return (
    
        <div>
           <div className="newsfeed__popularlists__section"> 
            <span className="list__title">
            Analytics Ratings
        </span>
        </div>
            <div className="grid-4 _2-LuWSzn-erBDKvIM2uiMO">
          <div className='details'>
          <h3> Short Term Trend</h3>
          <div className='view-details'>
            <span>{pageViews?.shortTermTrend  ? pageViews?.shortTermTrend : '-'}</span>
          </div>
          </div>
          <div className='details'>
            <h3> Mid Term Trend</h3>
            <div className='view-details'>
            <span>{pageViews?.midTermTrend  ? pageViews?.midTermTrend : '-'}</span>
            </div>
          </div>
          <div className='details'>
            <h3> Long Term Trend</h3>
            <div className='view-details'>
            <span>{pageViews?.longTermTrend  ? pageViews?.longTermTrend : '-'}</span>
            </div>
          </div>
          </div>
        </div>
        
    )
}

export default Rating
