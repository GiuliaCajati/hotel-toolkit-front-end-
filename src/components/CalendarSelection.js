import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useSelector, useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
        marginLeft: theme.spacing(-45),
        marginTop: theme.spacing(-50),
        width: theme.spacing(30),
        height: theme.spacing(40),
        positions: "absolute",
        overflow: 'auto'
    },
  },
}));

//show all tasks for depar.
export default function CalendarSelection(props) {
  const classes = useStyles();
  const task = useSelector(state => state.task)
  const event = useSelector(state => state.event)



const display = () => {
  //debugger
   if (task.length !== 0 &&  task[0] !== undefined){
     debugger
    return  <List id="paperTitle">
              <ListItem>{task[0].details}</ListItem>
            </List>
  } else if (event.length !== 0 && event[0] !== undefined){
    return <List id="paperTitle">
              <ListItem><b>Event Name:</b> {event[0].name}</ListItem>
              <ListItem><b>Attendees:</b>{event[0].number_of_attendees} </ListItem>   
              {event[0].tasks.map(task => { debugger
              return <List><ListItem><b>{task.department.name}:</b></ListItem>
              <ListItem>{task.details}</ListItem></List>})}
            </List>
  } else {
    return null
  }
}
 

  return (
    <div className={classes.root}>
        <Paper elevation={3}>
            <h3 id="paperTitle">Selection Details</h3>
            {display()}
              {/* {displayEvent()}
              {displayTask()} */}
        </Paper>
    </div>
  );
}