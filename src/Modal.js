import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import FinancialTables from './FinancialTables'
import Progress from './Progress'

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const styleButton = {

    borderRadius: 10,
    margin:10,
    letterSpacing:1
}

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Modal({financial}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
      <>
    {financial ?
    <div style={{ paddingTop:'20px'}}>
    <ButtonGroup size="large" style={{justifyContent:'center',display:'flex'}} aria-label="large outlined secondary button group">
      <Button key ='1' variant="contained" style={styleButton} onClick={handleClickOpen}>
        Financials
      </Button>
      <Button key='2' variant="contained" style={styleButton} onClick={handleClickOpen}>
        History
      </Button>
      <Button key='3' variant="contained" style={styleButton} onClick={handleClickOpen}>
        Options
      </Button>
      <Button key='4' variant="contained" style={styleButton} onClick={handleClickOpen}>
        Holders
      </Button>
      <Button key='5' variant="contained" style={styleButton} onClick={handleClickOpen}>
        Statistics
      </Button>
      </ButtonGroup>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth='xl' fullWidth='true' scroll='paper'>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Balance Sheet
        </DialogTitle>
        <DialogContent dividers>
          <FinancialTables financial={financial}/>
        </DialogContent>
        
      </Dialog>
    </div>
      : <Progress/>}
      </>
  );
}
