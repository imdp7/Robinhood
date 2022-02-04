import React from 'react'
import {Link} from 'react-router-dom'
function Search(props) {
    return (
        <>
        <Link to={`/stocks/${props?.symbol}`} className='nostyle'>
        <div style={{padding:'20px',display:'grid', alignContent:'space-between'}} >
        <div>        
            <span style={{float:'left'}}>{props?.name}</span>
            <span style={{float:'right'}}>{props?.symbol}</span>

            </div>
        <div>
        <span style={{float:'right'}}>{props?.price}</span>
        </div>
        </div>
        </Link>
        </>
    )
}

export default Search
