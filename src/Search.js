import React from 'react'
import {Link} from 'react-router-dom'
function Search(props) {
    return (
        <>
        <Link to={`/stocks/${props?.symbol}`} className='nostyle'>
        <div style={{padding:'20px',display:'flex',alignContent:'space-between'}}>
            <h4>{props.symbol}</h4>
            <p>{props.name}</p>
        </div>
        </Link>
        </>
    )
}

export default Search
