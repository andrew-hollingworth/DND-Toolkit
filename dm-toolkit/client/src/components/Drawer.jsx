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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
// ICONS 
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SubjectIcon from '@material-ui/icons/Subject';
import SaveIcon from '@material-ui/icons/Save';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// My Additions
import { Link, Route } from 'react-router-dom';
import AccountMenu from './user/AccountMenu'
import User from './user/User'
import Mechanics from './modules/Mechanics'
import CurrentScreen from './CurrentScreen'
import Combat from './modules/Combat'
import Spells from './modules/Spells'
import Monsters from './modules/Monsters'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    fontFamily: 'Scaly Sans',
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
    justifyContent: 'space-around',
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
  fab: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    position: 'fixed'
  },
  home: {
    textDecoration: 'none',
    fontFamily: 'Mr Eaves Small Caps',
    fontSize: '1.5em',
    color: '#ffffff'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  }

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
            <Link className={classes.home} to='/'>
              Heward's Handy DM Screen
            </Link>
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
        <ListItem button onClick={handleDrawerOpen}
          className={clsx({
            [classes.hide]: open,
          })}>
          <ListItemIcon>
            <ArrowForwardIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem button onClick={handleDrawerClose} className={clsx({
          [classes.hide]: !open,
        })}>
          <ListItemIcon className={classes.arrows}>
            <ArrowBackIcon />
          </ListItemIcon>
        </ListItem>
        {/* START OF MENU AND ICONS */}
        <Divider />
        <List>
          <Link className={classes.link} to='/screen'>
            <ListItem button key="View Screen">
              <ListItemIcon>
                <SubjectIcon />
              </ListItemIcon>
              <ListItemText primary="View Screen" />
            </ListItem>
          </Link>
          <Link className={classes.link} to='/monsters'>
            <ListItem button key="Monsters">
              <ListItemIcon><span className="iconify" data-icon="fa-solid:dragon" data-inline="false" data-width="1.7em" data-height="1.7em"></span></ListItemIcon>
              <ListItemText primary="Monsters" />
            </ListItem>
          </Link>
          <Link className={classes.link} to='/combat'>
            <ListItem button key='Combat'>
              <ListItemIcon><span className="iconify" data-icon="mdi:sword-cross" data-inline="false" data-width="1.7em" data-height="1.7em"></span></ListItemIcon>
              <ListItemText primary="Combat" />
            </ListItem>
          </Link>
          <Link className={classes.link} to='/spells'>
            <ListItem button key="Spells">
              <ListItemIcon><span className="iconify" data-icon="fe:magic" data-inline="false" data-width="1.9em" data-height="1.9em"></span></ListItemIcon>
              <ListItemText primary="Spells" />
            </ListItem>
          </Link>
          <Link className={classes.link} to='/mechanics'>
            <ListItem button key="Game Mechanics">
              <ListItemIcon><span className="iconify" data-icon="fa-solid:scroll" data-inline="false" data-width="1.7em" data-height="1.7em"></span></ListItemIcon>
              <ListItemText primary="Game Mechanics" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <ListItem button key="View Screen">
            <Link to='/user'><ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon></Link>
            <ListItemText primary="User Profile" />
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
            updateHandleChange={props.updateHandleChange}
            handleScreenCreate={props.handleScreenCreate}
            screenHandleChange={props.screenHandleChange}
            newScreenData={props.newScreenData}
            userScreens={props.userScreens}
            handleCurrentScreenSelect={props.handleCurrentScreenSelect}
            toggleDarkTheme={props.toggleDarkTheme} />
        )} />
        <Route path='/mechanics' render={() => (
          <Mechanics
            setConditionModule={props.setConditionModule}
            conditionModule={props.conditionModule}
            handleUpdateScreen={props.handleUpdateScreen}
            setRestModule={props.setRestModule}
            restModule={props.restModule}
            saveScreen={props.saveScreen}
            batchScreen={props.batchScreen} />
        )} />
        <Route path='/screen' render={() => (
          <CurrentScreen
            handleCurrentScreenSelect={props.handleCurrentScreenSelect}
            setConditionModule={props.setConditionModule}
            setRestModule={props.setRestModule}
            setSpellModule={props.setSpellModule}
            conditionModule={props.conditionModule}
            restModule={props.restModule}
            spellModule={props.spellModule}
            currentScreen={props.currentScreen}
            batchScreen={props.batchScreen}
            handleUpdateScreen={props.handleUpdateScreen} />
        )} />
        <Route path='/combat' render={() => (
          <Combat
            handleUpdateScreen={props.handleUpdateScreen}
            saveScreen={props.saveScreen}
            batchScreen={props.batchScreen} />
        )} />
        <Route path='/spells' render={() => (
          <Spells
            setSpellModule={props.setSpellModule}
            spellModule={props.spellModule}
            handleUpdateScreen={props.handleUpdateScreen}
            saveScreen={props.saveScreen}
            batchScreen={props.batchScreen} />
        )} />
        <Route path='/monsters' render={() => (
          <Monsters
            handleUpdateScreen={props.handleUpdateScreen}
            saveScreen={props.saveScreen}
            batchScreen={props.batchScreen} />
        )} />
        <Route exact path='/' render={() => (
          <>
            <h1>Welcome to Heward's Handy DM Screen</h1>
            <Typography variant="body1" component="p">
              <span className='scaly'>This digital Dungeon Master Screen is a proof of concept that is still in development. It is intended to allow DMs to collate the rules they most often reference onto a screen. You can check out the Spells page to get a sense for the type of filtering I am implementing, and if you create an account, you can build your own screens!
              <br /><br />
                <a href='https://github.com/andrew-hollingworth/DND-Toolkit'>You can find this project on Github.
                </a>
                <br /><br />
                <a href='https://andrewhollingworth.com'>Here are other projects that I've made
                </a>
              </span>
            </Typography>
          </>)} />
      </main>
      <Fab aria-label='save button' color='secondary' className={classes.fab} onClick={props.saveScreen} >
        <SaveIcon />
      </Fab>
    </div >
  );
}
