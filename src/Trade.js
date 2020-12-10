import React from 'react'
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import { TextField,Button } from '@material-ui/core';
import './Trade.css'

function Trade({profile}) {
  
    return (
        <div className="stat">
      <div className="stat__container">
        <div className="stats__header">
          <p> Buy {profile.symbol}</p>
          <MoreHorizIcon />
        </div>
        <div className="stats__content">
          <div className="stats__rows">
          <div>
            <div className='trade-details'>
                <label className='trade-label'>
                    Limit Price
                </label>
                <div className='trade-input'>
                  <div className='_2X_C2V1jKOFk-3x2QNyNW1'>
                  <div className='css-x189p4'>
                     <TextField id="outlined-basic" placeholder='$0.00' autoComplete='off'  type='text' />
                </div>
                </div>
                </div>
            </div>
            </div>
            <div>
            <div className='trade-details'>
                <label className='trade-label'>
                    Shares
                </label>
                <div className='trade-input'>
                  <div className='_2X_C2V1jKOFk-3x2QNyNW12'>
                  <div className='css-x189p4'>
                     <TextField  placeholder='0' autoComplete='off' type='text' />
                </div>
                </div>
                </div>
            </div>
            </div>

            <div>
            <div className='trade-details2'>
                <label className='trade-label'>
                    Expires
                </label>
                <div className='trade-input'>
                  <div className='_2X_C2V1jKOFk-3x2QNyNW1'>
                  <div className='css-x189p4'>
                     <Button className='-aVQMh2t1ihTiMYRyjQA2' id="outlined-basic" variant='outlined' type='button' role='button' aria-label='open-menu' aria-haspopup='true' data-toggle='true'>
                     <div className='_2ZZrJfyutWozgUjKja3vp9'>
                          <span>Good for Day</span>
                     </div>
                     <div className='_3n_jK_e253MhrymMnCvcxy'>
                         <span className='css-6q9pz'>
                         <svg fill="none" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4.50024 6L7.99953 2L11.5002 6H4.50024Z" fill="var(--rh__text-color)"></path><path d="M11.4998 10L8.00047 14L4.49976 10H11.4998Z" fill="var(--rh__text-color)"></path></svg>
                         </span>
                     </div>
                     </Button>
                </div>
                </div>
                </div>
            </div>
            </div>

          </div>
        </div>
        </div>
        </div>
    )
}

export default Trade
