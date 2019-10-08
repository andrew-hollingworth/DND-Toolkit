import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
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
});

const Conditions = (props) => {
  const classes = useStyles();

  // USEEFFECT
  useEffect(() => {
    props.setConditionModule();
  }, [])

  const conditions = props.conditionModule && props.conditionModule.data.map((condition, index) => {
    return <Card key={index} className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <span className='scaly-b'>{condition.name}</span>
        </Typography>
        <Typography variant="body2" component="p">
          <span className='scaly'>{condition.description}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  })
  return (
    <>
      <h1 className='eaves'>Game Mechanics</h1>
      <>{conditions}</>
    </>
  )
}

export default Conditions
