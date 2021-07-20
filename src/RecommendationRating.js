import React from 'react'
import Plot from 'react-plotly.js';
function RecommendationRating({profile}) {
	const target = profile?.financialData;

	const trace1 = {
		x:[1,2,3,4,5],

		text: ['Low Price','Median Price', 'High Price'],
		textposition: 'bottom',
  		type: 'line'
	};

	const data = [trace1];

	const  layout = {

		paper_bgcolor:'transparent',
		plot_bgcolor:'white',
		height:150,
		width:500,

		//bargap: 0.318,
		font: {
			family: 'Arial',
			size: 15,
			color: '#ffffff'
		      },
		      yaxis: {
			autorange: true,
			showgrid: false,
			zeroline: false,
			showline: false,
			autotick: false,
			ticks: '',
			showticklabels: false
		      }
		
	      };

	const config = { displayModeBar: false }
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
