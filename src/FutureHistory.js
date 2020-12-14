import React from 'react'
import Prediction from './Prediction'
function FutureHistory({future}) {

    return (
    
        <div className="grid-4 _1-LuWSzn-erBDKvIM2uiMO">
           <div className='_2S3cggR8KQOcagvLyiigSU'>
           {future.map(history => (
               <Prediction 
                   source = {history.firm}
                   rating = {history.action}
                   date = {history.epochGradeDate}
                   to = {history.toGrade}
                   from = {history.fromGrade}
               />
           ))}
           </div>
           </div>

    )
}

export default FutureHistory
