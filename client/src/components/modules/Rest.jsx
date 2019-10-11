import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
  fab: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    position: 'fixed'
  },
}));

const Rest = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  // USEEFFECT
  useEffect(() => {
    props.setRestModule()
  }, [])

  const rest = props.restModule && props.restModule.map((rest, index) => {
    return <React.Fragment key={index}>
      <Typography variant="h6" component="h3">
        <span className='scaly-b'>{rest.name}</span>
      </Typography>
      <Typography variant="body2" component="p">
        <span className='scaly'>{rest.description}</span>
      </Typography>
      <Typography variant="body2" component="p">
        <span className='scaly'>{rest.page}</span>
      </Typography>
      <CardActions className={classes.cardAction}>
        <Fab variant="extended" aria-label="add-to-screen" onClick={() => props.handleUpdateScreen("rests", rest.id)}>
          {props.batchScreen.rests && props.batchScreen.rests.includes(rest.id) ?
            <> <RemoveIcon className={classes.extendedIcon} />
              Remove from Screen
            </>
            : <><AddIcon className={classes.extendedIcon} />
              Add to Screen
          </>}
        </Fab>
      </CardActions>
    </React.Fragment>
  })

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <span className='scaly-b'>Rest</span>
        </Typography>
        {rest}
      </CardContent>
    </Card>
  )
}

export default Rest