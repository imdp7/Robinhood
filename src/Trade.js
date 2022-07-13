import React,{useState,useEffect} from 'react'
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { TextField,Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import './Trade.css'
import {db} from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const style = {
  background: '#02C805',
  borderRadius: 3,
  border: 0,
  color: 'black',
  height: 48,
  width: 200,
  fontWeight:'bold',
  letterSpacing: 1.7,
  
};
const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    },
  },
  notchedOutline: {
    borderWidth: 1,
    '&:hover': {
        borderColor: '#02C805',
        borderWidth: 2
    },
  }
});



function Trade({profile}) {
  const [info,setInfo] = useState([])
  const [state,setState] = useState({
    limitBuy : '',
    share : 0,
  })
  //const [total,setTotal] = useState(null)


 
  const classes = useStyles();

  function handleChange(evt) {
    evt.preventDefault();
    const value = parseFloat(evt.target.value);
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  
   function estimate(){
    return (profile.price?.preMarketPrice || profile.price?.postMarketPrice || profile.price?.regularMarketPrice) * state.shares;
  }
  const total = (state.limitBuy) * (state.share);

  
  useEffect(() => {
    db.collection('users').doc('8j6X5hg3Y8437puOtfCa').collection('stocks')
    .onSnapshot(snapshot => {
    snapshot.docs.map(function(doc) {
      if(doc.data().ticker === profile.quoteType?.symbol) {
        let info = doc.data();
        setInfo(info);
     }
    },[])
  })
    },[ profile.quoteType?.symbol])

   const buyStock = (event) => {
    event.preventDefault();
    if(state.limitBuy && state.share){
    db.
    collection('users/V15HmhTXvZMSRGwWsrPWGsBv8zs1/stocks')
      .where("ticker", "==", profile?.symbol)
      .get()
      .then((querySnapShot) => {
        if (!querySnapShot.empty) {
          querySnapShot.forEach(function (doc) {
            // update the query
            db.
            collection('users/V15HmhTXvZMSRGwWsrPWGsBv8zs1/stocks')
              .doc(doc.id)
              .update({
                buyPrice: parseFloat(doc.data().buyPrice += state.limitBuy),
                shares: parseInt(doc.data().shares += state.share),
                dateTime: new Date()
              });
          });
        } else {
          // update the query
          db.collection("myStocks").add({
            buyPrice:state.limitBuy,
            ticker: profile.symbol,
            shares: state.share,
            dateTime: new Date(),
          });
        }
        // doc.data()
        toast.success("Wooo, Order Executed !!");
      });
    }
    else {
      toast.error("Sorry, Order cannot be Executed Please enter a valid order");
        setState({
          share: 0,
          limitBuy: 0
        })
    }
    event.preventDefault();
   };

    return (
      
     <>
        <ToastContainer/>
      <div className="stat__container">
        <div className="stats__header">
          <a href='/'> Buy {profile?.symbol}</a>
          {info.shares && (
          <a href='/'>Sell {profile?.symbol}</a>
          )}
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
                     <TextField  placeholder='$0.00' autoComplete='off' name='limitBuy'  type='number' InputProps={classes} variant="outlined" onChange={handleChange}/>
                     {/* <Input type="number" error='true' placeholder='0' required onChange={(event)=> (event.target.value) }/> */}
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
                  <div className='_2X_C2V1jKOFk-3x2QNyNW1'>
                  <div className='css-x189p4'>
                     <TextField  placeholder='0' autoComplete='off' name='share' type='number' InputProps={ classes } variant="outlined" required
                       onChange={handleChange}
                     />
                </div>
                </div>
                </div>
            </div>
            </div>

            <div>
              
              
            <div className='trade-details'>
                <label className='trade-label1'>
                    Market Price 
                    <span className='help__icon'>
                    <HelpOutlineIcon fontSize='small' color='secondary'/>
                    </span>
                </label>
                <div className='trade-input'>
                  <div className='_2X_C2V1jKOFk-3x2QNyNW12'>
                  <div className='css-x189p4'>
                  <div className='_2ZZrJfyutWozgUjKja3vp9'>
                  <h4>{profile.price?.currencySymbol ? profile.price?.currencySymbol : null}
                  {profile.price?.preMarketPrice || profile.price?.postMarketPrice || profile.price?.regularMarketPrice ? profile.price?.preMarketPrice.fmt || profile?.price.postMarketPrice.fmt || profile.price?.regularMarketPrice.fmt : null }
                  </h4>
                     </div>
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
                     <Button className='-aVQMh2t1ihTiMYRyjQA2' type='button' role='button' aria-label='open-menu' aria-haspopup='true' data-toggle='true'>
                     <div className='_2ZZrJfyutWozgUjKja3vp9'>
                          <span>Good for Day</span>
                     </div>
                     <div className='_3n_jK_e253MhrymMnCvcxy'>
                         <span className='css-6q9pz'>
                        
                         </span>
                    </div>
                     </Button>
                </div>
                </div>
                </div>
            </div>
            {
              state.limitBuy || state.share ? 
            <div className='trade-details2'>
              <label className='trade-label'>Estimate Cost</label>
              <div className='trade-input'>
                  <div className='_2X_C2V1jKOFk-3x2QNyNW12'>
                  <div className='css-x189p4'>
                  <div className='_2ZZrJfyutWozgUjKja3vp9'>
                  {state.limitBuy && state.share ? <h3>{total} </h3> : "--" }
                     </div>
                </div>
                </div>
                </div>
            </div>
                :
                null}
            </div>
            
           

          </div>
        </div>
        <div className='_1oJVwyMO-j1ETeFAdtVHEW'>
        <div className='_3kmUcs_2E5JhpQECnnYLG XzyC-hUeuhJpKibZShdJi'>
        <div className="_3NYUZLMS54TNjTgbj_F0W- _2QawT-EkOq7gIQN1hHcFqU" style={{height: '0px', transitionDuration: '300ms'}}>
        <div className="_3UC6vIw0Z8kgiibABGCPT2">
        <div>
          </div>
          <div className="_3_Y5qz2hHsr3c1JlQ15G0N">
          <div className="_1fx5BG_fao1VLT8kHNxyTs">
          <div className="css-fzwid6">
          <Button style={style} onClick={buyStock}>
          <div className="css-1bz5kc3">
          <span className="css-j0s357">
          <span className="css-1jzf67n">Review Order</span>
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
    
          </>
     
    )
}

export default Trade
