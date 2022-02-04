import React from 'react'
import Plot from 'react-plotly.js';

function Recomd({trend}) {

	const trace1 = {
		x:[trend[0].period,trend[1].period,trend[2].period,trend[3].period],
		y:[trend[0].strongBuy,trend[0].buy,trend[0].hold,trend[0].sell,trend[0].strongSell],
		name: 'Strong Buy',
		type: 'bar',
		marker: {color: 'rgb(0,143,135)'},
		//text: {yValues},
		mode: 'markers+text',
		textposition: 'inside',
	
	};
      
	const trace2 = {

		x:[trend[0].period,trend[1].period,trend[2].period,trend[3].period],
		y:[trend[1].strongBuy,trend[1].buy,trend[1].hold,trend[1].sell,trend[1].strongSell],
	      name: 'Buy',
	      type: 'bar',
	      marker: {color: 'rrgb(2,192,115)'},

	      mode: 'markers+text',
	      textposition: 'inside',
      };
      const trace3 = {
	x:[trend[0].period,trend[1].period,trend[2].period,trend[3].period],
	y:[trend[2].strongBuy,trend[2].buy,trend[2].hold,trend[2].sell,trend[2].strongSell],
	      name: 'Hold',
	      type: 'bar',
	      marker: {color: 'rgb(254,220,71)'},

		mode: 'markers+text',
		textposition: 'inside',
      };
      const trace4 = {
	x:[trend[0].period,trend[1].period,trend[2].period,trend[3].period],
	y:[trend[3].strongBuy,trend[3].buy,trend[3].hold,trend[3].sell,trend[3].strongSell],
	      name: 'Sell',
	      type: 'bar',
	      marker: {color: 'rgb(255,163,61)'},

		mode: 'markers+text',
		textposition: 'inside',
      };
      const trace5 = {
	x:[trend[0].period,trend[1].period,trend[2].period,trend[3].period],
	y:[trend[3].strongBuy,trend[3].buy,trend[3].hold,trend[3].sell,trend[3].strongSell],
	      name: 'Strong Sell',
	      type: 'bar',
	      marker: {color: 'rgb(255,51,58)'},

		mode: 'markers+text',
		textposition: 'inside',
      };
const data = [trace1, trace2, trace3, trace4,trace5];
  const  layout = {
	barmode:'relative',
	paper_bgcolor:'transparent',
	plot_bgcolor:'transparent',
	height:300,
	width: 400,
	autosize: true,
	bargap: 0.498,
	font: {
		family: 'Arial',
		size: 15,
		color: '#ffffff'
	      },
	margin: {
	  l: 50,
	  r: 100,
	  b: 50,
	  t: 50,
	  pad: 2
	},
	xaxis: {
	  autorange: true,
	  showgrid: false,
	  zeroline: true,
	  showline: true,
	  autotick: true,
	  ticks: '',
	  showticklabels: true,
	  fixedrange:true,
	},
	yaxis: {
	  autorange: true,
	  showgrid: false,
	  zeroline: true,
	  showline: true,
	  autotick: true,
	  ticks: '',
	  showticklabels: true,
	  fixedrange:true,
	}
      };
    
      const config = { displayModeBar: false }

	return (
		<>
		{trend.length>0 ?
		<div>
		
		  <Plot
		    data={data}
		    layout={layout}
		    config={config}
		  />
	      </div>
	      :null}
	      </>
	)
}

export default Recomd
