import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Login from './Login'
import Signup from './Signup'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={2}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 300,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  userLink: {
    textDecoration: 'none',
  }
}));

const MenuPaper = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {props.currentUser ?
        <>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs"
            >
              <Tab label='Welcome!' {...a11yProps(0)} />
            </Tabs>
          </AppBar>
          <Link className={classes.userLink} to='/user'>
            <Grid
              className={classes.paper}>
              <h2>{props.currentUser.username}</h2>
              <h2><AccountCircleIcon /></h2>
              {/* <IconButton aria-controls="simple-menu" aria-haspopup="true"> */}
              {/* </IconButton> */}
              <Button
                onClick={props.handleLogout}
                variant="contained">
                Logout
            </Button>
            </Grid>
          </Link>
        </>
        :
        <>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs"
            >
              <Tab label="Login" {...a11yProps(0)} />
              <Tab label="Signup" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Login
              authFormData={props.authFormData}
              authHandleChange={props.authHandleChange}
              handleLogin={props.handleLogin}
              menuToggle={props.menuToggle} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Signup
              authFormData={props.authFormData}
              authHandleChange={props.authHandleChange}
              handleSignup={props.handleSignup}
              menuToggle={props.menuToggle}
            />
          </TabPanel>
        </>}
    </div >
  );
}

export default MenuPaper