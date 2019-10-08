import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// ICONS 
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// My Additions
import { Link, Route } from 'react-router-dom';
import AccountMenu from './user/AccountMenu'
import User from './user/User'
import Conditions from './modules/Conditions'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar)}
      >
        <Toolbar className='toolbar'>
          <Typography variant="h5" noWrap>
            <Link className='eaves' to='/'>Heward's Handy DM Screen</Link>
          </Typography>
          <AccountMenu
            currentUser={props.currentUser}
            handleLogin={props.handleLogin}
            handleLogout={props.handleLogout}
            authFormData={props.authFormData}
            authHandleChange={props.authHandleChange}
            handleSignup={props.handleSignup} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={classes.toolbar} />
        {/* START OF DRAWER, OPEN/CLOSE MENU BUTTONS */}
        <IconButton onClick={handleDrawerOpen}
          className={clsx({
            [classes.hide]: open,
          })}>
          <ArrowForwardIcon />
        </IconButton>
        <IconButton onClick={handleDrawerClose} className={clsx({
          [classes.hide]: !open,
        })}>
          <ArrowBackIcon />
        </IconButton>
        {/* START OF MENU AND ICONS */}
        <Divider />
        <List>
          <ListItem button key="View Screen">
            <ListItemIcon>
              <span class="iconify" data-icon="ic:round-library-books" data-inline="false" data-width="1.7em" data-height="1.7em"></span>
            </ListItemIcon>
            <ListItemText primary="View Screen" />
          </ListItem>
          <ListItem button key="Monsters">
            <ListItemIcon><span className="iconify" data-icon="fa-solid:dragon" data-inline="false" data-width="1.7em" data-height="1.7em"></span></ListItemIcon>
            <ListItemText primary="Monsters" />
          </ListItem>
          <ListItem button key='Combat'>
            <ListItemIcon><span className="iconify" data-icon="mdi:sword-cross" data-inline="false" data-width="1.7em" data-height="1.7em"></span></ListItemIcon>
            <ListItemText primary="Combat" />
          </ListItem>
          <ListItem button key="Game Mechanics">
            <Link to='/mechanics'><ListItemIcon><span className="iconify" data-icon="fa-solid:scroll" data-inline="false" data-width="1.7em" data-height="1.7em"></span></ListItemIcon></Link>
            <ListItemText primary="Game Mechanics" />
          </ListItem>
        </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Route path='/user' render={() => (
          <User
            currentUser={props.currentUser}
            handleLogout={props.handleLogout}
            handleUpdate={props.handleUpdate}
            handleUserDelete={props.handleUserDelete}
            updateFormData={props.updateFormData}
            updateHandleChange={props.updateHandleChange} />
        )} />
        <Route path='/mechanics' render={() => (
          <Conditions
            setConditionModule={props.setConditionModule}
            conditionModule={props.conditionModule} />
        )} />
      </main>
    </div >
  );
}
