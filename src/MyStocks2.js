import React from 'react'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import './MyStocks.css'
import {styles} from './MyStocks1'

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
                    <TableCell scope='row' align='left' style={styles}>Shares</TableCell>
                    <TableCell scope='row' align='right' style={styles}>{info?.shares}</TableCell>
                </TableRow>
                <TableRow hover={true}>
                    <TableCell scope='row' align='left' style={styles}>Portfolio Diversity</TableCell>
                    <TableCell scope='row' align='right' style={styles}>30.29%</TableCell>
                </TableRow>
                </Table>
                </div>
        </div>
    )
}

export default MyStocks2
