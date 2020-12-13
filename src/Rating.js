import React from 'react'
import './Rating.css'

function Rating({profile}) {
    return (
        <div>
           <div className="newsfeed__popularlists__section"> 
            <span className="list__title">
            Analytics Ratings
        </span>
        </div>
            <div className="grid-4 _1-LuWSzn-erBDKvIM2uiMO">
          <div className='details'>
          <h3> Short Term Trend</h3>
          <div className='view-details'>
            <span>{profile.pageViews?.shortTermTrend && profile.pageViews?.shortTermTrend.length > 0 ? profile.pageViews?.shortTermTrend : '-'}</span>
          </div>
          </div>
          <div className='details'>
            <h3> Mid Term Trend</h3>
            <div className='view-details'>
            <span>{profile.pageViews?.midTermTrend && profile.pageViews?.midTermTrend.length > 0 ? profile.pageViews?.midTermTrend : '-'}</span>
            </div>
          </div>
          <div className='details'>
            <h3> Long Term Trend</h3>
            <div className='view-details'>
            <span>{profile.pageViews?.longTermTrend && profile.pageViews?.longTermTrend.length > 0 ? profile.pageViews?.longTermTrend : '-'}</span>
            </div>
          </div>
          </div>
        </div>
    )
}

export default Rating
