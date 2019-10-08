import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
}));

const Conditions = (props) => {
  const classes = useStyles();

  // USEEFFECT
  useEffect(() => {
    props.setConditionModule();
  }, [props])

  const conditions = props.conditionModule && props.conditionModule.data.map((condition, index) => {
    return <>
      <Typography key={index} variant="h6" component="h3">
        <span className='scaly-b'>{condition.name}</span>
      </Typography>
      <Typography variant="body2" component="p">
        <span className='scaly'>{condition.description}</span>
      </Typography>
      <CardActions className={classes.cardAction}>
        <Fab variant="extended" aria-label="add-to-screen" className={classes.fab}>
          <AddIcon className={classes.extendedIcon} />
          Add to Screen
          </Fab>
      </CardActions>
    </>
  })

  return (
    <>
      <h1 className='eaves'>Game Mechanics</h1>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            <span className='scaly-b'>Conditions</span>
          </Typography>
          {conditions}
        </CardContent>
      </Card>
    </>
  )
}

export default Conditions
