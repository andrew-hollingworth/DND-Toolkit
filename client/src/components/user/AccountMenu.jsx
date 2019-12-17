import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuPaper from './MenuPaper'

export default function AccountMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <MenuPaper
            currentUser={props.currentUser}
            handleLogin={props.handleLogin}
            handleLogout={props.handleLogout}
            authFormData={props.authFormData}
            authHandleChange={props.authHandleChange}
            handleSignup={props.handleSignup}
            menuToggle={handleClick} />
        </MenuItem>
      </Menu>
    </div>
  );
}