import React,{useState,useEffect} from 'react'
import { Line } from "react-chartjs-2";
import Plot from 'react-plotly.js';

const options = {
  legend: {
    display: false,
  },
  responsive:'true',
  hover: {
    intersect: false
  },
  elements: {
    line: {
      tension: 0,
    },
    point: {
      radius: 1,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
        ticks: {
          display: false,
        }
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};


function Graph({ graph,casesType }) {
    const [xvalues, setXValues] = useState({});
    const [yvalues, setYValues] = useState({});
    
  useEffect(() => {
   let data = graph;
   let StockXValues =[];
   let StockYValues =[];
   for (var key in data['Time Series (Daily)']) {
     StockXValues.push(key);
     StockYValues.push(data['Time Series (Daily)'][key]['1. open']);
   }
   setYValues(StockYValues);
   setXValues(StockXValues);
   
  }, []);


  return (
      
    <div>
      
        {/* <Line
          data={{
            datasets: [
              {
                type: 'line',
                backgroundColor: "transparent",
                borderColor: "#3CC805",
                borderWidth: 2,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: '#3CC805',
                pointHoverBorderColor: '#000000',
                pointHoverBorderWidth: 1,
                pointHoverRadius: 2,
                data: {yvalues},
              },
            ],
            
          }}
          options={options}
        /> */}
        <Plot
          data={[
            {
              x: {xvalues},
              y: {yvalues},
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 720, height: 440, title: 'A Fancy Plot'}}
        />
      
    </div>
  );
}

export default Graph
