import React from 'react'
import Plot from 'react-plotly.js';
function RecommendationRating({profile}) {
	const target = profile?.financialData;

	const trace1 = {
		x: [target.recommendationMean?.fmt],
		mode:'markers',
		//hovertemplate:'Average: %{x:.2f}',
		name:'',
		
	};
	const trace2 = {
		x: [1,2,3,4,5],
		ax: ["Strong Buy","Buy","Hold","Sell","Strong Sell"],
		name:'',
		mode:'markers',
		
		
	};
	
	const data = [trace1,trace2];

	const  layout = {
		barmode:'group',
		paper_bgcolor:'transparent',
		plot_bgcolor:'white',
		height:150,
		width:500,
		font: {
			family: 'Arial',
			size: 15,
			color: 'white'
		      },
		xaxis: {

			autorange: true,
			showgrid: false,
			zeroline: false,
			showticklabels: true,
			fixedrange:true,
			showlegend:false

		      },
		yaxis: {
			autorange: false,
			showgrid: false,
			zeroline: false,
			showlegend:false,
			showticklabels: false,
			fixedrange:true,
		},
		annotations: [
			{
			  x: target.recommendationMean?.fmt,
			  xref: 'x',
			  yref: 'y',
			  text: target.recommendationMean?.fmt,
			  align: 'center',
   			  arrowhead: 7,
    			  arrowsize: 1,
      			  arrowwidth: 2,
      			  arrowcolor: '#02C073',
      			  ax: 0,
      			  ay: -30,
      			  bordercolor: '#c7c7c7',
      			  borderwidth: 1,
      			  borderpad: 4,
      			  bgcolor: '#02C073',
      			  opacity: 1
			},
		      ]
		
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
