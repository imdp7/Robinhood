import React from 'react'
import {Link} from 'react-router-dom'
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FlashOnIcon from "@material-ui/icons/FlashOn";

function SingleArticle({article}) {
    return (
        <div className="single">
            
        <div className='newsfeed__articles__header'>        
            <div className="newsfeed__article__title">
            <div>
            <div className='css-70qvj9'>
            <span className="css-sj6ac5">
                <FlashOnIcon/>
            </span>
            <span className="_1fshCErpE1-0MuTzZ8-Lxk">
            {article.source}
            </span>
            <span> 2h</span>
            </div>
            <div>
            <span  className="_1YD8Jvi6dW0I_OeBIY0vLp">
                <MoreHorizIcon/>
            </span>
            </div>
            </div> 
            
            <div className="newsfeed__article__headline">
                 <p>{article.headline}</p>
            </div>  
        </div>
        
        <div className="newsfeed__article__content">
            <div className="newsfeed__article__paragraph">
                <p>
                    {article.summary}
                </p>
            </div>
            <div className="newsfeed__article__image">
                <img src={article.image} width="145" height="85" alt={article.source}/>
            </div>
        </div>   
        </div>
    
        </div>
    )
}

export default SingleArticle