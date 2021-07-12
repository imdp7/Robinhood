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
    setExpected(ExpectedValue)

    
  }, [StockXValues,StockYValues,ear]);

  const  layout = {
    barmode: 'group',
    paper_bgcolor:'transparent',
    plot_bgcolor:'transparent',
    height:350,
    xaxis: {

      showgrid: false,
      zeroline: false,
      showline: true,
      autotick: true,
      ticks: '',
      showticklabels: true
    },
    yaxis: {

      showgrid: false,
      zeroline: false,
      showline: true,
      autotick: true,
      ticks: '',
      showticklabels: true
    }
  }

  const config = { displayModeBar: false }

    return (
        <div>
         <div className="newsfeed__popularlists__section"> 
        
        <span className="list__title">
            Earnings
        </span>
        </div>
        
      
        <Plot
          data={[
            {
              x: XValues,
              y: YValues,
              type: 'bar',
              marker: {color: 'red'},
              hovertemplate: '%{y}',
              name: 'Actual',
              opacity: 0.9,
              
            },
            
            {
              x: XValues,
              y: expected,
              type: 'bar',
              marker: {color: 'white'},
              hovertemplate: '%{y}',
              name: 'Expected',
              opacity: 0.75,
              
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
