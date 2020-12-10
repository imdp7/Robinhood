import React,{useState,useEffect} from 'react'
import { Line } from "react-chartjs-2";

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


function Graph({ casesType }) {
    //console.log(graph.chart.result.indicators)
    const [data, setData] = useState({});
    
  useEffect(() => {
    
    let data = [];
    let value = 50;
    let date = data.length + 3;
    for(var i = 0; i < 20; i++){
      let date = new Date();
      date.setHours(9,30,10,20);
      date.setDate(i);
      value += Math.round(5 + Math.random() *(-5-5));
      data.push({x: date, y: value});
    }   
    setData(data)
  }, []);

  return (
      
    <div>
      {data?.length > 0 && (
        <Line
          data={{
            datasets: [
              {
                type: 'line',
                backgroundColor: "transparent",
                borderColor: "#FF5000",
                borderWidth: 2,
                pointBorderColor: 'rgba(0, 0, 0, 0)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                pointHoverBackgroundColor: '#FF5000',
                pointHoverBorderColor: '#000000',
                pointHoverBorderWidth: 1,
                pointHoverRadius: 2,
                data:data
                    // high : graph.chart.result.indicators.quote[0].high[1],
                    // close : graph.chart.result.indicators.quote[0].close[1],
                    // low : graph.chart.result.indicators.quote[0].low[1],
                    // open : graph.chart.result.indicators.quote[0].open[1],

                
              },
            ],
          }}
          options={options}
        />
      )}
    </div>
  );
}

export default Graph
