import React from 'react'
import Plot from 'react-plotly.js';

function AnalystPrice({profile}) {
	const target = profile?.financialData;

	const trace1 = {
		x:[target.targetLowPrice?.fmt,target.targetMedianPrice?.fmt,target.targetHighPrice?.fmt],
		name:'',
		text: ['Low Price','Median Price','High Price'],
		textposition: 'top',
		mode: 'markers',
		hovertemplate:'<b>%{text}</b>'+': ' + '$%{x:.2f}',
		hovermode:'x',
		marker: {
			size: 5,
			color: ['orange','red','orange'],
			symbol:'circle',
		      }
	};
	const data = [trace1];

	const  layout = {

		paper_bgcolor:'transparent',
		plot_bgcolor:'white',
		height:150,
		width:400,
		font: {
			family: 'Arial',
			size: 15,
			color: '#ffffff'
		      },
		     
		xaxis: {

			showgrid: false,
			zeroline: false,
			showticklabels: false,


		      },
		yaxis: {
			autorange: false,
			showgrid: false,
			zeroline: false,
			showticklabels: false,

		},
		annotations: [
			{
			  x: target.targetLowPrice?.fmt,
			  xref: 'x',
			  yref: 'y',
			  text: 'Low: '+target.targetLowPrice?.fmt,
			  showarrow: true,
			  arrowhead: 7,
			  arrowsize:1.2,
			  arrowcolor: "yellow",
			  font: {
				color: "white",
				size: 15
			      },
			  ax: 0,
			  ay: 30
			},
			{
			  x: target.targetMedianPrice?.fmt,
			  xref: 'x',
			  yref: 'y',
			  text: 'Avg: '+ target.targetMedianPrice?.fmt,
			  showarrow: true,
			  arrowsize:1.5,
			  arrowhead: 7,
			  arrowcolor: "red",
			  ax: 0,
			  ay: -31
			},
			{
				x: target.targetHighPrice?.fmt,
				xref: 'x',
				yref: 'y',
				text: 'High: '+target.targetHighPrice?.fmt,
				showarrow: true,
				arrowhead: 7,
				arrowsize:1.2,
				arrowcolor: "yellow",
				font: {
					color: "white",
					size: 15
				      },
				ax: 0,
				ay: 31
			      },	
			
		      ]
		      
	      };

	const config = { displayModeBar: false, }
	return (
		<div >
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
