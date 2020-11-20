import React from 'react'
import { useSelector } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(35),
        width: theme.spacing(40),
        height: theme.spacing(40),
      },
    },
  }));

export default function  EventsList() {
    const classes = useStyles();
    const events = useSelector(state => state.events)
    
    
    //List of events 
    let eventsList = events.map(event => {
        //debugger
        let index = event.date_info.length - 1
        return<li key={event.id}>
            <h2>{event.name}</h2>
            <li> Event Size: {event.number_of_attendees}</li> 
            <li> Arrival Date:  {event.date_info[0].date} </li>
            <li> Departure Date: {event.date_info[index].date} </li>
        </li>})

    return(
        <div className={classes.root}>
            <Paper variant="outlined" >
                <ul>{eventsList}</ul>
            </Paper>
        </div>
    )

}




 
   