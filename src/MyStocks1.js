import React from 'react'
import './MyStocks.css'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
function MyStocks1({info}) {
    return (
        <div className='box'>
            <div className='box-title1'>
                <span className='box-heading'>
                    Your Market Value
                </span>
                </div>
                <div>
                    <h2 className='box-title2'>
                        $2000.00
                    </h2>
                </div>
                <div className='box-table'>
                <Table>
                <TableRow hover={true}>
                    <TableCell scope='row' align='left'>Cost</TableCell>
                    <TableCell scope='row' align='right'>${info.buyPrice}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope='row' align='left'>Today's Return</TableCell>
                    <TableCell scope='row' align='right'>+$2000.12</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope='row' align='left'>Total Return</TableCell>
                    <TableCell scope='row' align='right'>+$12200.78</TableCell>
                </TableRow>
                </Table>
                </div>
        </div>
    )
}

export default MyStocks1
