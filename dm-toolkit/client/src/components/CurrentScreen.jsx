import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
}));

const CurrentScreen = (props) => {
  const classes = useStyles();

  useEffect(() => {
    props.setConditionModule();
  }, [])



  const individualData = (data, index) => {
    return (<React.Fragment key={index}>
      <Typography variant="h6" component="h3">
        <span className='scaly-b'>{data.name}</span>
      </Typography>
      <Typography variant="body2" component="p">
        <span className='scaly'>{data.description}</span>
      </Typography>
      <Typography variant="body2" component="p">
        <span className='scaly'>{data.page}</span>
      </Typography>
      <Fab variant="extended" aria-label="TBD BUTTON" className={classes.fab}>
        <AddIcon className={classes.extendedIcon} />
        Button?
  </Fab>
    </React.Fragment>)
  }
  const screenCards = props.currentScreen.modules && props.currentScreen.modules.map((category, index) => {
    const name = Object.keys(category)[0];
    const catArray = category[name];
    return <React.Fragment key={index}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            <span className='scaly-b'>{name}</span>
          </Typography>
          {catArray.map((data, index) => individualData(data, index))}
        </CardContent>
      </Card>
    </React.Fragment>
  })

  return (
    <>
      <h1 className='eaves'>{props.currentScreen.name}</h1>
      {screenCards}
    </>
  )
}

export default CurrentScreen
