import React from 'react'
import Plot from 'react-plotly.js';
function RecommendationRating({profile}) {
	const target = profile?.financialData;

	const trace1 = {
		x: [target.recommendationMean?.fmt],
		mode:'markers',
		text:'',
		marker: {
			size: 6,
		      }
	};
	const trace2 = {
		x: [1,2,3,4,5],
		text: ["Strong Buy","Buy","Hold","Sell","Strong Sell"],
		mode:'markers',
		marker: {
			size: 0,
			type: 'circle',
		      }
		
	};
	
	const data = [trace1,trace2];

	const  layout = {
		barmode:'group',
		paper_bgcolor:'transparent',
		plot_bgcolor:'white',
		height:150,
		width:500,

		bargap: 0,
		font: {
			family: 'Arial',
			size: 15,
			color: '#ffffff'
		      },
		      xaxis: {
			autorange: true,
			showgrid: false,
			zeroline: false,
			showticklabels: true,
			tickformat: '.d',
			fixedrange:true,

		      },
		yaxis: {
			autorange: false,
			showgrid: false,
			zeroline: false,
			showticklabels: false,
			fixedrange:true,
		},
		
	      };

	const config = { displayModeBar: false}
	return (
		<div>
		<div className="newsfeed__popularlists__section">
        	<span className="list__title">Recommendation Rating</span>
        	</div>
		<Plot
		    data={data}
		    layout={layout}
		    config={config}
		  />
		</div>
	)
}

export default RecommendationRating
