import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { logout } from './firebase';


const StyledMenu = withStyles({
  paper: {
    border: '0px solid #d3d4d5',
    
    
  },
})((props) => (
  <Menu
    elevation={10}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center | 10',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Dropdown({user}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Link onClick={handleClick} className='nostyle'>
        {user ? (
        <span>{user.displayName || user.email}</span>) : "Account"}
      </Link>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {!user ? (
      <Link to='/account/login' className='nostyle'>
        <StyledMenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </StyledMenuItem>
        </Link>
        ) : null}
         {!user ? (
        <Link to='/account/register' className='nostyle'>
        <StyledMenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Register" />
        </StyledMenuItem>
        </Link>
        ) : null}
        {user ? (
        <Link to='/account' className='nostyle'>
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </StyledMenuItem>
        </Link>
        ) : null}

          {user ? (
        <StyledMenuItem>
          <ListItemIcon>
            <InboxIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Logout" onClick={logout}  />
        </StyledMenuItem>
        )
        : null}
        
      </StyledMenu>
   </>
  );
}
