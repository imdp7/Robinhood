import React from 'react'
import './MyStocks.css'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export const styles = {
    fontWeight : '500',
    fontSize : 17
} 

function MyStocks1({info,profile}) {

    const numberFormat = (value) =>
  new Intl.NumberFormat('en-IN', {
  }).format(value);
    
    const todayReturn = ((profile.price.regularMarketChange?.fmt ) - ( profile.price.preMarketChange?.fmt || profile.price.postMarketChange?.fmt))*(info?.shares);
    const totalReturn = ((profile.price?.preMarketPrice?.fmt || profile.price?.postMarketPrice?.fmt || profile.price?.regularMarketPrice?.fmt) - (info.buyPrice))*(info?.shares);
    const totalValue = (info.buyPrice) *(info.shares);
    const marketValue = (totalValue) + (totalReturn);

    
    return (
        <div className='box'>
            <div className='box-title1'>
                <span className='box-heading'>
                    Your Market Value
                </span>
                </div>
                <div>
                    <h2 className='box-title2'>
                    {profile.price?.currencySymbol}{(Math.round(marketValue * 100) / 100).toFixed(2)}
                    </h2>
                </div>
                <div className='box-table'>
                <Table>
                <TableRow>
                    <TableCell scope='row' align='left' style={styles}>Today's Return</TableCell>
                    <TableCell scope='row' align='right' style={styles}> {profile.price?.currencySymbol}{(Math.round(todayReturn * 100) / 100).toFixed(2)}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope='row' align='left' style={styles}>Total Return</TableCell>
                    <TableCell scope='row' align='right' style={styles}>{profile.price?.currencySymbol}{(Math.round(totalReturn * 100) / 100).toFixed(2)}</TableCell>
                </TableRow>
                </Table>
                </div>
        </div>
    )
}

export default MyStocks1
