import React from 'react'
import './Stats.css'
import Moment from 'react-moment';

function QueryHistory({info}) {
    
   const Date = info.dateTime;
    return (
        <div className="single">
        
      <div className='newsfeed__articles__header'>     
          <div className="newsfeed__article__title">
          <div className='header__article'>
          
          </div>
          
          <div className="newsfeed__article__headline">
               <p>Market Buy</p>
          </div>  
      </div>
  
      <div className="newsfeed__article__content">
          <div className="newsfeed__article__paragraph">
              <p>
              <Moment>{Date?.toDate()}</Moment>
              </p>
          </div>
          <div className="newsfeed__article__image">
            <p>
                Cancelled
            </p>
          </div>
      </div>   
      </div>
      </div>
    )
}

export default QueryHistory
