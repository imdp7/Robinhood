import React from 'react'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export const styles = {
	fontWeight : 500,
	fontSize : 15
    }
    const style1 = {
	fontWeight : 800,
	fontSize : 20
    }
function ESGRating({profile}) {
	const esg = profile?.esgScores
	return (
		<div>
		
		
		{esg?.totalEsg ? 
		<>
		<div className="newsfeed__popularlists__section">
        	<span className="list__title">Total ESG Rate Score</span>
        	</div>
		<div className='box'>
		<div className='container-1' style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
		<span style={{fontWeight:700,fontSize:'20px'}}>{esg.totalEsg?.fmt}</span>
		<span style={{fontWeight:400,fontSize:'18px'}}>HIGH</span>
		<span style={{fontSize:'15px',fontStyle:'arial',fontWeight:'normal'}}>{esg.percentile?.fmt}% Percentile</span>
		
		</div>
		
                <div className='box-table'>
                <Table>
                <TableRow>
                    <TableCell scope='row' align='left' style={styles}>Environment Risk Score</TableCell>
                    <TableCell scope='row' align='right' style={styles}>{esg.environmentScore?.fmt}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell scope='row' align='left' style={styles}>Social Risk Score</TableCell>
                    <TableCell scope='row' align='right' style={styles}>{esg.socialScore?.fmt}</TableCell>
                </TableRow>
		<TableRow>
                    <TableCell scope='row' align='left' style={styles}>Government Risk Score</TableCell>
                    <TableCell scope='row' align='right' style={styles}>{esg.governanceScore?.fmt}</TableCell>
                </TableRow>
                </Table>
                </div>
        </div>
</>
	:null
		}
	
		</div>
	)
}

export default ESGRating
