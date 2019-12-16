import React from 'react'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 200,
  },
}));

export default function SpellFilters(props) {
  const classes = useStyles();

  return (
    ///////////////////// SPELL LEVEL //////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////
    <>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id="spell-level-filter">Spell Level</InputLabel>
        <Select
          multiple
          value={props.spellFilter.level}
          name='level'
          onChange={props.handleSpellFilter}
          input={<Input id="spell-level-select" />}
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
      {/* /////////////////////// CLASS  //////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////// */}
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id="class-filter">Classes</InputLabel>
        <Select
          multiple
          value={props.spellFilter.dnd_class}
          name='dnd_class'
          onChange={props.handleSpellFilter}
          input={<Input id="class-select" />}
          renderValue={selected => (
            <div className={classes.chips}>
              {selected.map(value => (
                <Chip size='small' key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
        >
          <MenuItem disabled value='Barbarian'>Barbarian</MenuItem>
          <MenuItem value='Bard'>Bard</MenuItem>
          <MenuItem value='Cleric'>Cleric</MenuItem>
          <MenuItem value='Druid'>Druid</MenuItem>
          <MenuItem disabled value='Fighter'>Fighter</MenuItem>
          <MenuItem disabled value='Monk'>Monk</MenuItem>
          <MenuItem value='Paladin'>Paladin</MenuItem>
          <MenuItem value='Ranger'>Ranger</MenuItem>
          <MenuItem disabled value='Rogue'>Rogue</MenuItem>
          <MenuItem value='Sorcerer'>Sorcerer</MenuItem>
          <MenuItem value='Warlock'>Warlock</MenuItem>
          <MenuItem value='Wizard'>Wizard</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
