import React,{useState,useEffect} from 'react'
import Plot from 'react-plotly.js';
import Progress from './Progress';

function Graph({ graph,casesType }) {
    const [XValues, setXValues] = useState({});
    const [YValues, setYValues] = useState({});
    
    let StockXValues =[];
    let StockYValues =[];
  useEffect(() => {
   let data = graph;

   for (var key in data['Time Series (Daily)']) {
     StockXValues.push(key);
     StockYValues.push(data['Time Series (Daily)'][key]['1. open']);
    }
    setYValues(StockYValues);
    setXValues(StockXValues);
  }, []);

  const  layout = {

    paper_bgcolor:'transparent',
    plot_bgcolor:'transparent',
    height:250,
    autoMargin:true,
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0,
      pad: 4
    },
    xaxis: {
      autorange: true,
      showgrid: false,
      zeroline: false,
      showline: false,
      autotick: true,
      ticks: '',
      showticklabels: false
    },
    yaxis: {
      autorange: true,
      showgrid: false,
      zeroline: false,
      showline: false,
      autotick: true,
      ticks: '',
      showticklabels: false
    }
  };

  const config = { displayModeBar: false }

  return (
    <div>
      { graph ?
        <Plot
          data={[
            {
              x: XValues,
              y: YValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
              
            }
          ]}
          layout={layout}
          config={config}
        />
      :
      <Progress/>
        }
    </div>
  );
}

export default Graph
