import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';
import Rest from './Rest'

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
}));

const Conditions = (props) => {
  const classes = useStyles();

  // USEEFFECT
  useEffect(() => {
    props.setConditionModule()
  }, [])

  const conditions = props.conditionModule && props.conditionModule.map((condition, index) => {
    return <div key={index}>
      <Typography variant="h6" component="h3">
        <span className='scaly-b'>{condition.name}</span>
      </Typography>
      <Typography variant="body2" component="p">
        <span className='scaly'>{condition.description}</span>
      </Typography>
      <Typography variant="body2" component="p">
        <span className='scaly'>{condition.page}</span>
      </Typography>
      <CardActions className={classes.cardAction}>
        <Fab variant="extended" aria-label="add-to-screen" onClick={() => props.handleUpdateScreen("conditions", condition.id)}>
          {props.batchScreen.conditions && props.batchScreen.conditions.includes(condition.id) ?
            <>
              <RemoveIcon className={classes.extendedIcon} />
              Remove from Screen
            </>
            :
            <>
              <AddIcon className={classes.extendedIcon} />
              Add to Screen
            </>}
        </Fab>
      </CardActions>
    </div>
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
      <Rest
        restModule={props.restModule}
        setRestModule={props.setRestModule}
        handleUpdateScreen={props.handleUpdateScreen}
        batchScreen={props.batchScreen} />
    </>
  )
}

export default Conditions
