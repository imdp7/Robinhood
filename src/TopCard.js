import React from 'react'
import {Link} from 'react-router-dom'
function TopCard(props) {
    
    const color = props.percent < 0 ? "#ff3d12" : "#29c446";

return (
        <Link to={`/stocks/${props?.symbol}`} style={{textDecoration:'none',color:'white'}}>
        {/* <div className='newsfeed__topmovers__card'> */}
            <div className="mBvH5QZimLHt5kMAd1wSR">
            <div>
                <div className='_23MecuirDnAcyJaqlkbEB2'>
                    <span className='newsfeed__topmovers__card__numbers'>{props.symbol}</span>
                </div>
                </div>
                <div>
                    <div className='css-1itv5e3' style={{color: `${color}`}}>
                    <span>{props?.currency}${props?.prePrice || props?.price || props.postPrice }</span>
                        {/* <span>${(Math.round(props?.price * 100) / 100).toFixed(2)}</span> */}
                    </div>
                    <div>
                            <span className='css-14x19dj' style={{color: `${color}`}}>
                            
                                {(Math.round(props?.percent * 100) / 100).toFixed(2)} %

                            </span>
                    </div>
                </div>
            </div>
            </Link>

)
}

export default TopCard
