import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import SubjectIcon from '@material-ui/icons/Subject';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 1),
  },
}));

const UserScreens = (props) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index, id) => {
    setSelectedIndex(index);
    props.handleCurrentScreenSelect(id);
  };

  const screenList = props.userScreens.map((screen, index) => {
    return <ListItem
      key={screen.id}
      button
      selected={selectedIndex === index}
      onClick={event => handleListItemClick(event, index, screen.id)}
    >
      <ListItemIcon>
        <SubjectIcon />
      </ListItemIcon>
      <ListItemText primary={screen.name} />
    </ListItem>
  })

  return (
    <Paper className={classes.root}>
      <List component="nav" aria-label="list of user screens">
        {screenList}
      </List>
    </Paper>
  );
}

export default UserScreens