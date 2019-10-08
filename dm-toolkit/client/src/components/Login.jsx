import React from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(0.8),
    marginBottom: theme.spacing(0.8),
    width: 300,
  },
  menu: {
    width: 300,
  },
}));

const Login = (props) => {
  const classes = useStyles();

  const { username, password } = props.authFormData
  return (
    <form onSubmit={props.handleLogin} className={classes.container} noValidate autoComplete="off">
      <TextField
        className={classes.textField}
        id='margin-normal'
        label='Username'
        name='username'
        onChange={props.authHandleChange}
        required
        type='text'
        value={username}
        variant="outlined"
      />
      <TextField
        className={classes.textField}
        id="margin-normal"
        label='Password'
        name='password'
        onChange={props.authHandleChange}
        required
        type='password'
        value={password}
        variant="outlined"
      />
      <Button
        className={classes.button}
        color="primary"
        onClick={props.handleLogin}
        variant="contained">
        Login
      </Button>
    </form>
  )
}

export default Login;