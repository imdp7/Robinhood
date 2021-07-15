import React from 'react'
import Plot from 'react-plotly.js';

function AnalystPrice({profile}) {
	const target = profile?.financialData;

	const trace1 = {
		x:[target.targetLowPrice?.fmt,target.targetMedianPrice?.fmt, target.targetHighPrice?.fmt],
		y:[1,2,3],

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
		
	      };

	const config = { displayModeBar: false }
	return (
		<div>
		<div className="newsfeed__popularlists__section">
        	<span className="list__title">Analyst Price Target({target.numberOfAnalystOpinions?.fmt})</span>
        	</div> 

		<Plot
		    data={data}
		    layout={layout}
		    config={config}
		  />

		</div>
	)
}

export default AnalystPrice
