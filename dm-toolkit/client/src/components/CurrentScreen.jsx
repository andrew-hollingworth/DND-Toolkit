import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
  },
}));

const CurrentScreen = (props) => {
  const classes = useStyles();
  const individualData = (data, index) => {
    return (<React.Fragment key={index}>
      <Typography variant="h6" component="h3">
        <span className='scaly-b'>{data.name}</span>
      </Typography>
      <Typography variant="body2" component="p">
        <span className='scaly'>{data.description}</span>
      </Typography>
      <Chip
        className={classes.chips}
        size="small"
        label={data.page} />
    </React.Fragment>)
  }
  const screenCards = props.currentScreen.modules && props.currentScreen.modules.map((category, index) => {
    const name = Object.keys(category)[0];
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
    const catArray = category[name];
    const idArray = []
    catArray.forEach((id) => idArray.push(id.id))
    return (
      <React.Fragment key={index}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              <span className='scaly-b'>{nameCapitalized}</span>
            </Typography>
            {catArray.map((data, index) => individualData(data, index))}
          </CardContent>
        </Card>
      </React.Fragment >
    )
  })

  // const spells = props.spellModule && props.spellModule.map((spell, index) => {
  //   const classes = spell.dnd_class.split(',');
  //   return <Card key={index} className={classes.card}>
  //     <CardContent>
  //       <Typography variant="h6" component="h3">
  //         <span className='scaly-b'>{spell.name}</span>
  //       </Typography>
  //       <Typography variant="body2" component="p">
  //         <span className='scaly'>Level: {spell.level}</span> <span className='scaly'> School: {spell.school}</span>
  //       </Typography>
  //       <Typography variant="body2" component="p">
  //         <span className='scaly'>Range: {spell.range}</span>
  //       </Typography>
  //       <Typography variant="body2" component="p">
  //         <span className='scaly'>Casting Time: {spell.casting_time}</span>
  //         <span className='scaly'> Duration: {spell.duration}</span>
  //       </Typography>
  //       <Typography variant="body2" component="p">
  //         <span className='scaly'>{spell.description}</span>
  //       </Typography>
  //       <>
  //         {classes.map((dndClass, index) => {
  //           return <Chip
  //             className={classes.classChip}
  //             key={index}
  //             size="small"
  //             label={dndClass} />
  //         })}
  //       </>
  //       <Chip
  //         className={classes.chips}
  //         size="small"
  //         label={spell.page} />
  //       <CardActions className={classes.cardAction}>
  //         <Fab variant="extended"
  //           size='small' aria-label="add-to-screen" onClick={() => props.handleUpdateScreen("spells", spell.id)}>
  //           {props.batchScreen.spells && props.batchScreen.spells.includes(spell.id) ?
  //             <> <RemoveIcon className={classes.extendedIcon} />
  //               Remove from Screen
  //           </>
  //             : <><AddIcon className={classes.extendedIcon} />
  //               Add to Screen
  //         </>}
  //         </Fab>
  //       </CardActions>
  //     </CardContent>
  //   </Card >
  // })

  return (
    <>
      <h1 className='eaves'>{props.currentScreen.name}</h1>
      {screenCards}
    </>
  )
}

export default CurrentScreen
