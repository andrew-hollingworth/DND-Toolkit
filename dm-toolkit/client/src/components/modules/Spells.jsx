import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
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

const Spell = (props) => {
  const classes = useStyles();

  // USEEFFECT
  useEffect(() => {
    props.setSpellModule()
  }, [])

  const spells = props.spellModule && props.spellModule.map((spell, index) => {
    const classes = spell.dnd_class.split(',');
    return <Card key={index} className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h3">
          <span className='scaly-b'>{spell.name}</span>
        </Typography>
        <Typography variant="body2" component="p">
          <span className='scaly'>Level: {spell.level}</span> <span className='scaly'> School: {spell.school}</span>
        </Typography>
        <Typography variant="body2" component="p">
          <span className='scaly'>Range: {spell.range}</span>
        </Typography>
        <Typography variant="body2" component="p">
          <span className='scaly'>Casting Time: {spell.casting_time}</span>
          <span className='scaly'> Duration: {spell.duration}</span>
        </Typography>
        <Typography variant="body2" component="p">
          <span className='scaly'>{spell.description}</span>
        </Typography>
        <>
          {classes.map((dndClass, index) => {
            return <Chip
              className={classes.classChip}
              key={index}
              size="small"
              label={dndClass} />
          })}
        </>
        <Chip
          className={classes.chips}
          size="small"
          label={spell.page} />
        <CardActions className={classes.cardAction}>
          <Fab variant="extended"
            size='small' aria-label="add-to-screen" onClick={() => props.handleUpdateScreen("spells", spell.id)}>
            {props.batchScreen.spells && props.batchScreen.spells.includes(spell.id) ?
              <> <RemoveIcon className={classes.extendedIcon} />
                Remove from Screen
            </>
              : <><AddIcon className={classes.extendedIcon} />
                Add to Screen
          </>}
          </Fab>
        </CardActions>
      </CardContent>
    </Card >
  })

  return (
    <>
      <h1 className='eaves'>Spells</h1>
      {spells}
    </>
  )
}

export default Spell