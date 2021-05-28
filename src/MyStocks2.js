import React from 'react'
import './MyStocks.css'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
function MyStocks2({info,profile}) {
    return (
        <div className='box'>
            <div className='box-title1'>
                <span className='box-heading'>
                    Your Average Cost
                </span>
                </div>
                <div>
                    <h2 className='box-title2'>
                        {profile.price?.currencySymbol}{info?.buyPrice}
                    </h2>
                </div>
                <div className='box-table'>
                <Table>
                <TableRow hover={true}>
                    <TableCell scope='row' align='left'>Shares</TableCell>
                    <TableCell scope='row' align='right'>{info?.shares}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope='row' align='left'>Portfolio Diversity</TableCell>
                    <TableCell scope='row' align='right'>30.29%</TableCell>
                </TableRow>
                </Table>
                </div>
        </div>
    )
}

export default MyStocks2
