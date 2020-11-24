
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {  useHistory } from "react-router-dom";
import { displayEvent } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 600,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginLeft: theme.spacing(50),
    overflow: 'auto',
    borderRadius: 5,
  },
}));



export default function CheckboxList(props) {
  const classes = useStyles();
  const events = useSelector(state => state.events)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClick = (event) => {
    dispatch(displayEvent(event))
    history.push(`/events/${event.id}`)
  }

 
  return (
    <div>
        <List className={classes.root} >
        <h3 id="paperTitle">Event Name</h3>
        {events.map((event) => {
            let departure_index = event.date_info.length - 1

            return (
            <ListItem key={event.id}  dense button onClick={() => handleClick(event)}>
                <ListItemText id={event.id} primary={event.name}/>
                <div id="eventDates">
                <ListItemText id={event.id} primary={event.date_info[0].date}/>
                <ListItemText id={event.id} primary={event.date_info[departure_index].date}/>
                </div>
            </ListItem>
            );
        })}
        </List>
    </div>
  );
}



 
   