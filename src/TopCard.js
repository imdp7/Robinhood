import React from 'react'
import {Link} from 'react-router-dom'
function TopCard(props) {
    
    const color = props.percent < 0 ? "#ff3d12" : "#29c446";

return (
        
            <div className='flex flex-col'>
                <Link to={`/${props?.link}/${props?.symbol || props?.slug}`} style={{textDecoration:'none',color:'white'}}>
            <div className="flex flex-col justify-between h-full space-y-8 flex-wrap border border-black rounded-2xl p-2">
                <div>
                    <div className='_23MecuirDnAcyJaqlkbEB2'>
                        <span className='newsfeed__topmovers__card__numbers'>{props.symbol || props?.name}</span>
                    </div>
                </div>
                <div>
                    <div className='css-1itv5e3' style={{color: `${color}`}}>
                    <span>{props?.currency}{props?.prePrice || props?.price || props.postPrice }</span>
                        {/* <span>${(Math.round(props?.price * 100) / 100).toFixed(2)}</span> */}
                    </div>
                    {props?.percent &&(
                    <div>
                            <span className='css-14x19dj' style={{color: `${color}`}}>
                            
                                {(Math.round(props?.percent * 100) / 100).toFixed(2)} %

                            </span>
                    </div>
                    )}
                </div>
            </div>
                </Link>
            </div>

)
}

export default TopCard
