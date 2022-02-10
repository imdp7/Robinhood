import React from 'react'
function Prediction(props) {

    return (
        <div>
           <div className="mBvH5QZimLHt5kMAd1wSR">
            <div>
                <div className='_23MecuirDnAcyJaqlkbEB2'>
                    <span className='newsfeed__topmovers__card__numbers'>{props?.source}</span>
                </div>
                </div>
                <div>
                    <div className='css-1itv5e3'>
                        {/* <span>{props.rating}</span> */}
                        
                    </div>
                    <div>
                    
                    {props.to ?
                    
                            <div className='css-14x19dj'>
                                To 
                                <p>
                                    {props.to} 
                                </p>
                            </div>
                            :
                            null
                    }
                    
                    {props.from ?
                            <div className='css-14x19dj'>
                            From
                                <p>
                                    {props.from}
                                </p>
                            </div> 
                             : null
                            }
                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prediction
