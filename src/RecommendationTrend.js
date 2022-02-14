import React from 'react'
import Recomd from './Recomd'
function RecommendationTrend({profile}) {
	 const trend = profile?.recommendationTrend?.trend;
	return (
		<div>
		<div className="newsfeed__popularlists__section">
        	<span className="list__title">Recommendation Trends</span>
        	</div> 
			
		<Recomd 
		trend={trend}
/>
		</div>
	)
}

export default RecommendationTrend
