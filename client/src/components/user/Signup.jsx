import React from 'react'
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

const Signup = (props) => {
  const classes = useStyles();

  const { username, password, email } = props.authFormData

  return (
    <form className={classes.container} noValidate autoComplete="on">
      <TextField
        autoComplete='email'
        className={classes.textField}
        label='Email'
        name='email'
        onChange={props.authHandleChange}
        required
        type='email'
        value={email}
        variant="outlined"
      />
      <TextField
        autoComplete='username'
        className={classes.textField}
        label='Username'
        name='username'
        onChange={props.authHandleChange}
        required
        type='username'
        value={username}
        variant="outlined"
      />
      <TextField
        autoComplete='new-password'
        className={classes.textField}
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
        onClick={props.handleSignup}
        variant="contained">
        Signup
      </Button>
    </form>
  )
}

export default Signup;