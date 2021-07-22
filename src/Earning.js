import React,{useState,useEffect} from 'react'
import Plot from 'react-plotly.js'
import './CompanyDetails.css'

function Earning({ear},props) {

  const [XValues, setXValues] = useState({});
  const [YValues, setYValues] = useState({});
  const [expected,setExpected] = useState({});

    let StockXValues =[];
    let StockYValues =[];
    let ExpectedValue = [];
      
    useEffect(() => {
      const data = ear;
      for (var key in data) {
     StockXValues.push(data[key]['fiscalDateEnding']);
     StockYValues.push(data[key]['reportedEPS']);
     ExpectedValue.push(data[key]['estimatedEPS'])
    }
    setYValues(StockYValues);
    setXValues(StockXValues);
    setExpected(ExpectedValue);
    
  }, [StockXValues,StockYValues,ear,ExpectedValue]);

  const  layout = {
    barmode:'group',
    paper_bgcolor:'transparent',
    plot_bgcolor:'transparent',
    height:400,
    width:800,
    autosize: true,

    font: {
      family: 'Arial',
      size: 15,
      color: '#ffffff'
          },
          margin: {
      l: 100,
      r: 50,
      b: 50,
      t: 50,
      pad: 4
          },
    
    xaxis: {
      autorange: true,
      showgrid: false,
      zeroline: false,
      showline: false,
      autotick: true,
      ticks: '',
      showticklabels: true,
      fixedrange:true,
    },
    yaxis: {
      autorange: true,
      showgrid: false,
      zeroline: false,
      showline: false,
      autotick: true,
      ticks: '',
      showticklabels: true,
      fixedrange:true,
    }
        };

  const config = { displayModeBar: false }

    return (
        <div>
         <div className="newsfeed__popularlists__intro">
        <span className="list__title">Earnings</span>
        <p>Consensus EPS</p>
        </div>
       
        <Plot
          data={[
            {
              x: XValues,
              y: YValues,
              type: 'scatter',
              mode: 'markers',
              marker: {color: 'red',size:15},
              hovertemplate: '%{y}',
              name: 'Actual',
              opacity: 1,
              symbol:'circle',
              autotick: false,
              dtick: 10,
              
            },
            
            {
              x: XValues,
              y: expected,
              type: 'scatter',
              mode: 'markers',
              marker: {color: 'white',size:15},
              hovertemplate: '%{y}',
              name: 'Expected',
              opacity: 0.3,
              autotick: false,
              dtick: 10,
              
            }
          ]
          }
          layout={layout}
          config={config}
        />

            {/* <div className="grid-4 _1-LuWSzn-erBDKvIM2uiMO">
          <div className='details'>
          <h3> Earnings Average</h3>
          <div className='view-details'>
            <span>{profile.calendarEvents.earnings?.earningsAverage ? profile.calendarEvents.earnings?.earningsAverage.fmt : '-'}</span>
          </div>
          </div>
            <div className='details'>
            <h3> Earning Date</h3>
            <div className='view-details'>
          <span>{profile.calendarEvents.earnings?.earningsDate[0] ? profile.calendarEvents.earnings?.earningsDate[0].fmt : '-'}</span>
            </div>
          </div>
            <div className='details'>
            <h3> Earning High</h3>
            <div className='view-details'>
          <span>{profile.calendarEvents.earnings?.earningsHigh ? profile.calendarEvents.earnings?.earningsHigh.fmt : '-'}</span>
            </div>
            </div>
            <div className='details'>
            <h3> Earning Low</h3>
            <div className='view-details'>
          <span>{profile.calendarEvents.earnings?.earningsLow ? profile.calendarEvents.earnings?.earningsLow.fmt : '-'}</span>  
            </div>
          </div>
            <div className='details'>
            <h3>Revenue Average</h3>
            <div className='view-details'>
          <span>{profile.calendarEvents.earnings?.revenueAverage ? profile.calendarEvents?.earnings.revenueAverage.fmt : '-'}</span>
            </div>
            </div>         
            <div className='details'>
            <h3> Revenue High</h3>
            <div className='view-details'>
           <span>{profile.calendarEvents.earnings?.revenueHigh ? profile.calendarEvents?.earnings.revenueHigh.fmt : '-'}</span>
            </div>         
          </div>          
            <div className='details'>
            <h3> Revenue Low</h3>
            <div className='view-details'>
          <span>{profile.calendarEvents.earnings?.revenueLow ? profile.calendarEvents?.earnings.revenueLow.fmt : '-'}</span>
            </div>
          </div>
        </div>  */}
        </div>

    )
}

export default Earning
