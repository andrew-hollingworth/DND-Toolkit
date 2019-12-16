import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';
import SpellFilters from './SpellFilters'

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    marginBottom: 20,
  },
  fab: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    position: 'fixed'
  },
  classChip: {
    textAlign: 'right',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));

const Spell = (props) => {
  console.log('props', props)
  const classes = useStyles();
  // Hooks
  const [spellFilter, setSpellFilter] = useState({
    level: [],
    dnd_class: [],
    school: [],
    concentration: null,
    ritual: null,
  });

  // FILTERS
  const handleSpellFilter = event => {
    const { name, value } = event.target
    setSpellFilter(prevState => ({
      ...prevState,
      [name]: value
    }))
  };

  // USEEFFECT
  useEffect(() => {
    props.setSpellModule()
  }, [])

  const filtered = props.spellModule && props.spellModule.filter((spell) => {
    console.log('filtered function') // THIS IS RUNNING TWICE FOR SOME REASON
    if (spellFilter.level.length || spellFilter.dnd_class.length || spellFilter.school.length || spellFilter.concentration || spellFilter.ritual) {
      let levelFilter = spellFilter.level.length && !spellFilter.level.includes(spell.level) ? false : true
      const dnd_classes = spell.dnd_class.split(',');
      let classFilter = spellFilter.dnd_class.length && !(spellFilter.dnd_class.some(dndClass => dnd_classes.indexOf(dndClass) >= 0)) ? false : true
      return (levelFilter && classFilter)
    } else {
      return true
    }
  })

  const spells = props.spellModule && filtered.map((spell, index) => {
    console.log('spells function')
    const dnd_classes = spell.dnd_class.split(',');
    return <Card key={index} className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h3">
          <span className='scaly-b'>{spell.name}</span>
          <>
            {dnd_classes.map((dndClass, index) => {
              return <Chip
                className={classes.classChip}
                key={index}
                size="small"
                label={dndClass} />
            })}
          </>
        </Typography>
        <Typography variant="body2" component="p">
          <span className='scaly-b'>Level: <span className='scaly'>{spell.level}</span></span>
        </Typography>
        <Typography variant="body2" component="p">
          <span className='scaly-b'>School: </span><span className='scaly'>{spell.school}</span>
        </Typography>
        <Typography variant="body2" component="p">
          <span className='scaly-b'>Range: </span><span className='scaly'>{spell.range}</span>
        </Typography>
        <Typography variant="body2" component="p">
          <span className='scaly-b'>Casting Time: </span><span className='scaly'>{spell.casting_time}</span>
        </Typography>
        <Typography variant="body2" component="p">
          <span className='scaly-b'> Duration: </span><span className='scaly'>{spell.duration}</span>
        </Typography>
        <Typography variant="body2" component="p">
          <span className='scaly-b'>Description: </span>
          <span className='scaly'>
            {spell.description.split(`\n`).map(function (desc, index) {
              return (
                <span key={index}>
                  {desc}
                  <br />
                </span>
              )
            })}</span>
        </Typography>
        {spell.higher_level ? <Typography variant="body2" component="p">
          <span className='scaly-b'>At Higher Levels: </span>
          <span className='scaly'>
            {spell.higher_level.split(`\n`).map(function (desc, index) {
              return (
                <span key={index}>
                  {desc}
                  <br />
                </span>
              )
            })}</span>
        </Typography> : ''}
        <Chip
          className={classes.chips}
          size="small"
          label={spell.page} />
        <CardActions className={classes.cardAction}>
          <Fab variant="extended"
            size='small' aria-label="add-to-screen" onClick={() => props.handleUpdateScreen("spells", spell.id)}>
            {props.batchScreen.spells && props.batchScreen.spells.includes(spell.id) ?
              <>
                <RemoveIcon className={classes.extendedIcon} />
                Remove from Screen
            </>
              : <>
                <AddIcon className={classes.extendedIcon} />
                Add to Screen
          </>
            }
          </Fab>
        </CardActions>
      </CardContent>
    </Card >
  })

  return (
    <>
      <h1 className='eaves'>Spells</h1>
      <SpellFilters
        handleSpellFilter={handleSpellFilter}
        spellFilter={spellFilter}
      />
      {spells}
    </>
  )
}

export default Spell