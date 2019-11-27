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
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    marginBottom: 200,
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
  const classes = useStyles();
  // Hooks
  const [spellLevel, setSpellLevel] = useState([]);

  // FILTERS
  const handleSpellLevelFilter = event => {
    setSpellLevel(event.target.value);
  };

  // USEEFFECT
  useEffect(() => {
    props.setSpellModule()
  }, [])

  const filtered = props.spellModule && props.spellModule.filter((spell) => {
    if (spellLevel.length) {
      return (
        spellLevel.includes(spell.level)
      )
    } else {
      return props.spellModule
    }
  })

  const spells = props.spellModule && filtered.map((spell, index) => {
    const classes = spell.dnd_class.split(',');
    return <Card key={index} className={classes.card}>
      <CardContent>
        <Typography variant="h6" component="h3">
          <span className='scaly-b'>{spell.name}</span>
          <>
            {classes.map((dndClass, index) => {
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
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id="spell-level-filter">Spell Level</InputLabel>
        <Select
          multiple
          value={spellLevel}
          onChange={handleSpellLevelFilter}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip size='small' key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
        >
          <MenuItem value='Cantrip'>Cantrip</MenuItem>
          <MenuItem value='1st-level'>1st-Level</MenuItem>
          <MenuItem value='2nd-level'>2nd-Level</MenuItem>
          <MenuItem value='3rd-level'>3rd-Level</MenuItem>
          <MenuItem value='4th-level'>4th-Level</MenuItem>
          <MenuItem value='5th-level'>5th-Level</MenuItem>
          <MenuItem value='6th-level'>6th-Level</MenuItem>
          <MenuItem value='7th-level'>7th-Level</MenuItem>
          <MenuItem value='8th-level'>8th-Level</MenuItem>
          <MenuItem value='9th-level'>9th-Level</MenuItem>
        </Select>
      </FormControl>
      {spells}
    </>
  )
}

export default Spell