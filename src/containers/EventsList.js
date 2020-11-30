
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {  useHistory } from "react-router-dom";
import { displayEvent } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import EventFilter from "../components/EventFilter.js"



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 550,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginLeft: theme.spacing(50),
    overflow: 'auto',
    borderRadius: 5,
  },
  margin: {
    marginLeft: theme.spacing(30),
    marginTop: theme.spacing(-10)
  },
  font:{
    fontFamily: "serif",
    fontSize: "30px"
}
}));



export default function CheckboxList(props) {
  const classes = useStyles();
  const events = useSelector(state => state.events)
  const history = useHistory()
  const dispatch = useDispatch()

  //display selected event 
  const handleClick = (event) => {
    dispatch(displayEvent(event))
    history.push(`/events/${event.id}`)
  }

  //add event 
  const handleSubmitClick = () => {
    history.push('/add_event')
  }
 
  return (
    
    <div >
        <List className={classes.root} >
        <h3 id="paperTitle"className={classes.font}>Event List</h3>
        <Button
            type="submit"
            variant="contained"
            onClick={handleSubmitClick}
            size="small"
            location="right"
            className={classes.margin} 
          >
            Add Event
        </Button>
        <div id="paperTitle" ><EventFilter/></div>
        {events.map((event) => {
           let departure_index = event.date_info.length - 1
           {return event.date_info.length == 0
                ? 
                   (<ListItem  className={classes.font} key={event.id}  dense button onClick={() => handleClick(event)}>
                    <ListItemText id={event.id} primary={event.name}/>
                    </ListItem>)
                :
                    (<ListItem className={classes.font} key={event.id}  dense button onClick={() => handleClick(event)}>
                    <ListItemText className={classes.font} id={event.id} primary={event.name}/>
                    <div id="eventDates">
                    <ListItemText id={event.id} primary={event.date_info[0].date}/>
                    <ListItemText id={event.id} primary={event.date_info[departure_index].date}/>
                    </div>
                    </ListItem>
                    );
            }
          })}
        
        </List>
    </div>
  );
}



 
   