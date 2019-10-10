import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import Modal from '@material-ui/core/Modal';
import Divider from '@material-ui/core/Divider';
import UserScreens from './UserScreens'


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  input: {
    display: 'none',
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(0.8),
    marginBottom: theme.spacing(0.8),
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  textField: {
    margin: theme.spacing(1)
  }
}));

const User = (props) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const { username, email, image } = props.updateFormData;
  const { name } = props.newScreenData

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const updateModalClick = (e) => {
    handleClose();
    props.handleUpdate(e);
  }

  return (
    <> {
      props.currentUser
        ?
        <>
          <h1 className='scaly-b'>Welcome, {props.currentUser.username}</h1>
          <h2 className='scaly-b'>Profile Image: </h2>
          <img src={props.currentUser.image} alt="" />
          <h2 className='scaly-b'>Username: <span className='zatanna'>{props.currentUser.username}</span></h2>
          <h2 className='scaly-b'>Email: <span className='zatanna'>{props.currentUser.email}</span></h2>
          <Button
            onClick={handleOpen}
            variant="contained"
            className={classes.button}>
            Edit Profile
          </Button>
          <Button
            onClick={props.handleLogout}
            variant="contained"
            className={classes.button}>
            Logout
          </Button>
          <Button
            onClick={props.handleUserDelete}
            variant="contained"
            className={classes.button}>
            Delete User
          </Button>
          <Divider />
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              className={classes.textField}
              label='Screen Name'
              name='name'
              required
              value={name}
              onChange={props.screenHandleChange}
              type='text'
              variant="outlined"
            />
            <Button
              variant="contained"
              className={classes.button}
              onClick={props.handleScreenCreate}>
              <PlaylistAddIcon />  New Screen
          </Button>
          </form>
          {props.userScreens && <UserScreens
            userScreens={props.userScreens}
            handleCurrentScreenSelect={props.handleCurrentScreenSelect} />}
          {/* ================THIS IS THE MODAL ================*/}
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose} >
            <div style={modalStyle} className={classes.paper}>
              <h2 className='scaly-b'>Edit Profile Information</h2>
              <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  className={classes.textField}
                  label='Username'
                  name='username'
                  onChange={props.updateHandleChange}
                  required
                  type='text'
                  value={username}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  label='Profile Image'
                  name='image'
                  onChange={props.updateHandleChange}
                  required
                  type='text'
                  value={image}
                  variant="outlined"
                />
                <TextField
                  className={classes.textField}
                  label='Email'
                  name='email'
                  onChange={props.updateHandleChange}
                  required
                  type='text'
                  value={email}
                  variant="outlined"
                />
                <Button
                  className={classes.button}
                  color="primary"
                  onClick={updateModalClick}
                  variant="contained">
                  Update
                </Button>
              </form>
            </div>
          </Modal>
          {/* =====================END MODAL =====================*/}
        </>
        :
        ''
    }
    </>
  )
}

export default User
