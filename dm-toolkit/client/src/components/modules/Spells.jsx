import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const Spells = (props) => {
  const classes = useStyles();

  // USEEFFECT
  useEffect(() => {
    props.setSpellModule()
  }, [])

  const spells = props.spellModule && props.spellModule.map((spell, index) => {
    return <Card key={index} className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h3">
          <span className='scaly-b'>{spell.name}</span>
        </Typography>
        <Typography variant="body2" component="p">
          <span className='scaly'>{spell.description}</span>
        </Typography>
        <Typography variant="body2" component="p">
          <span className='scaly'>{spell.page}</span>
        </Typography>
        <CardActions className={classes.cardAction}>
          <Fab variant="extended" aria-label="add-to-screen" onClick={() => props.handleUpdateScreen("spells", spell.id)}>
            {props.batchScreen.spells && props.batchScreen.spells.includes(spells.id) ?
              <> <RemoveIcon className={classes.extendedIcon} />
                Remove from Screen
            </>
              : <><AddIcon className={classes.extendedIcon} />
                Add to Screen
          </>}
          </Fab>
        </CardActions>
      </CardContent>
    </Card>
  })

  return (
    <>
      <h1 className='eaves'>Spells</h1>
      {spells}
    </>
  )
}

export default Spells