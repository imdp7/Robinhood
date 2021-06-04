import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function FinancialTables({financial}) {

  const classes = useStyles();

  const rows = [
    createData('Total Assets', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.totalAssets?.longFmt,
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.totalAssets?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.totalAssets?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.totalAssets?.longFmt),
    createData('Total Capitalization', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.totalStockholderEquity?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.totalStockholderEquity?.longFmt,
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.totalStockholderEquity?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.totalStockholderEquity?.longFmt),
    createData('Common Stock Equity', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.totalStockholderEquity?.longFmt,
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.totalStockholderEquity?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.totalStockholderEquity?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.totalStockholderEquity?.longFmt),
    createData('Capital Lease Obligations', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.totalStockholderEquity?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.totalStockholderEquity?.longFmt,
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.totalStockholderEquity?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.totalStockholderEquity?.longFmt),
    createData('Intangible Assets', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.intangibleAssets?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.intangibleAssets?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.intangibleAssets?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.intangibleAssets?.longFmt),
    createData('Capital Surplus', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.capitalSurplus?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.capitalSurplus?.longFmt,  
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.capitalSurplus?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.capitalSurplus?.longFmt),
    createData('Total Liability', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.totalLiab?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.totalLiab?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.totalLiab?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.totalLiab?.longFmt),
    createData('Total Stock Equity', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.totalStockholderEquity?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.totalStockholderEquity?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.totalStockholderEquity?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.totalStockholderEquity?.longFmt),
    createData('Good Will', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.goodWill?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.goodWill?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.goodWill?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.goodWill?.longFmt),
    createData('Treasury Stock', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.treasuryStock?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.treasuryStock?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.treasuryStock?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.treasuryStock?.longFmt),
    createData('Other Assets', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.otherAssets?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.otherAssets?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.otherAssets?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.otherAssets?.longFmt),
    createData('Cash', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.cash?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.cash?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.cash?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.cash?.longFmt),
    createData('Long Term Investments', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.longTermInvestments?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.longTermInvestments?.longFmt,  
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.longTermInvestments?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.longTermInvestments?.longFmt),
    createData('Short Term Investments', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.shortTermInvestments?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.shortTermInvestments?.longFmt,  
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.shortTermInvestments?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.shortTermInvestments?.longFmt),
    createData('Net Receivables', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.netReceivables?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.netReceivables?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.netReceivables?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.netReceivables?.longFmt),
    createData('Accounts Payable', 
        financial?.balanceSheetHistory?.balanceSheetStatements[0]?.accountsPayable?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[1]?.accountsPayable?.longFmt,  
        financial?.balanceSheetHistory?.balanceSheetStatements[2]?.accountsPayable?.longFmt, 
        financial?.balanceSheetHistory?.balanceSheetStatements[3]?.accountsPayable?.longFmt),
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Breakdown</StyledTableCell>
            <StyledTableCell align="right">{financial?.balanceSheetHistory?.balanceSheetStatements[0]?.endDate?.fmt}</StyledTableCell>
            <StyledTableCell align="right">{financial?.balanceSheetHistory?.balanceSheetStatements[1]?.endDate?.fmt}</StyledTableCell>
            <StyledTableCell align="right">{financial?.balanceSheetHistory?.balanceSheetStatements[2]?.endDate?.fmt}</StyledTableCell>
            <StyledTableCell align="right">{financial?.balanceSheetHistory?.balanceSheetStatements[3]?.endDate?.fmt}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
