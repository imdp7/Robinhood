import React from 'react'
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import {truncate} from './StockData'
function SingleArticle(props) {
   
    return (
        <div className="single">
          <a rel={'external'} className="nostyle" 
            target="_blank" href={props?.link} >
        <div className='newsfeed__articles__header'>     
            <div className="newsfeed__article__title">
            <div className='header__article'>
            <div className='css-70qvj9'>
            <span className="css-sj6ac5">
                <FlashOnIcon/>
            </span>
            <span className="_1fshCErpE1-0MuTzZ8-Lxk">
            {props?.publisher}
            </span>
            <span>{props?.time}</span>
            </div>
            <div>
            <span  className="_1YD8Jvi6dW0I_OeBIY0vLp">
                <MoreHorizIcon/>
            </span>
            </div>    
            </div>
            
            <div className="newsfeed__article__headline">
                 <p>{props?.title}</p>
            </div>  
        </div>
    
        <div className="newsfeed__article__content">
            <div className="newsfeed__article__paragraph">
                <p>
                    {truncate(props.summary,100)}
                </p>
            </div>
            <div className="newsfeed__article__image">

                <img src={props?.image} width="145" height="85" alt={props?.source}/>

            </div>
        </div>   
        </div>
        </a>
        </div>
    )
}

export default SingleArticle
