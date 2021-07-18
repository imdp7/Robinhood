import React from 'react'
import Plot from 'react-plotly.js'


function Financials({fin}) {
	const f = fin?.quarterly;

	const trace2 = {
		x:[f[0]?.date, f[1]?.date, f[2]?.date, f[3]?.date],
		y:[f[0]?.revenue?.fmt,f[1]?.revenue?.fmt,f[2]?.revenue?.fmt,f[3]?.revenue?.fmt],
		name: 'Earnings',
		type: 'bar',
		marker: {color: 'rgb(24,143,255)'},
		textposition: 'inside',
	
	};
      
	const trace1 = {

		x:[f[0]?.date,f[1]?.date,f[2]?.date,f[3]?.date],
		y:[f[0]?.earnings?.fmt,f[1]?.earnings.fmt,f[3]?.earnings.fmt,f[4]?.earnings.fmt],
	      name: 'Revenue',
	      type: 'bar',
	      marker: {color: 'rrgb(2,192,115)'},
	      textposition: 'inside',
      };

// var trace1 = {
// 	x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
// 	y: [20, 14, 25, 16, 18, 22, 19, 15, 12, 16, 14, 17],
// 	type: 'bar',
// 	name: 'earnings',
// 	marker: {
// 	  color: 'rgb(49,130,189)',
// 	  opacity: 0.7,
// 	}
//       };
      
//       var trace2 = {
// 	x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
// 	y: [19, 14, 22, 14, 16, 19, 15, 14, 10, 12, 12, 16],
// 	type: 'bar',
// 	name: 'Revenue',
// 	marker: {
// 	  color: 'rgb(204,204,204)',
// 	  opacity: 0.5
// 	}
//       };
     

const data = [trace1, trace2];

const  layout = {
	barmode:'group',
	paper_bgcolor:'transparent',
	plot_bgcolor:'transparent',
	height:350,
	width:500,
	autosize: true,
	bargap: 0.318,
	font: {
		family: 'Arial',
		size: 15,
		color: '#ffffff'
	      },
	margin: {
	  l: 50,
	  r: 50,
	  b: 50,
	  t: 50,
	  pad: 0
	},
	xaxis: {
	  autorange: true,
	  showgrid: false,
	  zeroline: true,
	  showline: true,
	  autotick: true,
	  ticks: '',
	  showticklabels: true,
	  
	},
	yaxis: {
	  autorange: true,
	  showgrid: false,
	  zeroline: true,
	  showline: true,
	  autotick: true,
	  ticks: '',
	  showticklabels: true
	}
      };
    
      const config = { displayModeBar: false }



	return (
		<div>
		<div className="newsfeed__popularlists__section">
        	<span className="list__title">Financials</span>
        	</div>
		{
			f[0]?.date ?
		<Plot
		    data={data}
		    layout={layout}
		    config={config}
		  />
		  : null
		}
		</div>
	)
}

export default Financials
